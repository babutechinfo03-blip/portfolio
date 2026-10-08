import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import IntroScreen from './components/IntroScreen';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Hero from './sections/Hero';
import About from './sections/About';
import Moments from './sections/Moments';
import Process from './sections/Process';
import Projects from './sections/Projects';
import Journey from './sections/Journey';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Check if user has already seen intro this session
    const introSeen = sessionStorage.getItem('leeshark_intro_seen');
    if (introSeen === 'true') {
      setShowIntro(false);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <div className="relative min-h-screen bg-[#060608] text-white selection:bg-[#E3280C] selection:text-white">
      {/* Intro Screen Animation */}
      <AnimatePresence>
        {showIntro && (
          <IntroScreen onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      {/* Main Portfolio Content */}
      <div className={`transition-opacity duration-700 ${showIntro ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        <CustomCursor />
        <ScrollProgress />
        <Navbar />

        <main>
          <Hero />
          <About />
          <Moments />
          <Process />
          <Projects />
          <Journey />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}
