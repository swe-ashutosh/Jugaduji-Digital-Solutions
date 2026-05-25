import React from "react";
import LinkNext from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="pt-16 md:pt-24 pb-16 bg-gray-50/30">
      {/* ─── Hero / Header ─── */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#f0f4fa] to-white py-12 mb-10 border-b border-gray-100">
        <div className="relative z-10 max-w-[950px] mx-auto px-4 sm:px-8">
          <LinkNext href="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-primary)] hover:underline mb-4 uppercase tracking-wider">
            <ArrowLeft size={12} /> Back to Home
          </LinkNext>
          <div className="flex items-center gap-3 mb-4">
            <FileText className="text-[var(--color-primary)]" size={28} />
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-navy)] tracking-tight">
              Terms & Conditions
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
            Welcome to Jugaduji Digital Solutions. By accessing our website, using our digital tools, or engaging our agency for services, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <div>
            <h2 className="text-lg sm:text-xl font-bold text-[var(--color-navy)] mb-3">1. Acceptance of Terms</h2>
            <p className="text-gray-500">
              By using our services, you confirm that you have read, understood, and agreed to these terms. If you do not agree with any part of these terms, please discontinue the use of our services immediately.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-bold text-[var(--color-navy)] mb-3">2. Nature of Services</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-500">
              <li><b>Agency Services:</b> We provide web development, mobile application design, and SEO optimization. These services are subject to a separate, written contract or project agreement.</li>
              <li><b>Digital Tools:</b> Our free tools (e.g., Bhulekh Helper) are provided "as-is." While we strive for accuracy, these tools are intended to assist in navigating public portals and are not official government platforms.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-bold text-[var(--color-navy)] mb-3">2. Intellectual Property Rights</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-500">
              <li><b>Ownership:</b> All content, designs, source code, and branding elements created by Jugaduji Digital Solutions remain our property unless otherwise specified in a signed project agreement with a client.</li>
              <li><b>Client Assets:</b> Any materials, logos, or data provided by you for your projects remain your exclusive property. You grant us a limited license to use these materials solely for the purpose of executing your project.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-bold text-[var(--color-navy)] mb-3">3. User Responsibilities</h2>
            <p className="text-gray-500 mb-4">
              You are explicitly prohibited from performing the following actions when interacting with our website:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-500">
              <li><b>Accuracy:</b> You are responsible for ensuring that any information you provide (for forms, applications, or site content) is accurate and truthful.</li>
              <li><b>Legal Compliance:</b> You agree to use our services and tools for lawful purposes only. You shall not use our platforms to distribute malicious software, bypass security measures, or infringe upon the rights of others.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-bold text-[var(--color-navy)] mb-3">4. Project Deliverables & Scoping</h2>
            <p className="text-gray-500">
              Any engineering agreements, design assets, and marketing campaigns delivered by Jugaduji Digital Solutions are governed by separate, signed master service agreements (MSAs) and statements of work (SOWs). The information displayed on this website is for general marketing purposes and does not represent binding delivery deadlines or absolute price quotes.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-bold text-[var(--color-navy)] mb-3">5. Monetization & Advertisements</h2>
            <p className="text-gray-500">
              Our digital tools are offered free of charge. To sustain these services, we incorporate advertisements. You acknowledge that Jugaduji Digital Solutions is not responsible for the content, privacy practices, or reliability of third-party advertisements displayed on our platforms.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-bold text-[var(--color-navy)] mb-3">6. Limitation of Liability</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-500">
              <li>Service Availability: While we aim for 100% uptime, our services are provided on an "as-is" basis. We are not liable for any losses resulting from technical interruptions, server downtime, or external portal errors.</li>
              <li>No Warranty: We do not guarantee specific results (e.g., search engine rankings or instant government processing) and are not liable for actions taken by third-party government websites.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-bold text-[var(--color-navy)] mb-3">7. Termination of Service</h2>
            <p className="text-gray-500">
              We reserve the right to suspend or terminate your access to our tools or services at our sole discretion, without prior notice, if we believe you have violated these terms or engaged in fraudulent activity.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-bold text-[var(--color-navy)] mb-3">8. Governing Law</h2>
            <p className="text-gray-500">
              These terms are governed by the laws of India. Any disputes arising from these services shall be settled within the jurisdiction of our local courts in Uttar Pradesh.
            </p>
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-[var(--color-navy)] mb-3">9. Changes to Terms</h2>
            <p className="text-gray-500">
              We may update these terms periodically. Your continued use of our services following any changes signifies your acceptance of the updated terms.
            </p>
          </div>

          <div className="border-t border-gray-100 pt-6 text-xs sm:text-sm text-gray-400">
            If you have any questions regarding these Terms & Conditions, please contact us at{" "}
            <a href="mailto:info@jugaduji.com" className="font-bold text-[var(--color-primary)] hover:underline">
              info@jugaduji.com
            </a>.
          </div>
        </div>
      </section>
    </div>
  );
}
