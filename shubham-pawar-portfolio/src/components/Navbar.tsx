import React, { useState, useEffect } from 'react';
import { Sparkles, FileText, Bot, Menu, X, Trophy, Briefcase, GraduationCap, ChevronRight, ArrowLeft, Target, Award } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenAI: () => void;
  activeSection: string;
  xp?: number;
  level?: number;
  levelTitle?: string;
  onOpenQuests?: () => void;
  isSubPage?: boolean;
  onBackToOverview?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenResume,
  onOpenAI,
  activeSection,
  xp = 150,
  level = 1,
  levelTitle = 'Novice Recruiter',
  onOpenQuests,
  isSubPage = false,
  onBackToOverview,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#hero' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'SAP Experience', href: '#sap' },
    { name: 'Capability Map', href: '#capability' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Playbook', href: '#cricket-playbook' },
    { name: 'Toolkit', href: '#toolkit' },
    { name: 'What\'s Next', href: '#whats-next' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-emerald-500/20 shadow-lg shadow-black/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Sub-Page Back Button */}
        {isSubPage ? (
          <button
            onClick={onBackToOverview}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-emerald-500/40 text-emerald-300 hover:text-white hover:bg-slate-800 transition-all font-extrabold text-xs group"
          >
            <ArrowLeft className="w-4 h-4 text-emerald-400 group-hover:-translate-x-1 transition-transform" />
            <span>← Back to Full Portfolio</span>
          </button>
        ) : (
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 p-0.5 shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-bold text-emerald-400 text-lg">
                SP
              </div>
            </div>
            <div>
              <span className="text-base font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                Shubham Pawar
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </span>
              <span className="text-xs text-slate-400 block -mt-0.5 font-medium">
                PGDM ’26 | Ex-SAP Support Eng
              </span>
            </div>
          </a>
        )}

        {/* Desktop Nav Links (hidden on subpage or replaced by breadcrumb) */}
        {!isSubPage && (
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>
        )}

        {/* Gamification Level & XP HUD Badge + Action Buttons */}
        <div className="flex items-center gap-2.5">
          {/* Recruiter Quests & Level HUD */}
          {onOpenQuests && (
            <button
              onClick={onOpenQuests}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500/20 via-slate-900 to-emerald-500/20 border border-amber-500/40 text-amber-300 hover:border-amber-400 transition-all text-xs font-bold shadow-md shadow-amber-500/10 group"
              title="Click to view Recruiter Quests & Gamified Challenges"
            >
              <Trophy className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
              <div className="hidden sm:flex flex-col text-left">
                <span className="text-[10px] text-amber-300 font-black tracking-wider leading-none">
                  LVL {level}: {levelTitle}
                </span>
                <span className="text-[9px] text-slate-300 font-medium leading-tight">
                  {xp} XP Earned
                </span>
              </div>
              <span className="sm:hidden text-xs font-black">{xp} XP</span>
            </button>
          )}

          <button
            onClick={onOpenAI}
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-emerald-500/10 to-teal-500/10 hover:from-emerald-500/20 hover:to-teal-500/20 text-emerald-300 border border-emerald-500/30 transition-all hover:scale-105"
          >
            <Bot className="w-4 h-4 text-emerald-400" />
            <span>Ask AI</span>
          </button>

          <button
            onClick={onOpenResume}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95"
          >
            <FileText className="w-4 h-4" />
            <span>CV Summary</span>
          </button>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-1">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-4 py-5 shadow-2xl space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3.5 py-2 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-900 border border-slate-800/50"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-2 pt-1">
            {onOpenQuests && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuests();
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500/20 to-emerald-500/20 text-amber-300 border border-amber-500/40"
              >
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>Recruiter Quests & Challenges ({xp} XP)</span>
              </button>
            )}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAI();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-semibold bg-slate-900 text-emerald-400 border border-emerald-500/30"
            >
              <Bot className="w-4 h-4" />
              <span>Ask Recruiter AI Assistant</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-bold bg-emerald-500 text-slate-950"
            >
              <FileText className="w-4 h-4" />
              <span>View Verified CV Summary</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

