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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/72 backdrop-blur-xl border-b border-white/50 shadow-sm">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 h-15 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center hover:opacity-90 transition-opacity shrink-0"
          >
            <Image
              src="/brandwordmark.png"
              alt="Jugaduji Digital Solutions"
              width={140}
              height={35}
              className="h-5 w-auto object-contain"
              style={{ width: "auto", height: "auto" }}
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
            <Link href="/contact" className="btn-cta-green text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
              Let&apos;s Talk <ArrowRight size={14} className="sm:w-[15px] sm:h-[15px]" />
            </Link>
          </div>
        </div>
      </nav>

      {/* ─── Mobile Bottom Navigation Bar ─── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.06)]">
        <div className="flex items-center justify-around px-2 py-1.5 pb-[calc(0.375rem+env(safe-area-inset-bottom))]">
          {navLinks.filter(item => item.label !== "Projects").map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex flex-col items-center gap-0.5 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors group min-w-[48px]"
            >
              <item.icon size={18} className="group-hover:scale-110 transition-transform" />
              <span className="text-[9px] font-semibold leading-tight">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}