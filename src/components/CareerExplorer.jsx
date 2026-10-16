import React, { useState } from 'react';
import { CAREER_PATHWAYS } from '../data/engineeringData';
import { 
  Briefcase, 
  Filter, 
  ChevronRight, 
  ChevronDown, 
  Code2, 
  Cpu, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  HelpCircle,
  BookOpen
} from 'lucide-react';

export default function CareerExplorer({ onSelectPathwayForSimulation }) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activePathwayId, setActivePathwayId] = useState(CAREER_PATHWAYS[0].id);
  const [expandedStageIndex, setExpandedStageIndex] = useState(0);

  const filterCategories = [
    { id: 'all', label: 'All 5 Engineering Paths' },
    { id: 'path-ai', label: 'Artificial Intelligence' },
    { id: 'path-swe', label: 'Software Development' },
    { id: 'path-ds', label: 'Data Science' },
    { id: 'path-ece', label: 'Electronics & Embedded' },
    { id: 'path-eee', label: 'Electrical Systems' }
  ];

  const filteredPathways = selectedFilter === 'all'
    ? CAREER_PATHWAYS
    : CAREER_PATHWAYS.filter(p => p.id === selectedFilter);

  const activePathway = CAREER_PATHWAYS.find(p => p.id === activePathwayId) || CAREER_PATHWAYS[0];

  return (
    <section id="explorer" className="py-16 bg-[#0B1220] border-t border-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Structured Progression</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Career Path Explorer
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Explore 5 end-to-end engineering career blueprints. Discover how foundational classroom learning connects with portfolio projects and high-impact industry roles.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterCategories.map((f) => (
            <button
              key={f.id}
              onClick={() => {
                setSelectedFilter(f.id);
                if (f.id !== 'all') {
                  setActivePathwayId(f.id);
                }
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-150 cursor-pointer ${
                selectedFilter === f.id
                  ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/30'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Pathway Explorer Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Pathway Selector Cards */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider px-1 mb-2">
              Select an Engineering Specialization ({filteredPathways.length})
            </div>

            {filteredPathways.map((path) => {
              const isSelected = path.id === activePathwayId;
              return (
                <div
                  key={path.id}
                  onClick={() => setActivePathwayId(path.id)}
                  className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#111827] border-blue-500 shadow-xl ring-1 ring-blue-500/40 text-white'
                      : 'bg-[#111827]/60 border-slate-800 text-slate-300 hover:bg-[#111827] hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold">
                      {path.badge}
                    </span>
                    <span className="text-xs text-slate-500">4 Stages</span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1.5">{path.title}</h3>
                  <p className="text-xs text-slate-400 mb-3">{path.interest}</p>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="text-slate-400 truncate max-w-[240px]">
                      Branch: <strong className="text-slate-200">{path.relevantBranch}</strong>
                    </span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-blue-400 translate-x-1' : 'text-slate-600'}`} />
                  </div>
                </div>
              );
            })}

            {/* Illustrative Disclaimer */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 mt-4">
              <strong>Educational Disclaimer: </strong> These career pathways are illustrative learning roadmaps developed by UNIPATH to help students understand career trajectories. They are not official university curricula.
            </div>
          </div>

          {/* Right Column: Interactive Deep-Dive Stages */}
          <div className="lg:col-span-7 bg-[#111827] rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-2xl">
            
            {/* Header of Active Pathway */}
            <div className="pb-6 border-b border-slate-800">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider">
                  Detailed Roadmap Blueprint
                </span>
                <span className="text-xs text-slate-500">•</span>
                <span className="text-xs text-slate-400 font-medium">Sapthagiri NPS University Matching Branch</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                {activePathway.title}
              </h3>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <span className="text-xs px-3 py-1 rounded-md bg-blue-500/10 text-blue-300 border border-blue-500/20 font-medium">
                  {activePathway.relevantBranch}
                </span>
                <a
                  href={activePathway.officialBranchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 font-semibold underline underline-offset-2"
                >
                  <span>View Official Course Page</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* 5-Step Architecture Flow Header */}
            <div className="my-6 p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-center justify-between overflow-x-auto gap-2">
              <span className="font-mono text-blue-400 font-semibold shrink-0">Pathway Structure:</span>
              <div className="flex items-center gap-1.5 shrink-0 font-medium text-[11px] text-slate-300">
                <span>Interest</span>
                <span className="text-slate-500">&rarr;</span>
                <span className="text-blue-300">Degree</span>
                <span className="text-slate-500">&rarr;</span>
                <span>Foundations</span>
                <span className="text-slate-500">&rarr;</span>
                <span>Projects</span>
                <span className="text-slate-500">&rarr;</span>
                <span className="text-emerald-400">Careers</span>
              </div>
            </div>

            {/* Interactive Stages Accordion */}
            <div className="space-y-4">
              {activePathway.stages.map((stg, sIdx) => {
                const isExpanded = expandedStageIndex === sIdx;
                return (
                  <div 
                    key={sIdx}
                    className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setExpandedStageIndex(isExpanded ? -1 : sIdx)}
                      className="w-full p-4.5 text-left flex items-center justify-between hover:bg-slate-800/40 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-400 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                          0{sIdx + 1}
                        </div>
                        <div>
                          <div className="text-xs font-mono text-slate-400">{stg.stageName}</div>
                          <div className="text-sm font-bold text-white">{stg.focus}</div>
                        </div>
                      </div>
                      {isExpanded ? <ChevronDown className="w-4 h-4 text-blue-400" /> : <ChevronRight className="w-4 h-4 text-slate-500" />}
                    </button>

                    {isExpanded && (
                      <div className="px-5 pb-5 pt-1 border-t border-slate-800/60">
                        <p className="text-xs text-slate-300 leading-relaxed mb-3">
                          {stg.description}
                        </p>
                        <div className="space-y-2">
                          {stg.topics.map((item, tIdx) => (
                            <div key={tIdx} className="p-2.5 rounded-lg bg-[#0B1220] border border-slate-800/80 text-xs text-slate-200 flex items-start gap-2.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* CTA at Bottom of Pathway */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-400">
                Want to customize this into an individual 4-year plan?
              </span>
              <button
                onClick={() => {
                  let mappedKey = 'ai';
                  if (activePathway.id === 'path-swe') mappedKey = 'swe';
                  if (activePathway.id === 'path-ds') mappedKey = 'ds';
                  if (activePathway.id === 'path-ece') mappedKey = 'ece';
                  if (activePathway.id === 'path-eee') mappedKey = 'eee';
                  onSelectPathwayForSimulation(mappedKey);
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md shadow-blue-600/30 cursor-pointer transition-all"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Simulate In Future Simulator</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
