import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Privacy Policy of Jugaduji Digital Solutions. We are committed to protecting your personal data and maintaining transparency.",
  alternates: { canonical: "https://jugaduji.com/privacy" },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
