import React from "react";
import Link from "next/link";
import { Send, ArrowRight } from "lucide-react";

export default function CTAInline() {
  return (
    <section className="w-full max-w-[1060px] mx-auto px-4 sm:px-8 py-10 mb-8">
      <div className="relative bg-gradient-to-br from-[var(--color-bg-subtle)] via-white to-[var(--color-blue-gradient)] rounded-[28px] sm:rounded-[32px] p-7 sm:p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-7 border border-gray-100/80 shadow-[var(--shadow-card)] overflow-hidden">
        {/* Left Decorative Dots */}
        <div
          className="absolute left-0 top-0 w-20 h-full bg-[var(--color-blue-gradient)] opacity-40 flex flex-wrap content-center px-3 gap-1.5"
          aria-hidden="true"
        >
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={`l${i}`}
              className="w-1 h-1 rounded-full bg-blue-300"
            />
          ))}
        </div>

        {/* Right Decorative Dots */}
        <div
          className="absolute right-0 top-0 w-20 h-full bg-[var(--color-teal-gradient)] opacity-40 flex flex-wrap content-center px-3 gap-1.5 justify-end"
          aria-hidden="true"
        >
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={`r${i}`}
              className="w-1 h-1 rounded-full bg-teal-300"
            />
          ))}
        </div>

        {/* Content */}
        <div className="flex items-center gap-5 relative z-10 w-full md:w-auto">
          <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center shrink-0 border border-gray-50">
            <Send className="text-[var(--color-primary)]" size={24} />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-[var(--color-navy)] mb-1 leading-snug">
              Ready to take your business to the next level?
            </h2>
            <p className="text-sm text-gray-500">
              Let&apos;s create something amazing together.
            </p>
          </div>
        </div>

        <div className="relative z-10 w-full md:w-auto flex justify-center md:justify-end">
          <Link href="/contact" className="btn-primary px-8 py-3">
            Let&apos;s Talk <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}