"use client";

import React, { useState, useEffect, useRef } from "react";

export default function WhatsAppButton() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [clickPos, setClickPos] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setPosition({
      x: window.innerWidth - 80,
      y: window.innerHeight - 80,
    });
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setHasMoved(false);
    setClickPos({ x: e.clientX, y: e.clientY });
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    if (Math.abs(e.clientX - clickPos.x) > 5 || Math.abs(e.clientY - clickPos.y) > 5) {
      setHasMoved(true);
    }

    let newX = e.clientX - dragStart.x;
    let newY = e.clientY - dragStart.y;

    // Boundary constraints
    if (newX < 0) newX = 0;
    if (newY < 0) newY = 0;
    if (newX > window.innerWidth - 60) newX = window.innerWidth - 60;
    if (newY > window.innerHeight - 60) newY = window.innerHeight - 60;

    setPosition({ x: newX, y: newY });
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  const whatsappUrl = "https://wa.me/919519498159?text=Hello%20Jugaduji%20Digital%20Solutions!%20I%20would%20like%20to%20discuss%20a%20project.";

  const handleClick = () => {
    if (!hasMoved) {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }
  };

  if (!isMounted) return null;

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onClick={handleClick}
      className={`fixed z-[100] touch-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div
        className={`flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#1ebd5a] rounded-full shadow-lg hover:shadow-xl transition-shadow relative group ${isDragging ? "scale-95" : ""}`}
        title="Chat on WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          width="32"
          height="32"
          className="text-white drop-shadow-sm pointer-events-none"
        >
          <path d="M12.031 0C5.383 0 0 5.383 0 12.031c0 2.128.552 4.137 1.603 5.928L.15 23.364l5.545-1.455c1.724.954 3.655 1.456 5.672 1.456 6.648 0 12.031-5.383 12.031-12.031C23.398 5.383 18.015 0 12.031 0zm0 21.439c-1.802 0-3.526-.484-5.048-1.386l-.361-.214-3.751.983.998-3.657-.235-.373C2.569 15.342 2.054 13.722 2.054 12.031c0-5.509 4.482-9.991 9.977-9.991 5.509 0 9.991 4.482 9.991 9.991s-4.482 9.991-9.991 9.991zm5.474-7.464c-.301-.151-1.776-.877-2.051-.977-.275-.101-.476-.151-.676.151-.201.301-.776.977-.951 1.178-.176.201-.351.226-.652.076-.301-.151-1.267-.467-2.414-1.492-.892-.796-1.494-1.781-1.67-2.082-.176-.301-.019-.464.131-.614.136-.136.301-.351.451-.526.151-.176.201-.301.301-.502.101-.201.05-.376-.025-.526-.075-.151-.676-1.629-.926-2.231-.244-.588-.492-.508-.676-.517-.175-.008-.376-.008-.576-.008-.201 0-.526.075-.801.376-.275.301-1.052 1.029-1.052 2.51 0 1.481 1.077 2.912 1.227 3.112.151.201 2.124 3.243 5.143 4.544 2.158.932 2.871.776 3.421.726.551-.05 1.776-.726 2.027-1.428.251-.702.251-1.304.176-1.428-.076-.126-.276-.201-.577-.352z" />
        </svg>
      </div>
    </div>
  );
}
