import React from "react";
import { Award, Code, Layout, TrendingUp, ArrowRight, Globe, Server, Palette, Database, Cpu, Search } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { generatePageSchema, generateBreadcrumbSchema, generateFounderSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Ashutosh Kushwaha — Founder & Lead Architect",
  description:
    "Meet Ashutosh Kushwaha, Founder and Lead Architect of Jugaduji Digital Solutions. Full-stack developer specializing in Next.js, React, system architecture, and scalable web solutions for businesses.",
  alternates: { canonical: "https://jugaduji.com/founder" },
  openGraph: {
    title: "Ashutosh Kushwaha — Founder of Jugaduji Digital Solutions",
    description:
      "Full-stack developer and digital architect. Specializes in Next.js, React, TypeScript, system architecture, and SEO optimization.",
    url: "https://jugaduji.com/founder",
    type: "profile",
  },
  twitter: {
    title: "Ashutosh Kushwaha — Founder of Jugaduji Digital Solutions",
    description:
      "Full-stack developer, system architect, and founder of Jugaduji Digital Solutions.",
    creator: "@swe_ashutosh",
  },
};

// Structured data for this page
const pageSchemas = generatePageSchema(
  generateBreadcrumbSchema([
    { name: "About", url: "https://jugaduji.com/about" },
    { name: "Founder", url: "https://jugaduji.com/founder" },
  ]),
  generateFounderSchema()
);

const expertise = [
  {
    icon: Code,
    label: "Full-Stack Development",
    detail: "Next.js, React, Node.js, TypeScript",
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    icon: Layout,
    label: "System Architecture",
    detail: "Monorepos, Microservices, Edge Computing",
    color: "text-teal-600",
    bg: "bg-teal-100",
  },
  {
    icon: TrendingUp,
    label: "Growth & SEO Strategy",
    detail: "Technical SEO, GEO, Core Web Vitals",
    color: "text-orange-600",
    bg: "bg-orange-100",
  },
  {
    icon: Award,
    label: "Technical Leadership",
    detail: "Project Management, Client Strategy",
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
  {
    icon: Server,
    label: "Cloud & DevOps",
    detail: "Cloudflare Workers, Serverless, CI/CD",
    color: "text-indigo-600",
    bg: "bg-indigo-100",
  },
  {
    icon: Database,
    label: "Database Design",
    detail: "Drizzle ORM, Turso, PostgreSQL, SQLite",
    color: "text-emerald-600",
    bg: "bg-emerald-100",
  },
];

const techStack = [
  "Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4",
  "Cloudflare Workers", "Hono.js", "Drizzle ORM", "Turso",
  "Node.js", "Git", "Figma", "Vercel",
];

export default function FounderPage() {
  return (
    <>
      {/* JSON-LD: Person + Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchemas) }}
      />

      <div className="pt-16 md:pt-24 pb-16 bg-[var(--color-bg-main)] min-h-screen">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-8">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-[var(--color-primary)] transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/about" className="hover:text-[var(--color-primary)] transition-colors">About Us</Link></li>
              <li aria-hidden="true">/</li>
              <li className="font-semibold text-[var(--color-navy)]">Founder</li>
            </ol>
          </nav>

          {/* Profile Card */}
          <div className="bg-white rounded-[32px] overflow-hidden shadow-xl border border-gray-100 mb-12">
            {/* Banner Image */}
            <div className="h-40 sm:h-56 md:h-72 lg:h-80 w-full relative bg-gray-200">
              <img
                src="/banner for founder.png"
                alt="Ashutosh Kushwaha — Founder of Jugaduji Digital Solutions"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            <div className="px-8 sm:px-12 pb-12 relative">
              {/* Avatar Profile Photo */}
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 sm:border-8 border-white shadow-lg -mt-16 sm:-mt-20 relative z-10 mx-auto sm:mx-0 overflow-hidden bg-white">
                <img
                  src="/founderimage.png"
                  alt="Ashutosh Kushwaha — Profile Photo"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-6 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                <div>
                  {/* Author byline with expertise indicators */}
                  <h1 className="text-3xl sm:text-5xl font-extrabold text-[var(--color-navy)] tracking-tight mb-2">Ashutosh Kushwaha</h1>
                  <p className="text-lg text-[var(--color-primary)] font-bold tracking-wider uppercase">Founder & Lead Architect</p>
                  <p className="text-sm text-gray-500 mt-2">Full-Stack Developer · System Architect · SEO Specialist</p>
                </div>
                <div className="flex gap-3 justify-center sm:justify-start">
                  <a href="https://www.linkedin.com/in/ashutosh-jugaduji/" target="_blank" rel="noopener noreferrer" aria-label="Ashutosh Kushwaha on LinkedIn" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="https://x.com/swe_ashutosh" target="_blank" rel="noopener noreferrer" aria-label="Ashutosh Kushwaha on X/Twitter" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-white hover:bg-[#1DA1F2] hover:border-[#1DA1F2] transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Bio — expanded with more depth */}
              <div className="mt-12 space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Ashutosh Kushwaha is a visionary digital architect with a deep passion for constructing scalable, high-performance web systems. With a strong foundation established during specialized training at <strong>JSPIDER Training Center in Rajajinagar, Bangalore</strong>, Ashutosh has mastered the art of full-stack engineering and intelligent system design.
                </p>
                <p>
                  Recognizing a massive gap in how local businesses approach technology, Ashutosh founded <strong>Jugaduji Digital Solutions</strong> in 2026. The core philosophy? Premium digital infrastructure should not be restricted exclusively to massive tech corporations. Every business — from a local shop in Robertsganj to a growing startup in Bangalore — deserves a stunning, fast, and optimized digital presence.
                </p>
                <p>
                  Today, Ashutosh leads the entire development pipeline at Jugaduji, architecting <strong>Next.js applications</strong>, deploying <strong>serverless APIs on Cloudflare Workers</strong>, designing <strong>database schemas with Drizzle ORM</strong>, and directly overseeing the technical strategy that helps clients dominate their local markets. He has personally delivered 5+ production projects and managed digital transformations for 10+ businesses.
                </p>
              </div>

              <hr className="my-10 border-gray-100" />

              {/* Expertise Grid — expanded */}
              <div>
                <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-6">Areas of Expertise</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {expertise.map((item) => (
                    <div key={item.label} className="flex items-start gap-4 bg-gray-50 p-5 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors">
                      <div className={`w-10 h-10 rounded-full ${item.bg} ${item.color} flex items-center justify-center shrink-0`}>
                        <item.icon size={18} />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800 block">{item.label}</span>
                        <span className="text-xs text-gray-500">{item.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <hr className="my-10 border-gray-100" />

              {/* Technology Stack */}
              <div>
                <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-6">Technology Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-100">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <hr className="my-10 border-gray-100" />

              {/* Professional Timeline */}
              <div>
                <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-6">Professional Journey</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-[var(--color-primary)]" />
                      <div className="w-0.5 flex-1 bg-gray-200" />
                    </div>
                    <div className="pb-6">
                      <p className="text-sm font-bold text-[var(--color-primary)]">2020</p>
                      <h3 className="font-bold text-[var(--color-navy)]">Academic Foundation</h3>
                      <p className="text-sm text-gray-500">Began intensive studies in software development and digital architecture, building a strong foundation in programming fundamentals, data structures, and web technologies.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-[var(--color-primary)]" />
                      <div className="w-0.5 flex-1 bg-gray-200" />
                    </div>
                    <div className="pb-6">
                      <p className="text-sm font-bold text-[var(--color-primary)]">2023</p>
                      <h3 className="font-bold text-[var(--color-navy)]">Professional Training — JSPIDER, Bangalore</h3>
                      <p className="text-sm text-gray-500">Completed specialized full-stack development training at JSPIDER Training Center, Rajajinagar, Bangalore. Mastered Java, JavaScript, React, database management, and modern software engineering practices.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-[var(--color-secondary)]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[var(--color-secondary)]">2026</p>
                      <h3 className="font-bold text-[var(--color-navy)]">Founded Jugaduji Digital Solutions</h3>
                      <p className="text-sm text-gray-500">Launched Jugaduji to deliver modern, AI-powered digital solutions and specialized automation tools to businesses. Built the agency from ground up — from branding to technical infrastructure — serving 10+ clients in the first year.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-[var(--color-navy)] rounded-3xl p-8 sm:p-10 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 shadow-xl">
            <div>
              <h2 className="text-2xl font-bold mb-2">Want to discuss your project directly?</h2>
              <p className="text-gray-400">Book a technical consultation with Ashutosh to map out your architecture and digital strategy.</p>
            </div>
            <Link href="/contact" className="btn-primary shrink-0 bg-white text-[var(--color-navy)] hover:bg-gray-100 border-none px-8 py-3.5 shadow-md">
              Schedule a Call <ArrowRight size={16} className="inline ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
