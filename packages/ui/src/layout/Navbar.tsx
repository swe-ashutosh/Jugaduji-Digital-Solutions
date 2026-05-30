"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Home, Briefcase, Info, BookOpen, MessageSquare, Layers } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/", icon: Home },
  { label: "About Us", href: "/about", icon: Info },
  { label: "Services", href: "/services", icon: Briefcase },
  { label: "Projects", href: "/projects", icon: Layers },
  { label: "Blog", href: "/blog", icon: BookOpen },
  { label: "Contact", href: "/contact", icon: MessageSquare },
];

export default function Navbar() {
  return (
    <>
      {/* ─── Top Navbar ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-50/85 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 h-[84px] md:h-[90px] flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center hover:opacity-90 transition-opacity shrink-0"
          >
            <Image
              src="/brandwordmark.png"
              alt="Jugaduji Digital Solutions"
              width={200}
              height={86}
              className="object-contain h-[65px] md:h-[86px] w-auto"
              style={{ width: "auto", maxHeight: "86px" }}
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[16px] font-semibold text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors relative"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - visible on all screens */}
          <div className="flex items-center">
            <Link href="/contact" className="btn-cta-green text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-2.5 shadow-sm">
              Let&apos;s Talk <ArrowRight size={14} className="sm:w-[15px] sm:h-[15px]" />
            </Link>
          </div>
        </div>
      </nav>

      {/* ─── Mobile Bottom Navigation Bar ─── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-gray-100/95 backdrop-blur-xl border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className="flex items-center justify-around px-2 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
          {navLinks.filter(item => item.label !== "Projects").map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex flex-col items-center gap-1.5 text-gray-600 hover:text-[var(--color-primary)] transition-colors group min-w-[56px]"
            >
              <item.icon size={22} className="group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-bold leading-tight tracking-wide">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}