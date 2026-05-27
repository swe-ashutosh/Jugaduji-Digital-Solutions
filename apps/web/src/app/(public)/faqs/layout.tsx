import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs — Frequently Asked Questions",
  description:
    "Find answers to common questions about Jugaduji Digital Solutions — pricing, timelines, services, development methodologies, and support.",
  alternates: { canonical: "https://jugaduji.com/faqs" },
};

export default function FaqsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
