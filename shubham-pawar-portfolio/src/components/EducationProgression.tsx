import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { GraduationCap, Award, CheckCircle2, MapPin, Sparkles } from 'lucide-react';

export const EducationProgression: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
            <GraduationCap className="w-4 h-4 text-emerald-400" />
            <span>6. Academic Progression</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Academic Excellence & <span className="text-emerald-400">Continuous Growth</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            From top 0.27% state engineering entrance performance to management education at MDI Gurgaon.
          </p>
        </div>

        {/* Academic Progression Ladder */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EDUCATION_DATA.map((edu, idx) => {
            const isHighlight = edu.status === 'Current';

            return (
              <div
                key={edu.id}
                className={`p-6 rounded-3xl border transition-all space-y-4 relative flex flex-col justify-between ${
                  isHighlight
                    ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-emerald-950/40 border-emerald-500/60 shadow-2xl shadow-emerald-500/10 ring-1 ring-emerald-500/30'
                    : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full border ${
                      isHighlight
                        ? 'bg-emerald-500 text-slate-950 font-bold border-emerald-400'
                        : 'bg-slate-950 text-slate-400 border-slate-800'
                    }`}
                  >
                    {edu.period}
                  </span>
                  <span className="text-xs font-extrabold text-emerald-400">
                    {edu.score}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-extrabold text-white">{edu.degree}</h3>
                  <p className="text-xs font-semibold text-emerald-300">{edu.institution}</p>
                </div>

                {/* Highlights */}
                <div className="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-300 flex-1">
                  {edu.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {isHighlight && (
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold text-center flex items-center justify-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <span>Future-Focused Highlight</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
