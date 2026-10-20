"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Send,
  MapPin,
  Sparkles,
  Code2,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const { personalInfo } = portfolioData;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Animated typing effect
  useEffect(() => {
    const currentFullRole = personalInfo.roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentFullRole.length) {
          setDisplayedText(currentFullRole.slice(0, displayedText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentFullRole.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, personalInfo.roles]);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Background ambient electric glow spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/15 dark:bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-blue-600/10 dark:bg-blue-600/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Details & Bio */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Status & Location Badges */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-cyan-950/50 dark:bg-cyan-950/60 border border-cyan-400/40 text-cyan-400 dark:text-cyan-300 shadow-[0_0_12px_rgba(0,240,255,0.2)]">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>{personalInfo.status}</span>
              </span>

              <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-900/40 dark:bg-slate-800/40 border border-slate-700/60 text-slate-700 dark:text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personalInfo.location}</span>
              </span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold">
                Assalomu alaykum, men
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                <span className="block">{personalInfo.name}</span>
              </h1>
            </div>

            {/* Animated Typing Role */}
            <div className="flex items-center justify-center lg:justify-start space-x-2 text-xl sm:text-2xl lg:text-3xl font-bold">
              <span className="text-slate-600 dark:text-slate-400">Kasb:</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 font-mono">
                {displayedText}
                <span className="inline-block w-0.5 h-6 sm:h-7 ml-1 bg-cyan-400 animate-pulse align-middle" />
              </span>
            </div>

            {/* Introduction paragraph */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {personalInfo.shortIntro}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="#projects"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.7)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Loyihalarimni ko&apos;rish</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-slate-900 dark:text-slate-100 bg-slate-900/10 dark:bg-slate-900/70 border border-slate-700/60 hover:border-cyan-400 text-slate-800 dark:text-slate-200 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4 text-cyan-400" />
                <span>Bog&apos;lanish</span>
              </Link>
            </div>

            {/* Social Links & Highlights */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800/80">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-600 dark:text-slate-400">
                Ijtimoiy tarmoqlar:
              </span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-900/10 dark:bg-slate-800/50 hover:bg-cyan-500/15 border border-slate-700/40 hover:border-cyan-400/60 text-slate-700 dark:text-slate-200 hover:text-cyan-400 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-900/10 dark:bg-slate-800/50 hover:bg-cyan-500/15 border border-slate-700/40 hover:border-cyan-400/60 text-slate-700 dark:text-slate-200 hover:text-cyan-400 transition-all"
              >
                <Send className="w-4 h-4 text-sky-400" />
                <span>Telegram</span>
              </a>
            </div>
          </div>

          {/* Right Column: Avatar graphic with electric neon aura */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Outer pulsing electric ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-400/30 to-blue-600/30 blur-2xl animate-pulse-glow" />

              {/* Decorative Tech Corners */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-cyan-400 rounded-tl-xl" />
              <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-cyan-400 rounded-tr-xl" />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-cyan-400 rounded-bl-xl" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-cyan-400 rounded-br-xl" />

              {/* Avatar container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-cyan-400/40 bg-slate-950/90 shadow-[0_0_40px_rgba(0,240,255,0.25)] group hover:border-cyan-400 transition-all duration-500">
                <Image
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  fill
                  priority
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />

                {/* Floating Tech Chips */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-md p-3 rounded-xl border border-cyan-500/30 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Code2 className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-mono text-slate-200">
                      Full-Stack Dev
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 text-cyan-400 text-xs font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Next.js &amp; TS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
