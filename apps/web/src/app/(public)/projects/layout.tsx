import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects — Digital Systems & Client Portals",
  description:
    "Explore our portfolio of web applications, client portals, and digital systems built with Next.js, Cloudflare Workers, and modern tech stacks.",
  alternates: { canonical: "https://jugaduji.com/projects" },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
