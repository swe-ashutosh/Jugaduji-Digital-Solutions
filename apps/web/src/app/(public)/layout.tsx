import React from "react";
import { Navbar, Footer, WhatsAppButton, CallButton } from "@jugaduji/ui";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-bg-main)]">
      <Navbar />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
      <CallButton />
    </div>
  );
}
