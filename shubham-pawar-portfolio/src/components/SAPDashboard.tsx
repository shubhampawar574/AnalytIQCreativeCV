import React, { useState } from 'react';
import { SAP_METRICS, SAP_PILLARS } from '../data/portfolioData';
import { SAPPillar } from '../types';
import {
  CheckCircle2,
  AlertTriangle,
  Users,
  Award,
  Cpu,
  Presentation,
  Video,
  Mail,
  Wrench,
  ShieldCheck,
  GraduationCap,
  GitFork,
  Play,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Database,
  Globe,
  Clock,
  Terminal,
} from 'lucide-react';

export const SAPDashboard: React.FC = () => {
  const [activePillarId, setActivePillarId] = useState<string>(SAP_PILLARS[0].id);
  const [simStep, setSimStep] = useState<number>(0);
  const [simActive, setSimActive] = useState<boolean>(false);

  const activePillar = SAP_PILLARS.find((p) => p.id === activePillarId) || SAP_PILLARS[0];

  const getMetricIcon = (iconName: string) => {
    switch (iconName) {
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
      case 'AlertTriangle':
        return <AlertTriangle className="w-5 h-5 text-amber-400" />;
      case 'Users':
        return <Users className="w-5 h-5 text-teal-400" />;
      case 'Award':
        return <Award className="w-5 h-5 text-purple-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-blue-400" />;
      case 'Presentation':
        return <Presentation className="w-5 h-5 text-indigo-400" />;
      case 'Video':
        return <Video className="w-5 h-5 text-pink-400" />;
      case 'Mail':
        return <Mail className="w-5 h-5 text-emerald-300" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
    }
  };

  const getPillarIcon = (icon: string) => {
    switch (icon) {
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-emerald-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-amber-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-teal-400" />;
      case 'GitFork':
        return <GitFork className="w-5 h-5 text-purple-400" />;
      default:
        return <Wrench className="w-5 h-5 text-emerald-400" />;
    }
  };

  // Escalation Simulation Workflow
  const simSteps = [
    {
      title: '1. Incident Trigger',
      desc: 'High-severity P1 ticket logged: SAP CallidusCloud Quota calculation mismatch affecting quarter-end commissions.',
      action: 'Acknowledge within 15-min SLA & Pacify Client Administrator',
      status: 'Initial Assessment',
      icon: <AlertTriangle className="w-4 h-4 text-amber-400" />,
    },
    {
      title: '2. Deep Root Cause Isolation',
      desc: 'Executed complex SQL trace; discovered database transaction lock during concurrent territory updates.',
      action: 'Synchronize Database Administrators & Network Ops Teams',
      status: 'Technical Debugging',
      icon: <Database className="w-4 h-4 text-teal-400" />,
    },
    {
      title: '3. In-Meeting Live Resolution',
      desc: 'Initiated live screen-share with client executive team, deployed patch script, and verified data sync.',
      action: 'Validate Results Live with Client & Update Knowledge Base',
      status: 'Client Pacification',
      icon: <ShieldCheck className="w-4 h-4 text-emerald-400" />,
    },
    {
      title: '4. Team Upskilling & Artifact',
      desc: 'Created 1 of 10 wrap-up training videos to prevent similar lockups across team instances.',
      action: 'Awarded SAP Appreciation Recognition',
      status: 'Resolved & Knowledge Shared',
      icon: <Award className="w-4 h-4 text-purple-400" />,
    },
  ];

  return (
    <section id="sap" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
            <Cpu className="w-4 h-4 text-emerald-400" />
            <span>3. The SAP Chapter — Executive Experience Dashboard</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            SAP CallidusCloud <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Engineering Impact</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            <strong className="text-white">Associate Solution Support Engineer</strong> | July 2023 – May 2026 (35 Months) | Hyderabad
          </p>
        </div>

        {/* Impact Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {SAP_METRICS.map((m, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-emerald-500/40 transition-all hover:-translate-y-1 group shadow-xl"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                  {getMetricIcon(m.iconName)}
                </div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  {m.category}
                </span>
              </div>
              <div className="text-3xl font-black text-white group-hover:text-emerald-300 transition-colors">
                {m.value}
                <span className="text-emerald-400 font-extrabold">{m.suffix}</span>
              </div>
              <div className="text-xs font-bold text-slate-200 mt-1">{m.label}</div>
              <p className="text-[11px] text-slate-400 mt-1 line-clamp-2 leading-snug">
                {m.description}
              </p>
            </div>
          ))}
        </div>

        {/* The 4 Experience Pillars */}
        <div className="space-y-8">
          <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-400" />
                <span>Four Pillars of SAP Excellence</span>
              </h3>
              <p className="text-xs text-slate-400">Click a pillar to inspect corresponding CV achievements</p>
            </div>

            {/* Pillar Selector Tabs */}
            <div className="flex bg-slate-900 p-1.5 rounded-2xl border border-slate-800 gap-1 overflow-x-auto max-w-full">
              {SAP_PILLARS.map((pillar) => {
                const isActive = activePillarId === pillar.id;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActivePillarId(pillar.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                      isActive
                        ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    <span>{pillar.number}</span>
                    <span>{pillar.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Pillar Card Display */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-emerald-500/30 backdrop-blur-xl shadow-2xl space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                  {getPillarIcon(activePillar.icon)}
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                    Pillar {activePillar.number}
                  </span>
                  <h4 className="text-2xl font-extrabold text-white">{activePillar.title}</h4>
                  <p className="text-xs text-slate-400 font-medium">{activePillar.subtitle}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {activePillar.metricsHighlighted.map((mh, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-xl bg-slate-950 border border-emerald-500/40 text-emerald-300 text-xs font-bold"
                  >
                    {mh}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed font-medium">
              {activePillar.summary}
            </p>

            {/* Achievement Bullet Points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {activePillar.bullets.map((bullet, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 transition-colors space-y-2 text-xs"
                >
                  <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-300 font-bold flex items-center justify-center text-[10px]">
                    0{idx + 1}
                  </div>
                  <p className="text-slate-200 leading-relaxed font-normal">{bullet}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Case Study Widget: SLA Escalation Debugger */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <Terminal className="w-4 h-4" />
                <span>Interactive Incident Simulation</span>
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                Simulate Shubham’s Critical SAP Escalation Resolution Workflow
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setSimStep(0);
                  setSimActive(true);
                }}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-all"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Run Scenario</span>
              </button>
              <button
                onClick={() => {
                  setSimStep(0);
                  setSimActive(false);
                }}
                className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white text-xs"
                title="Reset"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Stepper Display */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
            {simSteps.map((step, idx) => {
              const isCurrent = simStep === idx && simActive;
              const isPassed = simStep > idx && simActive;

              return (
                <div
                  key={idx}
                  onClick={() => {
                    setSimStep(idx);
                    setSimActive(true);
                  }}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all space-y-2 ${
                    isCurrent
                      ? 'bg-amber-500/10 border-amber-500/60 shadow-lg shadow-amber-500/10'
                      : isPassed
                      ? 'bg-emerald-500/10 border-emerald-500/30'
                      : 'bg-slate-950/60 border-slate-800 opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-400">Step 0{idx + 1}</span>
                    {step.icon}
                  </div>
                  <h4 className="text-xs font-bold text-white leading-tight">{step.title}</h4>
                  <p className="text-[11px] text-slate-300 line-clamp-3 leading-tight">{step.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Active Step Detailed Simulation Box */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs border-b border-slate-800/80 pb-2">
              <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                Current Status: {simSteps[simStep].status}
              </span>
              <span className="text-slate-500 text-[10px]">CV Factual Workflow</span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed">
              <strong className="text-white">Action Executed:</strong> {simSteps[simStep].action}
            </p>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => setSimStep((prev) => Math.max(0, prev - 1))}
                disabled={simStep === 0}
                className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs disabled:opacity-30"
              >
                Previous Step
              </button>
              <button
                onClick={() => setSimStep((prev) => Math.min(simSteps.length - 1, prev + 1))}
                disabled={simStep === simSteps.length - 1}
                className="flex items-center gap-1 px-4 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs disabled:opacity-30"
              >
                <span>Next Action</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
