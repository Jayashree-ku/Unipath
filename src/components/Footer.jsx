import React from 'react';
import { Compass, ExternalLink, ShieldCheck, Heart, ArrowUp } from 'lucide-react';
import { UNIVERSITY_INFO } from '../data/engineeringData';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080D18] border-t border-slate-800 text-slate-400 text-xs no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Brand & Wordmark */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-white font-mono tracking-tight">UNIPATH</span>
            </div>
            <p className="text-slate-300 font-medium text-xs">
              Your Future, Your Path.
            </p>
            <p className="text-slate-400 text-xs leading-relaxed">
              An interactive discovery and engineering career exploration platform built for prospective students exploring Sapthagiri NPS University.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>Independent Student Project</span>
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 font-mono">
              Exploration
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('quiz')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Discover Your Fit (Quiz)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('simulator')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Future Simulator
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('explorer')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Career Path Explorer
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About UNIPATH
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Official Sapthagiri NPS University Portals */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 font-mono">
              Official Portals
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={UNIVERSITY_INFO.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
                >
                  <span>Main University Website</span>
                  <ExternalLink className="w-3 h-3 text-blue-400" />
                </a>
              </li>
              <li>
                <a
                  href={UNIVERSITY_INFO.engineeringPortal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
                >
                  <span>School of Engineering</span>
                  <ExternalLink className="w-3 h-3 text-blue-400" />
                </a>
              </li>
              <li>
                <a
                  href={UNIVERSITY_INFO.admissionsInfo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
                >
                  <span>Admissions Guidelines</span>
                  <ExternalLink className="w-3 h-3 text-blue-400" />
                </a>
              </li>
              <li>
                <a
                  href={UNIVERSITY_INFO.admissionsPortal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-medium cursor-pointer"
                >
                  <span>Admissions Application Form</span>
                  <ExternalLink className="w-3 h-3 text-blue-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Statutory & Location Note */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 font-mono">
              Campus Location
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed mb-3">
              {UNIVERSITY_INFO.location}
            </p>
            <p className="text-slate-500 text-[11px] leading-relaxed">
              Sapthagiri NPS University established under Karnataka Act No. 17 of 2023. Legacy Sapthagiri College of Engineering established in 2001.
            </p>
            <div className="mt-4">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs transition-colors cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer Banner */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p className="text-center md:text-left max-w-3xl">
            <strong>Important Legal Disclaimer:</strong> UNIPATH is an independent student-built exploration platform and is not an official website of Sapthagiri NPS University. All university trademarks, programme names, and official links belong to Sapthagiri NPS University. Learning path suggestions are illustrative and do not guarantee admission or career outcomes.
          </p>
          <div className="shrink-0 text-center md:text-right font-mono">
            UNIPATH &copy; {new Date().getFullYear()}
          </div>
        </div>

      </div>
    </footer>
  );
}
