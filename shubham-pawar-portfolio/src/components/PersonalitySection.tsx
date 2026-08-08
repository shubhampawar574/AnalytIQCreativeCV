import React from 'react';
import { Trophy, Dumbbell, Compass, HeartHandshake } from 'lucide-react';

export const PersonalitySection: React.FC = () => {
  return (
    <section id="personality" className="py-20 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
            <Compass className="w-4 h-4 text-emerald-400" />
            <span>12. Beyond Work — Personal Identity</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Athletic Discipline & <span className="text-emerald-400">Mental Endurance</span>
          </h2>
        </div>

        {/* 2 Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Cricket Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-all space-y-4 shadow-xl group">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20 group-hover:scale-110 transition-transform">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-white text-xl">Competitive Cricket</h3>
                <p className="text-xs text-amber-300 font-semibold">SAP Tournament Champion & Player of Tournament</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Cricket has been Shubham's primary arena for testing mental composure, match situation analysis, and team captaincy under pressure.
            </p>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800 text-xs">
              <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300">
                <strong className="text-amber-400 block">Strategic Decision Making</strong>
                <span>Tactical match positioning</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300">
                <strong className="text-emerald-400 block">Resilience under Pressure</strong>
                <span>Defending tight targets</span>
              </div>
            </div>
          </div>

          {/* Fitness Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-all space-y-4 shadow-xl group">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-teal-500/10 text-teal-400 border border-teal-500/20 group-hover:scale-110 transition-transform">
                <Dumbbell className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-white text-xl">Physical Fitness & Conditioning</h3>
                <p className="text-xs text-teal-300 font-semibold">Strength, Stamina & Agility</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Consistent physical conditioning builds the energy reservoir required for high-octane corporate problem solving and rigorous academic pursuits.
            </p>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800 text-xs">
              <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300">
                <strong className="text-teal-400 block">Strength & Stamina</strong>
                <span>Sustained high-energy focus</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300">
                <strong className="text-emerald-400 block">Reflexes & Agility</strong>
                <span>Rapid adaptive responses</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
