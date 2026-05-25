import React from "react";
import { Building2, ShoppingBag, HeartPulse, GraduationCap, Briefcase, Truck } from "lucide-react";

export default function Industries() {
  const industries = [
    { icon: ShoppingBag, name: "E-Commerce", desc: "High-converting storefronts & carts." },
    { icon: HeartPulse, name: "Healthcare", desc: "Secure clinic & hospital portals." },
    { icon: Building2, name: "Real Estate", desc: "Property listings & agent platforms." },
    { icon: GraduationCap, name: "Education", desc: "LMS & student management." },
    { icon: Briefcase, name: "B2B Services", desc: "Corporate portfolios & lead gen." },
    { icon: Truck, name: "Logistics", desc: "Tracking portals & fleet websites." },
  ];

  return (
    <section className="py-20 bg-white" id="industries">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 px-4 py-2 mb-4 rounded-full text-xs font-semibold text-[var(--color-accent)] shadow-sm">
            <Building2 size={14} /> Industries We Serve
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-navy)] mb-6 tracking-tight">
            Tailored <span className="text-[var(--color-primary)]">Solutions</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
            We architect and deploy specialized software systems adapted to the precise operational needs of various economic sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <div key={i} className="group p-6 sm:p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-card)] transition-all duration-300 cursor-default">
              <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-gray-500 group-hover:text-white group-hover:bg-[var(--color-primary)] group-hover:border-[var(--color-primary)] transition-colors mb-5 shadow-sm">
                <ind.icon size={22} />
              </div>
              <h3 className="text-lg font-bold text-[var(--color-navy)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                {ind.name}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {ind.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
