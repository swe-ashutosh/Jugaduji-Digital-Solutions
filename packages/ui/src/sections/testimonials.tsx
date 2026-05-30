import React from "react";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Shailesh Maury",
      company: "Krrish Computer & Technology",
      text: "Jugaduji Digital Solutions helped us create a smooth and professional digital system for our CSC center. From Aadhaar-related work support to online services and HDFC Bank BC operations, everything became faster and easier to manage. The platform is simple, reliable, and very useful for daily customer work.",
      rating: 5,
    },
    {
      name: "Birbal Singh",
      company: "Sonbhadra Technician Experts",
      text: "We needed a modern and trusted online presence for our CCTV business, and Jugaduji Digital Solutions delivered exactly that. Our services, CCTV installation work, and product showcase now look professional and help customers understand our work clearly. Great support and clean execution.",
      rating: 5,
    },
    {
      name: "Satyendra Maurya",
      company: "Samrat Construction",
      text: "Jugaduji Digital Solutions provided an excellent digital setup for our construction and electrical services business. Our solar system and electricity-related services are now presented professionally online, helping customers connect with us more easily. Highly recommended for business growth.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100" id="testimonials">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 mb-4 rounded-full text-xs font-semibold text-[var(--color-primary)] shadow-sm">
            <Star size={14} fill="currentColor" /> Client Success Stories
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-navy)] mb-6 tracking-tight">
            Trusted by <span className="text-[var(--color-secondary)]">Local Brands</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
            See what our partners have to say about our premium web development and strategic digital marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
              <Quote className="absolute top-6 right-6 text-gray-100 w-16 h-16 -z-0" />
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(t.rating)].map((_, idx) => (
                  <Star key={idx} size={16} className="text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-8 relative z-10 font-medium">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4 relative z-10 pt-4 border-t border-gray-50">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center font-bold text-[var(--color-primary)] border border-blue-100">
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[var(--color-navy)]">{t.name}</h4>
                  <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
