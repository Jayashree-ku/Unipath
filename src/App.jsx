import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FitQuiz from './components/FitQuiz';
import FutureSimulator from './components/FutureSimulator';
import CareerExplorer from './components/CareerExplorer';
import SapthagiriHub from './components/SapthagiriHub';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [simulatorPreselectedInterest, setSimulatorPreselectedInterest] = useState('ai');

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLaunchSimulatorFromQuiz = (interestKey) => {
    setSimulatorPreselectedInterest(interestKey);
    scrollToSection('simulator');
  };

  const handleSelectPathwayForSimulation = (interestKey) => {
    setSimulatorPreselectedInterest(interestKey);
    scrollToSection('simulator');
  };

  // Optional IntersectionObserver to highlight current active navigation tab
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'quiz', 'simulator', 'explorer', 'sapthagiri', 'about'];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B1220] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Fixed / Sticky Navigation */}
      <Navbar activeSection={activeSection} setActiveSection={scrollToSection} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero & Value Proposition */}
        <section id="home">
          <Hero onNavigate={scrollToSection} />
        </section>

        {/* 2. Feature 1: Discover Your Fit (Quiz) */}
        <FitQuiz 
          onLaunchSimulator={handleLaunchSimulatorFromQuiz} 
          onExploreSapthagiri={() => scrollToSection('sapthagiri')} 
        />

        {/* 3. Feature 2: Experience Your Future (Future Simulator) */}
        <FutureSimulator 
          preselectedInterest={simulatorPreselectedInterest} 
          onExploreSapthagiri={() => scrollToSection('sapthagiri')} 
        />

        {/* 4. Feature 3: Career Path Explorer */}
        <CareerExplorer 
          onSelectPathwayForSimulation={handleSelectPathwayForSimulation} 
        />

        {/* 5. Feature 4: Explore Sapthagiri */}
        <SapthagiriHub />

        {/* 6. Feature 5: About UNIPATH */}
        <AboutSection onNavigate={scrollToSection} />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}
