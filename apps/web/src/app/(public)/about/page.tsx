import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Lightbulb,
  Heart,
  Target,
  Sparkles,
  Award,
  Compass,
} from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      desc: "We stay ahead of digital trends, introducing modern frameworks, clean UI, and cutting-edge digital marketing strategy.",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: Shield,
      title: "Transparency & Trust",
      desc: "No hidden layers. We pair clear timelines with open communication to build long-term trust and mutual respect.",
      color: "text-teal-600",
      bg: "bg-teal-50",
    },
    {
      icon: Heart,
      title: "Client-Centric Craft",
      desc: "Every pixel, script, and ad campaign is aligned with your business objectives to generate maximum return on investment.",
      color: "text-orange-500",
      bg: "bg-orange-50",
    },
    {
      icon: Target,
      title: "Reliable Execution",
      desc: "From the discovery call to launch and maintenance, we execute precisely to bring stable, high-performance systems to life.",
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
  ];

  const milestones = [
    { year: "2020", title: "The Beginning", desc: "Academic Roots: Began intensive studies to understand the core principles of software development and digital architecture." },
    { year: "2023", title: "Technical Mastery", desc: "Professional Training: Completed specialized training at JSPIDER Training Center, Rajajinagar, Bangalore. honing the technical skills necessary to build modern, scalable web solutions." },
    { year: "2026", title: "Building the Future", desc: "Agency Launch: Founded Jugaduji to deliver modern, AI-powered digital solutions and specialized automation tools to local businesses." },
  ];

  return (
    <div className="pt-16 md:pt-24 pb-16">
      {/* ─── Hero Section ─── */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#f0f4fa] to-white py-16 lg:py-20 mb-12">
        <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-8 text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-gray-100 shadow-sm px-4 py-2 mb-6 rounded-full text-xs font-semibold">
            <span className="text-[var(--color-primary)]">✨ Our Story</span>
            <span className="text-[var(--color-secondary)]">Who we are</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--color-navy)] mb-6 tracking-tight">
            About <span className="text-[var(--color-primary)]">Jugaduji</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            We are a team of passionate developers, designer wizards, and marketing strategists dedicated to turning your complex concepts into beautiful, profitable realities.
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

      {/* ─── Our Mission & Vision ─── */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-[2px] bg-[var(--color-primary)]" />
              <span className="text-xs font-bold text-[var(--color-primary)] tracking-widest uppercase">
                Core Purpose
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-navy)] leading-tight mb-6">
              Empowering Brands to <span className="text-[var(--color-secondary)]">Dominate</span> the Digital Space
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              At Jugaduji Digital Solutions, we believe that high-quality technology and branding should not be gated by astronomical costs. We construct smart, efficient, and robust web architectures tailored to each company&apos;s growth goals.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Whether you are an ambitious startup looking to launch your first MVP, or an established enterprise needing SEO optimization and reliable backend support, we are your strategic partners every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="flex-1 flex gap-3.5 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Compass size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[var(--color-navy)] mb-1">Our Mission</h4>
                  <p className="text-xs sm:text-sm text-gray-500">Provide streamlined, scalable engineering and marketing solutions that convert users into advocates.</p>
                </div>
              </div>
              <div className="flex-1 flex gap-3.5 items-start">
                <div className="w-10 h-10 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                  <Sparkles size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[var(--color-navy)] mb-1">Our Vision</h4>
                  <p className="text-xs sm:text-sm text-gray-500">To lead the digital landscape with cost-effective, high-impact technologies and custom design systems.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive side image / stats */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10 rounded-3xl blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl shadow-xl border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="Our collaborative work environment"
                className="w-full h-80 lg:h-[450px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-lg flex items-center justify-around">
                <div className="text-center">
                  <p className="text-2xl font-bold text-[var(--color-navy)]">5+</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Years Experience</p>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-[var(--color-navy)]">10+</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Key Clients</p>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-[var(--color-navy)]">98%</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Our Core Values ─── */}
      <section className="bg-[var(--color-bg-subtle)] py-20 border-y border-gray-100 mb-20">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-8 h-[2px] bg-[var(--color-primary)]" />
              <span className="text-xs font-bold text-[var(--color-primary)] tracking-widest uppercase">
                Our Foundation
              </span>
              <div className="w-8 h-[2px] bg-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-navy)] mb-4">
              Values That Drive <span className="text-[var(--color-primary)]">Success</span>
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto text-sm sm:text-base">
              These guiding principles sit at the center of every meeting, code refactor, and strategy deck we design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-8 rounded-2xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-lg)] transition-all border border-gray-100/50 flex flex-col items-start hover:-translate-y-1 duration-300">
                <div className={`w-12 h-12 rounded-2xl ${v.bg} ${v.color} flex items-center justify-center mb-6`}>
                  <v.icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-[var(--color-navy)] mb-3">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Company Milestones ─── */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-8 mb-24">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-8 h-[2px] bg-[var(--color-primary)]" />
            <span className="text-xs font-bold text-[var(--color-primary)] tracking-widest uppercase">
              The Journey
            </span>
            <div className="w-8 h-[2px] bg-[var(--color-primary)]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-navy)] mb-4">
            How We <span className="text-[var(--color-secondary)]">Evolved</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto pl-8 sm:pl-0">
          {/* Vertical line for desktop */}
          <div className="absolute top-0 bottom-0 left-[2px] sm:left-1/2 w-0.5 bg-gray-200" />

          <div className="space-y-12">
            {milestones.map((m, idx) => (
              <div key={m.year} className={`relative flex flex-col sm:flex-row items-start sm:items-center ${idx % 2 === 0 ? "sm:flex-row-reverse" : ""}`}>
                {/* Connector Dot */}
                <div className="absolute left-[-30px] sm:left-1/2 sm:-ml-[6px] w-[12px] h-[12px] rounded-full bg-[var(--color-primary)] border-4 border-white shadow-sm z-10" />

                <div className="w-full sm:w-1/2 px-0 sm:px-8 text-left sm:text-right">
                  <div className={`flex flex-col ${idx % 2 === 0 ? "sm:items-start" : "sm:items-end"}`}>
                    <span className="text-2xl font-black text-[var(--color-primary)] mb-1">{m.year}</span>
                    <h4 className="font-extrabold text-base text-[var(--color-navy)] mb-2">{m.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-sm">{m.desc}</p>
                  </div>
                </div>
                <div className="hidden sm:block w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Leadership Team Section ─── */}
      <section id="founder" className="max-w-[1320px] mx-auto px-4 sm:px-8 mb-16 scroll-mt-24">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-8 h-[2px] bg-[var(--color-primary)]" />
            <span className="text-xs font-bold text-[var(--color-primary)] tracking-widest uppercase">
              Our Captain
            </span>
            <div className="w-8 h-[2px] bg-[var(--color-primary)]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-navy)] mb-4">
            Meet the <span className="text-[var(--color-primary)]">Founder</span>
          </h2>
          <p className="text-gray-500 max-w-md mx-auto text-sm">
            Driven by technology and execution, leading our project delivery pipeline.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Link href="/founder" className="block bg-white rounded-3xl border border-gray-100 shadow-[var(--shadow-card)] overflow-hidden group hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-all">
            <div className="h-64 bg-linear-to-br from-[var(--color-navy)] to-blue-900 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-blue-950/20" />
              <div className="w-32 h-32 rounded-full border-4 border-white/20 bg-linear-to-tr from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center text-white text-3xl font-black shadow-lg">
                AK
              </div>
            </div>
            <div className="p-8 text-center">
              <h3 className="text-xl font-bold text-[var(--color-navy)] mb-1 group-hover:text-[var(--color-primary)] transition-colors">Ashutosh Kushwaha</h3>
              <p className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-4">Founder & Lead Architect</p>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Ashutosh specializes in designing scale-optimized tech infrastructures, monorepos, and business digitization pipelines.
              </p>
              <div className="flex justify-center gap-3">
                <div className="text-xs font-bold text-gray-400 group-hover:text-[var(--color-primary)] transition-colors flex items-center gap-1">
                  View Full Profile <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ─── Bottom CTA Callout ─── */}
      <section className="max-w-[1060px] mx-auto px-4 sm:px-8 mb-8">
        <div className="bg-linear-to-br from-[var(--color-bg-subtle)] to-[var(--color-blue-gradient)] border border-gray-100 rounded-[28px] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[var(--shadow-card)]">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--color-navy)] mb-2">Have a grand vision in mind?</h3>
            <p className="text-sm text-gray-500">Let&apos;s assemble the details and write the first lines of code.</p>
          </div>
          <Link href="/contact" className="btn-primary">
            Collaborate With Us <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
