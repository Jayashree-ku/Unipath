import React from 'react';
import { 
  Compass, 
  ShieldCheck, 
  Info, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle,
  HeartHandshake,
  Layers,
  ArrowRight
} from 'lucide-react';

export default function AboutSection({ onNavigate }) {
  return (
    <section id="about" className="py-16 bg-[#0B1220] border-t border-slate-800 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
            <Info className="w-3.5 h-3.5" />
            <span>Mission & Integrity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About UNIPATH
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            An independent educational exploration initiative built for students, parents, and curious minds.
          </p>
        </div>

        {/* Core Mission Statement Card */}
        <div className="bg-[#111827] rounded-2xl border border-slate-800 p-6 sm:p-10 shadow-xl space-y-6">
          
          <div className="p-5 rounded-xl bg-blue-950/20 border border-blue-900/40">
            <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed">
              "UNIPATH is a student-built exploration platform designed to help prospective engineering students understand their interests, discover learning possibilities, and explore publicly available information about Sapthagiri NPS University."
            </p>
          </div>

          {/* Differentiating Philosophy */}
          <div>
            <span className="text-xs font-mono uppercase text-blue-400 font-semibold block mb-1">
              Core Design Differentiator
            </span>
            <h3 className="text-xl font-bold text-white mb-2">
              "Don't just choose where to study. Discover what you could become."
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Traditional college searches reduce academic discovery to marketing brochures, cutoffs, and rankings. UNIPATH takes an engineering-first perspective: starting from your intrinsic curiosity, showing the tangible skills and real-world projects you could build, and anchoring that trajectory to verified degree programmes at Sapthagiri NPS University.
            </p>
          </div>

          {/* Pillars of Integrity & Buildathon Rules Compliance */}
          <div className="pt-4 border-t border-slate-800/80">
            <span className="text-xs font-mono uppercase text-slate-400 font-semibold block mb-3">
              Guiding Principles & Disclaimers
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                <div className="flex items-center gap-2 text-blue-400 font-semibold mb-1">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>Independent Exploration</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  UNIPATH is an independent student-built exploratory project. It is not an official university admissions portal or affiliated with Sapthagiri NPS University management unless formal affiliation is established.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                <div className="flex items-center gap-2 text-blue-400 font-semibold mb-1">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Zero Fabrication Standard</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  We do not fabricate placement metrics, fee schedules, faculty testimonials, or rankings. All university information is verified against official university resources.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                <div className="flex items-center gap-2 text-blue-400 font-semibold mb-1">
                  <Layers className="w-4 h-4 shrink-0" />
                  <span>No Artificial Black-Box Claims</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Our quizzes and simulator use transparent, deterministic rule-based algorithms. We do not pretend an external AI model made scientific admissions promises.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                <div className="flex items-center gap-2 text-blue-400 font-semibold mb-1">
                  <HeartHandshake className="w-4 h-4 shrink-0" />
                  <span>Respect for Student Choice</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Learning journeys are illustrative guidance to spark curiosity. Final career and academic outcomes depend on individual student dedication and formal faculty mentoring.
                </p>
              </div>

            </div>
          </div>

          {/* Quick CTA back to navigation */}
          <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-slate-400">
              Ready to explore your potential path?
            </span>
            <button
              onClick={() => onNavigate('quiz')}
              className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              <span>Take the Discovery Quiz</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
