import type { Metadata } from "next";
import { generatePageSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Us — Our Story, Mission & Values",
  description:
    "Learn about Jugaduji Digital Solutions — our mission, vision, core values, and the journey of building premium digital experiences. Founded in 2026, MSME registered agency in Robertsganj, India.",
  alternates: { canonical: "https://jugaduji.com/about" },
  openGraph: {
    title: "About Jugaduji Digital Solutions — Our Story & Mission",
    description:
      "Discover how Jugaduji Digital Solutions empowers businesses with affordable, premium-quality web development, SEO, and digital marketing. MSME registered.",
    url: "https://jugaduji.com/about",
    type: "website",
  },
  twitter: {
    title: "About Jugaduji Digital Solutions — Our Story & Mission",
    description:
      "Learn about our mission to make premium digital solutions accessible to every business in India.",
  },
};

// Breadcrumb schema for About page
const breadcrumbSchema = generatePageSchema(
  generateBreadcrumbSchema([{ name: "About Us", url: "https://jugaduji.com/about" }])
);

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
