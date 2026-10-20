"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Terminal, ArrowUpRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { portfolioData } from "@/data/portfolio";

const navLinks = [
  { href: "/#home", label: "Bosh sahifa" },
  { href: "/#about", label: "Men haqimda" },
  { href: "/#skills", label: "Ko'nikmalar" },
  { href: "/#projects", label: "Loyihalar" },
  { href: "/#contact", label: "Bog'lanish" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section if on homepage
      if (pathname === "/") {
        const sections = ["home", "about", "skills", "projects", "contact"];
        const current = sections.find((section) => {
          const el = document.getElementById(section);
          if (el) {
            const rect = el.getBoundingClientRect();
            return rect.top <= 150 && rect.bottom >= 150;
          }
          return false;
        });
        if (current) {
          setActiveSection(current);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 dark:bg-[#030712]/85 backdrop-blur-md border-b border-cyan-500/20 shadow-lg shadow-cyan-950/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Logo / Name */}
          <Link
            href="/#home"
            className="group flex items-center space-x-2 text-slate-100 font-mono font-bold tracking-tight text-lg sm:text-xl"
          >
            <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-400/50 flex items-center justify-center text-cyan-400 group-hover:shadow-[0_0_12px_#00f0ff] transition-all duration-300">
              <Terminal className="w-4 h-4" />
            </div>
            <span className="text-slate-900 dark:text-white group-hover:text-cyan-400 dark:group-hover:text-cyan-300 transition-colors">
              {portfolioData.personalInfo.name}
            </span>
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isCurrent =
                pathname === "/" && activeSection === link.href.replace("/#", "");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                    isCurrent
                      ? "text-cyan-400 dark:text-cyan-300 font-semibold"
                      : "text-slate-600 dark:text-slate-300 hover:text-cyan-400 dark:hover:text-cyan-300 hover:bg-cyan-500/10"
                  }`}
                >
                  {link.label}
                  {isCurrent && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            <Link
              href="/#contact"
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] transform hover:-translate-y-0.5"
            >
              <span>Bog&apos;lanish</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile hamburger & theme toggle */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              aria-label="Menyuni ochish"
              className="p-2.5 rounded-xl bg-slate-900/60 dark:bg-slate-800/60 border border-slate-700/60 text-slate-200 hover:text-cyan-400 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="md:hidden bg-slate-950/95 dark:bg-[#030712]/95 backdrop-blur-xl border-b border-cyan-500/20 px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-cyan-400 hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/20 transition-all"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-3 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 shadow-[0_0_15px_rgba(0,240,255,0.3)]"
            >
              Bog&apos;lanish
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
