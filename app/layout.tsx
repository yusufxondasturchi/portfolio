import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import CustomCursor from "@/components/CustomCursor";
import { portfolioData } from "@/data/portfolio";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#030712",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: `${portfolioData.personalInfo.name} | ${portfolioData.personalInfo.role} Portfoliosi`,
  description: `${portfolioData.personalInfo.name} - ${portfolioData.personalInfo.role} shaxsiy portfoliosi. Node.js, NestJS, PostgreSQL va zamonaviy backend tizimlar to'plami.`,
  keywords: [
    "Dasturchi",
    "Portfolio",
    "Backend Developer",
    "Node.js",
    "NestJS",
    "PostgreSQL",
    "RESTful API",
    "TypeScript",
    "Uzbekistan",
  ],
  authors: [{ name: portfolioData.personalInfo.name }],
  openGraph: {
    title: `${portfolioData.personalInfo.name} | ${portfolioData.personalInfo.role}`,
    description: portfolioData.personalInfo.shortIntro,
    type: "website",
    locale: "uz_UZ",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col bg-[#030712] text-slate-100 antialiased selection:bg-cyan-400 selection:text-slate-950`}
      >
        <ThemeProvider>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
