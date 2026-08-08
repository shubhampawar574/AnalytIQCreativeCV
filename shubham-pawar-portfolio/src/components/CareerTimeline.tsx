import React, { useState } from 'react';
import { TIMELINE_DATA } from '../data/portfolioData';
import { TimelineItem } from '../types';
import {
  Calendar,
  GraduationCap,
  Briefcase,
  Trophy,
  Users,
  ChevronRight,
  Sparkles,
  MapPin,
  CheckCircle2,
  X,
  SlidersHorizontal,
} from 'lucide-react';

export const CareerTimeline: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'vertical' | 'horizontal'>('vertical');

  const filteredItems = TIMELINE_DATA.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'education':
        return {
          icon: <GraduationCap className="w-3.5 h-3.5" />,
          label: 'Education',
          bg: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
        };
      case 'experience':
        return {
          icon: <Briefcase className="w-3.5 h-3.5" />,
          label: 'Experience',
          bg: 'bg-teal-500/10 text-teal-300 border-teal-500/30',
        };
      case 'leadership':
        return {
          icon: <Users className="w-3.5 h-3.5" />,
          label: 'Leadership',
          bg: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
        };
      case 'achievement':
        return {
          icon: <Trophy className="w-3.5 h-3.5" />,
          label: 'Achievement',
          bg: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
        };
      default:
        return {
          icon: <Sparkles className="w-3.5 h-3.5" />,
          label: category,
          bg: 'bg-slate-800 text-slate-300 border-slate-700',
        };
    }
  };

  return (
    <section id="timeline" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
            <Calendar className="w-4 h-4 text-emerald-400" />
            <span>2. Interactive Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            From Engineering Rigor to <span className="text-emerald-400">Strategic Leadership</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Click any milestone to inspect detailed achievements, metrics, and capabilities derived directly from the verified CV.
          </p>

          {/* Controls: Category Filter & View Toggle */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-medium">
              {[
                { id: 'all', label: 'All Milestones' },
                { id: 'education', label: 'Education' },
                { id: 'experience', label: 'Experience' },
                { id: 'leadership', label: 'Leadership' },
                { id: 'achievement', label: 'Achievements' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    filter === tab.id
                      ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="hidden sm:flex bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
              <button
                onClick={() => setViewMode('vertical')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  viewMode === 'vertical' ? 'bg-slate-800 text-emerald-400 font-semibold' : 'text-slate-400'
                }`}
              >
                Vertical Flow
              </button>
              <button
                onClick={() => setViewMode('horizontal')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  viewMode === 'horizontal' ? 'bg-slate-800 text-emerald-400 font-semibold' : 'text-slate-400'
                }`}
              >
                Horizontal Scroll
              </button>
            </div>
          </div>
        </div>

        {/* Timeline View: Vertical */}
        {viewMode === 'vertical' && (
          <div className="relative max-w-4xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-emerald-500 via-teal-500 to-amber-500/40 -translate-x-1/2 hidden sm:block" />
            <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-emerald-500/30 sm:hidden" />

            <div className="space-y-8 sm:space-y-12">
              {filteredItems.map((item, idx) => {
                const isEven = idx % 2 === 0;
                const catBadge = getCategoryBadge(item.category);

                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedItem(item)}
                    className={`relative flex flex-col sm:flex-row items-start cursor-pointer group ${
                      isEven ? 'sm:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Node Pin */}
                    <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 top-1.5 z-10 w-8 h-8 rounded-full bg-slate-950 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/20 group-hover:scale-125 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all">
                      <div className="w-2 h-2 rounded-full bg-current" />
                    </div>

                    {/* Content Box */}
                    <div className="ml-14 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
                      <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-emerald-500/50 backdrop-blur-md shadow-xl transition-all hover:-translate-y-1 group-hover:shadow-emerald-500/10 space-y-3">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            {item.period || item.year}
                          </span>
                          <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border flex items-center gap-1 ${catBadge.bg}`}>
                            {catBadge.icon}
                            <span>{catBadge.label}</span>
                          </span>
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-xs font-medium text-slate-400 flex items-center gap-2 mt-0.5">
                            <span>{item.subtitle}</span>
                            {item.location && (
                              <span className="flex items-center gap-0.5 text-slate-500">
                                <MapPin className="w-3 h-3" />
                                {item.location}
                              </span>
                            )}
                          </p>
                        </div>

                        {item.metric && (
                          <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800 text-xs font-semibold text-emerald-300 flex items-center justify-between">
                            <span className="text-slate-400 font-normal">Key Indicator:</span>
                            <span className="text-emerald-400 font-bold">{item.metric}</span>
                          </div>
                        )}

                        <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                          {item.description}
                        </p>

                        <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-xs">
                          <span className="text-emerald-400 font-medium group-hover:underline flex items-center gap-1">
                            <span>Click for Full CV Details</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </span>
                          <span className="text-[10px] text-slate-500">
                            {item.skills.slice(0, 2).join(' • ')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Timeline View: Horizontal Scroll */}
        {viewMode === 'horizontal' && (
          <div className="relative overflow-x-auto pb-6 pt-4 scrollbar-thin scrollbar-thumb-emerald-500/30">
            <div className="flex gap-6 min-w-max px-4">
              {filteredItems.map((item) => {
                const catBadge = getCategoryBadge(item.category);
                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedItem(item)}
                    className="w-80 p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 cursor-pointer space-y-3 transition-all hover:-translate-y-1 shadow-lg"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400">
                        {item.period || item.year}
                      </span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full border flex items-center gap-1 ${catBadge.bg}`}>
                        {catBadge.icon}
                        <span>{catBadge.label}</span>
                      </span>
                    </div>

                    <div>
                      <h4 className="font-bold text-white text-base leading-snug">{item.title}</h4>
                      <p className="text-xs text-slate-400">{item.subtitle}</p>
                    </div>

                    {item.metric && (
                      <div className="text-xs font-bold text-emerald-400 bg-slate-950/80 p-2 rounded-lg border border-slate-800">
                        {item.metric}
                      </div>
                    )}

                    <p className="text-xs text-slate-300 line-clamp-3">{item.description}</p>

                    <div className="pt-2 text-xs text-emerald-400 font-medium flex items-center gap-1 border-t border-slate-800">
                      <span>Inspect Milestone</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Expanded Milestone Modal */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-2 border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    {selectedItem.period || selectedItem.year}
                  </span>
                  {selectedItem.metric && (
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      {selectedItem.metric}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-extrabold text-white">{selectedItem.title}</h3>
                <p className="text-sm font-semibold text-emerald-400">{selectedItem.subtitle}</p>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-300 leading-relaxed">{selectedItem.description}</p>

              {/* Bullet Achievements */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Key Accomplishments (Verified CV)
                </h4>
                <div className="space-y-2">
                  {selectedItem.bullets.map((b, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Associated Skills */}
              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Demonstrated Skills & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-slate-800 text-slate-300 text-xs font-medium border border-slate-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Close Action */}
              <div className="pt-4 border-t border-slate-800 flex justify-end">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-5 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-colors"
                >
                  Close Detail Card
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
