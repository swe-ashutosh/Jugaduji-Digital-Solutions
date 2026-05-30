import type { Metadata } from "next";
import { generatePageSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Blog & Insights — Digital Marketing, SEO & Tech Trends",
  description:
    "Read expert articles on web development, SEO best practices, digital marketing strategies, and UI/UX design trends from Jugaduji Digital Solutions. Written by Ashutosh Kushwaha.",
  alternates: { canonical: "https://jugaduji.com/blog" },
  openGraph: {
    title: "Blog & Insights — Web Dev, SEO & Digital Marketing | Jugaduji",
    description:
      "Expert articles on web development, SEO, digital marketing, and design. Stay ahead with insights from our team.",
    url: "https://jugaduji.com/blog",
    type: "website",
  },
  twitter: {
    title: "Blog & Insights — Web Dev, SEO & Digital Marketing | Jugaduji",
    description:
      "Expert articles on web development, SEO, and digital marketing from Jugaduji Digital Solutions.",
  },
};

const breadcrumbSchema = generatePageSchema(
  generateBreadcrumbSchema([{ name: "Blog", url: "https://jugaduji.com/blog" }])
);

export default function BlogLayout({
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
