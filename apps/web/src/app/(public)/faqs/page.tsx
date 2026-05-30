"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowRight, HelpCircle } from "lucide-react";

// FAQ data defined statically — the FAQPage schema in layout.tsx must match this data
const FAQS = [
  {
    id: 1,
    question: "What services does Jugaduji Digital Solutions offer?",
    answer:
      "We offer web development, mobile app development, UI/UX design, SEO optimization, digital marketing, branding, and cloud solutions. Our web development uses modern technologies like Next.js, React, and TypeScript deployed on Cloudflare's edge network for maximum performance.",
  },
  {
    id: 2,
    question: "How long does a typical project take?",
    answer:
      "Timeline varies by scope. Simple landing pages: 3-5 days. Multi-page business websites: 1-2 weeks. Custom web applications: 4-8 weeks. Mobile apps: 6-12 weeks. We provide detailed timelines during our discovery call and keep you updated throughout the process.",
  },
  {
    id: 3,
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes. Our Growth plan includes 1-month free maintenance. We also offer ongoing support packages tailored to your needs. Our Custom/Enterprise plan includes 1-year premium support with priority response times.",
  },
  {
    id: 4,
    question: "What technologies do you use?",
    answer:
      "Our primary stack is Next.js 16, React 19, TypeScript, Tailwind CSS v4 for frontend. For backend we use Cloudflare Workers, Hono.js, Drizzle ORM, and Turso (SQLite). We manage our codebase as a pnpm monorepo. For mobile apps, we use React Native.",
  },
  {
    id: 5,
    question: "How much does a website cost?",
    answer:
      "Our pricing starts at ₹3,000 for a basic landing page with domain and SEO included. Our most popular Growth plan is ₹6,000 which includes a 3-page website, business emails, admin panel, and managed hosting. Premium plans start at ₹15,000 with AI chatbot integration and custom UI.",
  },
  {
    id: 6,
    question: "Do you work with clients outside of Robertsganj?",
    answer:
      "Absolutely. While our office is based in Robertsganj, Uttar Pradesh, we serve clients across India remotely. We use video calls, project management tools, and regular check-ins to ensure seamless collaboration regardless of location.",
  },
  {
    id: 7,
    question: "What makes Jugaduji different from other agencies?",
    answer:
      "We combine enterprise-grade technology (Next.js, Cloudflare Edge) with affordable pricing. Most agencies either charge premium prices for modern tech, or offer cheap solutions with outdated technology like WordPress. We bridge that gap by delivering cutting-edge solutions at accessible prices. Plus, we are MSME registered, giving you the trust and reliability of a government-recognized business.",
  },
  {
    id: 8,
    question: "Can you help improve my existing website's SEO?",
    answer:
      "Yes. We offer standalone SEO audit and optimization services. We analyze your site's technical SEO (Core Web Vitals, structured data, crawlability), content quality, and competitive landscape, then implement fixes to improve your Google rankings and AI search visibility (ChatGPT, Gemini, Perplexity).",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="pt-16 md:pt-24 pb-16">
      {/* ─── Hero Section ─── */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#f0f4fa] to-white py-16 lg:py-20 mb-12">
        <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-8 text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-gray-100 shadow-sm px-4 py-2 mb-6 rounded-full text-xs font-semibold">
            <span className="text-[var(--color-primary)]">❓ Help Center</span>
            <span className="text-[var(--color-secondary)]">Frequently Asked Questions</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--color-navy)] mb-6 tracking-tight">
            Frequently Asked <span className="text-[var(--color-primary)]">Questions</span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            Find answers to common questions about our services, pricing, timelines, technologies, and support policies.
          </p>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 z-0"
          style={{
            background: "linear-gradient(to top, #ffffff, transparent)",
          }}
          aria-hidden="true"
        />
      </section>

      {/* ─── FAQs Accordion List ─── */}
      <section className="max-w-[850px] mx-auto px-4 sm:px-8 mb-24">
        {/* Visible breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-[var(--color-primary)] transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li className="font-semibold text-[var(--color-navy)]">FAQs</li>
          </ol>
        </nav>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:border-gray-200 transition-all"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-inset rounded-2xl"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="font-bold text-sm sm:text-base text-[var(--color-navy)] pr-4">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? "bg-[var(--color-primary)] text-white" : "bg-gray-50 text-gray-400"}`}>
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>
                
                <div
                  id={`faq-answer-${faq.id}`}
                  role="region"
                  aria-labelledby={`faq-question-${faq.id}`}
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[500px] border-t border-gray-50 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <p className="p-6 text-xs sm:text-sm text-gray-500 leading-relaxed bg-gray-50/50 whitespace-pre-wrap">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── Bottom CTA Callout ─── */}
      <section className="max-w-[1060px] mx-auto px-4 sm:px-8">
        <div className="bg-linear-to-br from-[var(--color-bg-subtle)] via-white to-[var(--color-blue-gradient)] border border-gray-100 rounded-[28px] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[var(--shadow-card)]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-50 text-[var(--color-primary)] flex items-center justify-center shrink-0">
              <HelpCircle size={22} />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-[var(--color-navy)] mb-1">Still have questions?</h2>
              <p className="text-xs sm:text-sm text-gray-500">Contact us directly and we&apos;ll get back to you within 24 hours.</p>
            </div>
          </div>
          <Link href="/contact" className="btn-primary">
            Ask Us A Question <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
