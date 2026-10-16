import React, { useState } from 'react';
import { 
  Compass, 
  ArrowRight, 
  Sparkles, 
  Cpu, 
  Code2, 
  Database, 
  Zap, 
  Briefcase, 
  Layers, 
  CheckCircle2, 
  Info, 
  BookOpen, 
  ExternalLink 
} from 'lucide-react';

export default function Hero({ onNavigate }) {
  const [activeStep, setActiveStep] = useState(0);

  const journeySteps = [
    {
      label: "1. YOUR INTEREST",
      badge: "Discovery",
      title: "Artificial Intelligence & Data Systems",
      desc: "You enjoy teaching algorithms to recognize patterns, analyze complex data, and solve intelligent problems.",
      icon: <Sparkles className="w-5 h-5 text-blue-400" />
    },
    {
      label: "2. ENGINEERING BRANCH",
      badge: "University Course",
      title: "B.E. – CSE (AI & Machine Learning)",
      desc: "Offered at Sapthagiri NPS University with focused curriculum in neural networks and statistical computing.",
      icon: <Layers className="w-5 h-5 text-blue-400" />
    },
    {
      label: "3. CORE SKILLS",
      badge: "Foundations",
      title: "Python, PyTorch & Mathematical Modeling",
      desc: "Learn matrix algebra, gradient descent, deep neural layers, and exploratory data transformation.",
      icon: <Code2 className="w-5 h-5 text-blue-400" />
    },
    {
      label: "4. HANDS-ON PROJECTS",
      badge: "Portfolio Building",
      title: "Autonomous Medical Vision Classifier",
      desc: "Build and deploy a real-world computer vision model capable of detecting anomalies from sensor scans.",
      icon: <Cpu className="w-5 h-5 text-blue-400" />
    },
    {
      label: "5. POSSIBLE CAREER",
      badge: "Future Horizon",
      title: "Machine Learning & AI Research Engineer",
      desc: "Design and scale production intelligent systems in leading technology and enterprise research labs.",
      icon: <Briefcase className="w-5 h-5 text-blue-400" />
    }
  ];

  return (
    <div className="relative overflow-hidden pt-8 pb-16 lg:pb-24">
      {/* Background Subtle Accent Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Independent Student Project Disclaimer Banner */}
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/70 text-xs text-slate-300 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="font-medium text-slate-200">Independent Student-Built Discovery Platform</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400">Sapthagiri NPS University Edition</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Your Future Doesn't Have to Be a Guess.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
            Discover your engineering interests, explore possible career paths, and experience a new way to plan your journey with <span className="text-white font-semibold font-mono">UNIPATH</span>.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('quiz')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base shadow-lg shadow-blue-600/30 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Discover My Path</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('sapthagiri')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/80 text-slate-200 hover:text-white font-medium text-base border border-slate-700/80 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore Sapthagiri</span>
              <BookOpen className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          <p className="mt-4 text-xs text-slate-400">
            Unbiased self-exploration tool based on verified university information. No login or personal data required.
          </p>
        </div>

        {/* Interactive Hero Illustration: Visual Roadmap */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="bg-[#111827] rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-3">
              <div>
                <span className="text-xs uppercase font-semibold text-blue-400 tracking-wider">Interactive Architecture</span>
                <h3 className="text-xl font-bold text-white mt-1">From Curious Mind to Industry Engineer</h3>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span>Click any stage below to inspect</span>
              </div>
            </div>

            {/* Stepper Node Visual Bar */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3">
              {journeySteps.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`text-left p-3.5 rounded-xl transition-all duration-200 border cursor-pointer ${
                    activeStep === idx
                      ? 'bg-blue-600/10 border-blue-500/80 text-white shadow-sm ring-1 ring-blue-500/50'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-mono font-semibold text-slate-400">{step.label}</span>
                    {activeStep === idx && <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />}
                  </div>
                  <p className="text-xs font-medium text-slate-200 truncate">{step.title}</p>
                </button>
              ))}
            </div>

            {/* Active Node Detail Card */}
            <div className="mt-6 p-5 sm:p-6 rounded-xl bg-slate-900/90 border border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                  {journeySteps[activeStep].icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase font-bold text-blue-400">{journeySteps[activeStep].badge}</span>
                    <span className="text-xs text-slate-500">• Stage {activeStep + 1} of 5</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white mt-0.5">
                    {journeySteps[activeStep].title}
                  </h4>
                  <p className="text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                    {journeySteps[activeStep].desc}
                  </p>
                </div>
              </div>

              <div className="w-full sm:w-auto flex items-center justify-end">
                <button
                  onClick={() => onNavigate('simulator')}
                  className="w-full sm:w-auto px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                >
                  <span>Build My Own Path</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Three Core Feature Cards Below Hero */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          {/* Card A: Discover Your Fit */}
          <div 
            onClick={() => onNavigate('quiz')}
            className="group p-6 rounded-2xl bg-[#111827] border border-slate-800 hover:border-blue-500/50 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-blue-900/20"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6" />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                Discover Your Fit
              </h3>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
            </div>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Explore engineering possibilities based on your interests through our 7-step guided exploration quiz.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-blue-400 font-semibold">
              <span>Take the 3-minute quiz</span>
            </div>
          </div>

          {/* Card B: Experience Your Future */}
          <div 
            onClick={() => onNavigate('simulator')}
            className="group p-6 rounded-2xl bg-[#111827] border border-slate-800 hover:border-blue-500/50 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-blue-900/20"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                Experience Your Future
              </h3>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
            </div>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Build a personalised example journey from your interests to foundational skills, projects, and careers.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-blue-400 font-semibold">
              <span>Launch Future Simulator</span>
            </div>
          </div>

          {/* Card C: Explore Sapthagiri */}
          <div 
            onClick={() => onNavigate('sapthagiri')}
            className="group p-6 rounded-2xl bg-[#111827] border border-slate-800 hover:border-blue-500/50 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-blue-900/20"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <BookOpen className="w-6 h-6" />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                Explore Sapthagiri
              </h3>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
            </div>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Find publicly available university information, verified engineering programmes, and official admission resources.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-blue-400 font-semibold">
              <span>View verified admissions info</span>
            </div>
          </div>
        </div>

        {/* Interactive Progression Section: "Your Interests. Your Possibilities." */}
        <div className="mt-20 py-12 px-6 sm:px-10 rounded-2xl bg-gradient-to-b from-[#111827] to-[#0B1220] border border-slate-800">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase font-bold tracking-wider text-blue-400">Progression Model</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Your Interests. Your Possibilities.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400">
              Unlike static college prospectuses, UNIPATH anchors your college choice in who you could become through a structured 5-layer pathway:
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-5 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
              <div className="text-xs font-mono text-blue-400 mb-1">STEP 1</div>
              <h4 className="font-bold text-white text-sm">INTEREST</h4>
              <p className="text-xs text-slate-400 mt-1">Curiosity, hobbies, and favorite technological topics.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
              <div className="text-xs font-mono text-blue-400 mb-1">STEP 2</div>
              <h4 className="font-bold text-white text-sm">BRANCH</h4>
              <p className="text-xs text-slate-400 mt-1">Matching academic degree at Sapthagiri NPS University.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
              <div className="text-xs font-mono text-blue-400 mb-1">STEP 3</div>
              <h4 className="font-bold text-white text-sm">SKILLS</h4>
              <p className="text-xs text-slate-400 mt-1">Foundational math, code, circuits, and problem-solving.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
              <div className="text-xs font-mono text-blue-400 mb-1">STEP 4</div>
              <h4 className="font-bold text-white text-sm">PROJECTS</h4>
              <p className="text-xs text-slate-400 mt-1">Real-world prototypes that prove ability to build.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
              <div className="text-xs font-mono text-blue-400 mb-1">STEP 5</div>
              <h4 className="font-bold text-white text-sm">CAREERS</h4>
              <p className="text-xs text-slate-400 mt-1">High-impact industry roles and research frontiers.</p>
            </div>
          </div>

          {/* Final Call to Action */}
          <div className="mt-12 text-center pt-8 border-t border-slate-800/80">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Your next chapter starts with one question.
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Take the quick 7-question interest quiz and discover your match.
            </p>
            <div className="mt-5">
              <button
                onClick={() => onNavigate('quiz')}
                className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Find My Path</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
