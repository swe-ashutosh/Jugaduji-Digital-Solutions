"use client";

import React, { useState, useEffect } from "react";

export default function CallButton() {
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
      y: window.innerHeight - 150, // Placed slightly above the WhatsApp button
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

  const phoneUrl = "tel:+919519498159";

  const handlePhoneClick = (e: React.MouseEvent) => {
    if (!hasMoved) {
      window.open(phoneUrl, "_self");
    } else {
      e.preventDefault();
    }
  };

  if (!isMounted) return null;

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onClick={handlePhoneClick}
      className={`fixed z-[100] touch-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div
        className={`flex items-center justify-center w-14 h-14 bg-blue-600 hover:bg-blue-500 rounded-full shadow-lg hover:shadow-xl transition-shadow relative group pointer-events-auto ${isDragging ? "scale-95" : ""}`}
        title="Call Us Directly"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white drop-shadow-sm pointer-events-none">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      </div>
    </div>
  );
}
