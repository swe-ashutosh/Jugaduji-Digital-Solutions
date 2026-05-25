import React from "react";
import { Award, Code, Layout, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Meet the Founder - Ashutosh Kushwaha",
  description: "Learn more about Ashutosh Kushwaha, the Founder and Lead Architect of Jugaduji Digital Solutions.",
};

export default function FounderPage() {
  return (
    <div className="pt-16 md:pt-24 pb-16 bg-[var(--color-bg-main)] min-h-screen">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link href="/about" className="text-sm font-semibold text-gray-500 hover:text-[var(--color-primary)] transition-colors inline-flex items-center gap-1">
            &larr; Back to About Us
          </Link>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-[32px] overflow-hidden shadow-xl border border-gray-100 mb-12">
          {/* Banner Image */}
          <div className="h-40 sm:h-56 md:h-72 lg:h-80 w-full relative bg-gray-200">
            {/* TODO: Replace src with your real banner image path */}
            <img
              src="/banner for founder.png"
              alt="Founder Banner"
              className="w-full h-full object-cover object-center"
            />
            {/* Subtle overlay so the avatar pops out more */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          <div className="px-8 sm:px-12 pb-12 relative">
            {/* Avatar Profile Photo */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 sm:border-8 border-white shadow-lg -mt-16 sm:-mt-20 relative z-10 mx-auto sm:mx-0 overflow-hidden bg-white">
              {/* TODO: Replace src with your real profile photo path (e.g., "/ashutosh.jpg") */}
              <img
                src="/founderimage.png"
                alt="Ashutosh Kushwaha - Profile Photo"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-6 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-[var(--color-navy)] tracking-tight mb-2">Ashutosh Kushwaha</h1>
                <p className="text-lg text-[var(--color-primary)] font-bold tracking-wider uppercase">Founder & Lead Architect</p>
              </div>
              <div className="flex gap-3 justify-center sm:justify-start">
                <a href="https://www.linkedin.com/in/ashutosh-jugaduji/" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://x.com/swe_ashutosh" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-white hover:bg-[#1DA1F2] hover:border-[#1DA1F2] transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Bio */}
            <div className="mt-12 space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Ashutosh Kushwaha is a visionary digital architect with a deep passion for constructing scalable, high-performance web systems. With a strong foundation established during specialized training at JSPIDER in Bangalore, Ashutosh has mastered the art of full-stack engineering and intelligent system design.
              </p>
              <p>
                Recognizing a massive gap in how local businesses approach technology, Ashutosh founded Jugaduji Digital Solutions. The core philosophy? Premium digital infrastructure should not be restricted exclusively to massive tech corporations. Every business deserves a stunning, fast, and optimized digital presence.
              </p>
              <p>
                Today, Ashutosh leads the development pipeline at Jugaduji, architecting Next.js applications, deploying serverless APIs, and directly overseeing the technical strategy that helps our clients dominate their local markets.
              </p>
            </div>

            <hr className="my-10 border-gray-100" />

            {/* Expertise */}
            <div>
              <h3 className="text-xl font-bold text-[var(--color-navy)] mb-6">Areas of Expertise</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Code size={18} />
                  </div>
                  <span className="font-semibold text-gray-800">Full-Stack Development</span>
                </div>
                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center">
                    <Layout size={18} />
                  </div>
                  <span className="font-semibold text-gray-800">System Architecture</span>
                </div>
                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
                    <TrendingUp size={18} />
                  </div>
                  <span className="font-semibold text-gray-800">Growth Strategies</span>
                </div>
                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                    <Award size={18} />
                  </div>
                  <span className="font-semibold text-gray-800">Technical Leadership</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-[var(--color-navy)] rounded-3xl p-8 sm:p-10 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 shadow-xl">
          <div>
            <h3 className="text-2xl font-bold mb-2">Want to discuss your project directly?</h3>
            <p className="text-gray-400">Book a technical consultation with Ashutosh to map out your architecture.</p>
          </div>
          <Link href="/contact" className="btn-primary shrink-0 bg-white text-[var(--color-navy)] hover:bg-gray-100 border-none px-8 py-3.5 shadow-md">
            Schedule a Call <ArrowRight size={16} className="inline ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
