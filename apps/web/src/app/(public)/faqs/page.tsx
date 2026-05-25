"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowRight, HelpCircle } from "lucide-react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [faqs, setFaqs] = useState<{ id: number; question: string; answer: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await fetch("http://localhost:8787/api/faqs");
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        setFaqs(data || []);
      } catch (e) {
        console.warn("API not available, using fallback FAQs data.");
        setFaqs([
          { id: 1, question: "What services do you offer?", answer: "We offer web development, mobile app development, UI/UX design, and cloud solutions." },
          { id: 2, question: "How long does a typical project take?", answer: "The timeline varies depending on the scope of the project, but most medium-sized projects take 4 to 8 weeks." },
          { id: 3, question: "Do you provide ongoing support?", answer: "Yes, we provide ongoing maintenance and support packages tailored to your needs." }
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchFaqs();
  }, []);

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
            Find answers to common questions about our technical capabilities, pricing pipelines, timeline commitments, and development methodologies.
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
        <div className="space-y-4">
          {loading && (
            <div className="text-center py-10 text-gray-500 font-medium animate-pulse">
              Loading Frequently Asked Questions...
            </div>
          )}
          
          {!loading && faqs.length === 0 && (
            <div className="text-center py-10 text-gray-500 font-medium">
              No questions found at the moment. Please check back later.
            </div>
          )}

          {!loading && faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:border-gray-200 transition-all"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none"
                >
                  <span className="font-bold text-sm sm:text-base text-[var(--color-navy)] pr-4">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? "bg-[var(--color-primary)] text-white" : "bg-gray-50 text-gray-400"}`}>
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>
                
                <div
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
              <h3 className="text-lg sm:text-xl font-extrabold text-[var(--color-navy)] mb-1">Still have questions?</h3>
              <p className="text-xs sm:text-sm text-gray-500">Contact us directly and talk to an engineering manager.</p>
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
