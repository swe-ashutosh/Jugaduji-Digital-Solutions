import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";



const services = [
  "Web Development",
  "Digital Marketing",
  "Mobile Apps",
  "SEO Services",
  "Branding",
];

const resources = [
  { label: "Projects & Portals", href: "/projects" },
  { label: "FAQs", href: "/faqs" },
  { label: "Blog & Insights", href: "/blog" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

const FacebookIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const socials = [
  { icon: FacebookIcon, href: "https://www.facebook.com/jugadujiofficial", label: "Facebook" },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/company/jugaduji", label: "LinkedIn" },
  { icon: TwitterIcon, href: "https://x.com/jugaduji", label: "Twitter" },
  { icon: InstagramIcon, href: "https://www.instagram.com/jugadujiofficial", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-navy)] text-white pt-5 pb-15 sm:pb-8 px-4 sm:px-8">
      <div className="max-w-[1320px] mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-6 gap-x-10 md:gap-10 lg:gap-8 mb-8">

          <div className="lg:col-span-1 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex flex-col">
                <Image
                  src="/jjugadu-removebg-preview.png"
                  alt="Jugaduji"
                  width={120}
                  height={30}
                  className="h-5 sm:h-6 w-auto object-contain brightness-0 invert"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
              We help businesses grow with innovative digital solutions that
              make a real impact.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/10 transition-all duration-300"
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>

            {/* MSME Badge */}
            <div className="mt-1">
              <a href="#" className="inline-block hover:opacity-80 transition-opacity">
                <Image
                  src="/msmelogo1.png"
                  alt="MSME Registered Enterprise"
                  width={140}
                  height={40}
                  className="h-10 w-auto object-contain   "
                  style={{ width: "auto", height: "100px" }}
                />
              </a>
            </div>

          </div>



          {/* Column 3: Services */}
          <div>
            <h4 className="text-base font-bold mb-3 md:mb-5 text-white">Services</h4>
            <ul className="flex flex-row flex-wrap gap-x-6 gap-y-3 md:flex-col">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-gray-400 hover:text-[var(--color-secondary)] transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h4 className="text-base font-bold mb-3 md:mb-5 text-white">Resources</h4>
            <ul className="flex flex-row flex-wrap gap-x-6 gap-y-3 md:flex-col">
              {resources.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-[var(--color-secondary)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-base font-bold mb-5 text-white">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Phone
                  size={16}
                  className="text-[var(--color-secondary)] shrink-0 mt-0.5"
                />
                <span>+91 9519498159</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Mail
                  size={16}
                  className="text-[var(--color-secondary)] shrink-0 mt-0.5"
                />
                <span>info@jugaduji.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin
                  size={16}
                  className="text-[var(--color-secondary)] shrink-0 mt-0.5"
                />
                <span>Front Of Hotel The Grand, Civil Line Road, Robertsganj, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Clock
                  size={16}
                  className="text-[var(--color-secondary)] shrink-0 mt-0.5"
                />
                <span>Mon - Sat: 10AM - 6PM</span>
              </li>
            </ul>
          </div>

          {/* Column 5: Map */}
          <div className="flex flex-col">
            <h4 className="text-base font-bold mb-5 text-white">Find Us</h4>
            <div className="w-full h-[180px] sm:h-[200px] rounded-xl overflow-hidden relative opacity-80 hover:opacity-100 transition-opacity border border-gray-800">
              <iframe
                src="https://maps.google.com/maps?q=Front%20Of%20Hotel%20The%20Grand,%20Civil%20Line%20Road,%20Robertsganj,%20Uttar%20Pradesh,%20India&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale-[50%] hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>



        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-3">
          <p>© 2026 Jugaduji Digital Solutions. All rights reserved.</p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Link href="/admin/login" className="hover:text-white transition-colors">
              Admin Login
            </Link>
            <p className="flex items-center gap-1">
              Made with <span className="text-red-500">❤️</span> for your success
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}