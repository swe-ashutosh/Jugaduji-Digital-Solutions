import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { generateRootSchemaGraph } from "@/lib/schema";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#176BFF",
};

export const metadata: Metadata = {
  title: {
    default:
      "Jugaduji — Website Development, SEO & Digital Solutions for Business",
    template: "%s | Jugaduji — Digital Solutions",
  },
  description:
    "Jugaduji Digital Solutions builds high-performance websites, mobile apps, SEO strategies, and digital marketing solutions for modern businesses in India. Premium digital agency based in Robertsganj, UP.",
  keywords: [
    "Jugaduji",
    "Jugaduji Digital Solutions",
    "digital solutions",
    "website development",
    "website development India",
    "mobile apps",
    "SEO optimization",
    "digital marketing",
    "UI/UX design",
    "branding",
    "web development Robertsganj",
    "web development Uttar Pradesh",
    "premium digital agency India",
    "Next.js development",
    "affordable website India",
  ],
  authors: [{ name: "Ashutosh Kushwaha", url: "https://jugaduji.com/founder" }],
  creator: "Jugaduji Digital Solutions",
  publisher: "Jugaduji Digital Solutions",
  metadataBase: new URL("https://jugaduji.com"),
  alternates: {
    canonical: "https://jugaduji.com",
  },
  openGraph: {
    title:
      "Jugaduji — We Build Digital Experiences That Grow Your Business",
    description:
      "Premium digital agency offering web development, mobile apps, UI/UX design, and digital marketing. Based in India, serving businesses nationwide.",
    siteName: "Jugaduji Digital Solutions",
    type: "website",
    locale: "en_IN",
    url: "https://jugaduji.com",
    images: [
      {
        url: "/Hero.png",
        width: 1200,
        height: 630,
        alt: "Jugaduji Digital Solutions — Premium Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jugaduji — Digital Solutions for Modern Business",
    description:
      "We build websites, mobile apps, and digital strategies that grow your business. Based in India.",
    images: ["/Hero.png"],
    creator: "@jugaduji",
    site: "@jugaduji",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon-cropped.png",
  },
  other: {
    "google-site-verification": "", // Add your GSC token here
  },
};

import ClarityTracker from "../components/ClarityTracker";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaGraph = generateRootSchemaGraph();

  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full`}
    >
      <head>
        {/* JSON-LD Structured Data: WebSite + Organization + LocalBusiness + Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
        {/* Google Analytics Tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-5L7M83Q3B7"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5L7M83Q3B7');
            `,
          }}
        />
      </head>
      <body className="min-h-full font-sans antialiased">
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:text-[var(--color-primary)] focus:font-bold focus:text-sm"
        >
          Skip to main content
        </a>
        <ClarityTracker />
        {children}
      </body>
    </html>
  );
}
