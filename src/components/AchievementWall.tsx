import React from 'react';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';
import { Trophy, Award, CheckCircle2, Sparkles, Star } from 'lucide-react';
import confetti from 'canvas-confetti';

interface AchievementWallProps {
  onSelectDetail?: (category: string, id: string) => void;
}

export const AchievementWall: React.FC<AchievementWallProps> = ({ onSelectDetail }) => {
  const triggerConfetti = (id: string) => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#10b981', '#f59e0b', '#3b82f6', '#14b8a6'],
    });
    if (onSelectDetail) {
      onSelectDetail('achievement', id);
    }
  };


  return (
    <section id="achievements" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>7. Achievement Wall — Proof of Performance</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Competitive Edge & <span className="text-amber-400">Formal Recognitions</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Demonstrated high-aptitude performance across competitive exams, corporate engineering awards, and sports championships.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS_DATA.map((ach) => (
            <div
              key={ach.id}
              onClick={() => triggerConfetti(ach.id)}
              className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-all hover:-translate-y-1 cursor-pointer space-y-4 shadow-xl group relative overflow-hidden"
            >
              {/* Top Row */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30">
                  {ach.category}
                </span>
                {ach.highlightBadge && (
                  <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-md bg-emerald-500 text-slate-950 flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    <span>{ach.highlightBadge}</span>
                  </span>
                )}
              </div>

              {/* Metric Callout */}
              <div className="space-y-1">
                <div className="text-3xl font-black text-white group-hover:text-amber-300 transition-colors">
                  {ach.metric}
                </div>
                <h3 className="text-lg font-extrabold text-slate-100">{ach.title}</h3>
                <p className="text-xs font-semibold text-emerald-400">{ach.subtitle}</p>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">{ach.description}</p>

              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800/80 text-[11px] font-medium text-slate-400 flex items-center justify-between">
                <span>Context: {ach.context}</span>
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
