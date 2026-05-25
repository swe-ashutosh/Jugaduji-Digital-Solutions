"use client";

import React from "react";
import Link from "next/link";
import {
  Monitor,
  Smartphone,
  Palette,
  Cloud,
  Search,
  Award,
  ArrowRight,
  Check,
  Compass,
  Layers,
  Cpu,
  CheckCircle,
} from "lucide-react";

export default function ServicesPage() {
  const allServices = [
    {
      icon: Monitor,
      title: "Web Development",
      desc: "Fast, responsive, and secure custom web platforms engineered to scale. We construct highly-optimized sites that load in milliseconds and convert visitors into active customers.",
      features: ["Next.js & React Frameworks", "CMS Integration (headless/custom)", "E-Commerce Architectures", "Speed & Core Web Vitals optimization"],
      color: "text-blue-600",
      bg: "bg-blue-50",
      hoverBorder: "hover:border-blue-300",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      desc: "Cross-platform mobile apps built with React Native and Flutter. We provide slick animations, offline data synchronizations, and seamless App Store/Play Store launches.",
      features: ["iOS & Android SDK deployment", "Secure API Gateway linkages", "Real-time Push Notifications", "Local Storage & SQLite DBs"],
      color: "text-teal-600",
      bg: "bg-teal-50",
      hoverBorder: "hover:border-teal-300",
    },
    {
      icon: Palette,
      title: "UI/UX & Branding",
      desc: "Stunning user interface designs and clear wireframes mapped directly to user personas. We focus on high-fidelity designs, clear typography, and responsive micro-interactions.",
      features: ["Figma Design System setup", "High-Fidelity Wireframes", "Interactive Prototyping", "Corporate Identity Guidelines"],
      color: "text-orange-500",
      bg: "bg-orange-50",
      hoverBorder: "hover:border-orange-300",
    },
    {
      icon: Cloud,
      title: "Digital Marketing",
      desc: "Increase your brand visibility and client acquisition. We handle lead generation campaigns, pay-per-click setups, and targeted content strategies to boost conversions.",
      features: ["Targeted PPC & Meta Campaigns", "Lead-Capture Landing Pages", "Email Automations", "Performance Analytics & ROIs"],
      color: "text-purple-600",
      bg: "bg-purple-50",
      hoverBorder: "hover:border-purple-300",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      desc: "Elevate your ranking on Google search pages. We audit page structure, metadata, crawl errors, and integrate schema markup for enhanced rich search snippets.",
      features: ["Technical & Structural Audits", "Keyword Cluster Strategies", "Schema.org Markup injection", "Google Console integration"],
      color: "text-green-600",
      bg: "bg-green-50",
      hoverBorder: "hover:border-green-300",
    },
    {
      icon: Award,
      title: "Branding Solutions",
      desc: "Formulate a professional, modern presence that leaves a lasting impression. From logos and brandmarks to business assets, we align your business's visual assets with its values.",
      features: ["Unique Logo Design", "Custom Vector Illustration", "Style Guide & Palette creation", "Digital Asset kits"],
      color: "text-pink-600",
      bg: "bg-pink-50",
      hoverBorder: "hover:border-pink-300",
    },
  ];

  const steps = [
    {
      step: "01",
      icon: Compass,
      title: "Discovery & Strategy",
      desc: "We analyze your business targets, target audience, and current digital state to build a complete project plan.",
    },
    {
      step: "02",
      icon: Palette,
      title: "UI/UX Prototyping",
      desc: "Our design team produces interactive Figma blueprints and layout systems for client feedback.",
    },
    {
      step: "03",
      icon: Cpu,
      title: "Agile Development",
      desc: "We translate approved designs into scalable, semantic, and highly tested codebase using a monorepo setup.",
    },
    {
      step: "04",
      icon: CheckCircle,
      title: "QA & Deployment",
      desc: "After undergoing rigorous speed and compatibility tests, your platform is safely launched on secure global servers.",
    },
  ];

  return (
    <div className="pt-16 md:pt-24 pb-16">
      {/* ─── Hero Section ─── */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#f0f4fa] to-white py-16 lg:py-20 mb-12">
        <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-8 text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-gray-100 shadow-sm px-4 py-2 mb-6 rounded-full text-xs font-semibold">
            <span className="text-[var(--color-primary)]">💻 Technical Excellence</span>
            <span className="text-[var(--color-secondary)]">Scale your business</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--color-navy)] mb-6 tracking-tight">
            Our <span className="text-[var(--color-primary)]">Services</span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            High-performance development, custom design tokens, and result-oriented digital marketing strategies built around your growth objectives.
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

      {/* ─── Services Grid ─── */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((svc) => (
            <div
              key={svc.title}
              className={`bg-white p-8 rounded-3xl border border-gray-100 shadow-[var(--shadow-card)] ${svc.hoverBorder} hover:shadow-[var(--shadow-lg)] transition-all duration-300 flex flex-col justify-between group`}
            >
              <div>
                <div className={`w-12 h-12 rounded-2xl ${svc.bg} ${svc.color} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform`}>
                  <svc.icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-[var(--color-navy)] mb-3">{svc.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">{svc.desc}</p>
              </div>

              <div className="border-t border-gray-50 pt-5 mt-4">
                <h4 className="text-xs font-bold text-[var(--color-navy)] uppercase tracking-wider mb-3">Key Deliverables:</h4>
                <ul className="space-y-2">
                  {svc.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-xs text-gray-500">
                      <Check size={14} className="text-[var(--color-secondary)] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Process Flow (Workflow) ─── */}
      <section className="bg-[var(--color-bg-subtle)] py-20 border-y border-gray-100 mb-20">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-8 h-[2px] bg-[var(--color-primary)]" />
              <span className="text-xs font-bold text-[var(--color-primary)] tracking-widest uppercase">
                How We Deliver
              </span>
              <div className="w-8 h-[2px] bg-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-navy)] mb-4">
              Our Development <span className="text-[var(--color-secondary)]">Lifecycle</span>
            </h2>
            <p className="text-gray-500 max-w-md mx-auto text-sm sm:text-base">
              A structured execution model to build, review, optimize, and safely launch each project on schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((st) => (
              <div key={st.step} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative group hover:shadow-md transition-shadow duration-300">
                {/* Step indicator */}
                <div className="absolute top-4 right-4 text-3xl font-black text-gray-100 select-none group-hover:text-blue-50 transition-colors">
                  {st.step}
                </div>

                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[var(--color-primary)] flex items-center justify-center mb-5">
                  <st.icon size={20} />
                </div>

                <h3 className="text-base font-bold text-[var(--color-navy)] mb-2">{st.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Demo Projects ─── */}
      <section id="demo-projects" className="max-w-[1320px] mx-auto px-4 sm:px-8 py-12 mb-16 scroll-mt-24">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <div className="w-8 h-[2px] bg-[var(--color-primary)]" />
            <span className="text-xs font-bold text-[var(--color-primary)] tracking-widest uppercase">
              Portfolio Showcase
            </span>
            <div className="w-8 h-[2px] bg-[var(--color-primary)]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-navy)] mb-4">
            Live Demo <span className="text-[var(--color-primary)]">Projects</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            Explore some of the high-performance applications we've engineered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Project 1 */}
          <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-[var(--shadow-card)] transition-all duration-300 group">
            <div className="h-64 bg-gray-100 relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" alt="Demo Project 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-[10px] font-bold px-2 py-1 bg-blue-50 text-blue-600 rounded-md border border-blue-100">Next.js</span>
                <span className="text-[10px] font-bold px-2 py-1 bg-orange-50 text-orange-600 rounded-md border border-orange-100">Hono</span>
                <span className="text-[10px] font-bold px-2 py-1 bg-teal-50 text-teal-600 rounded-md border border-teal-100">Cloudflare D1</span>
              </div>
              <h3 className="text-xl font-extrabold text-[var(--color-navy)] mb-2">Apna Library Platform</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">A complete seat-booking and student management system tailored specifically for independent study spaces and libraries.</p>
              <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors group/link">
                View Live Demo <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-[var(--shadow-card)] transition-all duration-300 group">
            <div className="h-64 bg-gray-100 relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1618401471353-b98aedd07871?auto=format&fit=crop&w=800&q=80" alt="Demo Project 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-[10px] font-bold px-2 py-1 bg-blue-50 text-blue-600 rounded-md border border-blue-100">React</span>
                <span className="text-[10px] font-bold px-2 py-1 bg-purple-50 text-purple-600 rounded-md border border-purple-100">Stripe</span>
                <span className="text-[10px] font-bold px-2 py-1 bg-green-50 text-green-600 rounded-md border border-green-100">Tailwind CSS</span>
              </div>
              <h3 className="text-xl font-extrabold text-[var(--color-navy)] mb-2">Local E-Commerce MVP</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">A high-conversion storefront built for rapid deployment. Integrated with Stripe payments and robust inventory tracking.</p>
              <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors group/link">
                View Live Demo <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/projects" className="btn-cta-green inline-flex items-center px-6 py-3 rounded-xl font-bold">
            View All Projects <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>

      {/* ─── Bottom CTA ─── */}
      <section className="max-w-[1060px] mx-auto px-4 sm:px-8">
        <div className="relative bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-[28px] p-8 sm:p-12 text-white overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-extrabold mb-2">Want to build something custom?</h3>
              <p className="text-sm text-white/80">Get a free architecture consultation and project cost breakdown.</p>
            </div>
            <Link href="/contact" className="btn-cta-green bg-white text-[var(--color-primary)] hover:bg-gray-50 hover:text-[var(--color-primary-dark)] px-8 py-3.5 rounded-xl shadow-md border-0 shrink-0 font-bold">
              Let&apos;s Launch It <ArrowRight size={15} className="inline ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
