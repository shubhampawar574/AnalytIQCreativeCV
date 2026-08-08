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

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
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
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950 antialiased">
      {/* Sticky Navigation */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        onOpenAI={() => setAiOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="space-y-0">
        <Hero onOpenAI={() => setAiOpen(true)} onOpenResume={() => setResumeOpen(true)} />
        <CareerTimeline />
        <SAPDashboard />
        <CapabilityMap />
        <ProjectLab />
        <EducationProgression />
        <AchievementWall />
        <LeadershipSection />
        <LearningHub />
        <CricketPlaybook />
        <SocialImpact />
        <ToolkitConstellation />
        <PersonalitySection />
        <WhatsNext onOpenAI={() => setAiOpen(true)} onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Drawers / Modals */}
      <AskShubhamAI isOpen={aiOpen} onClose={() => setAiOpen(false)} />
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
