import React, { useState } from 'react';
import {
  Trophy,
  Zap,
  Target,
  Flame,
  Shield,
  Award,
  Sparkles,
  Compass,
  ArrowRight,
  ChevronRight,
  TrendingUp,
  Brain,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface CricketInsightSkill {
  id: string;
  skillName: string;
  category: string;
  matchScenario: string;
  businessTranslation: string;
  cvEvidence: string;
  keyMetric: string;
  icon: React.ReactNode;
}

export const CricketPlaybook: React.FC = () => {
  const [selectedSkillId, setSelectedSkillId] = useState<string>('strategic-decision');

  const triggerMatchVictory = () => {
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.5 },
      colors: ['#38bdf8', '#10b981', '#f59e0b', '#fbbf24'],
    });
  };

  const cricketSkills: CricketInsightSkill[] = [
    {
      id: 'strategic-decision',
      skillName: 'Strategic Decision Making',
      category: 'Match Tactical Planning',
      matchScenario:
        'Analyzing pitch conditions, opposition strengths, and boundary dimensions in real-time to adjust bowling rotations and field placements under tight over-rate limits.',
      businessTranslation:
        'Translating dynamic situational inputs into clear, structured action plans during critical client escalations and complex technical issue diagnoses.',
      cvEvidence:
        'Troubleshot 100+ critical production escalations live during client meetings and evaluated 10+ pre-release product features at SAP CallidusCloud.',
      keyMetric: '100+ Live Escalations Resolved',
      icon: <Brain className="w-5 h-5 text-amber-400" />,
    },
    {
      id: 'resilience',
      skillName: 'Resilience',
      category: 'Comeback Mindset',
      matchScenario:
        'Maintaining unshakeable mental composure and focus after conceding early boundaries or losing quick wickets, refocusing the squad on the long game plan.',
      businessTranslation:
        'Persisting through long-duration multi-day technical debugging and demanding competitive national selection benchmarks without compromising precision.',
      cvEvidence:
        'Cracked national competitive exams (99.73%ile MHT-CET, SSC CGL Tier 2 top 1.3L, NABARD Grade A Phase 1 top 1,600) alongside full-time work and academics.',
      keyMetric: '99.73 Percentile Entrance Rank',
      icon: <Flame className="w-5 h-5 text-emerald-400" />,
    },
    {
      id: 'pressure-handling',
      skillName: 'Pressure Handling',
      category: 'High-Stakes Execution',
      matchScenario:
        'Delivering clutch bowling overs and calculated boundary hits in tight death overs when the required run rate spikes and stadium pressure peaks.',
      businessTranslation:
        'Managing high-severity enterprise production outages with calm, authoritative communication under strict Service Level Agreements (SLAs).',
      cvEvidence:
        'Resolved 700+ client tickets across SAP Territory & Quota modules with 21 formal SAP Appreciation Awards for high-stress reliability.',
      keyMetric: '700+ Issues & 21 Awards',
      icon: <Zap className="w-5 h-5 text-amber-300" />,
    },
    {
      id: 'risk-assessment',
      skillName: 'Risk Assessment',
      category: 'Calculated Strategy',
      matchScenario:
        'Calculating high-risk vs high-reward plays, such as taking calculated field risks or targeting weak opposition bowlers without risking match control.',
      businessTranslation:
        'Isolating multi-layer database and network anomalies to deploy hotfixes without regressing core customer production state.',
      cvEvidence:
        'Engineered 2-stage hybrid NLP model evaluated via ROUGE metrics; conducted root cause analysis across complex SAP database schemas.',
      keyMetric: 'Zero Production Regressions',
      icon: <Shield className="w-5 h-5 text-teal-400" />,
    },
    {
      id: 'team-leadership',
      skillName: 'Team Captaincy & Mentorship',
      category: 'People & Culture',
      matchScenario:
        'Fostering team cohesion, building psychological safety, and rallying squad members behind a unified match-winning strategy.',
      businessTranslation:
        'Onboarding new engineers, creating reusable learning repositories, and elevating overall team performance through active knowledge sharing.',
      cvEvidence:
        'Mentored 30+ new support engineers, authored 10 video guides and 5 technical newsletters, and led PR for Technovanza (75,000+ footfall).',
      keyMetric: '30+ Engineers Mentored',
      icon: <Trophy className="w-5 h-5 text-amber-400" />,
    },
    {
      id: 'resource-allocation',
      skillName: 'Tactical Resource Allocation',
      category: 'Operational Optimization',
      matchScenario:
        'Optimizing bowler spell allocations and fielder positioning based on batsman weaknesses and match overs remaining.',
      businessTranslation:
        'Synchronizing cross-functional Database Administrators, Network Engineers, and Cloud Ops during multi-team incident management.',
      cvEvidence:
        'Coordinated cross-functional incident taskforces at SAP and managed sports inventory & crowd safety for VJTI Enthusia.',
      keyMetric: 'Cross-Functional Sync',
      icon: <Target className="w-5 h-5 text-emerald-300" />,
    },
  ];

  const activeSkill =
    cricketSkills.find((s) => s.id === selectedSkillId) || cricketSkills[0];

  return (
    <section id="cricket-playbook" className="py-24 bg-slate-950 relative border-t border-slate-900 overflow-hidden">
      {/* Subtle pitch texture & stadium ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(#064e3b_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-amber-500/40 text-amber-300 text-xs font-semibold shadow-lg shadow-amber-500/10">
            <Trophy className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>10. Cricket Insights — High-Performance Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Pitch Discipline <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-emerald-300 to-teal-200">Converts to Corporate Mastery</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Connecting match-winning athletic captaincy directly with transferable executive capabilities: Strategic Decision Making, Resilience, Pressure Handling, and Risk Assessment.
          </p>
        </div>

        {/* Executive Achievement Banner (Cricket Insights Showcase) */}
        <div
          onClick={triggerMatchVictory}
          className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-950 via-emerald-950 to-slate-950 border border-amber-500/40 shadow-2xl space-y-6 cursor-pointer group hover:border-amber-400 transition-all relative overflow-hidden"
        >
          {/* Subtle leather seam stitching visual pattern overlay */}
          <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full border-4 border-dashed border-red-500/20 pointer-events-none opacity-40 group-hover:rotate-45 transition-transform duration-700" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-emerald-900/60 pb-6">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 flex items-center justify-center text-slate-950 shadow-xl shadow-amber-500/20 group-hover:scale-105 transition-transform shrink-0">
                <Trophy className="w-9 h-9 sm:w-10 sm:h-10 text-slate-950" />
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-500/40">
                    MVP & Championship Title
                  </span>
                  <span className="text-[10px] text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-900/40 border border-emerald-800">
                    SAP Corporate League
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Player of the Tournament & Champion Captain
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                  Led SAP’s team to overall victory through tactical overs management, high-pressure match finishes, and team unity under stadium pressure.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="px-4 py-3 rounded-2xl bg-slate-950/90 border border-amber-500/30 text-center">
                <span className="text-[10px] text-amber-300 font-extrabold uppercase block tracking-wider">Individual Award</span>
                <span className="text-sm font-black text-white">Player of Tournament</span>
              </div>
              <div className="px-4 py-3 rounded-2xl bg-slate-950/90 border border-emerald-500/30 text-center">
                <span className="text-[10px] text-emerald-400 font-extrabold uppercase block tracking-wider">Team Result</span>
                <span className="text-sm font-black text-emerald-300">Tournament Champion</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
            <span className="flex items-center gap-1.5 text-amber-300 font-semibold">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Click trophy card to launch victory celebratory confetti!
            </span>
            <span className="text-[11px] text-slate-500 hidden sm:inline">Grounding athletic rigor into business acumen</span>
          </div>
        </div>

        {/* Transferable Skills Interactive Matrix */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-900 pb-4">
            <div>
              <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
                <Compass className="w-5 h-5 text-emerald-400" />
                <span>Transferable Skill Constellation</span>
              </h3>
              <p className="text-xs text-slate-400">Select any capability below to view the match scenario and corresponding CV proof.</p>
            </div>
          </div>

          {/* Skill Selector Chips */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {cricketSkills.map((sk) => {
              const isSelected = sk.id === selectedSkillId;
              return (
                <button
                  key={sk.id}
                  onClick={() => setSelectedSkillId(sk.id)}
                  className={`p-3.5 rounded-2xl text-left border transition-all flex flex-col justify-between gap-2.5 ${
                    isSelected
                      ? 'bg-gradient-to-b from-emerald-950 to-slate-900 border-amber-400/80 shadow-xl shadow-amber-500/10 scale-105'
                      : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-amber-400/20' : 'bg-slate-950'}`}>
                      {sk.icon}
                    </div>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-amber-400" />}
                  </div>
                  <div>
                    <span className={`text-xs font-bold block ${isSelected ? 'text-amber-300' : 'text-slate-200'}`}>
                      {sk.skillName}
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium block truncate">
                      {sk.category}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Skill Transfer Detail Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-amber-500/30 shadow-2xl space-y-6 relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-amber-400/10 border border-amber-500/30">
                  {activeSkill.icon}
                </div>
                <div>
                  <h4 className="text-2xl font-black text-white">{activeSkill.skillName}</h4>
                  <span className="text-xs font-bold text-emerald-400">{activeSkill.category}</span>
                </div>
              </div>

              <div className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-right">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Verified Impact Metric</span>
                <span className="text-xs font-extrabold text-amber-300">{activeSkill.keyMetric}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Pitch Scenario */}
              <div className="p-5 rounded-2xl bg-slate-950/90 border border-emerald-900/50 space-y-2">
                <div className="flex items-center gap-2 text-xs font-extrabold text-emerald-400 uppercase tracking-wider">
                  <Trophy className="w-4 h-4 text-amber-400" />
                  <span>On-Pitch Cricket Execution</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{activeSkill.matchScenario}</p>
              </div>

              {/* Corporate Translation & CV Proof */}
              <div className="p-5 rounded-2xl bg-slate-950/90 border border-amber-500/20 space-y-2">
                <div className="flex items-center gap-2 text-xs font-extrabold text-amber-300 uppercase tracking-wider">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span>Corporate Application & CV Grounding</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{activeSkill.businessTranslation}</p>
                <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 italic">
                  <strong className="text-emerald-400 not-italic">CV Proof: </strong>
                  "{activeSkill.cvEvidence}"
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

