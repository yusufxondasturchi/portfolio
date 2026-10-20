"use client";

import React, { useState } from "react";
import {
  FileCode2,
  Palette,
  Braces,
  FileJson,
  Globe,
  Server,
  Database,
  Leaf,
  GitBranch,
  Wrench,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<"all" | "frontend" | "backend" | "tools">("all");
  const { skills } = portfolioData;

  const iconComponents: Record<string, React.ReactNode> = {
    FileCode2: <FileCode2 className="w-5 h-5 text-orange-500" />,
    Palette: <Palette className="w-5 h-5 text-sky-400" />,
    Braces: <Braces className="w-5 h-5 text-yellow-400" />,
    FileJson: <FileJson className="w-5 h-5 text-blue-400" />,
    Globe: <Globe className="w-5 h-5 text-cyan-300" />,
    Server: <Server className="w-5 h-5 text-emerald-400" />,
    Database: <Database className="w-5 h-5 text-sky-400" />,
    Leaf: <Leaf className="w-5 h-5 text-emerald-400" />,
    GitBranch: <GitBranch className="w-5 h-5 text-rose-400" />,
  };

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-16 relative overflow-hidden bg-slate-900/10 dark:bg-black/30">
      {/* Background ambient light */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/60 border border-cyan-400/40 text-cyan-400">
            <Wrench className="w-3.5 h-3.5" />
            <span>Texnologiyalar &amp; Stack</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Mening Ko&apos;nikmalarim
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </div>

        {/* Compact Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-8">
          {[
            { id: "all", label: "Barchasi" },
            { id: "frontend", label: "Frontend" },
            { id: "backend", label: "Backend" },
            { id: "tools", label: "Asboblar & Git" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as typeof activeCategory)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                activeCategory === tab.id
                  ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-[0_0_12px_rgba(0,240,255,0.35)]"
                  : "bg-white/60 dark:bg-slate-900/60 text-slate-600 dark:text-slate-300 hover:text-cyan-400 border border-slate-200 dark:border-slate-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Compact Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="p-3.5 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-cyan-400/70 hover:shadow-[0_0_18px_rgba(0,240,255,0.2)] hover:-translate-y-0.5 transition-all duration-200 group flex items-center justify-between backdrop-blur-sm"
            >
              {/* Icon & Title */}
              <div className="flex items-center space-x-3 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-slate-950 border border-cyan-500/50 group-hover:border-cyan-400 flex items-center justify-center shadow-sm shrink-0 transition-colors">
                  {iconComponents[skill.icon] || <FileCode2 className="w-5 h-5 text-cyan-400" />}
                </div>
                <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base group-hover:text-cyan-400 transition-colors truncate">
                  {skill.name}
                </h3>
              </div>

              {/* Mini Category Badge */}
              <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-cyan-400/90 border border-slate-200 dark:border-slate-700/60 uppercase shrink-0 ml-2">
                {skill.category === "tools" ? "Tools" : skill.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
