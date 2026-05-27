import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Insights — Digital Marketing, SEO & Tech Trends",
  description:
    "Read the latest articles on web development, digital marketing strategies, SEO best practices, and UI/UX design trends from Jugaduji Digital Solutions.",
  alternates: { canonical: "https://jugaduji.com/blog" },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
