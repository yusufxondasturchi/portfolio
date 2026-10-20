"use client";

import React, { useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

function subscribe() {
  return () => {};
}

function getSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-xl bg-slate-800/40 border border-slate-700/50" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Yorug' rejimga o'tish" : "Qorong'u rejimga o'tish"}
      title={theme === "dark" ? "Yorug' rejimga o'tish" : "Qorong'u rejimga o'tish"}
      className="relative p-2.5 rounded-xl bg-slate-900/60 dark:bg-slate-800/60 border border-slate-700/60 hover:border-cyan-400/80 text-cyan-400 hover:text-cyan-300 transition-all duration-200 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] focus:outline-none focus:ring-2 focus:ring-cyan-400"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-cyan-300 transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="w-5 h-5 text-blue-600 transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
}
