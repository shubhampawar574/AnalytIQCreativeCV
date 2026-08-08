import React from 'react';
import { LEADERSHIP_DATA } from '../data/portfolioData';
import { Users, CheckCircle2, Megaphone, Trophy, Sparkles } from 'lucide-react';

interface LeadershipSectionProps {
  onSelectDetail?: (category: string, id: string) => void;
}

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({ onSelectDetail }) => {

  return (
    <section id="leadership" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
            <Users className="w-4 h-4 text-emerald-400" />
            <span>8. Leadership Beyond Job Titles</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Impact Stories & <span className="text-emerald-400">Campus Stewardship</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Leading large-scale operations and public relations at VJTI’s premier national technical and sports festivals.
          </p>
        </div>

        {/* Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LEADERSHIP_DATA.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition-all space-y-6 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                    {item.organization}
                  </span>
                  <h3 className="text-2xl font-extrabold text-white">{item.role}</h3>
                  <p className="text-xs text-slate-400 font-medium">{item.period}</p>
                </div>
                {item.footfallOrScale && (
                  <span className="px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-extrabold">
                    {item.footfallOrScale}
                  </span>
                )}
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-medium">{item.summary}</p>

              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Core Responsibilities
                </span>
                <div className="space-y-2">
                  {item.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                <div className="flex flex-wrap gap-2">
                  {item.impactMetrics.map((im, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-xl bg-slate-950 text-emerald-300 text-xs font-bold border border-emerald-500/20"
                    >
                      {im}
                    </span>
                  ))}
                </div>

                {onSelectDetail && (
                  <button
                    onClick={() => onSelectDetail('leadership', item.id)}
                    className="px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs transition-transform hover:scale-105 shadow-md shadow-emerald-500/20"
                  >
                    Open Sub-Webpage →
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
