import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CareerTimeline } from './components/CareerTimeline';
import { SAPDashboard } from './components/SAPDashboard';
import { CapabilityMap } from './components/CapabilityMap';
import { ProjectLab } from './components/ProjectLab';
import { EducationProgression } from './components/EducationProgression';
import { AchievementWall } from './components/AchievementWall';
import { LeadershipSection } from './components/LeadershipSection';
import { LearningHub } from './components/LearningHub';
import { CricketPlaybook } from './components/CricketPlaybook';
import { SocialImpact } from './components/SocialImpact';
import { ToolkitConstellation } from './components/ToolkitConstellation';
import { PersonalitySection } from './components/PersonalitySection';
import { WhatsNext } from './components/WhatsNext';
import { AskShubhamAI } from './components/AskShubhamAI';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';

import { DetailPageState, QuestItem } from './types';
import {
  TIMELINE_DATA,
  SAP_PILLARS,
  PROJECTS_DATA,
  EDUCATION_DATA,
  ACHIEVEMENTS_DATA,
  LEADERSHIP_DATA,
} from './data/portfolioData';

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Trophy,
  Zap,
  Award,
  Share2,
  Bot,
  Globe,
  Database,
  Building2,
  GraduationCap,
  Users,
  Briefcase,
  Play,
  RotateCcw,
  Check,
  Copy,
  ExternalLink,
  Flame,
  ShieldCheck,
  Star,
  X,
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Gamification & Navigation State
  const [xp, setXp] = useState<number>(180);
  const [completedQuestIds, setCompletedQuestIds] = useState<string[]>(['q1']);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isQuestModalOpen, setIsQuestModalOpen] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  // Sub-Webpage Detail Route State
  const [viewState, setViewState] = useState<DetailPageState>({ page: 'overview' });

  // Calculate Level & Level Title
  const getLevelInfo = (currentXp: number) => {
    if (currentXp >= 800) return { level: 5, title: 'Master Recruiter & Director' };
    if (currentXp >= 500) return { level: 4, title: 'MDI Analytics Strategy Partner' };
    if (currentXp >= 350) return { level: 3, title: 'Lead Talent Evaluator' };
    if (currentXp >= 200) return { level: 2, title: 'Senior Recruiter' };
    return { level: 1, title: 'Associate Recruiter' };
  };

  const { level, title: levelTitle } = getLevelInfo(xp);

  // Quest List
  const quests: QuestItem[] = [
    {
      id: 'q1',
      title: 'Initialize Executive Portfolio',
      description: 'Landed on Shubham Pawar’s interactive portfolio.',
      xpReward: 30,
      isCompleted: completedQuestIds.includes('q1'),
    },
    {
      id: 'q2',
      title: 'Inspect Dedicated Sub-Webpage',
      description: 'Click on any milestone, project, or SAP pillar to navigate to a dedicated detail webpage.',
      xpReward: 50,
      isCompleted: completedQuestIds.includes('q2'),
    },
    {
      id: 'q3',
      title: 'Solve Live SAP Debugger Challenge',
      description: 'Complete the interactive incident troubleshooting mini-game on the SAP sub-webpage.',
      xpReward: 100,
      isCompleted: completedQuestIds.includes('q3'),
    },
    {
      id: 'q4',
      title: 'Explore Skill Constellation Ecosystem',
      description: 'Interact with nodes across Business, Tech, Analytics, and Professional categories.',
      xpReward: 50,
      isCompleted: completedQuestIds.includes('q4'),
    },
    {
      id: 'q5',
      title: 'Cricket 19th Over Tactical Simulator',
      description: 'Execute match strategy in the Cricket Insights playbook.',
      xpReward: 80,
      isCompleted: completedQuestIds.includes('q5'),
    },
    {
      id: 'q6',
      title: 'Consult AI Assistant',
      description: 'Ask Shubham AI a custom recruiting question.',
      xpReward: 50,
      isCompleted: completedQuestIds.includes('q6'),
    },
  ];

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const addXp = (amount: number, reason: string, questId?: string) => {
    setXp((prev) => {
      const nextXp = prev + amount;
      const oldLevel = getLevelInfo(prev).level;
      const newLevel = getLevelInfo(nextXp).level;

      if (newLevel > oldLevel) {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#10b981', '#f59e0b', '#6366f1'],
        });
        showToast(`🎉 LEVEL UP! You reached Level ${newLevel}: "${getLevelInfo(nextXp).title}" (+${amount} XP)`);
      } else {
        showToast(`+${amount} XP earned! ${reason}`);
      }
      return nextXp;
    });

    if (questId && !completedQuestIds.includes(questId)) {
      setCompletedQuestIds((prev) => [...prev, questId]);
    }
  };

  const handleSelectDetail = (category: string, id: string) => {
    setViewState({ page: 'detail', category, id });
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (!completedQuestIds.includes('q2')) {
      addXp(50, 'Explored Sub-Webpage View', 'q2');
    } else {
      addXp(20, 'Navigated Sub-Webpage Detail');
    }
  };

  const handleBackToOverview = () => {
    setViewState({ page: 'overview' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (viewState.page !== 'overview') return;
      const sections = [
        'hero',
        'timeline',
        'sap',
        'capability',
        'projects',
        'education',
        'achievements',
        'leadership',
        'learning-hub',
        'cricket-playbook',
        'toolkit',
        'personality',
        'whats-next',
      ];

      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [viewState.page]);

  // Copy shareable webpage link
  const handleCopyPageLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    showToast('Sub-webpage URL copied to clipboard!');
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950 antialiased relative">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 sm:right-8 z-50 animate-bounce">
          <div className="bg-slate-900 border-2 border-emerald-500 text-white px-5 py-3 rounded-2xl shadow-2xl shadow-emerald-500/30 flex items-center gap-3 backdrop-blur-xl">
            <Sparkles className="w-5 h-5 text-emerald-400 shrink-0" />
            <span className="text-xs sm:text-sm font-bold">{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Sticky Navigation */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        onOpenAI={() => setAiOpen(true)}
        activeSection={activeSection}
        xp={xp}
        level={level}
        levelTitle={levelTitle}
        isSubPage={viewState.page === 'detail'}
        onBackToOverview={handleBackToOverview}
        onOpenQuestModal={() => setIsQuestModalOpen(true)}
      />

      {/* Recruiter Quests Modal */}
      {isQuestModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="bg-slate-900 border border-emerald-500/40 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl space-y-6 relative">
            <button
              onClick={() => setIsQuestModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white">Recruiter Gamification Quests</h3>
                <p className="text-xs text-slate-400">
                  Level {level}: <span className="text-emerald-400 font-bold">{levelTitle}</span> ({xp} XP)
                </p>
              </div>
            </div>

            <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
              {quests.map((q) => (
                <div
                  key={q.id}
                  className={`p-4 rounded-2xl border flex items-center justify-between gap-3 ${
                    q.isCompleted
                      ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200'
                      : 'bg-slate-950 border-slate-800 text-slate-300'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-xs sm:text-sm text-white">{q.title}</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">
                        +{q.xpReward} XP
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400">{q.description}</p>
                  </div>

                  <div>
                    {q.isCompleted ? (
                      <span className="p-2 rounded-xl bg-emerald-500 text-slate-950 flex items-center gap-1 text-xs font-bold">
                        <Check className="w-4 h-4" />
                        Done
                      </span>
                    ) : (
                      <span className="px-3 py-1.5 rounded-xl bg-slate-800 text-slate-400 text-xs font-medium">
                        Locked
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setIsQuestModalOpen(false)}
              className="w-full py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm transition-all"
            >
              Continue Exploring Portfolio
            </button>
          </div>
        </div>
      )}

      {/* MAIN VIEW SWITCHER */}
      {viewState.page === 'overview' ? (
        <main className="space-y-0">
          <Hero
            onOpenAI={() => setAiOpen(true)}
            onOpenResume={() => setResumeOpen(true)}
            onSelectDetail={handleSelectDetail}
          />
          <CareerTimeline onSelectDetail={handleSelectDetail} />
          <SAPDashboard onSelectDetail={handleSelectDetail} onAddXp={addXp} />
          <CapabilityMap onSelectDetail={handleSelectDetail} />
          <ProjectLab onSelectDetail={handleSelectDetail} onAddXp={addXp} />
          <EducationProgression onSelectDetail={handleSelectDetail} />
          <AchievementWall onSelectDetail={handleSelectDetail} />
          <LeadershipSection onSelectDetail={handleSelectDetail} />
          <LearningHub />
          <CricketPlaybook onSelectDetail={handleSelectDetail} onAddXp={addXp} />
          <SocialImpact />
          <ToolkitConstellation onSelectDetail={handleSelectDetail} onAddXp={addXp} />
          <PersonalitySection />
          <WhatsNext onOpenAI={() => setAiOpen(true)} onOpenResume={() => setResumeOpen(true)} />
        </main>
      ) : (
        /* DEDICATED SUB-WEBPAGE DETAIL VIEW */
        <main className="pt-24 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 animate-fade-in">
          {/* Top Breadcrumb & Return Action */}
          <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-800 pb-6">
            <button
              onClick={handleBackToOverview}
              className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 text-slate-300 hover:text-white font-bold text-xs flex items-center gap-2 transition-all hover:-translate-x-1"
            >
              <ArrowLeft className="w-4 h-4 text-emerald-400" />
              <span>Return to Full Portfolio Overview</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyPageLink}
                className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs font-bold text-slate-300 flex items-center gap-1.5"
              >
                {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
                <span>{copiedLink ? 'Copied!' : 'Share Sub-Page'}</span>
              </button>

              <button
                onClick={() => setAiOpen(true)}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-extrabold text-xs flex items-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                <Bot className="w-4 h-4 text-slate-950" />
                <span>Ask AI About This</span>
              </button>
            </div>
          </div>

          {/* DYNAMIC SUB-WEBPAGE CONTENT RENDERER */}
          <SubWebpageDetailContent
            category={viewState.category || 'timeline'}
            id={viewState.id || ''}
            onAddXp={addXp}
            onOpenAI={() => setAiOpen(true)}
            onNavigateNext={(nextCategory, nextId) => handleSelectDetail(nextCategory, nextId)}
          />
        </main>
      )}

      {/* Footer */}
      <Footer />

      {/* Drawers / Modals */}
      <AskShubhamAI isOpen={aiOpen} onClose={() => setAiOpen(false)} />
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}

{/* Sub-Webpage Detail Content Helper Component */}
interface SubWebpageContentProps {
  category: string;
  id: string;
  onAddXp: (amount: number, reason: string, questId?: string) => void;
  onOpenAI: () => void;
  onNavigateNext: (category: string, id: string) => void;
}

const SubWebpageDetailContent: React.FC<SubWebpageContentProps> = ({
  category,
  id,
  onAddXp,
  onOpenAI,
  onNavigateNext,
}) => {
  // Mini game state for SAP
  const [debugStep, setDebugStep] = useState<number>(0);
  const [debugSolved, setDebugSolved] = useState<boolean>(false);

  // Mini game state for Cricket Strategy
  const [ballChoice, setBallChoice] = useState<string | null>(null);

  // Match lookup data
  let title = 'Detailed Executive Sub-Page';
  let subtitle = 'Verified CV Evidence & Technical Case Study';
  let badgeLabel = category.toUpperCase();
  let metricCallout = '100% Verified Fact';
  let bullets: string[] = [];
  let detailedDescription = '';

  if (category === 'timeline') {
    const item = TIMELINE_DATA.find((t) => t.id === id) || TIMELINE_DATA[0];
    title = item.title;
    subtitle = `${item.subtitle} | ${item.period || item.year} | ${item.location || 'India'}`;
    badgeLabel = item.category.toUpperCase();
    metricCallout = item.metric || 'Key Milestone';
    bullets = item.bullets || [];
    detailedDescription = item.description;
  } else if (category === 'sap-pillar') {
    const pillar = SAP_PILLARS.find((p) => p.id === id) || SAP_PILLARS[0];
    title = `SAP Pillar ${pillar.number}: ${pillar.title}`;
    subtitle = pillar.subtitle;
    badgeLabel = 'SAP CALLIDUSCLOUD';
    metricCallout = pillar.metricsHighlighted[0] || '100+ Live Escalations';
    bullets = pillar.bullets;
    detailedDescription = pillar.summary;
  } else if (category === 'project') {
    const proj = PROJECTS_DATA.find((p) => p.id === id) || PROJECTS_DATA[0];
    title = proj.title;
    subtitle = `${proj.subtitle} | ${proj.organization} (${proj.period})`;
    badgeLabel = 'PROJECT & RESEARCH';
    metricCallout = proj.tags[0] || 'NLP Model';
    bullets = [...(proj.approachBullets || []), ...(proj.results || [])];
    detailedDescription = proj.problem;
  } else if (category === 'education') {
    const edu = EDUCATION_DATA.find((e) => e.id === id) || EDUCATION_DATA[0];
    title = edu.degree;
    subtitle = `${edu.institution} | ${edu.period} | ${edu.score}`;
    badgeLabel = 'ACADEMIC EXCELLENCE';
    metricCallout = edu.score;
    bullets = edu.highlights;
    detailedDescription = `Completed coursework with distinction at ${edu.institution}.`;
  } else if (category === 'achievement') {
    const ach = ACHIEVEMENTS_DATA.find((a) => a.id === id) || ACHIEVEMENTS_DATA[0];
    title = ach.title;
    subtitle = `${ach.subtitle} | ${ach.category}`;
    badgeLabel = 'COMPETITIVE AWARD';
    metricCallout = ach.metric;
    bullets = [ach.description, ach.context];
    detailedDescription = ach.description;
  } else if (category === 'leadership') {
    const ldr = LEADERSHIP_DATA.find((l) => l.id === id) || LEADERSHIP_DATA[0];
    title = `${ldr.role} — ${ldr.organization}`;
    subtitle = `${ldr.period} | ${ldr.footfallOrScale || 'Campus Leadership'}`;
    badgeLabel = 'LEADERSHIP & PR';
    metricCallout = ldr.footfallOrScale || 'Top Leader';
    bullets = ldr.responsibilities;
    detailedDescription = ldr.summary;
  } else {
    title = `Capability Node: ${id}`;
    subtitle = 'Business Analytics & Technical Toolkit Capability';
    badgeLabel = 'SKILL NODE';
    metricCallout = 'Verified CV Competency';
    bullets = [
      'Engineered scalable data transformations and diagnostic automation workflows.',
      'Applied structured analytical frameworks to complex business operations.',
    ];
    detailedDescription = 'This skill directly powers Shubham Pawar’s dual capability in business management and software architecture.';
  }

  return (
    <div className="space-y-10">
      {/* Page Header Banner */}
      <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-emerald-500/40 shadow-2xl relative overflow-hidden space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <span className="text-xs font-black px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            {badgeLabel}
          </span>
          <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            100% Source-Verified CV Fact
          </span>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {title}
          </h1>
          <p className="text-sm sm:text-base text-emerald-300 font-semibold">{subtitle}</p>
        </div>

        {/* Highlight Callout Metric */}
        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between max-w-md">
          <div className="space-y-0.5">
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
              Primary Key Metric
            </span>
            <div className="text-2xl font-black text-emerald-400">{metricCallout}</div>
          </div>
          <Sparkles className="w-6 h-6 text-emerald-400" />
        </div>
      </div>

      {/* Deep Dive Description */}
      <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800/90 space-y-6">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-emerald-400" />
          <span>Executive Overview & Context</span>
        </h3>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
          {detailedDescription}
        </p>

        {/* Bullet Achievements */}
        <div className="space-y-3 pt-4 border-t border-slate-800">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Key Accomplishments & Verified Evidence
          </h4>
          <div className="space-y-2.5">
            {bullets.map((b, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-200"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* INTERACTIVE MINI-GAME CHALLENGE FOR CATEGORY */}
      {category === 'sap-pillar' && (
        <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/40 border-2 border-emerald-500/50 space-y-6 shadow-2xl">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <Flame className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-black text-white">SAP Production Debugger Challenge</h3>
                <p className="text-xs text-slate-400">Interactive live incident simulator</p>
              </div>
            </div>
            <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
              Reward: +100 XP
            </span>
          </div>

          {!debugSolved ? (
            <div className="space-y-4">
              <p className="text-xs text-slate-300 bg-slate-950 p-4 rounded-2xl border border-slate-800 leading-relaxed">
                <strong className="text-amber-400">P1 Incident Alert:</strong> High-volume quarter-end territory recalculation lockup detected on SAP CallidusCloud instance. Client executives request immediate status update.
              </p>

              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-300">Choose your debugging action:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => {
                      setDebugSolved(true);
                      onAddXp(100, 'Solved SAP Live Debugger Challenge!', 'q3');
                    }}
                    className="p-4 rounded-2xl bg-slate-950 hover:bg-emerald-950/60 border border-slate-800 hover:border-emerald-500 text-left text-xs font-bold text-emerald-300 transition-all space-y-1 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-white group-hover:text-emerald-300">Option A (Recommended)</span>
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    </div>
                    <p className="text-[11px] text-slate-400 font-normal">
                      Run live SQL trace, isolate deadlock transaction ID, execute patch script, and host live client screen-share.
                    </p>
                  </button>

                  <button
                    onClick={() => {
                      alert('Incorrect action! Hard reboot during payout run creates data inconsistency. Try Option A.');
                    }}
                    className="p-4 rounded-2xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-left text-xs font-bold text-slate-300 transition-all space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span>Option B</span>
                      <X className="w-4 h-4 text-rose-400" />
                    </div>
                    <p className="text-[11px] text-slate-400 font-normal">
                      Force hard reboot of cluster node without database trace analysis.
                    </p>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/40 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-extrabold text-sm">
                <CheckCircle2 className="w-5 h-5" />
                <span>INCIDENT RESOLVED IN 12 MINUTES! SLA MET!</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                You resolved the deadlock live, pacified client leadership, and earned <strong>+100 XP</strong> for demonstrating Shubham’s exact SAP troubleshooting methodology!
              </p>
            </div>
          )}
        </div>
      )}

      {category === 'cricket' && (
        <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-amber-950/40 border-2 border-amber-500/50 space-y-6 shadow-2xl">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-black text-white">19th Over Match Simulator</h3>
                <p className="text-xs text-slate-400">Player of Tournament Tactical Challenge</p>
              </div>
            </div>
            <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
              Reward: +80 XP
            </span>
          </div>

          <div className="space-y-4">
            <p className="text-xs text-slate-300 bg-slate-950 p-4 rounded-2xl border border-slate-800 leading-relaxed">
              <strong className="text-amber-400">Match Situation:</strong> Final match. Opponents require 12 runs off 6 balls. You are captain and bowler.
            </p>

            {!ballChoice ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    setBallChoice('yorker');
                    onAddXp(80, 'Executed Match-Winning Wide Yorker Strategy!', 'q5');
                  }}
                  className="p-4 rounded-2xl bg-slate-950 hover:bg-amber-950/60 border border-slate-800 hover:border-amber-500 text-left text-xs font-bold text-amber-300 transition-all space-y-1"
                >
                  <span className="text-white block">Strategy 1: Wide Yorker + Deep Fielders</span>
                  <p className="text-[11px] text-slate-400 font-normal">
                    Target wide-yorker channel away from batter’s hitting arc with deep long-off and deep cover.
                  </p>
                </button>

                <button
                  onClick={() => {
                    alert('Bouncer hit for 6! Try wide yorker strategy.');
                  }}
                  className="p-4 rounded-2xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-left text-xs font-bold text-slate-300 transition-all space-y-1"
                >
                  <span className="text-white block">Strategy 2: Short Pitch Bouncer</span>
                  <p className="text-[11px] text-slate-400 font-normal">
                    Bowl short into the chest without fine leg protection.
                  </p>
                </button>
              </div>
            ) : (
              <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/40 space-y-3">
                <div className="flex items-center gap-2 text-amber-300 font-extrabold text-sm">
                  <Trophy className="w-5 h-5" />
                  <span>VICTORY BY 7 RUNS! PLAYER OF THE TOURNAMENT MVP!</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Calculated strategy under pressure led to championship victory! Earned <strong>+80 XP</strong>!
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer Navigation Actions */}
      <div className="pt-8 border-t border-slate-800 flex items-center justify-between flex-wrap gap-4">
        <button
          onClick={onOpenAI}
          className="px-5 py-3 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 text-white font-bold text-xs flex items-center gap-2"
        >
          <Bot className="w-4 h-4 text-emerald-400" />
          <span>Ask Shubham AI About This Item</span>
        </button>

        <button
          onClick={() => {
            // Jump to next project or timeline item
            onNavigateNext('project', 'nlp-summarizer');
          }}
          className="px-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs flex items-center gap-2 transition-transform hover:scale-105 shadow-lg shadow-emerald-500/20"
        >
          <span>Explore Next Sub-Webpage →</span>
        </button>
      </div>
    </div>
  );
};
