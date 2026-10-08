import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const NAV_ITEMS = [
  { name: 'ABOUT', href: '#about' },
  { name: 'SERVICES', href: '#services' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'EXPERIENCE', href: '#journey' },
  { name: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['about', 'services', 'projects', 'journey', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Floating Pill Navbar Container */}
      <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`pointer-events-auto w-full max-w-5xl rounded-full transition-all duration-300 flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 ${
            scrolled
              ? 'bg-black/80 backdrop-blur-xl border border-white/20 shadow-2xl shadow-black/80'
              : 'bg-black/60 backdrop-blur-md border border-white/15 shadow-xl shadow-black/50'
          }`}
        >
          {/* Left: Brand Name with Red Dot */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-1 group cursor-pointer font-outfit font-black tracking-tight text-lg sm:text-xl text-white select-none"
          >
            <span>BABU</span>
            <span className="text-[#E3280C] text-xl font-bold">.</span>
            <span>V</span>
          </a>

          {/* Center: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_ITEMS.map((item) => {
              const targetSection = item.href.replace('#', '');
              const isActive = activeSection === targetSection;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-xs lg:text-[13px] font-mono font-bold tracking-[0.2em] transition-colors relative py-1 cursor-pointer ${
                    isActive
                      ? 'text-white'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activePillNavIndicator"
                      className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-[#E3280C] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right: Red CTA Button (LET'S CONNECT) */}
          <div className="hidden sm:flex items-center">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-5 py-2 rounded-full bg-[#E3280C] hover:bg-[#FF333D] text-white text-xs sm:text-sm font-bold font-mono tracking-wider uppercase transition-all duration-300 shadow-lg shadow-red-900/40 hover:shadow-red-600/50 hover:scale-105 active:scale-95 flex items-center gap-1.5 cursor-pointer"
            >
              <span>LET'S CONNECT</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-full text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.div>
      </header>

      {/* Mobile Glass Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-50 bg-black/95 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 shadow-2xl md:hidden flex flex-col gap-3"
          >
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => {
                const targetSection = item.href.replace('#', '');
                const isActive = activeSection === targetSection;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-4 py-3 rounded-2xl text-sm font-mono font-bold tracking-widest uppercase transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-[#E3280C] text-white shadow-lg'
                        : 'text-white/80 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight size={16} className="opacity-60" />
                  </a>
                );
              })}
            </div>

            <div className="pt-4 border-t border-white/10">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full py-3 rounded-full bg-[#E3280C] text-white text-center font-bold text-sm tracking-wider uppercase shadow-xl flex items-center justify-center gap-2"
              >
                <span>LET'S CONNECT</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
