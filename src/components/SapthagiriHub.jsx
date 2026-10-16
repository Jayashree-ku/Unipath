import React, { useState } from 'react';
import { 
  UNIVERSITY_INFO, 
  UNIVERSITY_PROGRAMMES 
} from '../data/engineeringData';
import { 
  Building2, 
  ExternalLink, 
  GraduationCap, 
  ShieldCheck, 
  Compass, 
  MapPin, 
  BookOpen, 
  Search, 
  CheckCircle2, 
  AlertCircle,
  Phone,
  Globe
} from 'lucide-react';

export default function SapthagiriHub() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Programmes' },
    { id: 'ug', label: 'Undergraduate (B.E.)' },
    { id: 'pg', label: 'Postgraduate (M.Tech)' }
  ];

  const filteredProgrammes = UNIVERSITY_PROGRAMMES.filter(prog => {
    const matchesCategory = selectedCategory === 'all' 
      ? true 
      : selectedCategory === 'ug' 
        ? prog.degree.includes('Undergraduate') 
        : prog.degree.includes('Postgraduate');

    const matchesSearch = prog.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prog.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prog.keyAreas.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="sapthagiri" className="py-16 bg-[#111827] border-t border-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Verified University Information</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Explore Sapthagiri NPS University
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Browse verified engineering programmes, official admission portals, and campus resources. Clear distinctions are maintained between officially sourced data and UNIPATH guidance.
          </p>
        </div>

        {/* Legend: Official vs Guidance */}
        <div className="mb-8 p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-emerald-500/30" />
              <span className="text-xs font-semibold text-emerald-400">Officially Sourced Information</span>
              <span className="text-[11px] text-slate-400 hidden sm:inline">(Direct from snpsu.edu.in)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-500 ring-2 ring-blue-500/30" />
              <span className="text-xs font-semibold text-blue-400">UNIPATH Guidance</span>
              <span className="text-[11px] text-slate-400 hidden sm:inline">(Educational orientation notes)</span>
            </div>
          </div>
          <div className="text-[11px] text-slate-500">
            Independent student platform • Unofficial guide
          </div>
        </div>

        {/* Quick Official University Resource Portals */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          
          <div className="p-5 rounded-2xl bg-[#0B1220] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <Globe className="w-5 h-5 text-blue-400" />
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Official Sourced
                </span>
              </div>
              <h4 className="text-base font-bold text-white mb-1">Official Main Website</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Comprehensive university updates, institutional governance, faculties, and events.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800">
              <a
                href={UNIVERSITY_INFO.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 cursor-pointer"
              >
                <span>Visit snpsu.edu.in</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#0B1220] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <BookOpen className="w-5 h-5 text-blue-400" />
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Official Sourced
                </span>
              </div>
              <h4 className="text-base font-bold text-white mb-1">Engineering Information</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Faculty profiles, specialized labs, curriculum frameworks, and academic regulations.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800">
              <a
                href={UNIVERSITY_INFO.engineeringPortal}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 cursor-pointer"
              >
                <span>Explore Engineering Info</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#0B1220] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <ShieldCheck className="w-5 h-5 text-blue-400" />
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Official Sourced
                </span>
              </div>
              <h4 className="text-base font-bold text-white mb-1">Official Admissions Info</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Eligibility criteria, CET/COMEDK details, application guidelines, and dates.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800">
              <a
                href={UNIVERSITY_INFO.admissionsInfo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 cursor-pointer"
              >
                <span>View Admissions Info</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#0B1220] border border-blue-500/40 hover:border-blue-500 transition-all flex flex-col justify-between shadow-lg shadow-blue-950/40">
            <div>
              <div className="flex items-center justify-between mb-3">
                <GraduationCap className="w-5 h-5 text-blue-400" />
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  Active Portal
                </span>
              </div>
              <h4 className="text-base font-bold text-white mb-1">Admissions Application</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Direct student application submission portal hosted on snpsuadmissions.snpsu.edu.in.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800">
              <a
                href={UNIVERSITY_INFO.admissionsPortal}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 cursor-pointer"
              >
                <span>Apply via Official Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Programme Filter and Search Bar */}
        <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white font-semibold shadow-sm'
                    : 'bg-[#0B1220] border border-slate-800 text-slate-300 hover:bg-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter programmes or skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#0B1220] border border-slate-800 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Programme Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProgrammes.map((prog) => (
            <div 
              key={prog.id}
              className="p-6 rounded-2xl bg-[#0B1220] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <span className="text-[11px] font-mono text-blue-400 uppercase font-semibold">{prog.degree}</span>
                    <h3 className="text-lg font-bold text-white mt-0.5">{prog.name}</h3>
                  </div>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                    Official Course
                  </span>
                </div>

                {/* Officially Sourced Overview */}
                <div className="mt-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-semibold mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Officially sourced curriculum summary:</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{prog.overview}</p>
                </div>

                {/* Key Syllabus Areas */}
                <div className="mt-4">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                    Core Curriculum Pillars:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {prog.keyAreas.map((area, aIdx) => (
                      <span 
                        key={aIdx}
                        className="text-xs px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* UNIPATH Guidance Note */}
                <div className="mt-4 p-3.5 rounded-xl bg-blue-950/20 border border-blue-900/30 text-xs">
                  <div className="flex items-center gap-1.5 text-blue-400 font-semibold mb-1">
                    <Compass className="w-3.5 h-3.5" />
                    <span>UNIPATH Guidance & Perspective:</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{prog.unipathGuidance}</p>
                </div>
              </div>

              {/* Bottom Official Link Button */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-500">Verified SNPSU URL</span>
                <a
                  href={prog.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-colors shadow-sm"
                >
                  <span>Official Syllabus & Details</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredProgrammes.length === 0 && (
          <div className="text-center py-12 bg-[#0B1220] rounded-2xl border border-slate-800">
            <AlertCircle className="w-8 h-8 text-slate-500 mx-auto mb-2" />
            <h4 className="text-sm font-semibold text-slate-300">No matching programmes found</h4>
            <p className="text-xs text-slate-500 mt-1">Try searching for keywords like "CSE", "Data", or "Electronics".</p>
          </div>
        )}

        {/* Verified Campus Facts & Location Details */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#0B1220] border border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-800 gap-4">
            <div>
              <span className="text-xs font-mono uppercase text-blue-400 font-semibold">Campus & Infrastructure</span>
              <h3 className="text-xl font-bold text-white mt-1">Sapthagiri NPS University Campus</h3>
              <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{UNIVERSITY_INFO.location}</span>
              </p>
            </div>
            <div className="text-xs text-slate-400">
              <span className="font-semibold text-slate-300">Statutory Status: </span>
              <span>{UNIVERSITY_INFO.type}</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {UNIVERSITY_INFO.campusFeatures.map((feat, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                <div className="flex items-center gap-1.5 text-emerald-400 font-semibold mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-mono uppercase">{feat.sourceLabel}</span>
                </div>
                <h5 className="font-bold text-white text-sm mb-1">{feat.title}</h5>
                <p className="text-slate-400 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>

          {/* Verification Transparency Notice */}
          <div className="mt-6 p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-xs text-slate-400 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <strong>Verification Standard: </strong>
              All programme names, degrees, and URLs in this section were verified directly against the live Sapthagiri NPS University web portal (snpsu.edu.in). No fees, rankings, or placement percentages are fabricated. Prospective students should always consult the official admissions office for current academic session criteria.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
