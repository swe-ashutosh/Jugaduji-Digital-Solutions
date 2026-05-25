import fs from 'fs';
import path from 'path';
import os from 'os';
import { fileURLToPath } from 'url';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const TEMP_DIR = path.resolve(__dirname, '../../temp');

export const ensureTempDir = () => {
  if (!fs.existsSync(TEMP_DIR)) {
    fs.mkdirSync(TEMP_DIR, { recursive: true });
  }
};

export const getTempFilePath = (filename: string) => {
  ensureTempDir();
  return path.join(TEMP_DIR, filename);
};

export const cleanTempFile = (filePath: string) => {
  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log(`[Processor] Cleaned up temp file: ${filePath}`);
    }
  } catch (err) {
    console.error(`[Processor] Failed to clean temp file ${filePath}:`, err);
  }
};

export interface IDCropParams {
  x: number;
  y: number;
  w: number;
  h: number;
  page?: number;
}

export interface ProcessDocumentOptions {
  type: 'id-printer' | 'photo-maker';
  // For ID Printer
  idType?: 'aadhaar' | 'pan' | 'voter' | 'custom';
  cropFront?: IDCropParams;
  cropBack?: IDCropParams;
  redactAadhaar?: boolean;
  // For Photo Maker
  photoConfig?: {
    paperSize: 'A4' | '4x6';
    copies: number;
  };
}

export async function processDocument(
  fileBuffer: Buffer,
  mimeType: string,
  options: ProcessDocumentOptions
): Promise<{ status: string; filePath?: string; filename?: string; error?: string }> {
  try {
    ensureTempDir();

    // Check password protection for PDF
    if (mimeType === 'application/pdf') {
      try {
        await PDFDocument.load(fileBuffer);
      } catch (err: any) {
        if (
          err.message &&
          (err.message.includes('encrypt') ||
            err.message.includes('decrypt') ||
            err.message.includes('password'))
        ) {
          return { status: 'auth_required' };
        }
        throw err;
      }
    }

    if (options.type === 'id-printer') {
      return await processIDPrinter(fileBuffer, mimeType, options);
    } else if (options.type === 'photo-maker') {
      return await processPhotoMaker(fileBuffer, options);
    }

    return { status: 'error', error: 'Invalid processing type specified' };
  } catch (err: any) {
    console.error('[Processor] Error processing document:', err);
    return { status: 'error', error: err.message || String(err) };
  }
}

/**
 * ID Card Printer processor. Crops front & back, lays them out on A4 page, and redacts if requested.
 */
async function processIDPrinter(
  fileBuffer: Buffer,
  mimeType: string,
  options: ProcessDocumentOptions
): Promise<{ status: string; filePath: string; filename: string }> {
  const destDoc = await PDFDocument.create();
  // Standard A4 page in points: 595 x 842
  const a4Page = destDoc.addPage([595, 842]);
  
  // Standard card print dimensions on A4: 85.6mm x 53.98mm = 243 x 153 points
  const cardWidth = 243;
  const cardHeight = 153;

  // Let's place front at the top center, and back below it
  const frontX = (595 - cardWidth) / 2;
  const frontY = 500;
  
  const backX = (595 - cardWidth) / 2;
  const backY = 320;

  // Font for redaction placeholder text
  const font = await destDoc.embedFont(StandardFonts.HelveticaBold);

  if (mimeType === 'application/pdf') {
    const srcDoc = await PDFDocument.load(fileBuffer);
    
    // Default Crop Coordinates if not specified
    // Standard e-Aadhaar PDF has front at bottom left, back at bottom right of page 1
    // A4 in pdf-lib has y=0 at the bottom.
    // e-Aadhaar front: x=35, y=35, w=245, h=155
    // e-Aadhaar back: x=290, y=35, w=245, h=155
    const cropFront = options.cropFront || { x: 35, y: 35, w: 245, h: 155, page: 0 };
    const cropBack = options.cropBack || { x: 290, y: 35, w: 245, h: 155, page: 0 };

    // 1. Process Front Card
    const frontPageIndex = cropFront.page || 0;
    if (frontPageIndex < srcDoc.getPageCount()) {
      // We clone the source document to crop pages independently
      const tempDocFront = await PDFDocument.load(fileBuffer);
      const frontPage = tempDocFront.getPage(frontPageIndex);
      
      // Set cropBox
      frontPage.setCropBox(cropFront.x, cropFront.y, cropFront.w, cropFront.h);
      frontPage.setMediaBox(cropFront.x, cropFront.y, cropFront.w, cropFront.h);

      // Redact front Aadhaar if requested
      if (options.redactAadhaar && options.idType === 'aadhaar') {
        // Aadhaar number is typically at the bottom center of the card
        const redactW = cropFront.w * 0.6;
        const redactH = cropFront.h * 0.15;
        const redactX = cropFront.x + (cropFront.w - redactW) / 2;
        const redactY = cropFront.y + cropFront.h * 0.12;

        frontPage.drawRectangle({
          x: redactX,
          y: redactY,
          width: redactW,
          height: redactH,
          color: rgb(0, 0, 0),
        });

        frontPage.drawText('[Aadhaar Redacted]', {
          x: redactX + 5,
          y: redactY + redactH / 2 - 4,
          size: 8,
          font,
          color: rgb(1, 1, 1),
        });
      }

      const [embeddedFront] = await destDoc.embedPages([frontPage]);
      a4Page.drawPage(embeddedFront, {
        x: frontX,
        y: frontY,
        width: cardWidth,
        height: cardHeight,
      });

      // Draw thin visual outline border
      a4Page.drawRectangle({
        x: frontX,
        y: frontY,
        width: cardWidth,
        height: cardHeight,
        borderColor: rgb(0.8, 0.8, 0.8),
        borderWidth: 1,
        color: rgb(1, 1, 1),
        opacity: 0,
      });
    }

    // 2. Process Back Card
    const backPageIndex = cropBack.page || 0;
    if (backPageIndex < srcDoc.getPageCount()) {
      const tempDocBack = await PDFDocument.load(fileBuffer);
      const backPage = tempDocBack.getPage(backPageIndex);
      
      backPage.setCropBox(cropBack.x, cropBack.y, cropBack.w, cropBack.h);
      backPage.setMediaBox(cropBack.x, cropBack.y, cropBack.w, cropBack.h);

      // Redact back Aadhaar if requested (sometimes has Aadhaar number or VID at the bottom)
      if (options.redactAadhaar && options.idType === 'aadhaar') {
        const redactW = cropBack.w * 0.6;
        const redactH = cropBack.h * 0.15;
        const redactX = cropBack.x + (cropBack.w - redactW) / 2;
        const redactY = cropBack.y + cropBack.h * 0.12;

        backPage.drawRectangle({
          x: redactX,
          y: redactY,
          width: redactW,
          height: redactH,
          color: rgb(0, 0, 0),
        });

        backPage.drawText('[Aadhaar Redacted]', {
          x: redactX + 5,
          y: redactY + redactH / 2 - 4,
          size: 8,
          font,
          color: rgb(1, 1, 1),
        });
      }

      const [embeddedBack] = await destDoc.embedPages([backPage]);
      a4Page.drawPage(embeddedBack, {
        x: backX,
        y: backY,
        width: cardWidth,
        height: cardHeight,
      });

      a4Page.drawRectangle({
        x: backX,
        y: backY,
        width: cardWidth,
        height: cardHeight,
        borderColor: rgb(0.8, 0.8, 0.8),
        borderWidth: 1,
        color: rgb(1, 1, 1),
        opacity: 0,
      });
    }
  } else {
    // Input is an image file
    // Crop and format front & back images using sharp, then embed in the PDF
    const sharpImg = sharp(fileBuffer);
    const meta = await sharpImg.metadata();
    const w = meta.width || 800;
    const h = meta.height || 600;

    // Use default halves of the image if crops are not specified
    const cropFront = options.cropFront || { x: 0, y: 0, w: Math.round(w / 2), h: h };
    const cropBack = options.cropBack || { x: Math.round(w / 2), y: 0, w: Math.round(w / 2), h: h };

    // Front Crop
    let frontImgBuffer = await sharpImg
      .clone()
      .extract({ left: cropFront.x, top: cropFront.y, width: cropFront.w, height: cropFront.h })
      .toBuffer();

    if (options.redactAadhaar && options.idType === 'aadhaar') {
      // Redact with sharp composite
      const redactW = Math.round(cropFront.w * 0.6);
      const redactH = Math.round(cropFront.h * 0.15);
      const redactX = Math.round((cropFront.w - redactW) / 2);
      const redactY = Math.round(cropFront.h * 0.7); // Aadhaar number is at bottom 70-85%

      // Create black redaction SVG
      const redactSvg = Buffer.from(
        `<svg width="${redactW}" height="${redactH}">
          <rect width="100%" height="100%" fill="black"/>
          <text x="50%" y="60%" font-family="sans-serif" font-weight="bold" font-size="12" fill="white" text-anchor="middle">Aadhaar Redacted</text>
         </svg>`
      );

      frontImgBuffer = await sharp(frontImgBuffer)
        .composite([{ input: redactSvg, left: redactX, top: redactY }])
        .toBuffer();
    }

    // Back Crop
    let backImgBuffer = await sharpImg
      .clone()
      .extract({ left: cropBack.x, top: cropBack.y, width: cropBack.w, height: cropBack.h })
      .toBuffer();

    if (options.redactAadhaar && options.idType === 'aadhaar') {
      const redactW = Math.round(cropBack.w * 0.6);
      const redactH = Math.round(cropBack.h * 0.15);
      const redactX = Math.round((cropBack.w - redactW) / 2);
      const redactY = Math.round(cropBack.h * 0.7);

      const redactSvg = Buffer.from(
        `<svg width="${redactW}" height="${redactH}">
          <rect width="100%" height="100%" fill="black"/>
          <text x="50%" y="60%" font-family="sans-serif" font-weight="bold" font-size="12" fill="white" text-anchor="middle">Aadhaar Redacted</text>
         </svg>`
      );

      backImgBuffer = await sharp(backImgBuffer)
        .composite([{ input: redactSvg, left: redactX, top: redactY }])
        .toBuffer();
    }

    // Embed cropped images in PDF
    const embedFrontImg = await destDoc.embedJpg(await sharp(frontImgBuffer).jpeg().toBuffer());
    const embedBackImg = await destDoc.embedJpg(await sharp(backImgBuffer).jpeg().toBuffer());

    a4Page.drawImage(embedFrontImg, {
      x: frontX,
      y: frontY,
      width: cardWidth,
      height: cardHeight,
    });
    
    a4Page.drawRectangle({
      x: frontX,
      y: frontY,
      width: cardWidth,
      height: cardHeight,
      borderColor: rgb(0.8, 0.8, 0.8),
      borderWidth: 1,
    });

    a4Page.drawImage(embedBackImg, {
      x: backX,
      y: backY,
      width: cardWidth,
      height: cardHeight,
    });

    a4Page.drawRectangle({
      x: backX,
      y: backY,
      width: cardWidth,
      height: cardHeight,
      borderColor: rgb(0.8, 0.8, 0.8),
      borderWidth: 1,
    });
  }

  const pdfBytes = await destDoc.save();
  const filename = `id-print-${Date.now()}.pdf`;
  const filePath = getTempFilePath(filename);
  fs.writeFileSync(filePath, pdfBytes);

  return { status: 'success', filePath, filename };
}

/**
 * Passport Photo Maker processor. Crops to aspect ratio, structures multiple copies on grid canvas.
 */
async function processPhotoMaker(
  fileBuffer: Buffer,
  options: ProcessDocumentOptions
): Promise<{ status: string; filePath: string; filename: string }> {
  const paperSize = options.photoConfig?.paperSize || 'A4';
  const copies = options.photoConfig?.copies || 8;

  // 1. Load image and crop to 3.5:4.5 aspect ratio
  const sharpImg = sharp(fileBuffer);
  const metadata = await sharpImg.metadata();
  const width = metadata.width || 800;
  const height = metadata.height || 600;

  // Passport ratio: 3.5 / 4.5 = 0.7777777777777778
  const targetRatio = 3.5 / 4.5;
  const currentRatio = width / height;

  let extractWidth = width;
  let extractHeight = height;
  let extractLeft = 0;
  let extractTop = 0;

  if (currentRatio > targetRatio) {
    // Image is too wide - crop horizontal sides
    extractWidth = Math.round(height * targetRatio);
    extractLeft = Math.round((width - extractWidth) / 2);
  } else {
    // Image is too tall - crop vertical top/bottom
    extractHeight = Math.round(width / targetRatio);
    extractTop = Math.round((height - extractHeight) / 2);
  }

  // Crop photo and resize to standard high-res passport photo: 413 x 531 pixels (300 DPI)
  const singlePhotoW = 413;
  const singlePhotoH = 531;

  let croppedPhoto = await sharpImg
    .extract({ left: extractLeft, top: extractTop, width: extractWidth, height: extractHeight })
    .resize(singlePhotoW, singlePhotoH)
    .toBuffer();

  // Add thin dark borders to passport photo (3px) -> new size = 419 x 537
  const borderSize = 3;
  croppedPhoto = await sharp(croppedPhoto)
    .extend({
      top: borderSize,
      bottom: borderSize,
      left: borderSize,
      right: borderSize,
      background: '#2c2c2c',
    })
    .toBuffer();

  const photoWithBorderW = singlePhotoW + borderSize * 2;
  const photoWithBorderH = singlePhotoH + borderSize * 2;

  // Set canvas size (at 300 DPI)
  // A4 = 2480 x 3508 pixels
  // 4x6 = 1200 x 1800 pixels (standard photo print paper)
  const canvasW = paperSize === 'A4' ? 2480 : 1800; // Let's make 4x6 landscape for 8 photo grid
  const canvasH = paperSize === 'A4' ? 3508 : 1200;

  // Arrange copies in grid coordinates
  const composites: any[] = [];
  const paddingX = paperSize === 'A4' ? 120 : 60;
  const paddingY = paperSize === 'A4' ? 150 : 65;
  const gapX = paperSize === 'A4' ? 60 : 40;
  const gapY = paperSize === 'A4' ? 80 : 50;

  let currentX = paddingX;
  let currentY = paddingY;

  for (let i = 0; i < copies; i++) {
    if (currentX + photoWithBorderW > canvasW - paddingX) {
      currentX = paddingX;
      currentY += photoWithBorderH + gapY;
    }

    if (currentY + photoWithBorderH > canvasH - paddingY) {
      // Exceeds canvas limits
      break;
    }

    composites.push({
      input: croppedPhoto,
      left: Math.round(currentX),
      top: Math.round(currentY),
    });

    currentX += photoWithBorderW + gapX;
  }

  // Create white canvas base
  const finalImageBuffer = await sharp({
    create: {
      width: canvasW,
      height: canvasH,
      channels: 3,
      background: { r: 255, g: 255, b: 255 },
    },
  })
    .composite(composites)
    .jpeg({ quality: 95 })
    .toBuffer();

  // Return as PDF file
  const destDoc = await PDFDocument.create();
  const pdfPageW = paperSize === 'A4' ? 595 : 432; // 4"x6" is 288x432 pts or 432x288 depending on landscape orientation. 6"x4" landscape = 432x288. Let's make it matches composite canvas aspect ratio.
  const pdfPageH = paperSize === 'A4' ? 842 : 288;
  const pdfPage = destDoc.addPage([pdfPageW, pdfPageH]);

  const embedImg = await destDoc.embedJpg(finalImageBuffer);
  pdfPage.drawImage(embedImg, {
    x: 0,
    y: 0,
    width: pdfPageW,
    height: pdfPageH,
  });

  const pdfBytes = await destDoc.save();
  const filename = `photo-maker-${Date.now()}.pdf`;
  const filePath = getTempFilePath(filename);
  fs.writeFileSync(filePath, pdfBytes);

  return { status: 'success', filePath, filename };
}
