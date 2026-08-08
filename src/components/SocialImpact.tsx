import React from 'react';
import { SOCIAL_SERVICE_STEPS } from '../data/portfolioData';
import { Heart, ArrowRight, ShieldCheck, Users, Building2 } from 'lucide-react';

export const SocialImpact: React.FC = () => {
  return (
    <section id="social-service" className="py-20 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-teal-500/30 text-teal-300 text-xs font-semibold">
            <Heart className="w-4 h-4 text-rose-400" />
            <span>Social Impact & Community Service</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Purpose-Driven Action & <span className="text-teal-400">Social Welfare</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Sincere community engagement assisting marginalized populations with structured procurement and distribution.
          </p>
        </div>

        {/* 4 Step Workflow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SOCIAL_SERVICE_STEPS.map((stepItem, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2 relative"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="w-6 h-6 rounded-lg bg-teal-500/10 text-teal-300 font-bold flex items-center justify-center text-[11px]">
                  0{idx + 1}
                </span>
                <span className="text-slate-500 text-[10px]">Pillar {idx + 1}</span>
              </div>
              <h3 className="font-extrabold text-white text-sm">{stepItem.step}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{stepItem.detail}</p>
            </div>
          ))}
        </div>

        {/* Impact Beneficiaries Pill Row */}
        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 text-center space-y-3">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
            Core Welfare Initiatives Supported
          </span>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-semibold text-slate-200 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-teal-400" />
              <span>Old Age Homes Support</span>
            </span>
            <span className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-semibold text-slate-200 flex items-center gap-2">
              <Heart className="w-4 h-4 text-rose-400" />
              <span>Leprosy Patient Relief</span>
            </span>
            <span className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-semibold text-slate-200 flex items-center gap-2">
              <Users className="w-4 h-4 text-amber-400" />
              <span>Balik Ashram Community Care</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
