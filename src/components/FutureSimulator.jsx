import React, { useState, useEffect } from 'react';
import { generateFutureJourney } from '../data/engineeringData';
import { 
  Sparkles, 
  ArrowRight, 
  Printer, 
  RotateCcw, 
  Layers, 
  Code2, 
  Cpu, 
  Briefcase, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  AlertCircle,
  BookOpen,
  SlidersHorizontal,
  Compass
} from 'lucide-react';

export default function FutureSimulator({ preselectedInterest, onExploreSapthagiri }) {
  // Simulator input state
  const [interest, setInterest] = useState('ai');
  const [activity, setActivity] = useState('apps');
  const [experience, setExperience] = useState('beginner');
  const [careerGoal, setCareerGoal] = useState('industry');
  
  // Roadmap state
  const [generatedJourney, setGeneratedJourney] = useState(null);
  const [expandedStages, setExpandedStages] = useState({
    stage1: true,
    stage2: true,
    stage3: true,
    stage4: true,
    stage5: true
  });

  // Sync when user clicks "Simulate This Journey" from FitQuiz
  useEffect(() => {
    if (preselectedInterest) {
      setInterest(preselectedInterest);
    }
  }, [preselectedInterest]);

  const interestOptions = [
    { id: 'ai', label: 'Artificial Intelligence', desc: 'Neural nets, machine learning & automation' },
    { id: 'swe', label: 'Software Development', desc: 'Web systems, cloud architectures & apps' },
    { id: 'ds', label: 'Data Science', desc: 'Predictive analytics, statistics & insights' },
    { id: 'ece', label: 'Electronics & Hardware', desc: 'Microcontrollers, IoT circuits & silicon' },
    { id: 'eee', label: 'Electrical Systems', desc: 'Power grids, clean energy & electric vehicles' },
    { id: 'explore', label: 'Still Exploring', desc: 'Broad exposure across engineering domains' }
  ];

  const activityOptions = [
    { id: 'apps', label: 'Building Applications', desc: 'Writing code and assembling working software tools' },
    { id: 'logic', label: 'Solving Logical Problems', desc: 'Deconstructing complex puzzles & algorithms' },
    { id: 'data', label: 'Working with Data', desc: 'Discovering patterns, visual charts & statistics' },
    { id: 'hardware', label: 'Experimenting with Hardware', desc: 'Wiring breadboards, soldering, and sensor tinkering' },
    { id: 'research', label: 'Researching New Technologies', desc: 'Exploring emerging papers & next-generation concepts' }
  ];

  const experienceOptions = [
    { id: 'beginner', label: 'Beginner', desc: 'New to coding or engineering concepts' },
    { id: 'intermediate', label: 'Some Basic Knowledge', desc: 'Familiar with high school math and basic syntax' },
    { id: 'advanced', label: 'Already Building Projects', desc: 'Created some personal scripts, apps, or circuits' }
  ];

  const careerOptions = [
    { id: 'industry', label: 'Industry Tech Role', desc: 'Software, hardware, or systems engineer at tech companies' },
    { id: 'research', label: 'R&D / Advanced Studies', desc: 'Innovation laboratories or Master’s/PhD research' },
    { id: 'product', label: 'Product & Startup Building', desc: 'Designing end-to-end tech products as a founder or creator' },
    { id: 'core', label: 'Core Infrastructure & Energy', desc: 'Working on national power grids, robotics, or telecom' }
  ];

  const handleGenerate = (e) => {
    if (e) e.preventDefault();
    const journey = generateFutureJourney(interest, activity, experience, careerGoal);
    setGeneratedJourney(journey);
  };

  const handleReset = () => {
    setInterest('ai');
    setActivity('apps');
    setExperience('beginner');
    setCareerGoal('industry');
    setGeneratedJourney(null);
  };

  const toggleStage = (stageKey) => {
    setExpandedStages(prev => ({
      ...prev,
      [stageKey]: !prev[stageKey]
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="simulator" className="py-16 bg-[#111827] border-t border-slate-800 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 no-print">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Roadmapping</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Future Simulator
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Design your hypothetical 4-year engineering journey. Select your interests and starting experience to generate a realistic timeline of concepts, projects, and career horizons.
          </p>
        </div>

        {/* Simulator Form (Hidden in print mode) */}
        {!generatedJourney ? (
          <div className="bg-[#0B1220] rounded-2xl border border-slate-800 p-6 sm:p-10 shadow-xl no-print">
            
            <div className="flex items-center gap-2 pb-6 border-b border-slate-800 mb-8">
              <SlidersHorizontal className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-white">Configure Your Learning Parameters</h3>
            </div>

            <form onSubmit={handleGenerate} className="space-y-8">
              
              {/* Step 1: Interest Area */}
              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-1">
                  1. Which engineering domain excites you most?
                </label>
                <p className="text-xs text-slate-400 mb-3">Choose the primary area you wish to simulate.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {interestOptions.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setInterest(opt.id)}
                      className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                        interest === opt.id
                          ? 'bg-blue-600/10 border-blue-500 text-white shadow-sm ring-1 ring-blue-500/50'
                          : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800/60'
                      }`}
                    >
                      <div className="font-semibold text-sm text-white mb-0.5">{opt.label}</div>
                      <div className="text-xs text-slate-400">{opt.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Preferred Activity */}
              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-1">
                  2. What type of activity do you enjoy most?
                </label>
                <p className="text-xs text-slate-400 mb-3">This shapes the style of hands-on projects we suggest.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {activityOptions.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setActivity(opt.id)}
                      className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                        activity === opt.id
                          ? 'bg-blue-600/10 border-blue-500 text-white shadow-sm ring-1 ring-blue-500/50'
                          : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800/60'
                      }`}
                    >
                      <div className="font-semibold text-sm text-white mb-0.5">{opt.label}</div>
                      <div className="text-xs text-slate-400">{opt.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Experience Level */}
              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-1">
                  3. What is your current technical experience level?
                </label>
                <p className="text-xs text-slate-400 mb-3">We calibrate initial projects to prevent frustration or boredom.</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {experienceOptions.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setExperience(opt.id)}
                      className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                        experience === opt.id
                          ? 'bg-blue-600/10 border-blue-500 text-white shadow-sm ring-1 ring-blue-500/50'
                          : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800/60'
                      }`}
                    >
                      <div className="font-semibold text-sm text-white mb-0.5">{opt.label}</div>
                      <div className="text-xs text-slate-400">{opt.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Long-Term Career Direction */}
              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-1">
                  4. Which long-term career direction would you like to explore?
                </label>
                <p className="text-xs text-slate-400 mb-3">Where do you envision yourself after graduation?</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {careerOptions.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setCareerGoal(opt.id)}
                      className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                        careerGoal === opt.id
                          ? 'bg-blue-600/10 border-blue-500 text-white shadow-sm ring-1 ring-blue-500/50'
                          : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800/60'
                      }`}
                    >
                      <div className="font-semibold text-sm text-white mb-0.5">{opt.label}</div>
                      <div className="text-xs text-slate-400">{opt.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Generates instant deterministic roadmap using UNIPATH predefined guidance.</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Generate My Roadmap</span>
                </button>
              </div>

            </form>

          </div>
        ) : (
          /* Generated Visual Roadmap */
          <div className="space-y-6">
            
            {/* Top Bar with Controls */}
            <div className="bg-[#0B1220] rounded-2xl border border-slate-800 p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4 shadow-xl print-card">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase font-bold text-blue-400 print-text-dark">Personalized Journey</span>
                  <span className="text-xs text-slate-500">•</span>
                  <span className="text-xs text-slate-400 font-medium capitalize print-text-muted">
                    {experience} Level
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mt-1 print-text-dark">
                  {generatedJourney.interestName}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5 print-text-muted">
                  Illustrative pathway toward: <span className="text-slate-300 font-semibold">{careerOptions.find(c => c.id === careerGoal)?.label}</span>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 no-print">
                <button
                  onClick={() => setGeneratedJourney(null)}
                  className="px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-colors"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>Change My Interests</span>
                </button>

                <button
                  onClick={() => handleGenerate()}
                  className="px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Generate Another Path</span>
                </button>

                <button
                  onClick={handlePrint}
                  className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm shadow-blue-600/20 cursor-pointer transition-all"
                  title="Print or save as PDF"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Save as PDF / Print</span>
                </button>
              </div>
            </div>

            {/* UNIPATH Predefined Guidance Banner */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3 text-xs text-slate-300 print-card">
              <AlertCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <strong>UNIPATH Guidance Notice: </strong>
                This roadmap is generated using UNIPATH's predefined curriculum guidance framework to help you visualize your skill progression. It is an educational template, not an official university syllabus.
              </div>
            </div>

            {/* Visual Roadmap Stages */}
            <div className="space-y-4 relative">
              
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute left-[27px] top-6 bottom-6 w-0.5 bg-slate-800 pointer-events-none no-print" />

              {/* STAGE 1: EXPLORE */}
              <div className="bg-[#0B1220] rounded-2xl border border-slate-800 overflow-hidden shadow-lg print-card">
                <div 
                  onClick={() => toggleStage('stage1')}
                  className="p-5 sm:p-6 flex items-center justify-between cursor-pointer hover:bg-slate-900/40 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center font-bold text-sm shrink-0">
                      01
                    </div>
                    <div>
                      <div className="text-xs font-mono font-semibold text-blue-400 print-text-dark">STAGE 1: EXPLORE</div>
                      <h4 className="text-base sm:text-lg font-bold text-white print-text-dark">Understanding the Mental Model</h4>
                    </div>
                  </div>
                  <div className="no-print text-slate-400">
                    {expandedStages.stage1 ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </div>

                {expandedStages.stage1 && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-800/60">
                    <p className="text-sm text-slate-300 leading-relaxed print-text-dark">
                      {generatedJourney.stage1.content}
                    </p>
                    <div className="mt-4 p-3 rounded-lg bg-slate-900 border border-slate-800/80 text-xs text-slate-400 print-card">
                      <strong className="text-slate-200">Recommended Mindset: </strong> Focus on why things work rather than memorizing formulas. Engineering begins with curiosity about the inner mechanisms.
                    </div>
                  </div>
                )}
              </div>

              {/* STAGE 2: LEARN */}
              <div className="bg-[#0B1220] rounded-2xl border border-slate-800 overflow-hidden shadow-lg print-card">
                <div 
                  onClick={() => toggleStage('stage2')}
                  className="p-5 sm:p-6 flex items-center justify-between cursor-pointer hover:bg-slate-900/40 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center font-bold text-sm shrink-0">
                      02
                    </div>
                    <div>
                      <div className="text-xs font-mono font-semibold text-blue-400 print-text-dark">STAGE 2: LEARN</div>
                      <h4 className="text-base sm:text-lg font-bold text-white print-text-dark">Foundational Skills & Core Concepts</h4>
                    </div>
                  </div>
                  <div className="no-print text-slate-400">
                    {expandedStages.stage2 ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </div>

                {expandedStages.stage2 && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-800/60">
                    <p className="text-sm text-slate-300 mb-3 print-text-dark">
                      {generatedJourney.stage2.content}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {generatedJourney.stage2.topics.map((topic, idx) => (
                        <div key={idx} className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs flex items-center gap-2 text-slate-200 print-card">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* STAGE 3: BUILD */}
              <div className="bg-[#0B1220] rounded-2xl border border-slate-800 overflow-hidden shadow-lg print-card">
                <div 
                  onClick={() => toggleStage('stage3')}
                  className="p-5 sm:p-6 flex items-center justify-between cursor-pointer hover:bg-slate-900/40 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center font-bold text-sm shrink-0">
                      03
                    </div>
                    <div>
                      <div className="text-xs font-mono font-semibold text-blue-400 print-text-dark">STAGE 3: BUILD</div>
                      <h4 className="text-base sm:text-lg font-bold text-white print-text-dark">Realistic Milestone Projects</h4>
                    </div>
                  </div>
                  <div className="no-print text-slate-400">
                    {expandedStages.stage3 ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </div>

                {expandedStages.stage3 && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-800/60">
                    <p className="text-sm text-slate-300 mb-3 print-text-dark">
                      {generatedJourney.stage3.content}
                    </p>
                    <div className="space-y-3">
                      {generatedJourney.stage3.projects.map((proj, idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-slate-900 border border-slate-800 print-card">
                          <div className="flex items-center justify-between mb-1">
                            <h5 className="text-sm font-bold text-white print-text-dark">{proj.name}</h5>
                            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 print-badge">
                              Project #{idx + 1}
                            </span>
                          </div>
                          <p className="text-xs text-slate-300 leading-relaxed print-text-muted">{proj.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* STAGE 4: GROW */}
              <div className="bg-[#0B1220] rounded-2xl border border-slate-800 overflow-hidden shadow-lg print-card">
                <div 
                  onClick={() => toggleStage('stage4')}
                  className="p-5 sm:p-6 flex items-center justify-between cursor-pointer hover:bg-slate-900/40 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center font-bold text-sm shrink-0">
                      04
                    </div>
                    <div>
                      <div className="text-xs font-mono font-semibold text-blue-400 print-text-dark">STAGE 4: GROW</div>
                      <h4 className="text-base sm:text-lg font-bold text-white print-text-dark">Portfolio & Community Practice</h4>
                    </div>
                  </div>
                  <div className="no-print text-slate-400">
                    {expandedStages.stage4 ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </div>

                {expandedStages.stage4 && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-800/60">
                    <p className="text-sm text-slate-300 mb-3 print-text-dark">
                      {generatedJourney.stage4.content}
                    </p>
                    <div className="space-y-2">
                      {generatedJourney.stage4.actionItems.map((item, idx) => (
                        <div key={idx} className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs flex items-start gap-2.5 text-slate-200 print-card">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* STAGE 5: EXPLORE CAREERS */}
              <div className="bg-[#0B1220] rounded-2xl border border-slate-800 overflow-hidden shadow-lg print-card">
                <div 
                  onClick={() => toggleStage('stage5')}
                  className="p-5 sm:p-6 flex items-center justify-between cursor-pointer hover:bg-slate-900/40 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center font-bold text-sm shrink-0">
                      05
                    </div>
                    <div>
                      <div className="text-xs font-mono font-semibold text-blue-400 print-text-dark">STAGE 5: EXPLORE CAREERS</div>
                      <h4 className="text-base sm:text-lg font-bold text-white print-text-dark">Possible Career Horizons</h4>
                    </div>
                  </div>
                  <div className="no-print text-slate-400">
                    {expandedStages.stage5 ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </div>

                {expandedStages.stage5 && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-800/60">
                    <p className="text-sm text-slate-300 mb-3 print-text-dark">
                      {generatedJourney.stage5.content}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                      {generatedJourney.stage5.careers.map((career, idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-slate-900 border border-slate-800 print-card">
                          <h6 className="text-sm font-bold text-white mb-1 print-text-dark">{career.role}</h6>
                          <p className="text-xs text-slate-400 leading-relaxed print-text-muted">{career.desc}</p>
                        </div>
                      ))}
                    </div>

                    <div className="p-3.5 rounded-lg bg-blue-950/30 border border-blue-800/40 flex items-center justify-between flex-wrap gap-2 print-card">
                      <div className="text-xs text-blue-300">
                        <strong>Relevant Programme at Sapthagiri: </strong>
                        <span>{generatedJourney.stage5.relevantBranch}</span>
                      </div>
                      <button
                        onClick={onExploreSapthagiri}
                        className="text-xs font-semibold text-blue-400 hover:text-blue-300 underline cursor-pointer no-print"
                      >
                        Explore branch details &rarr;
                      </button>
                    </div>
                  </div>
                )}
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="p-6 rounded-2xl bg-[#0B1220] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 no-print">
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-slate-700 hover:bg-slate-800 text-slate-300 text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Start Again</span>
              </button>

              <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onExploreSapthagiri}
                  className="px-6 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <BookOpen className="w-4 h-4 text-blue-400" />
                  <span>Explore Sapthagiri Programmes</span>
                </button>
                <button
                  onClick={handlePrint}
                  className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-md shadow-blue-600/30 cursor-pointer transition-all"
                >
                  <Printer className="w-4 h-4" />
                  <span>Save as PDF</span>
                </button>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
