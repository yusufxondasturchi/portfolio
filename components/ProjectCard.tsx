"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { Project } from "@/data/portfolio";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group rounded-xl bg-white/70 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-400/60 overflow-hidden shadow-md hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300 flex flex-col justify-between">
      {/* Project Image Preview */}
      <div className="relative w-full h-32 sm:h-36 bg-slate-950 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-500"
        />

        {/* Demo Tag Badge */}
        {project.isDemo && (
          <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[9px] font-mono font-semibold bg-cyan-950/90 border border-cyan-400/50 text-cyan-300 flex items-center space-x-1 shadow-sm">
            <Sparkles className="w-2.5 h-2.5 text-cyan-400" />
            <span>DEMO</span>
          </div>
        )}

        {/* Hover overlay with action quick links */}
        <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2 backdrop-blur-xs">
          <Link
            href={`/projects/${project.slug}`}
            className="px-3 py-1 rounded-lg text-xs font-bold bg-cyan-400 text-slate-950 hover:bg-cyan-300 shadow-md flex items-center space-x-1 transition-all"
          >
            <span>Batafsil</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* Project Info Body */}
      <div className="p-3.5 flex-1 flex flex-col justify-between space-y-2.5">
        <div className="space-y-1">
          <Link href={`/projects/${project.slug}`} className="block group-hover:text-cyan-400">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors line-clamp-1">
              {project.title}
            </h3>
          </Link>

          <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
            {project.shortDesc}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-cyan-300 border border-slate-200 dark:border-slate-700/60"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
          <div className="flex items-center space-x-1.5">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="p-1.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-colors"
              title="GitHub Kodi"
            >
              <GithubIcon className="w-3 h-3" />
            </a>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} Live Demo`}
              className="p-1.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-colors"
              title="Jonli Ko'rish"
            >
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center space-x-1 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-300 transition-all"
          >
            <span>Ko&apos;rish</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
