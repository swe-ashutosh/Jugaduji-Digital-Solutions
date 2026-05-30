import type { Metadata } from "next";
import { generatePageSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Our Services — Web Development, Mobile Apps, SEO & More",
  description:
    "Explore Jugaduji's full suite of digital services: custom website development with Next.js, mobile app development, SEO optimization, UI/UX design, digital marketing, and cloud solutions. Starting at ₹3,000.",
  alternates: { canonical: "https://jugaduji.com/services" },
  openGraph: {
    title: "Digital Services — Web Development, SEO, Mobile Apps | Jugaduji",
    description:
      "Full-stack web development, SEO optimization, mobile apps, UI/UX design, and digital marketing. Modern tech stack (Next.js, React). Affordable pricing starting at ₹3,000.",
    url: "https://jugaduji.com/services",
    type: "website",
  },
  twitter: {
    title: "Digital Services — Web Development, SEO, Mobile Apps | Jugaduji",
    description:
      "Custom web development, SEO, mobile apps, and digital marketing from ₹3,000. Modern tech, premium quality.",
  },
};

const breadcrumbSchema = generatePageSchema(
  generateBreadcrumbSchema([{ name: "Services", url: "https://jugaduji.com/services" }])
);

export default function ServicesLayout({
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
