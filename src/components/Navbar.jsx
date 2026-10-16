import React, { useState } from 'react';
import { Compass, Menu, X, Sparkles, GraduationCap, MapPin, ExternalLink, ArrowRight } from 'lucide-react';

export default function Navbar({ activeSection, setActiveSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'quiz', label: 'Discover Your Fit' },
    { id: 'simulator', label: 'Future Simulator' },
    { id: 'explorer', label: 'Career Paths' },
    { id: 'sapthagiri', label: 'Explore Sapthagiri' },
    { id: 'about', label: 'About UNIPATH' }
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0B1220]/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Wordmark */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('home')}>
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/30 font-bold">
              <Compass className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold tracking-tight text-white font-mono">UNIPATH</span>
                <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  Sapthagiri Edition
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">Your Future, Your Path.</p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeSection === link.id
                    ? 'text-white bg-slate-800/80 shadow-sm border border-slate-700/60'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action Button & Disclaimer Tag */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('quiz')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold shadow-md shadow-blue-600/20 transition-all duration-200 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Start Exploring</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-[#0B1220]/95 px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between ${
                activeSection === link.id
                  ? 'text-white bg-blue-600 font-semibold'
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <span>{link.label}</span>
              <ArrowRight className="w-4 h-4 opacity-70" />
            </button>
          ))}
          <div className="pt-3 border-t border-slate-800">
            <button
              onClick={() => handleNavClick('quiz')}
              className="w-full py-2.5 rounded-lg bg-blue-600 text-white text-sm font-semibold flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Start Exploring</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
