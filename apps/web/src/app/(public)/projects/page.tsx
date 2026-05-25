"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink, ShieldCheck, Database, Layers, Monitor, HardDrive } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  localUrl: string;
  prodUrl: string;
  icon: any;
  featured: boolean;
  status: "active" | "development" | "beta";
}

const projectsData: Project[] = [
  {
    id: "csc-solutions",
    title: "CSC Solutions Hub",
    description: "A PWA-ready, local-first utility dashboard designed for village service centers. Includes smart ID card cropping, bulk passport photo rendering, and land record indexing with zero cloud storage footprint.",
    category: "Web Application / Utility",
    tags: ["Next.js 16", "PWA", "pdf-lib", "sharp", "Local-First"],
    localUrl: "http://cscsolutions.jugaduji.com",
    prodUrl: "https://cscsolutions.jugaduji.com",
    icon: HardDrive,
    featured: true,
    status: "active"
  },
  {
    id: "apna-library",
    title: "Apna Library Portal",
    description: "An interactive seat-booking and digital portal designed for student communities and library desk operations, optimizing study workspace schedules.",
    category: "Community Platform",
    tags: ["React", "CSS Variables", "SQLite", "Booking Systems"],
    localUrl: "https://apnalibrary.jugaduji.com", // Fallback to live URL if dev port is unassigned
    prodUrl: "https://apnalibrary.jugaduji.com",
    icon: Database,
    featured: true,
    status: "active"
  },
  {
    id: "krrish-computer",
    title: "Krrish Tech Consulting",
    description: "Localized small-business management panel and tech consulting portal built to digitize invoicing and desktop setups for rural service centers.",
    category: "Management Panel",
    tags: ["TypeScript", "TailwindCSS", "FastAPI"],
    localUrl: "#",
    prodUrl: "#",
    icon: Monitor,
    featured: false,
    status: "development"
  },
  {
    id: "sonbhadra-tech",
    title: "Sonbhadra Technologies",
    description: "Scalable local-SEO business landing pages and cloud deployments optimizing digital visibility for local enterprise networks.",
    category: "Branding & Cloud",
    tags: ["Next.js", "Hono API", "Cloudflare Workers"],
    localUrl: "#",
    prodUrl: "#",
    icon: Layers,
    featured: false,
    status: "development"
  }
];

export default function ProjectsPage() {
  const [isLocal, setIsLocal] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsLocal(
        window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1"
      );
    }
  }, []);

  return (
    <div className="pt-16 md:pt-24 pb-20 bg-[var(--color-bg-subtle)] min-h-screen">
      {/* ─── Page Hero Header ─── */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#f0f4fa] to-transparent py-16 lg:py-20 mb-8">
        <div className="relative z-10 max-w-[1320px] mx-auto px-5 sm:px-8 text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-gray-100 shadow-sm px-4 py-2 mb-6 rounded-full text-xs font-semibold">
            <span className="text-[var(--color-primary)]">🚀 Jugaduji Ecosystem</span>
            <span className="text-[var(--color-secondary)]">Web Products & Sub-Systems</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--color-navy)] mb-6 tracking-tight">
            Our Digital <span className="text-[var(--color-primary)]">Systems</span> & Portals
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Explore our range of client portals, specialized microservices, and dashboard ecosystems built with local-first compliance and premium visual design.
          </p>
        </div>
      </section>

      {/* ─── Environment Notice ─── */}
      {isLocal && (
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 mb-8 animate-fade-in">
          <div className="bg-blue-50 border border-blue-200/70 p-4 rounded-2xl flex items-center justify-between gap-4 text-xs font-bold text-[var(--color-primary-dark)]">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-[var(--color-primary)]" />

            </div>
            <span className="px-2.5 py-1 bg-white border border-blue-300 rounded-lg uppercase tracking-wider text-[9px] shadow-sm select-none">
              Dev Mode
            </span>
          </div>
        </div>
      )}

      {/* ─── Projects List Section ─── */}
      <section className="max-w-[1100px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => {
            const Icon = project.icon;
            const targetUrl = isLocal ? project.localUrl : project.prodUrl;
            const isExternal = targetUrl.startsWith("http");

            return (
              <div
                key={project.id}
                className="card flex flex-col justify-between p-8 border border-gray-100 hover:border-gray-200 bg-white shadow-card rounded-2xl hover:-translate-y-1.5 transition-all duration-300"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[var(--color-primary)]">
                      <Icon size={22} />
                    </div>
                    <div className="flex gap-2">
                      <span className="px-2.5 py-1 bg-gray-50 border border-gray-100 text-[10px] font-bold text-gray-500 rounded-full select-none">
                        {project.category}
                      </span>
                      {project.status === "active" ? (
                        <span className="px-2.5 py-1 bg-emerald-50 border border-emerald-100 text-[10px] font-bold text-[var(--color-secondary)] rounded-full select-none flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-[var(--color-secondary)] rounded-full animate-pulse" /> Active
                        </span>
                      ) : (
                        <span className="px-2.5 py-1 bg-orange-50 border border-orange-100 text-[10px] font-bold text-orange-500 rounded-full select-none">
                          In Dev
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-[var(--color-navy)] mb-3">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Card Footer tags and action */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-gray-50 text-[10px] font-medium text-gray-400 rounded-md border border-gray-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="border-t border-gray-50 pt-4 flex justify-between items-center">
                    {isExternal ? (
                      <a
                        href={targetUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-xs py-2.5 px-5 flex items-center gap-1.5"
                      >
                        Launch Portal <ExternalLink size={12} />
                      </a>
                    ) : (
                      <button
                        disabled
                        className="px-4 py-2 border border-gray-200 text-gray-300 text-xs font-bold rounded-full select-none cursor-not-allowed"
                      >
                        System Locked
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
