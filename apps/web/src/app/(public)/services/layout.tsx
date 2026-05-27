import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services — Web Development, Mobile Apps, SEO & More",
  description:
    "Discover our full suite of digital services: web development, mobile app development, UI/UX design, SEO optimization, and digital marketing strategies.",
  alternates: { canonical: "https://jugaduji.com/services" },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
