import type { Metadata } from "next";
import { generatePageSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Us — Start Your Digital Project Today",
  description:
    "Get a free consultation with Jugaduji Digital Solutions. Call +91-9519498159, email info@jugaduji.com, or fill out our contact form. Based in Robertsganj, serving businesses across India.",
  alternates: { canonical: "https://jugaduji.com/contact" },
  openGraph: {
    title: "Contact Jugaduji — Free Consultation for Your Business",
    description:
      "Ready to grow your business digitally? Contact us for a free project consultation. Web development, SEO, mobile apps from ₹3,000.",
    url: "https://jugaduji.com/contact",
    type: "website",
  },
  twitter: {
    title: "Contact Jugaduji — Free Consultation for Your Business",
    description:
      "Get in touch for a free consultation. Call +91-9519498159 or email info@jugaduji.com.",
  },
};

const breadcrumbSchema = generatePageSchema(
  generateBreadcrumbSchema([{ name: "Contact", url: "https://jugaduji.com/contact" }])
);

export default function ContactLayout({
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
