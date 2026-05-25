import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="pt-16 md:pt-24 pb-16 bg-gray-50/30">
      {/* ─── Hero / Header ─── */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#f0f4fa] to-white py-12 mb-10 border-b border-gray-100">
        <div className="relative z-10 max-w-[950px] mx-auto px-4 sm:px-8">
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-primary)] hover:underline mb-4 uppercase tracking-wider">
            <ArrowLeft size={12} /> Back to Home
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="text-[var(--color-primary)]" size={28} />
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-navy)] tracking-tight">
              Privacy Policy
            </h1>
          </div>
          <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
            Last Updated: May 20, 2026
          </p>
        </div>
      </section>

      {/* ─── Content ─── */}
      <section className="max-w-[950px] mx-auto px-4 sm:px-8 mb-20">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-[var(--shadow-card)] text-[var(--color-navy)] leading-relaxed text-sm sm:text-base space-y-8">
          <p className="text-gray-500 font-medium">
            At Jugaduji Digital Solutions, we believe that transparency is the foundation of digital trust. This Privacy Policy outlines how we collect, use, and protect your information when you engage with our agency services or utilize our digital tools.
          </p>

          <div>
            <h2 className="text-lg sm:text-xl font-bold text-[var(--color-navy)] mb-3">1. Information We Collect</h2>
            <p className="text-gray-500 mb-4">
              We collect information only where necessary to deliver our high-performance digital solutions:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-500">
              <li> <b>Directly Provided Data:</b> When you contact us or request a consultation, we collect identifiers (name, email, phone) and project-specific requirements (business goals, architectural needs, and technical specs).</li>
              <li><b>Automated Technical Data:</b> To maintain site security and optimize performance, our servers automatically log metadata including IP addresses, browser versions, and interaction timestamps.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-bold text-[var(--color-navy)] mb-3">2. How We Use Your Information</h2>
            <p className="text-gray-500 mb-4">
              We use your data to power our development workflows and maintain operational excellence:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-500">
              <li><b>Service Delivery:</b> To architect, build, and deploy custom web solutions tailored to your business needs.</li>
              <li><b>Optimization:</b> To refine user interface (UI) and user experience (UX) to ensure our digital tools are intuitive and fast.</li>
              <li><b>Communication:</b> To provide project milestones, status updates, and professional insights.</li>
              <li><b>Security & Integrity:</b> To monitor our infrastructure for potential vulnerabilities, code errors, or unauthorized access attempts.</li>
              <li><b>Marketing:</b> We occasionally send updates on new tools or services. You may unsubscribe at any time via the link in the footer of these communications.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-bold text-[var(--color-navy)] mb-3">3. Our "Privacy-First" Security Commitment</h2>
            <p className="text-gray-500">
              We leverage industry-standard security protocols to safeguard your intellectual property and personal data. While we implement rigorous technical safeguards—including secure, encrypted hosting environments—no digital transmission or storage is absolute. We encourage our clients to practice standard security hygiene in all digital interactions.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-bold text-[var(--color-navy)] mb-3">4. Cookies and Analytical Insights</h2>
            <p className="text-gray-500">
              We use cookies to enhance your experience by remembering your preferences and optimizing content delivery. These cookies allow us to provide a seamless browsing experience tailored to your device and location.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-bold text-[var(--color-navy)] mb-3">5.Third-Party Interactions & Advertising</h2>
            <p className="text-gray-500">
              We do not sell, trade, or otherwise transfer your personally identifiable information to external third parties. This does not include trusted partners who assist us in operating our website or servicing your project development, so long as those parties agree to keep this information confidential.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-500">
              <li><b>Privacy Integrity:</b> We do not sell, trade, or rent your personally identifiable information (PII) to third parties.</li>
              <li><b>Operational Partners:</b> We may share data only with trusted partners who provide essential infrastructure (e.g., hosting providers or analytics tools) under strict confidentiality agreements.</li>
              <li><b>Ad-Supported Services:</b> To keep our digital tools free for the community, we integrate non-intrusive advertisements. These partners may use anonymized tracking cookies to deliver relevant content. By using our tools, you acknowledge the presence of these standard advertising technologies.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-bold text-[var(--color-navy)] mb-3">6. Your Rights</h2>
            <p className="text-gray-500">
              You maintain full ownership of your data. You may contact us at any time to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-500">
              <li>Request access to the data we hold about you.</li>
              <li>Request the permanent deletion of your project or personal records from our databases.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-bold text-[var(--color-navy)] mb-3">6. Consent</h2>
            <p className="text-gray-500">
              By accessing our website and utilizing our tools, you acknowledge and agree to this Privacy Policy.
            </p>
          </div>

          <div className="border-t border-gray-100 pt-6 text-xs sm:text-sm text-gray-400">
            For data inquiries or request requests regarding your personal records, please reach out to our privacy administrator at{" "}
            <a href="mailto:info@jugaduji.com" className="font-bold text-[var(--color-primary)] hover:underline">
              info@jugaduji.com
            </a>.
          </div>
        </div>
      </section>
    </div>
  );
}
