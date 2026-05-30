import type { Metadata } from "next";
import { generatePageSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";

// Static FAQ data for schema (must match what's rendered on the page)
const faqSchemaData = [
  { question: "What services does Jugaduji Digital Solutions offer?", answer: "We offer web development, mobile app development, UI/UX design, SEO optimization, digital marketing, branding, and cloud solutions. Our web development uses modern technologies like Next.js, React, and TypeScript." },
  { question: "How long does a typical project take?", answer: "Timeline varies by scope. Simple landing pages: 3-5 days. Multi-page business websites: 1-2 weeks. Custom web applications: 4-8 weeks. Mobile apps: 6-12 weeks." },
  { question: "Do you provide ongoing support after launch?", answer: "Yes. Our Growth plan includes 1-month free maintenance. We also offer ongoing support packages and our Custom/Enterprise plan includes 1-year premium support." },
  { question: "What technologies do you use?", answer: "Our primary stack is Next.js 16, React 19, TypeScript, Tailwind CSS v4 for frontend. For backend we use Cloudflare Workers, Hono.js, Drizzle ORM, and Turso (SQLite). We manage our codebase as a pnpm monorepo." },
  { question: "How much does a website cost?", answer: "Our pricing starts at ₹3,000 for a basic landing page with domain and SEO. Our most popular Growth plan is ₹6,000 which includes a 3-page website, business emails, admin panel, and hosting. Premium plans start at ₹15,000." },
  { question: "Do you work with clients outside of Robertsganj?", answer: "Absolutely. While we are based in Robertsganj, Uttar Pradesh, we serve clients across India remotely." },
  { question: "What makes Jugaduji different from other agencies?", answer: "We combine enterprise-grade technology (Next.js, Cloudflare Edge) with affordable pricing. Most agencies either charge premium prices for modern tech, or offer cheap solutions with outdated technology. We bridge that gap. Plus, we are MSME registered." },
  { question: "Can you help improve my existing website's SEO?", answer: "Yes. We offer standalone SEO audit and optimization services including technical SEO fixes, content optimization, structured data implementation, and AI search visibility improvements." },
];

export const metadata: Metadata = {
  title: "FAQs — Common Questions About Our Digital Services",
  description:
    "Find answers to frequently asked questions about Jugaduji's services, pricing (from ₹3,000), project timelines, technologies, and support. Get clarity before starting your project.",
  alternates: { canonical: "https://jugaduji.com/faqs" },
  openGraph: {
    title: "FAQs — Questions About Web Development & Digital Services | Jugaduji",
    description:
      "Get answers about our pricing, timelines, technologies, and support policies. Everything you need to know before starting your digital project.",
    url: "https://jugaduji.com/faqs",
    type: "website",
  },
  twitter: {
    title: "FAQs — Questions About Web Development & Digital Services | Jugaduji",
    description:
      "Common questions about our services, pricing, timelines, and support.",
  },
};

const pageSchemas = generatePageSchema(
  generateBreadcrumbSchema([{ name: "FAQs", url: "https://jugaduji.com/faqs" }]),
  generateFAQSchema(faqSchemaData)
);

export default function FAQsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchemas) }}
      />
      {children}
    </>
  );
}
