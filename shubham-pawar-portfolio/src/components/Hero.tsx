import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  ArrowRight,
  Briefcase,
  ChevronDown,
  Award,
  Linkedin,
  Mail,
  Github,
  Trophy,
  Sparkles,
  Bot,
  ExternalLink,
  ShieldCheck,
  Zap,
} from 'lucide-react';

interface HeroProps {
  onOpenAI: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAI, onOpenResume }) => {
  const [counts, setCounts] = useState({
    exp: 0,
    issues: 0,
    percentile: 0,
    mentored: 0,
  });

  useEffect(() => {
    const duration = 1800; // ms
    const steps = 60;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setCounts({
        exp: Math.floor(35 * ease),
        issues: Math.floor(700 * ease),
        percentile: parseFloat((99.73 * ease).toFixed(2)),
        mentored: Math.floor(30 * ease),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts({
          exp: 35,
          issues: 700,
          percentile: 99.73,
          mentored: 30,
        });
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Glow ambient backgrounds */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Grid line pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Info Side */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-300 text-xs font-semibold shadow-lg shadow-emerald-500/5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{PERSONAL_INFO.statusBadge}</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-none">
                Shubham <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">Pawar</span>
              </h1>
              <p className="text-lg sm:text-xl font-bold text-slate-200 tracking-tight">
                PGDM – Business Analytics ’26 <span className="text-emerald-400 font-normal">|</span> Ex-SAP Solution Support Engineer
              </p>
            </div>

            {/* Positioning Statement */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-md text-slate-300 text-sm sm:text-base leading-relaxed shadow-xl">
              <p className="font-semibold text-white mb-1 flex items-center gap-2 justify-center lg:justify-start">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Executive Positioning Statement</span>
              </p>
              “Technology professional transitioning into Business Analytics, Strategy & Data-Driven Decision Making.”
            </div>

            {/* Interactive Profile Indicators (Animated Counters) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-all text-center group">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 group-hover:scale-110 transition-transform">
                  {counts.exp}
                  <span className="text-xs text-slate-400 font-medium ml-1">Mos</span>
                </div>
                <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider mt-1">
                  SAP Experience
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-all text-center group">
                <div className="text-2xl sm:text-3xl font-extrabold text-teal-400 group-hover:scale-110 transition-transform">
                  {counts.issues}+
                </div>
                <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider mt-1">
                  Issues Resolved
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-all text-center group">
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 group-hover:scale-110 transition-transform">
                  {counts.percentile}%
                </div>
                <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider mt-1">
                  MHT-CET Rank
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-all text-center group">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-300 group-hover:scale-110 transition-transform">
                  {counts.mentored}+
                </div>
                <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider mt-1">
                  Engineers Mentored
                </div>
              </div>
            </div>

            {/* Interactive Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2 justify-center lg:justify-start">
              <a
                href="#timeline"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/20 transition-all hover:-translate-y-0.5"
              >
                <span>Explore My Journey</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#sap"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-xs sm:text-sm transition-all hover:-translate-y-0.5"
              >
                <Briefcase className="w-4 h-4 text-emerald-400" />
                <span>View Experience</span>
              </a>

              <a
                href="#projects"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-xs sm:text-sm transition-all hover:-translate-y-0.5"
              >
                <Zap className="w-4 h-4 text-amber-400" />
                <span>View Projects</span>
              </a>

              <a
                href="#whats-next"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-teal-500/20 to-emerald-500/20 hover:from-teal-500/30 hover:to-emerald-500/30 text-emerald-300 border border-emerald-500/40 font-semibold text-xs sm:text-sm transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Connect With Me</span>
              </a>
            </div>

            {/* Contact Placeholders & Social Links */}
            <div className="flex items-center gap-4 pt-2 justify-center lg:justify-start text-xs text-slate-400 border-t border-slate-800/80">
              <a
                href="mailto:shubhamspawar15@gmail.com"
                className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Email</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href="https://linkedin.com/in/shubham-pawar"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-emerald-400" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href="https://github.com/shubhampawar"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
              >
                <Github className="w-4 h-4 text-emerald-400" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-700">•</span>
              <button
                onClick={onOpenResume}
                className="flex items-center gap-1 text-emerald-400 font-medium hover:underline"
              >
                <span>CV Summary</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Profile Card / Visual Element */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Outer Glow ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500 blur-xl opacity-30 animate-pulse" />

              <div className="relative rounded-3xl bg-slate-900 border border-slate-800 p-6 shadow-2xl space-y-5 text-left overflow-hidden">
                {/* Header Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center font-black text-xl text-slate-950 shadow-md">
                      SP
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">Shubham Pawar</h3>
                      <p className="text-xs text-emerald-400 font-medium">MDI Gurgaon ’26 | VJTI ’23</p>
                    </div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-800 border border-slate-700 text-amber-400">
                    <Trophy className="w-5 h-5" />
                  </div>
                </div>

                {/* Key Verification Highlights */}
                <div className="space-y-2.5 text-xs text-slate-300">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                    <span className="text-slate-400">Current Education</span>
                    <span className="font-semibold text-emerald-300">PGDM Business Analytics</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                    <span className="text-slate-400">Corporate Background</span>
                    <span className="font-semibold text-slate-200">SAP CallidusCloud (35 Mos)</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                    <span className="text-slate-400">Recognitions</span>
                    <span className="font-semibold text-amber-300">21 SAP Appreciation Awards</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                    <span className="text-slate-400">Sports Achievement</span>
                    <span className="font-semibold text-teal-300">Player of Tournament (Cricket)</span>
                  </div>
                </div>

                {/* Interactive AI Assistant Quick Trigger */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-950/60 to-slate-900 border border-emerald-500/30 text-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-emerald-300 flex items-center gap-1.5">
                      <Bot className="w-4 h-4 text-emerald-400" />
                      Recruiter Assistant
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">Ready</span>
                  </div>
                  <p className="text-slate-400 text-[11px] leading-tight">
                    Want to test Shubham's fit for Strategy, Analytics, or Product roles? Ask our AI trained strictly on his CV.
                  </p>
                  <button
                    onClick={onOpenAI}
                    className="w-full py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Chat with Recruiter Bot</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Down indicator */}
      <a
        href="#timeline"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 p-2 rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-emerald-400 transition-colors animate-bounce"
        aria-label="Scroll Down"
      >
        <ChevronDown className="w-5 h-5" />
      </a>
    </section>
  );
};
