"use client";

import React, { useState } from "react";
import {
  Mail,
  Send,
  MapPin,
  Check,
  Copy,
  AlertCircle,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { portfolioData } from "@/data/portfolio";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const { contact } = portfolioData;
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);
  const [copied, setCopied] = useState(false);

  // Copy email to clipboard
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Validation function
  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = "Iltimos, ismingizni to'liq kiriting (kamida 2 belgi)";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = "To'g'ri elektron pochta manzilini kiriting (masalan: misol@gmail.com)";
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errs.subject = "Iltimos, xabar mavzusini kiriting (kamida 3 belgi)";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "Iltimos, batafsil xabar matnini kiriting (kamida 10 belgi)";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate clean response with transparent notice
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background radial electric glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-950/60 border border-cyan-400/40 text-cyan-400">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{contact.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {contact.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            {contact.subtitle}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct links & copy email (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Card */}
            <div className="p-8 rounded-2xl bg-white/70 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                To&apos;g&apos;ridan-to&apos;g&apos;ri aloqa
              </h3>

              {/* Email item with copy button */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  ELEKTRON POCHTA
                </div>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center space-x-2 text-sm font-semibold text-slate-900 dark:text-white truncate">
                    <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="truncate">{contact.email}</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-500 dark:text-cyan-400 border border-cyan-500/30 flex items-center space-x-1.5 transition-all shrink-0"
                    title="Pochtadan nusxa olish"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Nusxa olindi!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Nusxa olish</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Social Channels List */}
              <div className="space-y-3">
                {/* Telegram */}
                <a
                  href={contact.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-400/60 transition-all group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                      <Send className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        Telegram Kanal / Profil
                      </div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                        {contact.telegramUsername}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-cyan-400 group-hover:translate-x-1 transition-transform">
                    Ochish →
                  </span>
                </a>

                {/* GitHub */}
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-400/60 transition-all group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:scale-110 transition-transform">
                      <GithubIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        GitHub Repozitoriyalar
                      </div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                        {contact.github}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-cyan-400 group-hover:translate-x-1 transition-transform">
                    Ochish →
                  </span>
                </a>

                {/* Location info */}
                <div className="flex items-center space-x-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Joylashuv</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      {contact.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-white/70 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Xabar yuborish formasi
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Ma&apos;lumotlaringizni kiriting, tez fursatda javob qaytaraman.
                </p>
              </div>

              {/* Success Notification Banner */}
              {submittedData && (
                <div className="p-5 rounded-xl bg-emerald-950/40 border border-emerald-500/50 space-y-2 text-emerald-200 animate-in fade-in duration-300">
                  <div className="flex items-center space-x-2 text-emerald-400 font-bold">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Xabaringiz muvaffaqiyatli qabul qilindi!</span>
                  </div>
                  <p className="text-xs leading-relaxed text-emerald-300">
                    Rahmat, <strong>{submittedData.name}</strong>! Formaning barcha maydonlari
                    to&apos;g&apos;ri to&apos;ldirildi.
                  </p>
                  <p className="text-[11px] text-emerald-400/80 font-mono pt-1 border-t border-emerald-500/20">
                    ℹ️ <strong>Eslatma:</strong> Sayt frontend rejimida ishlamoqda. Haqiqiy
                    xatlarni pochtangizga yetkazish uchun EmailJS, Resend yoki Next.js Server
                    Action ulashingiz mumkin.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300"
                    >
                      Ismingiz <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Masalan: Sardor Aliyev"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border ${
                        errors.name
                          ? "border-rose-500 focus:ring-rose-500"
                          : "border-slate-300 dark:border-slate-800 focus:border-cyan-400"
                      } text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-1 transition-all`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-400 flex items-center space-x-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300"
                    >
                      Elektron pochta <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="sizning.pochtangiz@gmail.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border ${
                        errors.email
                          ? "border-rose-500 focus:ring-rose-500"
                          : "border-slate-300 dark:border-slate-800 focus:border-cyan-400"
                      } text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-1 transition-all`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-400 flex items-center space-x-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Xabar mavzusi <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="Masalan: Yangi loyiha yoki hamkorlik haqida"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: undefined });
                    }}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border ${
                      errors.subject
                        ? "border-rose-500 focus:ring-rose-500"
                        : "border-slate-300 dark:border-slate-800 focus:border-cyan-400"
                    } text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-1 transition-all`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-rose-400 flex items-center space-x-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message Input */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Xabar matni <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="Assalomu alaykum! Loyihangiz haqida batafsil ma'lumot qoldiring..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border ${
                      errors.message
                        ? "border-rose-500 focus:ring-rose-500"
                        : "border-slate-300 dark:border-slate-800 focus:border-cyan-400"
                    } text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-1 transition-all resize-none`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-400 flex items-center space-x-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.7)] transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      <span>Yuborilmoqda...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Xabarni yuborish</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
