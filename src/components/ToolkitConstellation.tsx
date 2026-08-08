import React, { useState } from 'react';
import {
  Layers,
  Search,
  Sparkles,
  CheckCircle2,
  Brain,
  Globe,
  Database,
  BarChart3,
  Users,
  Award,
  ArrowRight,
  ExternalLink,
  Info,
} from 'lucide-react';

interface ConstellationNode {
  id: string;
  name: string;
  category: 'Business' | 'Technology' | 'Analytics' | 'Professional';
  tag: string;
  x: number; // SVG % x-coord
  y: number; // SVG % y-coord
  explanation: string;
  cvEvidenceTitle: string;
  cvEvidenceDetail: string;
  impactMetric: string;
  connections: string[]; // Node IDs connected in constellation
}

interface ToolkitConstellationProps {
  onSelectDetail?: (category: string, id: string) => void;
  onAddXp?: (amount: number, reason: string) => void;
}

export const ToolkitConstellation: React.FC<ToolkitConstellationProps> = ({ onSelectDetail, onAddXp }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeSkillId, setActiveSkillId] = useState<string>('prob-solving');

  const categories = ['All', 'Business', 'Technology', 'Analytics', 'Professional'];

  const nodes: ConstellationNode[] = [
    // Business Category
    {
      id: 'strategy',
      name: 'Strategy',
      category: 'Business',
      tag: 'Core Frameworks',
      x: 20,
      y: 25,
      explanation:
        'Framework-driven strategic analysis, MECE problem decomposition, profitability trees, and market entry evaluation.',
      cvEvidenceTitle: 'MDI Gurgaon PGDM & Strategy Certifications',
      cvEvidenceDetail:
        'Completed Management Consulting Training & M&A Valuation certifications; pursuing PGDM Business Analytics at MDI Gurgaon focusing on competitive positioning.',
      impactMetric: 'PGDM ’26 @ MDI',
      connections: ['consulting', 'bus-analytics', 'prob-solving', 'stakeholder'],
    },
    {
      id: 'consulting',
      name: 'Consulting',
      category: 'Business',
      tag: 'MECE & DD',
      x: 35,
      y: 20,
      explanation:
        'Applying structured consulting methodologies, profitability trees, commercial due diligence, and market sizing guesstimates.',
      cvEvidenceTitle: 'Management Consulting & M&A Certifications',
      cvEvidenceDetail:
        'Mastered MECE frameworks, DCF valuation, and commercial due diligence; applied structured diagnostic trees across 700+ corporate client tickets.',
      impactMetric: 'Certified Consultant',
      connections: ['strategy', 'bus-analytics', 'prob-solving'],
    },
    {
      id: 'operations',
      name: 'Operations',
      category: 'Business',
      tag: 'SLA & Execution',
      x: 15,
      y: 45,
      explanation:
        'SLA compliance management, incident response orchestration, workflow optimization, and high-severity escalation handling.',
      cvEvidenceTitle: 'SAP CallidusCloud SLA Management & VJTI PR',
      cvEvidenceDetail:
        '35 months at SAP CallidusCloud maintaining 100% SLA compliance across 700+ tickets; managed crowd logistics for VJTI Technovanza (75,000+ footfall).',
      impactMetric: '700+ SLA Resolutions',
      connections: ['strategy', 'sap-cc', 'leadership'],
    },
    {
      id: 'product-mgmt',
      name: 'Product Management',
      category: 'Business',
      tag: 'Agile & Lifecycles',
      x: 30,
      y: 40,
      explanation:
        'Agile sprint management, user story mapping, backlog prioritization, product lifecycle execution, and PRD authoring.',
      cvEvidenceTitle: 'Product Manager Accelerator & SAP Beta Testing',
      cvEvidenceDetail:
        'Completed "Be a Product Manager" certification; evaluated 10+ pre-release beta features for SAP CallidusCloud engineering teams.',
      impactMetric: '10+ Beta Features Tested',
      connections: ['bus-analytics', 'sap-cc', 'mentoring'],
    },
    {
      id: 'bus-analytics',
      name: 'Business Analytics',
      category: 'Business',
      tag: 'Data-Driven Insights',
      x: 25,
      y: 60,
      explanation:
        'Translating raw operational and corporate data into actionable business intelligence, performance metrics, and decision models.',
      cvEvidenceTitle: 'MDI Gurgaon PGDM Business Analytics',
      cvEvidenceDetail:
        'Enrolled in PGDM Business Analytics at MDI Gurgaon; engineered two-stage hybrid NLP summarization model with quantitative ROUGE evaluation.',
      impactMetric: 'PGDM ’26 Candidate',
      connections: ['strategy', 'power-bi', 'excel', 'data-analysis'],
    },

    // Technology Category
    {
      id: 'sap-cc',
      name: 'SAP CallidusCloud',
      category: 'Technology',
      tag: '35 Mos Experience',
      x: 75,
      y: 20,
      explanation:
        'Deep enterprise software support across SAP Territory Management, Quota Planning, and SAP Business Objects.',
      cvEvidenceTitle: 'Associate Solution Support Engineer — SAP CallidusCloud',
      cvEvidenceDetail:
        'Resolved 700+ client tickets, troubleshot 100+ critical escalations live, and earned 21 formal SAP Appreciation Awards for debugging excellence.',
      impactMetric: '21 Awards & 700+ Tickets',
      connections: ['databases', 'sql', 'prob-solving', 'client-comm'],
    },
    {
      id: 'salesforce',
      name: 'Salesforce CRM',
      category: 'Technology',
      tag: 'Fiserv Internship',
      x: 88,
      y: 25,
      explanation:
        'Enterprise cloud CRM setup, custom lead-tracking applications, automated sales pipeline workflows, and Trailhead learning.',
      cvEvidenceTitle: 'Salesforce Technology Internship — Fiserv India',
      cvEvidenceDetail:
        'Built no-code application modules, lead-generation tracking mechanisms, and interactive pipeline management dashboards at Fiserv India.',
      impactMetric: 'Lead Tracking CRM',
      connections: ['sap-cc', 'data-vis', 'excel'],
    },
    {
      id: 'python',
      name: 'Python',
      category: 'Technology',
      tag: 'NLP & Analytics',
      x: 70,
      y: 45,
      explanation:
        'Scientific computing, data processing, machine learning pipeline construction, and Natural Language Processing algorithms.',
      cvEvidenceTitle: 'VJTI Capstone Research Project',
      cvEvidenceDetail:
        'Engineered a two-stage hybrid Extractive & Abstractive NLP summarization pipeline evaluated via ROUGE metrics at VJTI Mumbai.',
      impactMetric: 'Unified NLP Model',
      connections: ['rouge-metrics', 'data-analysis', 'databases'],
    },
    {
      id: 'sql',
      name: 'SQL',
      category: 'Technology',
      tag: 'Relational DB',
      x: 85,
      y: 40,
      explanation:
        'Relational database queries, multi-table joins, schema optimization, transaction debugging, and data integrity verification.',
      cvEvidenceTitle: 'SAP CallidusCloud DB Debugging & VJTI IT',
      cvEvidenceDetail:
        'Debugged complex database queries across 700+ client tickets at SAP CallidusCloud and designed relational schemas during B.Tech at VJTI.',
      impactMetric: 'Relational DB Mastery',
      connections: ['sap-cc', 'databases', 'data-analysis'],
    },
    {
      id: 'databases',
      name: 'Databases',
      category: 'Technology',
      tag: 'Architecture & Schemas',
      x: 80,
      y: 60,
      explanation:
        'Database architecture, relational schemas, indexing, query optimization, and data synchronization across enterprise clusters.',
      cvEvidenceTitle: 'Enterprise DB Issue Resolution at SAP',
      cvEvidenceDetail:
        'Isolated schema mismatches and synchronized Database Administrators during high-severity production outage debugging at SAP.',
      impactMetric: '35 Mos Architecture',
      connections: ['sap-cc', 'sql', 'python'],
    },

    // Analytics Category
    {
      id: 'power-bi',
      name: 'Power BI',
      category: 'Analytics',
      tag: 'Dashboards',
      x: 45,
      y: 75,
      explanation:
        'Interactive dashboard creation, DAX modeling, multi-source data ingestion, and executive KPI reporting.',
      cvEvidenceTitle: 'Fiserv Internship & MDI Analytics',
      cvEvidenceDetail:
        'Configured interactive reporting dashboards at Fiserv India and applying advanced data visualization in MDI Gurgaon PGDM coursework.',
      impactMetric: 'Interactive BI',
      connections: ['bus-analytics', 'excel', 'data-vis'],
    },
    {
      id: 'excel',
      name: 'Excel',
      category: 'Analytics',
      tag: 'Financial Modelling',
      x: 58,
      y: 70,
      explanation:
        'Advanced financial modeling, pivot tables, VLOOKUP/XLOOKUP, scenario analysis, and profitability trees.',
      cvEvidenceTitle: 'M&A Valuation & Consulting Coursework',
      cvEvidenceDetail:
        'Formulated Discounted Cash Flow (DCF) models, comparable company analysis, and synergy estimation models in M&A Valuation certification.',
      impactMetric: 'DCF & Financial Models',
      connections: ['power-bi', 'bus-analytics', 'consulting'],
    },
    {
      id: 'data-analysis',
      name: 'Data Analysis',
      category: 'Analytics',
      tag: 'Root Cause Diagnosis',
      x: 68,
      y: 80,
      explanation:
        'Quantitative exploratory data analysis, root cause diagnosis, metric tracking, and systemic anomaly detection.',
      cvEvidenceTitle: '700+ SAP Ticket Diagnoses & Capstone',
      cvEvidenceDetail:
        'Diagnosed 700+ complex client system anomalies and 100+ production escalations at SAP CallidusCloud using structured data tracing.',
      impactMetric: '700+ Root Cause Diagnoses',
      connections: ['prob-solving', 'python', 'sql', 'bus-analytics'],
    },
    {
      id: 'data-vis',
      name: 'Data Visualization',
      category: 'Analytics',
      tag: 'Executive Reporting',
      x: 35,
      y: 85,
      explanation:
        'Transforming complex numerical datasets into intuitive visual representations, charts, and executive summary dashboards.',
      cvEvidenceTitle: 'Fiserv Dashboards & SAP Technical Content',
      cvEvidenceDetail:
        'Designed lead tracking CRM dashboards at Fiserv and published visual training guides and 5 newsletters for 30+ support engineers.',
      impactMetric: 'Executive Dashboards',
      connections: ['power-bi', 'salesforce', 'mentoring'],
    },
    {
      id: 'rouge-metrics',
      name: 'ROUGE Metrics',
      category: 'Analytics',
      tag: 'NLP Evaluation',
      x: 78,
      y: 88,
      explanation:
        'Quantitative evaluation framework (ROUGE-1, ROUGE-2, ROUGE-L) measuring n-gram overlap, precision, recall, and F1-score for summary fidelity.',
      cvEvidenceTitle: 'VJTI B.Tech Honors Capstone Project',
      cvEvidenceDetail:
        'Benchmarked two-stage hybrid NLP summarization model at VJTI using ROUGE metrics against traditional standalone models.',
      impactMetric: 'NLP Benchmarking',
      connections: ['python', 'data-analysis'],
    },

    // Professional Category
    {
      id: 'prob-solving',
      name: 'Problem Solving',
      category: 'Professional',
      tag: '700+ Tickets',
      x: 48,
      y: 35,
      explanation:
        'Systemic root-cause analysis, MECE problem decomposition, live emergency debugging, and creative solution design under strict SLAs.',
      cvEvidenceTitle: 'SAP CallidusCloud & National Entrance Ranks',
      cvEvidenceDetail:
        'Resolved 700+ tickets and 100+ live escalations at SAP CallidusCloud; scored 99.73%ile in MHT-CET, qualified SSC CGL Tier 2 and NABARD Phase 1.',
      impactMetric: '700+ Tickets & 99.73 %ile',
      connections: ['strategy', 'sap-cc', 'data-analysis', 'client-comm'],
    },
    {
      id: 'stakeholder',
      name: 'Stakeholder Management',
      category: 'Professional',
      tag: '21 Awards',
      x: 52,
      y: 15,
      explanation:
        'Managing cross-functional expectations, clear communication during high-stakes outages, and establishing strong client trust.',
      cvEvidenceTitle: '21 SAP Awards & VJTI Technovanza PR',
      cvEvidenceDetail:
        'Earned 21 formal SAP Appreciation Awards for client support; coordinated VIP guests, industry speakers, and PR for 75,000+ footfall festival.',
      impactMetric: '21 Awards & 75k+ Footfall',
      connections: ['strategy', 'client-comm', 'leadership', 'operations'],
    },
    {
      id: 'client-comm',
      name: 'Client Communication',
      category: 'Professional',
      tag: 'In-Meeting Sync',
      x: 62,
      y: 30,
      explanation:
        'Authoritative, calm, and empathetic customer interaction during high-priority incidents and live screen-share diagnostic sessions.',
      cvEvidenceTitle: '100+ Live In-Meeting Customer Resolutions',
      cvEvidenceDetail:
        'Drove live screen-share troubleshooting for 100+ critical customer escalations; published 5 global technical newsletters.',
      impactMetric: '100+ Live Resolutions',
      connections: ['prob-solving', 'stakeholder', 'sap-cc'],
    },
    {
      id: 'leadership',
      name: 'Leadership',
      category: 'Professional',
      tag: 'Sports & PR',
      x: 40,
      y: 50,
      explanation:
        'Directing teams under high pressure, strategic captaincy, fostering team unit cohesion, and driving large-scale event logistics.',
      cvEvidenceTitle: 'SAP Cricket Champion & Technovanza PRO',
      cvEvidenceDetail:
        'Awarded Player of the Tournament and led team as SAP Corporate Cricket Champion; Public Relations Officer for Technovanza (75,000+ footfall).',
      impactMetric: 'Player of Tournament',
      connections: ['stakeholder', 'mentoring', 'operations'],
    },
    {
      id: 'mentoring',
      name: 'Mentoring',
      category: 'Professional',
      tag: '30+ Engineers',
      x: 55,
      y: 52,
      explanation:
        'Coaching junior team members, designing onboarding playbooks, authoring training videos, and fostering a collaborative learning culture.',
      cvEvidenceTitle: 'SAP Support Engineer Onboarding & Video Artifacts',
      cvEvidenceDetail:
        'Mentored 30+ newly joined support engineers at SAP CallidusCloud, created 10 wrap-up training videos, and led 5+ technical knowledge sessions.',
      impactMetric: '30+ Engineers Mentored',
      connections: ['leadership', 'product-mgmt', 'data-vis'],
    },
  ];

  const filteredNodes = nodes.filter((n) => {
    if (selectedCategory !== 'All' && n.category !== selectedCategory) return false;
    if (
      searchTerm &&
      !n.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !n.tag.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  const activeNode = nodes.find((n) => n.id === activeSkillId) || nodes[0];

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'Business':
        return {
          bg: 'bg-amber-500/20',
          border: 'border-amber-500/40',
          text: 'text-amber-300',
          stroke: '#f59e0b',
        };
      case 'Technology':
        return {
          bg: 'bg-teal-500/20',
          border: 'border-teal-500/40',
          text: 'text-teal-300',
          stroke: '#14b8a6',
        };
      case 'Analytics':
        return {
          bg: 'bg-emerald-500/20',
          border: 'border-emerald-500/40',
          text: 'text-emerald-300',
          stroke: '#10b981',
        };
      case 'Professional':
        return {
          bg: 'bg-cyan-500/20',
          border: 'border-cyan-500/40',
          text: 'text-cyan-300',
          stroke: '#06b6d4',
        };
      default:
        return {
          bg: 'bg-emerald-500/20',
          border: 'border-emerald-500/40',
          text: 'text-emerald-300',
          stroke: '#10b981',
        };
    }
  };

  return (
    <section id="toolkit" className="py-24 bg-slate-950 relative border-t border-slate-900 overflow-hidden">
      {/* Background Constellation Ambient Glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[300px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
            <Layers className="w-4 h-4 text-emerald-400" />
            <span>11. Skill Constellation — Verified Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Interconnected <span className="text-emerald-400">Skill Constellation</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Every node in this ecosystem is backed by verified CV achievements, academic degrees, or corporate performance metrics.
          </p>

          {/* Search Bar & Category Filter */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search skill (e.g. Problem Solving, SQL)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-medium overflow-x-auto max-w-full">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedCategory(c)}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    selectedCategory === c
                      ? 'bg-emerald-500 text-slate-950 font-extrabold shadow-lg shadow-emerald-500/20'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Visual SVG Constellation Canvas + Detail Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* SVG Constellation Map (8 Cols) */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-3xl p-4 sm:p-6 shadow-2xl relative min-h-[480px] flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-2 z-10">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-extrabold text-white">Interactive Node Canvas</span>
              </div>
              <span className="text-[10px] text-slate-400 font-medium">Click node to reveal CV evidence</span>
            </div>

            {/* SVG Lines & Interactive Nodes */}
            <div className="relative w-full h-[400px] bg-slate-950/60 rounded-2xl border border-slate-800/80 overflow-hidden">
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {/* Render connection lines between nodes */}
                {nodes.map((source) =>
                  source.connections.map((targetId) => {
                    const target = nodes.find((n) => n.id === targetId);
                    if (!target) return null;

                    const isSourceFiltered = filteredNodes.some((f) => f.id === source.id);
                    const isTargetFiltered = filteredNodes.some((f) => f.id === target.id);
                    if (!isSourceFiltered || !isTargetFiltered) return null;

                    const isHighlighted =
                      source.id === activeSkillId || target.id === activeSkillId;

                    return (
                      <line
                        key={`${source.id}-${target.id}`}
                        x1={`${source.x}%`}
                        y1={`${source.y}%`}
                        x2={`${target.x}%`}
                        y2={`${target.y}%`}
                        stroke={
                          isHighlighted
                            ? '#34d399'
                            : source.category === target.category
                            ? getCategoryColor(source.category).stroke
                            : '#334155'
                        }
                        strokeWidth={isHighlighted ? 2.5 : 1}
                        strokeDasharray={isHighlighted ? 'none' : '3 3'}
                        opacity={isHighlighted ? 0.9 : 0.35}
                        className="transition-all duration-300"
                      />
                    );
                  })
                )}
              </svg>

              {/* Render Nodes */}
              {filteredNodes.map((n) => {
                const isActive = n.id === activeSkillId;
                const styleCat = getCategoryColor(n.category);

                return (
                  <button
                    key={n.id}
                    onClick={() => setActiveSkillId(n.id)}
                    style={{ left: `${n.x}%`, top: `${n.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 z-20 flex flex-col items-center ${
                      isActive ? 'scale-125 z-30' : 'hover:scale-110'
                    }`}
                  >
                    {/* Glowing Pulse Ring for Active Node */}
                    <div className="relative flex items-center justify-center">
                      {isActive && (
                        <div className="absolute w-8 h-8 rounded-full bg-emerald-400/30 animate-ping" />
                      )}
                      <div
                        className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-[10px] font-black border transition-all ${
                          isActive
                            ? 'bg-emerald-400 text-slate-950 border-white shadow-lg shadow-emerald-400/50'
                            : `${styleCat.bg} ${styleCat.text} ${styleCat.border}`
                        }`}
                      >
                        ●
                      </div>
                    </div>

                    {/* Node Label */}
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full mt-1 whitespace-nowrap border transition-all ${
                        isActive
                          ? 'bg-emerald-500 text-slate-950 border-emerald-300 shadow-md font-extrabold'
                          : 'bg-slate-950/90 text-slate-300 border-slate-800 group-hover:border-slate-700'
                      }`}
                    >
                      {n.name}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 pt-3 text-[11px] text-slate-400 border-t border-slate-800">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-amber-400" /> Business
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-teal-400" /> Technology
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" /> Analytics
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" /> Professional
                </span>
              </div>
              <span>{filteredNodes.length} Active Nodes</span>
            </div>
          </div>

          {/* Active Skill Evidence & Explanation Panel (5 Cols) */}
          <div className="lg:col-span-5 bg-slate-900 border border-emerald-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 relative">
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div className="space-y-1">
                <span
                  className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                    getCategoryColor(activeNode.category).bg
                  } ${getCategoryColor(activeNode.category).text} ${
                    getCategoryColor(activeNode.category).border
                  }`}
                >
                  {activeNode.category} Domain
                </span>
                <h3 className="text-2xl font-black text-white">{activeNode.name}</h3>
                <span className="text-xs text-slate-400 font-semibold">{activeNode.tag}</span>
              </div>

              <div className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-right">
                <span className="text-[10px] text-slate-500 block uppercase font-bold">CV Metric</span>
                <span className="text-xs font-black text-emerald-400">{activeNode.impactMetric}</span>
              </div>
            </div>

            {/* Explanation */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Info className="w-4 h-4 text-emerald-400" />
                Capability Definition
              </h4>
              <p className="text-xs text-slate-200 leading-relaxed bg-slate-950/80 p-4 rounded-2xl border border-slate-800">
                {activeNode.explanation}
              </p>
            </div>

            {/* CV Evidence Box */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Verified CV Evidence & Projects
              </h4>
              <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-950 to-emerald-950/40 border border-emerald-500/30 space-y-2">
                <h5 className="font-extrabold text-white text-xs sm:text-sm">{activeNode.cvEvidenceTitle}</h5>
                <p className="text-xs text-slate-300 leading-relaxed">{activeNode.cvEvidenceDetail}</p>
              </div>
            </div>

            {/* Connected Related Capabilities */}
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <span className="text-[11px] font-bold text-slate-400 block">Connected Ecosystem Capabilities:</span>
              <div className="flex flex-wrap gap-2">
                {activeNode.connections.map((cId) => {
                  const connNode = nodes.find((n) => n.id === cId);
                  if (!connNode) return null;
                  return (
                    <button
                      key={cId}
                      onClick={() => setActiveSkillId(cId)}
                      className="px-2.5 py-1 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-[10px] text-emerald-300 hover:border-emerald-500/50 transition-all"
                    >
                      {connNode.name}
                    </button>
                  );
                })}
              </div>

              {onSelectDetail && (
                <div className="pt-3">
                  <button
                    onClick={() => onSelectDetail('skill', activeNode.id)}
                    className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02]"
                  >
                    <Sparkles className="w-4 h-4 text-slate-950" />
                    <span>Open Full Sub-Webpage View for {activeNode.name} →</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

