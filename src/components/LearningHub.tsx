import React, { useState } from 'react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';
import { CertificationCourse } from '../types';
import {
  BookOpen,
  Briefcase,
  TrendingUp,
  LayoutGrid,
  CheckCircle2,
  Sparkles,
  Calculator,
  Layers,
  ArrowRight,
} from 'lucide-react';

export const LearningHub: React.FC = () => {
  const [activeCert, setActiveCert] = useState<CertificationCourse>(CERTIFICATIONS_DATA[0]);

  // Interactive Guesstimate / Strategy Sandbox
  const [guesstimateInput, setGuesstimateInput] = useState<string>('Market size for EV Charging Stations in Metro Cities');
  const [frameworkResult, setFrameworkResult] = useState<string>('');

  const handleRunFramework = () => {
    setFrameworkResult(
      `Structured MECE Breakdown for "${guesstimateInput}":\n` +
      `1. Population & Demographics (Total Urban Drivers)\n` +
      `2. EV Adoption Rate (~5% current penetration rate)\n` +
      `3. Charging Station Density & Fleet Usage Rates\n` +
      `4. Financial Unit Economics (CAPEX per charger + kWh tariff margins)\n` +
      `5. Final Estimated Annual Market Opportunity: ~$120M - $180M.`
    );
  };

  const getCertIcon = (icon: string) => {
    switch (icon) {
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-emerald-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-amber-400" />;
      case 'LayoutGrid':
        return <LayoutGrid className="w-5 h-5 text-teal-400" />;
      default:
        return <BookOpen className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="learning-hub" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
            <BookOpen className="w-4 h-4 text-emerald-400" />
            <span>9. Certification & Learning Hub</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Consulting, Strategy & <span className="text-emerald-400">Product Mastery</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Structured business education completed alongside PGDM at MDI Gurgaon.
          </p>
        </div>

        {/* Certification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS_DATA.map((cert) => {
            const isSelected = activeCert.id === cert.id;

            return (
              <div
                key={cert.id}
                onClick={() => setActiveCert(cert)}
                className={`p-6 rounded-3xl border transition-all cursor-pointer space-y-4 ${
                  isSelected
                    ? 'bg-slate-900 border-emerald-500/60 shadow-2xl shadow-emerald-500/10 scale-[1.01]'
                    : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-slate-950 border border-slate-800">
                    {getCertIcon(cert.icon)}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-white text-base">{cert.title}</h3>
                    <p className="text-xs text-emerald-400 font-medium">{cert.provider}</p>
                  </div>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-slate-800 text-xs text-slate-300">
                  {cert.topics.map((tp, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{tp}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-xs font-bold text-emerald-400 flex items-center justify-between">
                  <span>Explore Frameworks</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Strategy Framework Sandbox */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-emerald-500/30 space-y-6 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
                <Calculator className="w-4 h-4" />
                <span>Strategy & Consulting Sandbox</span>
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                Test a Consulting Framework or Guesstimate Structure
              </h3>
            </div>
            <span className="text-xs text-slate-400 font-medium">MECE & Market Entry Tool</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-300 block">
                Select or Enter Strategy Problem Prompt:
              </label>
              <input
                type="text"
                value={guesstimateInput}
                onChange={(e) => setGuesstimateInput(e.target.value)}
                className="w-full p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-emerald-500"
              />
              <button
                onClick={handleRunFramework}
                className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Apply Consulting MECE Framework</span>
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
              <span className="font-bold text-emerald-400 block">Framework Analysis Output:</span>
              {frameworkResult ? (
                <pre className="text-slate-300 font-sans whitespace-pre-wrap text-xs leading-relaxed">
                  {frameworkResult}
                </pre>
              ) : (
                <p className="text-slate-500 text-xs">Click 'Apply Consulting MECE Framework' to simulate Shubham’s structured problem-solving approach.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
