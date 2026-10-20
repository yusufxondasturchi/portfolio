import React from "react";
import Link from "next/link";
import { Terminal, Send, Mail, Heart, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const { personalInfo } = portfolioData;
  const currentYear = 2026;

  return (
    <footer className="relative bg-slate-950 dark:bg-[#02050c] border-t border-slate-800/80 text-slate-400 py-16 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/60 items-start">
          {/* Brand info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <Link
              href="/#home"
              className="inline-flex items-center space-x-2 text-white font-mono font-bold text-lg"
            >
              <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-400/50 flex items-center justify-center text-cyan-400">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="text-white hover:text-cyan-400 transition-colors">
                {personalInfo.name}
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Zamonaviy veb-texnologiyalar, Next.js, TypeScript va toza arxitektura asosida
              yaratilgan shaxsiy dasturchi portfoliosi.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profili"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 flex items-center justify-center transition-all"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.telegram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram kanali yoki profili"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 flex items-center justify-center transition-all"
              >
                <Send className="w-4 h-4 text-sky-400" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Elektron pochta"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 flex items-center justify-center transition-all"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
              </a>
            </div>
          </div>

          {/* Quick Links (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Tezkor Bo&apos;limlar
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <Link href="/#home" className="hover:text-cyan-400 transition-colors py-1">
                Bosh sahifa
              </Link>
              <Link href="/#about" className="hover:text-cyan-400 transition-colors py-1">
                Men haqimda
              </Link>
              <Link href="/#skills" className="hover:text-cyan-400 transition-colors py-1">
                Ko&apos;nikmalar
              </Link>
              <Link href="/#projects" className="hover:text-cyan-400 transition-colors py-1">
                Loyihalar
              </Link>
              <Link href="/#contact" className="hover:text-cyan-400 transition-colors py-1">
                Bog&apos;lanish
              </Link>
            </div>
          </div>

          {/* Tech Info Card (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Sayt Texnologiyasi
            </h4>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2 text-xs">
              <div className="flex items-center space-x-1.5 text-cyan-400 font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Next.js 16 + Tailwind v4</span>
              </div>
              <p className="text-[11px] text-slate-400">
                TypeScript, Lucide Icons va Framer Motion asosida optimallashgan.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {currentYear} {personalInfo.name}. Barcha huquqlar himoyalangan.</p>
          <p className="flex items-center space-x-1">
            <span>Ishtiyoq bilan yaratilgan</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>(Uzbek Portfolio)</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
