import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  TrendingUp,
  Briefcase,
  Layers,
  Mail,
  Linkedin,
  Github,
  ArrowRight,
  Sparkles,
  Bot,
  FileText,
} from 'lucide-react';

interface WhatsNextProps {
  onOpenAI: () => void;
  onOpenResume: () => void;
}

export const WhatsNext: React.FC<WhatsNextProps> = ({ onOpenAI, onOpenResume }) => {
  const directions = [
    {
      title: 'Business Analytics',
      subtitle: 'Data-Driven Decision Making',
      desc: 'Leveraging SQL, Power BI, Python, and business frameworks to convert enterprise operational data into actionable strategic insights.',
      icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
      tag: 'Analytics & Insights',
    },
    {
      title: 'Strategy & Consulting',
      subtitle: 'MECE Frameworks & Problem Solving',
      desc: 'Applying structured consulting methodologies, profitability trees, and commercial due diligence to resolve complex corporate challenges.',
      icon: <Briefcase className="w-6 h-6 text-amber-400" />,
      tag: 'Management Advisory',
    },
    {
      title: 'Technology & Product',
      subtitle: 'Enterprise Platforms & Agile',
      desc: 'Combining 35 months of SAP CallidusCloud engineering depth with product lifecycle management and agile sprint execution.',
      icon: <Layers className="w-6 h-6 text-teal-400" />,
      tag: 'Product & Platforms',
    },
  ];

  return (
    <section id="whats-next" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Core Statement Banner */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-emerald-500/40 text-emerald-300 text-xs font-bold shadow-lg shadow-emerald-500/10">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>13. Strategic Horizon — What's Next?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            “From solving technical problems to <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">solving business problems.”</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Shubham Pawar is actively seeking high-impact roles at the intersection of Business Analytics, Strategy Consulting, and Product Leadership.
          </p>
        </div>

        {/* 3 Career Directions Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {directions.map((d, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-all hover:-translate-y-1.5 space-y-4 shadow-2xl group"
            >
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 group-hover:scale-110 transition-transform">
                  {d.icon}
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-950 text-emerald-400 border border-slate-800">
                  {d.tag}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-extrabold text-white group-hover:text-emerald-300 transition-colors">
                  {d.title}
                </h3>
                <p className="text-xs text-slate-400 font-semibold">{d.subtitle}</p>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>

        {/* Let's Connect CTA Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-emerald-950/80 to-slate-900 border border-emerald-500/40 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="space-y-2 max-w-2xl mx-auto">
            <h3 className="text-3xl font-extrabold text-white">Let’s Connect & Collaborate</h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Open for discussions regarding full-time management, analytics, and strategy opportunities.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:shubhamspawar15@gmail.com"
              className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-xl shadow-emerald-500/20 transition-all hover:scale-105"
            >
              <Mail className="w-4 h-4" />
              <span>shubhamspawar15@gmail.com</span>
            </a>

            <a
              href="https://linkedin.com/in/shubham-pawar"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 font-bold text-xs sm:text-sm transition-all hover:scale-105"
            >
              <Linkedin className="w-4 h-4 text-emerald-400" />
              <span>Connect on LinkedIn</span>
            </a>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-500/40 font-bold text-xs sm:text-sm transition-all hover:scale-105"
            >
              <FileText className="w-4 h-4" />
              <span>Verified CV Summary</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
