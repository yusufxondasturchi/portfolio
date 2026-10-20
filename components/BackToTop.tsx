"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Yuqoriga qaytish"
      title="Yuqoriga qaytish"
      className="fixed bottom-6 right-6 z-30 p-3 rounded-xl bg-slate-900/90 dark:bg-slate-950/90 border border-cyan-400/60 text-cyan-400 hover:text-cyan-300 hover:bg-cyan-950 shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:shadow-[0_0_25px_rgba(0,240,255,0.7)] transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-cyan-400"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
