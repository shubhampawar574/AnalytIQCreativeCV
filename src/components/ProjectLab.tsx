import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types';
import {
  FileText,
  Zap,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  BarChart3,
  Play,
  Layers,
  Database,
  Filter,
  TrendingUp,
  Sliders,
  RotateCcw,
} from 'lucide-react';

interface ProjectLabProps {
  onSelectDetail?: (category: string, id: string) => void;
  onAddXp?: (amount: number, reason: string) => void;
}

export const ProjectLab: React.FC<ProjectLabProps> = ({ onSelectDetail, onAddXp }) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(PROJECTS_DATA[0].id);


  // Interactive Text Summarizer Playground State
  const [sampleText, setSampleText] = useState<string>(
    'Enterprise software systems often encounter performance bottlenecks during high-volume data synchronization. SAP CallidusCloud utilizes advanced territory and quota planning logic to calculate sales compensation. In this study, we evaluate how automated root cause isolation and two-stage NLP summarization can streamline technical incident response for cloud infrastructure teams.'
  );
  const [summarized, setSummarized] = useState<boolean>(false);
  const [extractiveSummary, setExtractiveSummary] = useState<string>('');
  const [abstractiveSummary, setAbstractiveSummary] = useState<string>('');
  const [rougeScores, setRougeScores] = useState({ r1: 0.88, r2: 0.76, rL: 0.84 });

  // CRM Pipeline Interactive State
  const [crmLeads, setCrmLeads] = useState([
    { id: '1', name: 'Acme Corp Advisory', stage: 'Qualified', value: '$120,000' },
    { id: '2', name: 'Global Logistics Corp', stage: 'Negotiation', value: '$250,000' },
    { id: '3', name: 'Fintech Solutions Ltd', stage: 'Proposal', value: '$85,000' },
  ]);

  const activeProject = PROJECTS_DATA.find((p) => p.id === selectedProjectId) || PROJECTS_DATA[0];

  const handleRunSummarizer = () => {
    setSummarized(true);
    setExtractiveSummary(
      'SAP CallidusCloud utilizes territory and quota planning logic. Automated root cause isolation streamlines technical incident response.'
    );
    setAbstractiveSummary(
      'By applying a two-stage NLP summarization model, enterprise cloud support teams can rapidly convert complex technical logs into actionable incident summaries with high factual precision.'
    );
    // Simulate ROUGE calculation based on length
    const len = sampleText.length;
    setRougeScores({
      r1: parseFloat((0.82 + (len % 10) * 0.01).toFixed(2)),
      r2: parseFloat((0.72 + (len % 8) * 0.01).toFixed(2)),
      rL: parseFloat((0.80 + (len % 9) * 0.01).toFixed(2)),
    });
  };

  return (
    <section id="projects" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>5. Project Lab & Research Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Applied Technology & <span className="text-amber-400">Data Analytics</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Explore Shubham’s capstone NLP research model and Salesforce CRM internship application at Fiserv India.
          </p>
        </div>

        {/* Project Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS_DATA.map((proj) => {
            const isSelected = selectedProjectId === proj.id;
            return (
              <div
                key={proj.id}
                onClick={() => setSelectedProjectId(proj.id)}
                className={`p-6 rounded-3xl border cursor-pointer transition-all space-y-4 ${
                  isSelected
                    ? 'bg-slate-900 border-amber-500/60 shadow-2xl shadow-amber-500/10 scale-[1.01]'
                    : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30">
                    {proj.organization}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{proj.period}</span>
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-white">{proj.title}</h3>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">{proj.subtitle}</p>
                </div>

                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  <strong className="text-slate-200">Problem:</strong> {proj.problem}
                </p>

                {/* Pipeline visual */}
                <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between text-[11px] font-semibold text-amber-400 overflow-x-auto">
                  {proj.pipelineSteps.map((step, idx) => (
                    <React.Fragment key={idx}>
                      <span>{step}</span>
                      {idx < proj.pipelineSteps.length - 1 && (
                        <ArrowRight className="w-3 h-3 text-slate-600 shrink-0" />
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-lg bg-slate-950 text-slate-300 text-[11px] font-medium border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {onSelectDetail && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectDetail('project', proj.id);
                      }}
                      className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-[11px] flex items-center gap-1 shadow-md shadow-amber-500/20 transition-transform hover:scale-105"
                    >
                      <span>Full Webpage View</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Playground for Selected Project */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-amber-500/30 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                <span>Interactive Project Sandbox</span>
              </span>
              <h3 className="text-2xl font-extrabold text-white mt-1">{activeProject.title}</h3>
            </div>

            <span className="px-3.5 py-1.5 rounded-full bg-slate-950 text-emerald-400 border border-emerald-500/30 text-xs font-bold">
              {activeProject.organization}
            </span>
          </div>

          {/* PROJECT 01 INTERACTIVE PLAYGROUND: NLP Summarizer */}
          {activeProject.id === 'proj-summarization' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Input Text Box */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 flex items-center justify-between">
                    <span>Input Text for Summarization:</span>
                    <button
                      onClick={() =>
                        setSampleText(
                          'Enterprise software systems often encounter performance bottlenecks during high-volume data synchronization. SAP CallidusCloud utilizes advanced territory and quota planning logic to calculate sales compensation. In this study, we evaluate how automated root cause isolation and two-stage NLP summarization can streamline technical incident response for cloud infrastructure teams.'
                        )
                      }
                      className="text-amber-400 text-[11px] hover:underline"
                    >
                      Reset Sample Text
                    </button>
                  </label>
                  <textarea
                    value={sampleText}
                    onChange={(e) => setSampleText(e.target.value)}
                    rows={5}
                    className="w-full p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                  <button
                    onClick={handleRunSummarizer}
                    className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span>Run Two-Stage Unified Summarization & ROUGE Evaluation</span>
                  </button>
                </div>

                {/* Output & ROUGE Score Visualizer */}
                <div className="space-y-3 p-5 rounded-2xl bg-slate-950 border border-slate-800">
                  <h4 className="text-xs font-bold text-slate-200 flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-amber-400" />
                    <span>Model Output & ROUGE Evaluation</span>
                  </h4>

                  {summarized ? (
                    <div className="space-y-3 text-xs">
                      <div>
                        <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">
                          Stage 1 — Extractive Summary:
                        </span>
                        <p className="text-slate-300 bg-slate-900 p-2.5 rounded-xl border border-slate-800 mt-1">
                          {extractiveSummary}
                        </p>
                      </div>

                      <div>
                        <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                          Stage 2 — Abstractive Synthesis:
                        </span>
                        <p className="text-slate-200 bg-slate-900 p-2.5 rounded-xl border border-amber-500/30 mt-1 font-medium">
                          {abstractiveSummary}
                        </p>
                      </div>

                      {/* ROUGE Gauge */}
                      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800 text-center">
                        <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                          <span className="text-[10px] text-slate-400 font-bold block">ROUGE-1</span>
                          <span className="text-sm font-extrabold text-emerald-400">{rougeScores.r1}</span>
                        </div>
                        <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                          <span className="text-[10px] text-slate-400 font-bold block">ROUGE-2</span>
                          <span className="text-sm font-extrabold text-amber-400">{rougeScores.r2}</span>
                        </div>
                        <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                          <span className="text-[10px] text-slate-400 font-bold block">ROUGE-L</span>
                          <span className="text-sm font-extrabold text-teal-400">{rougeScores.rL}</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="h-44 flex flex-col items-center justify-center text-center text-slate-500 space-y-2">
                      <Sparkles className="w-8 h-8 text-slate-700 animate-pulse" />
                      <p className="text-xs">Click 'Run Two-Stage Unified Summarization' to evaluate model outputs and ROUGE precision scores.</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Research Approach List */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Detailed Capstone Methodology
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                  {activeProject.approachBullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* PROJECT 02 INTERACTIVE PLAYGROUND: Salesforce CRM Pipeline */}
          {activeProject.id === 'proj-fiserv' && (
            <div className="space-y-6">
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-amber-400 flex items-center gap-1.5">
                    <Database className="w-4 h-4" />
                    <span>Fiserv Salesforce CRM Pipeline Dashboard</span>
                  </span>
                  <span className="text-slate-400">Interactive Lead Management</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {crmLeads.map((lead) => (
                    <div key={lead.id} className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white">{lead.name}</span>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px]">
                          {lead.stage}
                        </span>
                      </div>
                      <p className="text-slate-400 font-semibold">{lead.value}</p>
                      <button
                        onClick={() => {
                          const stages = ['New', 'Qualified', 'Proposal', 'Negotiation', 'Closed-Won'];
                          const currIdx = stages.indexOf(lead.stage);
                          const nextStage = stages[(currIdx + 1) % stages.length];
                          setCrmLeads((prev) =>
                            prev.map((l) => (l.id === lead.id ? { ...l, stage: nextStage } : l))
                          );
                        }}
                        className="w-full py-1 rounded bg-slate-800 hover:bg-slate-700 text-[11px] text-amber-300 font-medium transition-colors"
                      >
                        Advance Pipeline Stage
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Internship Highlights */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Internship Deliverables & Outcomes
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                  {activeProject.approachBullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
