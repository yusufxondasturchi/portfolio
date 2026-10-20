"use client";

import React, { useState } from "react";
import {
  GraduationCap,
  BookOpen,
  Code2,
  Calendar,
  CheckCircle2,
  Sparkles,
  Award,
} from "lucide-react";
import { portfolioData, TimelineItem } from "@/data/portfolio";

export default function Experience() {
  const { timeline } = portfolioData;
  const [filter, setFilter] = useState<"all" | "education" | "course" | "self-learning" | "project">("all");

  const filteredTimeline =
    filter === "all" ? timeline : timeline.filter((item) => item.type === filter);

  const getTypeIcon = (type: TimelineItem["type"]) => {
    switch (type) {
      case "education":
        return <GraduationCap className="w-5 h-5 text-cyan-400" />;
      case "course":
        return <Award className="w-5 h-5 text-sky-400" />;
      case "self-learning":
        return <BookOpen className="w-5 h-5 text-amber-400" />;
      case "project":
        return <Code2 className="w-5 h-5 text-emerald-400" />;
    }
  };

  const getTypeLabel = (type: TimelineItem["type"]) => {
    switch (type) {
      case "education":
        return "Universitet Ta'limi";
      case "course":
        return "Dasturlash Kursi";
      case "self-learning":
        return "Mustaqil Ta'lim";
      case "project":
        return "Amaliy Tajriba";
    }
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-900/10 dark:bg-black/20">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-950/60 border border-cyan-400/40 text-cyan-400">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Ta&apos;lim &amp; Rivojlanish</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Ta&apos;lim va O&apos;rganish Xronologiyasi
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Dasturlash olamidagi qadamlarim, intensiv kurslar va mustaqil amaliyot bosqichlari
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </div>

        {/* Informative placeholder notice */}
        <div className="mb-10 max-w-2xl mx-auto p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/30 text-xs text-center text-slate-300 flex items-center justify-center space-x-2">
          <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>
            Barcha sanalar va o&apos;quv dargohlari namunaviy kiritilgan. Ularni{" "}
            <code className="text-cyan-300 font-mono">data/portfolio.ts</code> faylidan o&apos;zgartirishingiz mumkin.
          </span>
        </div>

        {/* Timeline Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: "all", label: "Barchasi" },
            { id: "education", label: "Oliy Ta'lim" },
            { id: "course", label: "Kurslar" },
            { id: "self-learning", label: "Mustaqil O'rganish" },
            { id: "project", label: "Loyihalar" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as typeof filter)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                filter === tab.id
                  ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-[0_0_12px_rgba(0,240,255,0.4)]"
                  : "bg-white/60 dark:bg-slate-900/60 text-slate-600 dark:text-slate-300 hover:text-cyan-400 border border-slate-200 dark:border-slate-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative border-l-2 border-cyan-500/30 dark:border-cyan-500/20 ml-4 sm:ml-8 md:ml-32 space-y-12">
          {filteredTimeline.map((item) => (
            <div key={item.id} className="relative pl-6 sm:pl-8 group">
              {/* Timeline Glowing Node */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_12px_#00f0ff] group-hover:scale-110 transition-transform">
                {getTypeIcon(item.type)}
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white/70 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-400/60 shadow-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] transition-all duration-300 space-y-4">
                {/* Header row: Period, Type, Placeholder Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800/80 pb-3">
                  <div className="flex items-center space-x-2 text-cyan-600 dark:text-cyan-400 font-mono text-xs font-bold">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {getTypeLabel(item.type)}
                    </span>
                    {item.isPlaceholder && (
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-500 dark:text-amber-300">
                        PLACEHOLDER
                      </span>
                    )}
                  </div>
                </div>

                {/* Title & Institution */}
                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {item.institution}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Key Highlights / Achievements */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                    Asosiy natijalar va egallangan bilimlar:
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
