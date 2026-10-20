"use client";

import React from "react";
import {
  Code2,
  Smartphone,
  Zap,
  TrendingUp,
  User,
  GraduationCap,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function About() {
  const { about } = portfolioData;

  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-5 h-5 text-cyan-400" />,
    Smartphone: <Smartphone className="w-5 h-5 text-sky-400" />,
    Zap: <Zap className="w-5 h-5 text-amber-400" />,
    TrendingUp: <TrendingUp className="w-5 h-5 text-emerald-400" />,
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-950/60 border border-cyan-400/40 text-cyan-400">
            <User className="w-3.5 h-3.5" />
            <span>{about.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {about.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Story & Learning Journey (Left 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur-sm space-y-5">
              <div className="flex items-center space-x-3 text-cyan-600 dark:text-cyan-400 font-semibold text-lg border-b border-slate-200 dark:border-slate-800 pb-4">
                <GraduationCap className="w-6 h-6" />
                <span>Mening maqsadim va o&apos;rganish yo&apos;lim</span>
              </div>

              {about.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="text-slate-600 dark:text-slate-300 leading-relaxed text-base"
                >
                  {p}
                </p>
              ))}

              {/* Editable Placeholder Note */}
              <div className="mt-4 p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 text-xs font-mono text-cyan-300 flex items-start space-x-3">
                <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">Eslatma (Tahrirlash oson):</span> Ushbu
                  matnlar, universitet va o&apos;quv markazlari nomlarini{" "}
                  <code className="text-white bg-cyan-950 px-1 py-0.5 rounded border border-cyan-500/40">
                    data/portfolio.ts
                  </code>{" "}
                  faylidan o&apos;zingizga moslab osongina o&apos;zgartirishingiz mumkin.
                </div>
              </div>
            </div>

            {/* Quick Principles / Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {about.principles.map((principle, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white/50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-950/60 dark:bg-slate-800 border border-cyan-500/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    {iconMap[principle.icon] || <Code2 className="w-5 h-5 text-cyan-400" />}
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1.5">
                    {principle.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {principle.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats & Key Highlights (Right 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {about.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/40 to-slate-900/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-cyan-400/60 transition-all duration-300 text-center space-y-2 group"
                >
                  <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:scale-105 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {stat.hint}
                  </div>
                </div>
              ))}
            </div>

            {/* Current Focus Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900/50 to-blue-950/40 border border-cyan-500/30 p-6 space-y-4">
              <div className="flex items-center space-x-2 text-cyan-400 text-sm font-bold">
                <BookOpen className="w-4 h-4" />
                <span>Hozirgi asosiy yo&apos;nalish</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Full-Stack arxitekturani mustahkamlash: Next.js 15+ App Router,
                server komponentlari, REST API va PostgreSQL ma&apos;lumotlar bazasi
                bilan ishlashni yangi amaliy loyihalarda chuqurlashtirmoqdaman.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {["Next.js App Router", "TypeScript", "PostgreSQL", "Prisma"].map((item) => (
                  <span
                    key={item}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-cyan-950/80 border border-cyan-400/40 text-cyan-300"
                  >
                    #{item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
