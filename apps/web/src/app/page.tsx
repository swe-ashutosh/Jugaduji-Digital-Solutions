import React from "react";
import { Hero, ServicesAndAbout, Industries, Pricing, Testimonials, CTAInline, Navbar, Footer, WhatsAppButton, CallButton } from "@jugaduji/ui";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-bg-main)]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ServicesAndAbout />
        <Industries />
        <Pricing />
        <Testimonials />
        <CTAInline />
      </main>
      <Footer />
      <WhatsAppButton />
      <CallButton />
    </div>
  );
}