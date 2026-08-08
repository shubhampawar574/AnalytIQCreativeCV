import React from 'react';
import { ArrowUp, Heart, Linkedin, Mail, Github, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-400 text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-900">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center font-bold text-emerald-400">
              SP
            </div>
            <div>
              <span className="font-extrabold text-white text-sm block">Shubham Pawar</span>
              <span className="text-[11px] text-slate-500">PGDM Business Analytics ’26 | Ex-SAP Solution Support Engineer</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <a href="mailto:shubhamspawar15@gmail.com" className="hover:text-emerald-400 transition-colors">
              <Mail className="w-4 h-4" />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://github.com/shubhampawar" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Shubham Pawar. Single Source of Truth: Verified CV Credentials.</p>
          <p className="flex items-center gap-1">
            <span>Built with React 19, Tailwind CSS & Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
