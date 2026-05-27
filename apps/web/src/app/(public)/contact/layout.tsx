import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Get a Free Consultation",
  description:
    "Reach out to Jugaduji Digital Solutions for a free project consultation. We build websites, mobile apps, and digital marketing strategies tailored to your business.",
  alternates: { canonical: "https://jugaduji.com/contact" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
