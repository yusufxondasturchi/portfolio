import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  Calendar,
  User,
  Sparkles,
  Layers,
  Lightbulb,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { portfolioData } from "@/data/portfolio";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const instant = false;

export function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = portfolioData.projects.find((p) => p.slug === slug);
  if (!project) return { title: "Loyiha topilmadi" };

  return {
    title: `${project.title} | ${portfolioData.personalInfo.name}`,
    description: project.shortDesc,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = portfolioData.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Find next and previous projects for easy pagination
  const currentIndex = portfolioData.projects.findIndex((p) => p.slug === slug);
  const prevProject =
    currentIndex > 0 ? portfolioData.projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < portfolioData.projects.length - 1
      ? portfolioData.projects[currentIndex + 1]
      : null;

  return (
    <div className="min-h-screen flex flex-col bg-[#030712] text-slate-100 bg-grid-pattern">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <div className="mb-8">
            <Link
              href="/#projects"
              className="inline-flex items-center space-x-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors p-2 rounded-lg hover:bg-cyan-950/40"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Barcha loyihalarga qaytish</span>
            </Link>
          </div>

          {/* Project Header Info */}
          <div className="space-y-4 mb-8">
            <div className="flex flex-wrap items-center gap-3">
              {project.isDemo && (
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-950 border border-cyan-400/50 text-cyan-300">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>DEMO LOYIHA</span>
                </span>
              )}
              {project.year && (
                <span className="inline-flex items-center space-x-1.5 text-xs text-slate-400">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{project.year}</span>
                </span>
              )}
              {project.role && (
                <span className="inline-flex items-center space-x-1.5 text-xs text-slate-400">
                  <User className="w-3.5 h-3.5" />
                  <span>{project.role}</span>
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {project.title}
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed">
              {project.shortDesc}
            </p>
          </div>

          {/* Large Project Image Preview */}
          <div className="relative w-full h-72 sm:h-96 md:h-[460px] rounded-3xl overflow-hidden border-2 border-cyan-500/30 shadow-[0_0_40px_rgba(0,240,255,0.2)] mb-12 bg-slate-950 group">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Action Buttons: Live Demo and GitHub */}
          <div className="flex flex-wrap items-center gap-4 p-6 rounded-2xl bg-slate-900/80 border border-slate-800 mb-12 shadow-lg">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all"
            >
              <span>Jonli Ko&apos;rish (Demo)</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-cyan-400/60 transition-all"
            >
              <GithubIcon className="w-4 h-4 text-cyan-400" />
              <span>GitHub Kodini Ko&apos;rish (Placeholder)</span>
            </a>

            <div className="w-full sm:w-auto ml-auto text-xs font-mono text-slate-400 pt-2 sm:pt-0">
              * Havolalarni <code className="text-cyan-300">data/portfolio.ts</code> orqali o&apos;zgartirishingiz mumkin.
            </div>
          </div>

          {/* Content Grid: Description & Key Features */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            {/* Left Column: Full Description & Challenges (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
                <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                  <Layers className="w-5 h-5 text-cyan-400" />
                  <span>Loyiha Haqida Batafsil</span>
                </h3>
                <p className="text-slate-300 leading-relaxed text-base">
                  {project.fullDesc}
                </p>
              </div>

              {project.challenges && (
                <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                  <h3 className="text-lg font-bold text-white flex items-center space-x-2 text-cyan-300">
                    <Lightbulb className="w-5 h-5 text-amber-400" />
                    <span>Yechilgan Qiyinchiliklar va Amaliy Tajriba</span>
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm">
                    {project.challenges}
                  </p>
                </div>
              )}
            </div>

            {/* Right Column: Key Features & Tech Stack (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Key Features List */}
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider text-cyan-400">
                  Asosiy Imkoniyatlar
                </h3>
                <ul className="space-y-3">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used */}
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider text-cyan-400">
                  Ishlatilgan Texnologiyalar
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-slate-800 text-cyan-300 border border-cyan-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Pagination Navigation: Prev / Next */}
          <div className="pt-8 border-t border-slate-800 flex items-center justify-between">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group flex flex-col items-start space-y-1 p-3 rounded-xl hover:bg-slate-900 transition-colors"
              >
                <span className="text-xs text-slate-500 font-mono">← Oldingi loyiha</span>
                <span className="text-sm font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">
                  {prevProject.title}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group flex flex-col items-end space-y-1 p-3 rounded-xl hover:bg-slate-900 transition-colors text-right"
              >
                <span className="text-xs text-slate-500 font-mono">Keyingi loyiha →</span>
                <span className="text-sm font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">
                  {nextProject.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
