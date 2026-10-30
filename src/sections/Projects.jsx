import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowDown, X } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Projects() {
  const [lightboxImage, setLightboxImage] = useState(null);
  const projects = portfolioData.projects;

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-20 sm:py-28 relative bg-[#FAFAFA] text-neutral-900 overflow-hidden select-none">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-red-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 text-left max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200/60 text-xs font-mono font-bold text-[#E3280C] uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-[#E3280C] animate-pulse" />
            <span>FEATURED PROJECTS</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-black tracking-tight text-neutral-950">
            Featured Software Projects<span className="text-[#E3280C]">.</span>
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base mt-3 leading-relaxed font-sans">
            Full-stack platforms, machine learning systems, and responsive web applications engineered with production architecture, end-to-end APIs, and verified user impact.
          </p>
        </div>

        {/* 3-Column Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8 mb-16">
          {projects.map((proj) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`rounded-[32px] p-6 sm:p-7 bg-white flex flex-col justify-between transition-all duration-300 ${
                proj.featured
                  ? 'border-2 border-[#E3280C] shadow-2xl shadow-red-900/10 hover:shadow-red-900/20'
                  : 'border border-neutral-200/90 shadow-xl shadow-neutral-200/60 hover:border-[#E3280C]/50'
              }`}
            >
              <div>
                {/* Header Row: Category, Date & Index Number */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-col">
                    <span className="text-xs font-mono font-bold tracking-wider text-[#E3280C] uppercase">
                      {proj.category}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-400">
                      {proj.period}
                    </span>
                  </div>
                  <span className={`font-outfit font-black text-3xl sm:text-4xl leading-none ${
                    proj.featured ? 'text-[#E3280C]' : 'text-neutral-300'
                  }`}>
                    {proj.number}
                  </span>
                </div>

                {/* Project UI Mockup Image Container */}
                <div
                  onClick={() => setLightboxImage(proj.image)}
                  className="relative rounded-2xl overflow-hidden aspect-[16/10] mb-5 group cursor-pointer bg-neutral-950 border border-neutral-200 shadow-md"
                >
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Top-Right Badge */}
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-mono font-bold tracking-wider text-white uppercase border border-white/20 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{proj.badge}</span>
                  </div>

                  {/* Center Hover Overlay Button */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs">
                    <div className="px-4 py-2 rounded-full bg-[#E3280C] text-white font-mono font-bold text-xs uppercase tracking-wider shadow-2xl flex items-center gap-1.5 group-hover:scale-105 transition-transform">
                      <span>VIEW PREVIEW</span>
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-outfit font-bold tracking-tight text-neutral-950 mb-2.5 leading-snug">
                  {proj.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4 font-sans line-clamp-4">
                  {proj.fullDescription || proj.shortDescription}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.tags.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-lg bg-neutral-100 border border-neutral-200/90 text-[11px] font-mono font-medium text-neutral-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Buttons Row */}
              <div className="flex items-center gap-2.5 pt-4 border-t border-neutral-100">
                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-full bg-[#E3280C] hover:bg-[#FF333D] text-white font-mono font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-900/20 flex items-center justify-center gap-1.5 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <span>DEMO</span>
                  <ArrowUpRight size={13} />
                </a>

                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-mono font-bold text-xs uppercase tracking-wider border border-neutral-200/90 flex items-center justify-center gap-1.5 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <span>CODE</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Centered CTA Button: EXPLORE EXPERIENCE & JOURNEY */}
        <div className="flex justify-center">
          <a
            href="#journey"
            onClick={(e) => scrollToSection(e, 'journey')}
            className="px-7 py-3.5 rounded-full bg-[#0a0a08] hover:bg-neutral-900 text-white font-mono font-bold text-xs tracking-[0.2em] uppercase shadow-xl flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer border border-white/10"
          >
            <span>EXPLORE EXPERIENCE & JOURNEY</span>
            <ArrowDown size={14} className="animate-bounce" />
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImage(null)}
              className="fixed inset-0"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl bg-neutral-950 rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl z-10 my-8"
            >
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/75 hover:bg-[#E3280C] text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="relative w-full aspect-[16/9] bg-black">
                <img
                  src={lightboxImage}
                  alt="Project Preview"
                  className="w-full h-full object-contain object-center"
                />
              </div>

              <div className="p-6 bg-neutral-900 flex items-center justify-between border-t border-white/10 text-white">
                <div>
                  <h4 className="text-lg font-bold font-sans">Project Architecture Preview</h4>
                  <p className="text-xs text-neutral-400 font-mono mt-0.5">High Resolution Interface Screenshot</p>
                </div>
                <button
                  onClick={() => setLightboxImage(null)}
                  className="px-6 py-2.5 rounded-full bg-[#E3280C] text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-red-700 transition-colors cursor-pointer"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
