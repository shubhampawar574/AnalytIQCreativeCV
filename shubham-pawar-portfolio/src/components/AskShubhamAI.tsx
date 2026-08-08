import React, { useState } from 'react';
import { Bot, Send, X, Sparkles, User, RefreshCw, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AskShubhamAIProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AskShubhamAI: React.FC<AskShubhamAIProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<
    { role: 'user' | 'assistant'; text: string; time: string }[]
  >([
    {
      role: 'assistant',
      text: "Hello! I am Shubham's Recruiter AI Assistant. I have full knowledge of Shubham Pawar's verified CV, including his 35 months at SAP CallidusCloud, 99.73%ile in MHT-CET, PGDM Business Analytics at MDI Gurgaon, and SAP Cricket Player of the Tournament award. How can I help evaluate his fit for your team?",
      time: 'Just now',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const quickPrompts = [
    'Why is Shubham a fit for Strategy & Consulting?',
    'What were his key achievements at SAP CallidusCloud?',
    'Tell me about his academic entrance scores.',
    'How does his cricket experience apply to business?',
  ];

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg = { role: 'user' as const, text: query, time: 'Now' };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setLoading(true);

    setTimeout(() => {
      let responseText = '';
      const q = query.toLowerCase();

      if (q.includes('consulting') || q.includes('strategy')) {
        responseText =
          "Shubham combines 35 months of corporate SAP debugging rigor with PGDM Business Analytics training at MDI Gurgaon. He has completed specialized certifications in Management Consulting (Profitability trees, Market entry, MECE, Guesstimates) and M&A Valuation (DCF, Commercial DD). His proven track record in resolving 700+ client issues within tight SLAs proves his structured problem-solving ability.";
      } else if (q.includes('sap') || q.includes('achievement') || q.includes('experience')) {
        responseText =
          "At SAP CallidusCloud (July 2023 - May 2026), Shubham resolved 700+ client tickets, troubleshot 100+ critical production escalations, mentored 30+ new support engineers, and received 21 Appreciation Awards. He also evaluated 10+ beta product features and published 5 technical newsletters.";
      } else if (q.includes('academic') || q.includes('score') || q.includes('exam')) {
        responseText =
          "Shubham scored 99.73 Percentile in the MHT-CET Engineering Entrance Exam, graduated with an 8.75/10 CGPA from VJTI Mumbai (Class of '23), and is currently pursuing PGDM Business Analytics at MDI Gurgaon ('26). He also qualified SSC CGL Tier 2 (top 1.3L out of 28L) and cleared NABARD Grade A Phase 1 (top 1,600 out of 50,000+).";
      } else if (q.includes('cricket') || q.includes('sport') || q.includes('leader')) {
        responseText =
          "Shubham was named Player of the Tournament and led his team as Champion in the SAP Corporate Cricket Tournament. This athletic experience honed his high-pressure decision-making, team captaincy, and resilience during multi-hour technical escalations.";
      } else {
        responseText =
          "Shubham Pawar is a Tech + Business Analytics professional with 35 months of SAP CallidusCloud engineering experience, an 8.75 CGPA from VJTI, and PGDM Business Analytics candidate at MDI Gurgaon. He holds 21 SAP Appreciation Awards, 99.73%ile entrance rank, and leadership experience across campus and sports tournaments.";
      }

      setMessages((prev) => [
        ...prev,
        { role: 'assistant', text: responseText, time: 'Now' },
      ]);
      setLoading(false);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="bg-slate-900 border border-emerald-500/40 rounded-3xl max-w-lg w-full h-[620px] flex flex-col shadow-2xl relative overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-slate-950 font-black">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-white text-sm flex items-center gap-1.5">
                <span>Shubham Recruiter AI</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </h3>
              <p className="text-[11px] text-slate-400">Strictly grounded in verified CV facts</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message Log */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-slate-800">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex items-start gap-2.5 ${
                m.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {m.role === 'assistant' && (
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
              )}
              <div
                className={`max-w-[82%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                  m.role === 'user'
                    ? 'bg-emerald-500 text-slate-950 font-semibold rounded-tr-none'
                    : 'bg-slate-950 border border-slate-800 text-slate-200 rounded-tl-none'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              <span>Analyzing CV dataset...</span>
            </div>
          )}
        </div>

        {/* Quick Prompts */}
        <div className="p-2.5 bg-slate-950 border-t border-slate-800 flex gap-2 overflow-x-auto">
          {quickPrompts.map((qp, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(qp)}
              className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-[10px] text-slate-300 whitespace-nowrap"
            >
              {qp}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2">
          <input
            type="text"
            placeholder="Ask anything about Shubham's skills, SAP metrics, or degree..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-emerald-500"
          />
          <button
            onClick={() => handleSend()}
            className="p-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
