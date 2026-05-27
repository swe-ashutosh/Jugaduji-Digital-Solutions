import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar, Footer, WhatsAppButton, CallButton } from "@jugaduji/ui";

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
    "Jugaduji Digital Solutions builds high-performance websites, mobile apps, SEO strategies, and digital marketing solutions for modern businesses. Premium digital agency trusted by 100+ clients.",
  keywords: [
    "Jugaduji",
    "digital solutions",
    "website development",
    "mobile apps",
    "SEO optimization",
    "digital marketing",
    "UI/UX design",
    "branding",
    "web development India",
    "premium digital agency",
  ],
  authors: [{ name: "Ashutosh Kushwaha", url: "https://jugaduji.com" }],
  creator: "Jugaduji Digital Solutions",
  publisher: "Jugaduji",
  metadataBase: new URL("https://jugaduji.com"),
  alternates: {
    canonical: "https://jugaduji.com",
  },
  openGraph: {
    title:
      "Jugaduji — We Build Digital Experiences That Grow Your Business",
    description:
      "Premium digital agency offering web development, mobile apps, UI/UX design, and digital marketing. Trusted by 100+ businesses.",
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
      "We build websites, mobile apps, and digital strategies that grow your business.",
    images: ["/Hero.png"],
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
    icon: "/logo.png",
  },
};

// JSON-LD structured data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Jugaduji Digital Solutions",
  description:
    "Premium digital agency offering website development, mobile apps, UI/UX design, SEO, and digital marketing.",
  url: "https://jugaduji.com",
  logo: "https://jugaduji.com/jugadujibrandlogo.png",
  image: "https://jugaduji.com/Hero.png",
  telephone: "+91-98765-43210",
  email: "hello@jugaduji.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "India",
    addressCountry: "IN",
  },
  priceRange: "₹3,000 - ₹50,000",
  founder: {
    "@type": "Person",
    name: "Ashutosh Kushwaha",
    jobTitle: "Founder & Lead Architect",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
