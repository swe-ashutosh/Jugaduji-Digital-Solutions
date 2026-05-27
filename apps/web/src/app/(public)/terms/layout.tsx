import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read the Terms and Conditions for using Jugaduji Digital Solutions website and services. Understand your rights and obligations.",
  alternates: { canonical: "https://jugaduji.com/terms" },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
