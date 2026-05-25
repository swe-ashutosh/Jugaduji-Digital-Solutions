import React from "react";
import { Check } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  const plans = [
    {
      name: "Beginner",
      price: "₹4,999",
      desc: "Perfect for local businesses starting their digital journey.",
      features: [
        "1-Page Landing Website",
        "Responsive Mobile Design",
        "Basic SEO Setup",
        "Contact Form Integration",
        "1 Month Free Maintenance",
      ],
      popular: false,
      btnText: "Start Beginner",
      href: "/contact",
    },
    {
      name: "Growth",
      price: "₹14,999",
      desc: "Ideal for growing agencies and expanding stores.",
      features: [
        "Up to 5 Pages Website",
        "Fast Next.js Architecture",
        "Advanced SEO & Analytics",
        "WhatsApp Live Chat",
        "3 Months Free Maintenance",
      ],
      popular: true,
      btnText: "Get Growth Plan",
      href: "/contact",
    },
    {
      name: "Premium",
      price: "₹34,999",
      desc: "For established businesses needing dynamic functionality.",
      features: [
        "Custom E-Commerce/CMS",
        "Admin Dashboard Panel",
        "Payment Gateway Integration",
        "Premium Animations",
        "6 Months Free Maintenance",
      ],
      popular: false,
      btnText: "Go Premium",
      href: "/contact",
    },
    {
      name: "Custom",
      price: "Let's Talk",
      desc: "Tailored enterprise solutions for unique operational needs.",
      features: [
        "Full-Stack Web & Mobile App",
        "Custom Database Architecture",
        "Cloudflare Edge Deployment",
        "Dedicated Server Setup",
        "1 Year Premium Support",
      ],
      popular: false,
      btnText: "Contact Us",
      href: "/contact",
      highlight: true,
    },
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100" id="pricing">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 mb-4 rounded-full text-xs font-semibold text-[var(--color-primary)] shadow-sm">
            Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-navy)] mb-6 tracking-tight">
            Plans that Scale with <span className="text-[var(--color-secondary)]">Your Growth</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
            Choose the perfect package tailored to your business needs, from stunning landing pages to full-scale digital enterprise platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-3xl p-8 border ${
                plan.popular 
                  ? "bg-white border-[var(--color-primary)] shadow-xl lg:scale-105 z-10" 
                  : plan.highlight 
                    ? "bg-gradient-to-b from-[var(--color-navy)] to-gray-900 border-gray-800 shadow-xl text-white" 
                    : "bg-white border-gray-200 shadow-sm"
              } flex flex-col justify-between transition-transform hover:-translate-y-1 duration-300`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-primary)] text-white px-4 py-1.5 rounded-full text-[10px] font-extrabold tracking-widest uppercase shadow-md whitespace-nowrap">
                  Most Popular
                </div>
              )}
              
              <div>
                <h3 className={`text-xl font-bold mb-2 ${plan.highlight ? "text-white" : "text-[var(--color-navy)]"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 min-h-[40px] ${plan.highlight ? "text-gray-400" : "text-gray-500"}`}>
                  {plan.desc}
                </p>
                <div className="mb-8 flex items-end gap-1">
                  <span className={`text-4xl font-extrabold tracking-tight ${plan.highlight ? "text-white" : "text-[var(--color-navy)]"}`}>
                    {plan.price}
                  </span>
                  {plan.price !== "Let's Talk" && <span className={`text-sm font-medium mb-1 ${plan.highlight ? "text-gray-500" : "text-gray-400"}`}>/project</span>}
                </div>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className={`mt-0.5 rounded-full p-1 shrink-0 ${plan.highlight ? "bg-white/10 text-blue-300" : "bg-blue-50 text-[var(--color-primary)]"}`}>
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className={`text-sm font-medium leading-snug ${plan.highlight ? "text-gray-300" : "text-gray-600"}`}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Link
                href={plan.href}
                className={`w-full py-3.5 rounded-xl font-bold text-sm text-center transition-all ${
                  plan.popular
                    ? "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] shadow-md hover:shadow-lg"
                    : plan.highlight
                    ? "bg-white text-[var(--color-navy)] hover:bg-gray-100"
                    : "bg-gray-50 text-[var(--color-navy)] hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {plan.btnText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
