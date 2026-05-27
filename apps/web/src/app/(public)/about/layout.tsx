import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Our Story, Mission & Values",
  description:
    "Learn about Jugaduji Digital Solutions — our mission, vision, core values, and the journey of building premium digital experiences for modern businesses.",
  alternates: { canonical: "https://jugaduji.com/about" },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
