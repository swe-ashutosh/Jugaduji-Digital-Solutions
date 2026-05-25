"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ArrowRight,
  MessageSquare,
  CheckCircle,
} from "lucide-react";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterSubmitted(true);
    setTimeout(() => setNewsletterSubmitted(false), 5000);
  };

  return (
    <div className="pt-16 md:pt-24 pb-16">
      {/* ─── Hero Section ─── */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#f0f4fa] to-white py-16 lg:py-20 mb-12">
        <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-8 text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-gray-100 shadow-sm px-4 py-2 mb-6 rounded-full text-xs font-semibold">
            <span className="text-[var(--color-primary)]">🤝 We are here for you.</span>
            <span className="text-[var(--color-secondary)]">Let&apos;s collaborate</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--color-navy)] mb-6 tracking-tight">
            Contact <span className="text-[var(--color-primary)]">Us</span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            Have a project in mind, need technical assistance, or just want to say hello? Get in touch with our team of digital experts.
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

      {/* ─── Contact Details & Form Grid ─── */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Details */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-[2px] bg-[var(--color-primary)]" />
                <span className="text-xs font-bold text-[var(--color-primary)] tracking-widest uppercase">
                  Reach Out
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-navy)] leading-tight mb-6">
                Our Office & <span className="text-[var(--color-secondary)]">Info</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Stop by our office for a cup of coffee, or drop us an email anytime. We usually respond within 24 business hours.
              </p>

              {/* Detail Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[var(--shadow-card)] hover:border-[var(--color-primary)] transition-all">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                    <Phone size={18} />
                  </div>
                  <h4 className="text-sm font-bold text-[var(--color-navy)] mb-1">Call Us</h4>
                  <p className="text-xs text-gray-500 mb-1">Mon-Sat, 10am-6pm</p>
                  <a href="tel:+919519498159" className="text-xs sm:text-sm font-semibold text-[var(--color-primary)] hover:underline">
                    +91 9519498159
                  </a>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[var(--shadow-card)] hover:border-[var(--color-secondary)] transition-all">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-4">
                    <Mail size={18} />
                  </div>
                  <h4 className="text-sm font-bold text-[var(--color-navy)] mb-1">Email Us</h4>
                  <p className="text-xs text-gray-500 mb-1">Drop a message anytime</p>
                  <a href="mailto:info@jugaduji.com" className="text-xs sm:text-sm font-semibold text-[var(--color-secondary)] hover:underline">
                    info@jugaduji.com
                  </a>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[var(--shadow-card)] hover:border-[var(--color-accent)] transition-all sm:col-span-2">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[var(--color-navy)] mb-1">Visit Our Office</h4>
                      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                        Front Of Hotel The Grand, Civil Line Road, Robertsganj, Uttar Pradesh, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick response note */}
            <div className="bg-[var(--color-blue-gradient)]/40 border border-blue-100/50 p-5 rounded-2xl flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                <Clock className="text-[var(--color-primary)]" size={18} />
              </div>
              <p className="text-xs sm:text-sm text-[var(--color-navy)] font-medium leading-relaxed">
                Need a rapid response? Click the floating WhatsApp button in the corner to speak with an agent instantly!
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-3xl border border-gray-100 shadow-[var(--shadow-lg)]">
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-navy)] mb-6 flex items-center gap-2">
                <MessageSquare size={20} className="text-[var(--color-primary)]" />
                Send a Message
              </h3>

              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-2xl text-center flex flex-col items-center gap-3">
                  <CheckCircle size={36} className="text-green-600" />
                  <h4 className="font-bold text-lg">Thank you!</h4>
                  <p className="text-sm text-green-700">
                    Your inquiry has been received. Our sales team will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-[var(--color-navy)] uppercase tracking-wider mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-[var(--color-navy)] focus:outline-none focus:border-[var(--color-primary)] focus:bg-white transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-[var(--color-navy)] uppercase tracking-wider mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-[var(--color-navy)] focus:outline-none focus:border-[var(--color-primary)] focus:bg-white transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-bold text-[var(--color-navy)] uppercase tracking-wider mb-2">
                      Subject / Service Needed
                    </label>
                    <select
                      id="subject"
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-[var(--color-navy)] focus:outline-none focus:border-[var(--color-primary)] focus:bg-white transition-colors"
                    >
                      <option value="">Select a service...</option>
                      <option value="web">Web Development</option>
                      <option value="mobile">Mobile App Development</option>
                      <option value="seo">SEO & Marketing</option>
                      <option value="branding">UI/UX & Branding</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-[var(--color-navy)] uppercase tracking-wider mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-[var(--color-navy)] focus:outline-none focus:border-[var(--color-primary)] focus:bg-white transition-colors resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full justify-center py-3.5 shadow-md hover:shadow-lg rounded-xl text-sm"
                  >
                    Send Message <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Map & Find Us Section ─── */}
      {/* <section className="max-w-[1320px] mx-auto px-4 sm:px-8 mb-20">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-[2px] bg-[var(--color-primary)]" />
          <span className="text-xs font-bold text-[var(--color-primary)] tracking-widest uppercase">
            Map
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-navy)] leading-tight mb-8">
          Find Us On The <span className="text-[var(--color-primary)]">Map</span>
        </h2>
        <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-[var(--shadow-lg)] border border-gray-100">
          <iframe
            src="https://maps.google.com/maps?q=Front%20Of%20Hotel%20The%20Grand,%20Civil%20Line%20Road,%20Robertsganj,%20Uttar%20Pradesh,%20India&t=&z=14&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale-[20%] hover:grayscale-0 transition-all duration-500"
          ></iframe>
        </div>
      </section> */}

      {/* ─── Newsletter Signup (Moved from Footer) ─── */}
      <section className="max-w-[1060px] mx-auto px-4 sm:px-8 mb-8">
        <div className="relative bg-gradient-to-br from-teal-800 to-teal-950 rounded-[28px] sm:rounded-[32px] p-8 sm:p-12 text-white overflow-hidden shadow-[var(--shadow-lg)]">
          {/* Decorative gradients */}
          <div className="absolute right-0 top-0 w-64 h-64 bg-[var(--color-primary)]/10 rounded-full blur-3xl" />
          <div className="absolute left-0 bottom-0 w-64 h-64 bg-[var(--color-secondary)]/10 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-5 w-full lg:w-auto text-left">
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/10">
                <Mail className="text-[var(--color-secondary-light)]" size={24} />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-1.5 leading-snug">
                  Subscribe to our newsletter
                </h3>
                <p className="text-sm text-gray-300">
                  Get the latest digital trends, updates, and exclusive tips.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-auto">
              {newsletterSubmitted ? (
                <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 rounded-xl text-center text-sm font-semibold text-[var(--color-secondary-light)] animate-fade-in">
                  🎉 Subscription successful! Thank you.
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[var(--color-secondary)] focus:bg-white/15 min-w-[280px] transition-colors"
                  />
                  <button
                    type="submit"
                    className="btn-cta-green justify-center rounded-xl py-3 shadow-none hover:shadow-none font-bold"
                  >
                    Subscribe <ArrowRight size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
