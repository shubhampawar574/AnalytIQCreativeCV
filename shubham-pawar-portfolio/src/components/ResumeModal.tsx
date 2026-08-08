import React from 'react';
import { PERSONAL_INFO, TIMELINE_DATA, SAP_METRICS, ACHIEVEMENTS_DATA, PROJECTS_DATA, EDUCATION_DATA, SKILL_CATEGORIES } from '../data/portfolioData';
import { X, Printer, Download, Mail, Linkedin, MapPin, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl relative overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div>
            <h3 className="text-xl font-extrabold text-white">Verified CV Executive Summary</h3>
            <p className="text-xs text-emerald-400 font-medium">Shubham Pawar — PGDM Business Analytics ’26 | Ex-SAP Support Eng</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="flex-1 p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-200 text-xs leading-relaxed font-sans scrollbar-thin scrollbar-thumb-slate-800">
          {/* Header Info */}
          <div className="border-b border-slate-800 pb-4 space-y-2">
            <h1 className="text-2xl font-black text-white">{PERSONAL_INFO.name}</h1>
            <p className="font-bold text-emerald-400">{PERSONAL_INFO.title}</p>
            <div className="flex flex-wrap gap-4 text-slate-400 text-[11px]">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {PERSONAL_INFO.location}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" />
                {PERSONAL_INFO.email}
              </span>
              <span className="flex items-center gap-1">
                <Linkedin className="w-3.5 h-3.5" />
                {PERSONAL_INFO.linkedin}
              </span>
            </div>
            <p className="text-slate-300 italic pt-1">{PERSONAL_INFO.tagline}</p>
          </div>

          {/* Core Metrics */}
          <div>
            <h4 className="font-extrabold uppercase text-emerald-400 tracking-wider mb-2">Core Highlights</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="font-black text-white text-base block">35 Months</span>
                <span className="text-[10px] text-slate-400">SAP Experience</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="font-black text-white text-base block">700+ Issues</span>
                <span className="text-[10px] text-slate-400">Resolved within SLA</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="font-black text-white text-base block">99.73 %ile</span>
                <span className="text-[10px] text-slate-400">MHT-CET Rank</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="font-black text-white text-base block">21 Awards</span>
                <span className="text-[10px] text-slate-400">SAP Recognitions</span>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h4 className="font-extrabold uppercase text-emerald-400 tracking-wider mb-2">Work Experience</h4>
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                <div className="flex justify-between font-bold text-white">
                  <span>Associate Solution Support Engineer — SAP CallidusCloud</span>
                  <span className="text-emerald-400">July 2023 – May 2026 | Hyderabad</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-300 text-[11px]">
                  <li>Resolved 700+ complex tickets across SAP Territory, Quota, and Business Objects within SLA.</li>
                  <li>Troubleshot 100+ critical production escalations with live in-meeting customer resolutions.</li>
                  <li>Mentored 30+ new support engineers; authored 10 video guides and 5 technical newsletters.</li>
                  <li>Evaluated 10+ beta product features; awarded 21 formal Appreciation Awards.</li>
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                <div className="flex justify-between font-bold text-white">
                  <span>Salesforce Technology Intern — Fiserv India</span>
                  <span className="text-emerald-400">2022</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-300 text-[11px]">
                  <li>Completed Salesforce Trailhead learning; built no-code applications & custom lead dashboards.</li>
                  <li>Configured lead-generation tracking mechanisms for sales pipeline oversight.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h4 className="font-extrabold uppercase text-emerald-400 tracking-wider mb-2">Education</h4>
            <div className="space-y-2">
              {EDUCATION_DATA.map((e) => (
                <div key={e.id} className="flex justify-between p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                  <div>
                    <span className="font-bold text-white">{e.degree}</span> — <span className="text-slate-300">{e.institution}</span>
                  </div>
                  <div className="text-right font-bold text-emerald-400">
                    <span>{e.score}</span> | <span className="text-slate-400 font-normal">{e.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h4 className="font-extrabold uppercase text-emerald-400 tracking-wider mb-2">Competitive Achievements</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {ACHIEVEMENTS_DATA.map((a) => (
                <div key={a.id} className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="font-bold text-amber-300 block">{a.title} ({a.metric})</span>
                  <span className="text-slate-400 text-[11px]">{a.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
