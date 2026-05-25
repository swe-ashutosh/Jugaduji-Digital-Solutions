"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Comfortaa } from 'next/font/google';
import Image from "next/image";

import {
  ArrowRight,
  Monitor,
  Smartphone,
  Palette,
  Cloud,
  Zap,
  Activity,
  HelpCircle,
} from "lucide-react";

// Add a mapping for icons and themes
const AVAILABLE_ICONS: Record<string, any> = {
  Monitor, Smartphone, Palette, Cloud, Zap, Activity, HelpCircle
};

const THEMES: Record<string, any> = {
  blue: { bg: "bg-blue-50", text: "text-blue-600", hoverBorder: "hover:border-[var(--color-primary)]" },
  teal: { bg: "bg-teal-50", text: "text-teal-600", hoverBorder: "hover:border-[var(--color-secondary)]" },
  orange: { bg: "bg-orange-50", text: "text-orange-500", hoverBorder: "hover:border-[var(--color-accent)]" },
  purple: { bg: "bg-purple-50", text: "text-purple-600", hoverBorder: "hover:border-purple-500" },
};




// Initialize the font specifically for the brand text
const brandFont = Comfortaa({
  subsets: ['latin'],
  weight: ['700'], // Bold weight to match your logo look
});

// Trusted company logos (Add path to 'logo' when you have their image, e.g., logo: "/krrish.png")
const trustedCompanies = [
  { name: "Krrish Computer", logo: "/krrish.png", href: "#" },
  { name: "Sonbhadra Technologies", logo: "", href: "#" },
  { name: "Shaury Jan Sewa Kendra", logo: "", href: "#" },
  { name: "Apna Room", logo: "", href: "#" },
  { name: "Apna Library", logo: "/apnalibrarylogo.png", href: "https:apnalibrary.jugaduji.com" },
];

export default function ServicesAndAbout() {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("http://localhost:8787/api/services");
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        setServices(data || []);
      } catch (e) {
        console.warn("API not available, using fallback services data.");
        // Fallback data so the UI still looks good
        setServices([
          { id: 1, title: "Web Development", description: "Custom websites and web applications built with modern technologies.", icon_name: "Monitor", color_theme: "blue" },
          { id: 2, title: "Mobile Apps", description: "Native and cross-platform mobile applications for iOS and Android.", icon_name: "Smartphone", color_theme: "teal" },
          { id: 3, title: "UI/UX Design", description: "Beautiful, intuitive, and user-centered design for digital products.", icon_name: "Palette", color_theme: "orange" },
          { id: 4, title: "Cloud Solutions", description: "Scalable and secure cloud infrastructure and deployment services.", icon_name: "Cloud", color_theme: "purple" }
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  return (
    <>
      {/* ─── Services + About Split Section ─── */}
      <section className="w-full max-w-[1320px] mx-auto px-4 sm:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10">
          {/* Services Column (Left — 7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Section Header */}
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-[2px] bg-[var(--color-primary)]" />
                <span className="text-xs font-bold text-[var(--color-primary)] tracking-widest uppercase">
                  What We Do
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-navy)] leading-tight max-w-md">
                Smart Solutions for Your Digital{" "}
                <span className="text-[var(--color-secondary)]">Success</span>
              </h2>
            </div>

            {/* Primary Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {loading && <div className="col-span-1 sm:col-span-2 text-center py-10 text-gray-400 font-medium animate-pulse">Loading Services...</div>}
              
              {!loading && services.map((svc) => {
                const theme = THEMES[svc.color_theme] || THEMES.blue;
                const IconComponent = AVAILABLE_ICONS[svc.icon_name] || AVAILABLE_ICONS.HelpCircle;

                return (
                  <div
                    key={svc.id}
                    className={`card text-center p-7 ${theme.hoverBorder} group cursor-default`}
                  >
                    <div
                      className={`w-14 h-14 mx-auto ${theme.bg} ${theme.text} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent size={26} />
                    </div>
                    <h3 className="text-base font-bold text-[var(--color-navy)] mb-2">
                      {svc.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                      {svc.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* About Column (Right — 5 cols) */}
          <div className="lg:col-span-5 flex flex-col relative">
            <div className="pt-0 lg:pt-2">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-navy)] leading-tight mb-5">
                About{" "}
                <span className="text-[var(--color-primary)]">Jugaduji</span>

              </h2>
              <p className="text-gray-500 leading-relaxed mb-7 text-[15px]">
                We combine creativity, technology, and strategy to deliver
                digital solutions that drive growth and create lasting impact.
              </p>

              {/* Signature */}
              <div className="mb-8">
                <Link href="/founder" className="inline-block group" title="Meet the Founder">
                  <div className="h-14 w-28 border-b-2 border-gray-200 group-hover:border-[var(--color-primary)] transition-colors flex items-end pb-2">
                    <span className="font-[cursive] text-xl text-gray-300 group-hover:text-[var(--color-primary)] transition-colors select-none">
                      J.D.S.
                    </span>
                  </div>
                  <p className="text-[10px] text-gray-400 mt-2 font-bold uppercase tracking-wider group-hover:text-[var(--color-primary)] transition-colors">
                    Meet the Founder
                  </p>
                </Link>
              </div>

              <Link href="/about" className="btn-secondary">
                Learn More About Us <ArrowRight size={15} />
              </Link>
            </div>

            {/* Office Image */}
            <div className="mt-10 lg:absolute lg:bottom-0 lg:-right-6 lg:w-[115%] lg:h-[280px] z-10">
              <div className="w-full h-56 lg:h-full relative overflow-hidden rounded-3xl lg:rounded-l-[60px] lg:rounded-r-2xl shadow-xl">
                <div className="absolute inset-0 bg-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80"
                    alt="Professional team meeting at Jugaduji office"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/15 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* ─── Trusted Companies ─── */}
      <section className="w-full max-w-[1320px] mx-auto px-4 sm:px-8 py-12 mb-8">
        <p className="text-center text-xs font-semibold text-gray-400 mb-8 uppercase tracking-[0.2em]">
          "A Trusted Partner"
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-14 opacity-70 hover:opacity-100 transition-all duration-700">
          {trustedCompanies.map((company) => (
            <a
              href={company.href}
              target="_blank"
              rel="noopener noreferrer"
              key={company.name}
              className="flex items-center gap-2.5 font-black text-lg sm:text-xl text-gray-400 hover:text-[var(--color-primary)] transition-colors grayscale hover:grayscale-0"
            >
              {company.logo ? (
                <img src={company.logo} alt={company.name} className="w-8 h-8 object-contain" />
              ) : (
                <div className="w-8 h-8 rounded bg-gray-200 text-gray-500 flex items-center justify-center font-bold text-sm">
                  {company.name.charAt(0)}
                </div>
              )}
              <span className="tracking-tight">{company.name}</span>
            </a>
          ))}

          {/* Final 'More' Arrow Link */}
          <Link
            href="/services#demo-projects"
            className="flex items-center gap-2 font-bold text-sm text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors group whitespace-nowrap ml-2"
          >
            See Our Work
            <div className="w-8 h-8 rounded-full bg-[var(--color-primary)]/10 group-hover:bg-[var(--color-secondary)]/10 flex items-center justify-center transition-colors">
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}