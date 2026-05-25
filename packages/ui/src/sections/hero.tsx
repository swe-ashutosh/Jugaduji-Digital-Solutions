import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Play,
  Users,
  Rocket,
  Award,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "10+",
    label: "Happy Clients",
    iconBg: "bg-green-600",
    iconColor: "text-white",
  },
  {
    icon: Rocket,
    value: "5+",
    label: "Projects Delivered",
    iconBg: "bg-blue-600",
    iconColor: "text-white",
  },
  {
    icon: Award,
    value: "5+",
    label: "Years Experience",
    iconBg: "bg-orange-500",
    iconColor: "text-white",
  },
  {
    icon: TrendingUp,
    value: "98%",
    label: "Client Satisfaction",
    iconBg: "bg-teal-600",
    iconColor: "text-white",
  },
];

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden pt-25 pb-6 sm:pb-10 lg:pb-14 mb-0 bg-[#f0f4fa]"
    >
      {/* ─── Desktop Background Image ─── */}
      <div
        className="hidden lg:block absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/Gemini%20webpage.png')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden="true"
      />
      {/* ─── Desktop Gradient Overlay ─── */}
      <div
        className="hidden lg:block absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to right, #f0f4fa 0%, #f0f4faee 35%, #f0f4facc 50%, #f0f4fa33 70%, transparent 85%)",
        }}
        aria-hidden="true"
      />
      {/* Bottom fade for smooth transition to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 lg:h-32 z-0"
        style={{
          background: "linear-gradient(to top, #ffffff, transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-8">
        {/* ─── Hero Content Grid ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6 items-center">
          {/* Left: Text Content */}
          <div className="flex flex-col items-start sm:items-start items-center text-center sm:text-left animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-gray-100 shadow-sm px-3 sm:px-4 py-2 mb-5 sm:mb-7 rounded-full text-xs font-semibold">
              <span className="text-[var(--color-primary)]">
                ✨ Digital Solutions.
              </span>
              <span className="text-[var(--color-secondary)]">
                Real Results.
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-[2.5rem] md:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold leading-[1.12] sm:leading-[1.08] mb-4 sm:mb-5 tracking-tight text-[var(--color-navy)]">
              We Build Digital
              <br />
              Experiences That
              <br />
              <span className="text-[var(--color-primary)]">Grow </span>
              <span className="relative text-[var(--color-secondary)] inline-block">
                Your Business
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[var(--color-secondary)]"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 10C50 2 150 2 198 10"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-500 mb-6 sm:mb-9 max-w-lg leading-relaxed">
              Jugaduji Digital Solutions helps businesses innovate, grow, and
              succeed in the digital world with smart strategy, design, and
              technology.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-5">
              <Link
                href="/contact"
                className="btn-primary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5"
              >
                Get Started <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
              </Link>
              <button className="flex items-center gap-2 sm:gap-3 text-[var(--color-navy)] font-bold hover:text-[var(--color-primary)] transition-colors group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-200 flex items-center justify-center bg-white shadow-sm group-hover:border-[var(--color-primary)] group-hover:shadow-md transition-all">
                  <Play
                    size={14}
                    className="text-[var(--color-primary)] ml-0.5 fill-current sm:w-4 sm:h-4"
                  />
                </div>
                <span className="text-xs sm:text-base">Watch Our Story</span>
              </button>
            </div>
          </div>

          {/* Right: Spacer for Desktop, Image for Mobile */}
          <div className="hidden lg:block" aria-hidden="true" />
          <div className="block lg:hidden w-full mt-4 sm:mt-8 flex justify-center animate-fade-up">
            <Image
              src="/Hero.png"
              alt="Hero Image"
              width={600}
              height={600}
              className="w-full max-w-[450px] h-auto object-contain drop-shadow-xl"
              priority
            />
          </div>
        </div>

        {/* ─── Stats Floating Card ─── */}
        <div className="relative z-20 mt-4 sm:mt-8 lg:mt-15 max-w-[1060px] mx-auto animate-fade-up stagger-3">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-[28px] shadow-[var(--shadow-stats)] border border-gray-100/80 p-4 sm:p-5 lg:p-8 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4 sm:gap-6 lg:gap-3">
            {stats.map((stat, index) => (
              <React.Fragment key={stat.label}>
                <div className="flex items-center gap-2.5 sm:gap-3.5 w-[calc(50%-0.5rem)] lg:w-auto">
                  <div
                    className={`w-9 h-9 sm:w-12 sm:h-12 rounded-full ${stat.iconBg} flex items-center justify-center shrink-0`}
                  >
                    <stat.icon className={stat.iconColor} size={18} />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-[var(--color-navy)] leading-none">
                      {stat.value}
                    </h4>
                    <p className="text-[10px] sm:text-[11px] lg:text-xs text-gray-500 font-medium mt-0.5">
                      {stat.label}
                    </p>
                  </div>
                </div>
                {index < stats.length - 1 && (
                  <div className="hidden lg:block w-px h-10 bg-gray-100" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}