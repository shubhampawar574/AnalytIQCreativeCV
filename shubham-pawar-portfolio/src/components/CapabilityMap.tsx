import React, { useState } from 'react';
import { CAPABILITY_NODES } from '../data/portfolioData';
import { CapabilityNode } from '../types';
import {
  Workflow,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Layers,
  Award,
  ChevronRight,
} from 'lucide-react';

interface CapabilityMapProps {
  onSelectDetail?: (category: string, id: string) => void;
}

export const CapabilityMap: React.FC<CapabilityMapProps> = ({ onSelectDetail }) => {
  const [selectedNode, setSelectedNode] = useState<CapabilityNode>(CAPABILITY_NODES[0]);


  return (
    <section id="capability" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
            <Workflow className="w-4 h-4 text-emerald-400" />
            <span>4. How I Work — Interactive Capability Map</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Structured Workflows <span className="text-emerald-400">& Proven Outcomes</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Hover or click any capability node to view exact evidence and metrics from Shubham’s CV.
          </p>
        </div>

        {/* Capability Nodes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Node List (Left Column) */}
          <div className="lg:col-span-7 space-y-4">
            {CAPABILITY_NODES.map((node) => {
              const isSelected = selectedNode.id === node.id;

              return (
                <div
                  key={node.id}
                  onClick={() => setSelectedNode(node)}
                  onMouseEnter={() => setSelectedNode(node)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer space-y-3 ${
                    isSelected
                      ? 'bg-slate-900 border-emerald-500/60 shadow-xl shadow-emerald-500/10 scale-[1.01]'
                      : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                      {node.category}
                    </span>
                    {node.impactMetric && (
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                        {node.impactMetric}
                      </span>
                    )}
                  </div>

                  {/* Step Chain */}
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {node.steps.map((step, sIdx) => (
                      <React.Fragment key={sIdx}>
                        <span className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-semibold text-white">
                          {step}
                        </span>
                        {sIdx < node.steps.length - 1 && (
                          <ArrowRight className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Evidence Inspector Card (Right Column) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-emerald-500/40 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-300">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-medium">CV Evidence Inspector</span>
                    <h3 className="font-extrabold text-white text-lg">{selectedNode.title}</h3>
                  </div>
                </div>
                {selectedNode.impactMetric && (
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold">
                    {selectedNode.impactMetric}
                  </span>
                )}
              </div>

              {/* Step Sequence Highlight */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Methodology Execution Chain
                </span>
                <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-1 overflow-x-auto text-xs">
                  {selectedNode.steps.map((st, i) => (
                    <span key={i} className="text-emerald-300 font-bold whitespace-nowrap">
                      {i + 1}. {st}
                    </span>
                  ))}
                </div>
              </div>

              {/* CV Evidence Proof */}
              <div className="space-y-3 p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{selectedNode.cvProofTitle}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {selectedNode.cvProofDetail}
                </p>
              </div>

              <div className="pt-2 text-[11px] text-slate-500 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% verified factual data from Shubham’s CV</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
