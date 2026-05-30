import type { Metadata } from "next";
import { generatePageSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Our Projects — Real Results for Real Businesses",
  description:
    "See how Jugaduji Digital Solutions helped businesses grow with custom websites, mobile apps, and digital strategies. View our portfolio of successful project deliveries.",
  alternates: { canonical: "https://jugaduji.com/projects" },
  openGraph: {
    title: "Projects Portfolio — Websites & Apps We've Built | Jugaduji",
    description:
      "Explore our portfolio of delivered projects including business websites, digital platforms, and mobile apps. Real results for real businesses.",
    url: "https://jugaduji.com/projects",
    type: "website",
  },
  twitter: {
    title: "Projects Portfolio — Websites & Apps We've Built | Jugaduji",
    description:
      "See the websites, apps, and digital solutions we've built for businesses across India.",
  },
};

const breadcrumbSchema = generatePageSchema(
  generateBreadcrumbSchema([{ name: "Projects", url: "https://jugaduji.com/projects" }])
);

export default function ProjectsLayout({
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
