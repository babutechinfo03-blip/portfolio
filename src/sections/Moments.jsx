import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Trophy, MessageSquare, 
  Users, Award, Maximize2, X, MapPin, ArrowDown
} from 'lucide-react';
import mpnmjPaperWinner from '../assets/mpnmj-paper-presentation-winner.jpg';
import mpnmjHackathonWinner from '../assets/mpnmj-hackathon-winner.jpg';
import award2 from '../assets/award2.jpg';
import speech2 from '../assets/speech2.jpg';
import award1 from '../assets/award1.jpg';
import speech1 from '../assets/speech1.jpg';
import konguProject from '../assets/kongu-project-presentation.jpg';
import konguAuditorium from '../assets/kongu-auditorium.jpg';

// Real Moments & Milestones data from events and achievements
const MOMENTS_ITEMS = [
  {
    id: 'mpnmj-paper-presentation-winner',
    image: mpnmjPaperWinner,
    title: 'Winner — Paper Presentation',
    location: 'M.P.N.M.J. Engineering College, Erode',
    tag: 'PAPER PRESENTATION WINNER',
    icon: Trophy,
    description: 'Secured 1st Prize Winner in the Intra-College Paper Presentation event at M.P.N.M.J. Engineering College, presenting feasibility and technical viability analysis for innovative software systems.'
  },
  {
    id: 'mpnmj-hackathon-winner',
    image: mpnmjHackathonWinner,
    title: 'Winner — Intra-College Hackathon',
    location: 'M.P.N.M.J. Engineering College, Erode',
    tag: 'HACKATHON WINNER 1ST PLACE',
    icon: Trophy,
    description: 'Secured 1st Place Winner in the Intra-College Hackathon at M.P.N.M.J. Engineering College, collaborating on rapid software engineering, algorithmic problem solving, and live competitive coding.'
  },
  {
    id: 'kongu-project-presentation',
    image: konguProject,
    title: 'Project Presentation & Demo',
    location: 'Kongu Engineering College, Perundurai (Erode)',
    tag: 'PROJECT PRESENTATION',
    icon: Users,
    description: 'Presented and demonstrated our live project architecture, code execution, and system workflows to faculty evaluators during the technical symposium at Kongu Engineering College, Perundurai.'
  },
  {
    id: 'kongu-paper-presentation',
    image: konguAuditorium,
    title: 'Paper Presentation & Symposium',
    location: 'Maharaja Auditorium, Kongu Engineering College, Perundurai (Erode)',
    tag: 'PAPER PRESENTATION',
    icon: Award,
    description: 'Participated in the state-level technical paper presentation symposium at the iconic Maharaja Auditorium, Kongu Engineering College, Perundurai, Erode.'
  },
  {
    id: 'prince-protothon',
    image: speech2,
    title: "Prince Proto-Thon '26 Hackathon",
    location: 'Prince Dr. K. Vasudevan College of Engg, Chennai',
    tag: 'HACKATHON EVENT',
    icon: Trophy,
    description: 'Participated in the state-level 24-hour Prince Proto-Thon 26 Hackathon ("Innovate. Code. Conquer."), collaborating on rapid software prototyping, UI design, and live competitive coding.'
  },
  {
    id: 'award-1',
    image: award1,
    title: 'Hackathon Sprint & Coding Session',
    location: 'Inter-College Hackathon Arena',
    tag: 'HACKATHON SPRINT',
    icon: Users,
    description: 'Engaged in intensive collaborative programming, algorithm design, system architecture planning, and debugging under competitive hackathon timelines.'
  },
  {
    id: 'shree-venkateshwara-symposium',
    image: speech1,
    title: 'TECHNOVANZ 2K26 Symposium',
    location: 'Shree Venkateshwara Hi-Tech Engg College, Gobi (Erode)',
    tag: 'TECH SYMPOSIUM',
    icon: MessageSquare,
    description: 'Attended the state-level technical symposium TECHNOVANZ 2K26, presenting innovative engineering ideas and engaging with tech peers.'
  },
  {
    id: 'shree-venkateshwara-award',
    image: award2,
    title: 'Symposium Merit & Certificate Award',
    location: 'Shree Venkateshwara Hi-Tech Engg College, Gobi (Erode)',
    tag: 'MERIT AWARD',
    icon: Award,
    description: 'Honored with certificate of merit and recognition during the valedictory award ceremony at TECHNOVANZ state-level technical symposium.'
  }
];

export default function Moments() {
  const [selectedMoment, setSelectedMoment] = useState(null);

  const scrollToServices = (e) => {
    e.preventDefault();
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="gallery" className="relative bg-[#F9FAFB] text-neutral-900 overflow-hidden select-none">
      
      {/* ========================================================================= */}
      {/* 1. TOP UNIQUE SECTION DIVIDER (About #0E1015 Dark -> Moments #F9FAFB White) */}
      {/* ========================================================================= */}
      <div className="w-full overflow-hidden leading-none bg-[#0E1015] -mt-1 pointer-events-none relative">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-14 sm:h-20 lg:h-24 text-[#F9FAFB] preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C320,95 720,105 1120,40 C1280,15 1380,5 1440,0 L1440,100 L0,100 Z"
            fill="currentColor"
          />
        </svg>

        {/* Center Floating Separator Pill on Divider Curve */}
        <div className="absolute top-2 sm:top-4 left-1/2 -translate-x-1/2 z-20 pointer-events-auto">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-950 border border-white/20 text-white text-xs font-mono shadow-xl backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#E3280C] animate-pulse" />
            <span className="font-bold tracking-wider uppercase text-[11px]">Moments & Milestones</span>
          </div>
        </div>
      </div>

      {/* Dynamic Background Glows for White Section */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-neutral-950/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle Dot Matrix Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#0000000d_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-60" />

      {/* Header Container in Clean White Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 mb-8 sm:mb-10 relative z-10">
        
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border-2 border-neutral-200 shadow-xs mb-4">
          <span className="w-2 h-2 rounded-full bg-[#E3280C] animate-pulse" />
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-neutral-800">
            📷 MOMENTS & MILESTONES
          </span>
        </div>

        {/* Big Bold Headline in Pure Black */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-black text-neutral-950 tracking-tight leading-[1.08] mb-3">
          Living the Experience<span className="text-[#E3280C]">.</span>
        </h2>

        {/* Subtitle in Clean Dark Grey */}
        <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-sans max-w-3xl">
          A glimpse into the awards, speeches, and events that shape my journey in technology and leadership.
        </p>
      </div>

      {/* Continuous Infinite Scrolling Carousel (Right to Left) on Clean White BG */}
      <div className="relative w-full overflow-hidden py-4 pb-16 sm:pb-20 relative z-10">
        
        {/* Soft edge gradient fades (White to Transparent) */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-[#F9FAFB] via-[#F9FAFB]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-[#F9FAFB] via-[#F9FAFB]/80 to-transparent z-10 pointer-events-none" />

        {/* Marquee Track scrolling Right to Left */}
        <div className="animate-marquee-infinite flex gap-6 sm:gap-8 px-4">
          {[...MOMENTS_ITEMS, ...MOMENTS_ITEMS, ...MOMENTS_ITEMS].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={`${item.id}-${idx}`}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedMoment(item)}
                className="group relative w-[300px] sm:w-[380px] md:w-[420px] shrink-0 rounded-[32px] overflow-hidden bg-white border-2 border-neutral-200 hover:border-[#E3280C] shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                {/* Photo Image Frame */}
                <div className="relative h-[220px] sm:h-[280px] w-full overflow-hidden bg-neutral-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />

                  {/* Top Floating Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono font-bold uppercase tracking-wider shadow-lg">
                      <Icon size={12} className="text-[#E3280C]" />
                      <span>{item.tag}</span>
                    </span>
                  </div>

                  {/* Hover Overlay with Expand Button */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs">
                    <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E3280C] text-white font-sans font-black text-xs uppercase tracking-wider shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                      <Maximize2 size={15} />
                      <span>VIEW FULL PHOTO</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Card Content in White */}
                <div className="p-5 sm:p-6 bg-white space-y-1">
                  <h3 className="font-sans font-black text-base sm:text-lg text-neutral-950 group-hover:text-[#E3280C] transition-colors leading-snug line-clamp-1">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-mono">
                    <MapPin size={12} className="text-[#E3280C] shrink-0" />
                    <span className="line-clamp-1">{item.location}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 2. BOTTOM UNIQUE SECTION DIVIDER (Moments #F9FAFB White -> Services #060608 Dark) */}
      {/* ========================================================================= */}
      <div className="w-full overflow-hidden leading-none bg-[#F9FAFB] -mb-1 pointer-events-none relative">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16 sm:h-24 lg:h-28 text-[#060608] preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M0,70 C360,0 1080,140 1440,50 L1440,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>

        {/* Center Floating Separator Pill on Divider Curve */}
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-auto">
          <a
            href="#services"
            onClick={scrollToServices}
            className="group flex items-center gap-2 px-5 py-2 rounded-full bg-white border-2 border-neutral-300 hover:border-[#E3280C] text-xs font-mono text-neutral-900 shadow-xl transition-all hover:scale-105 cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-[#E3280C] animate-pulse" />
            <span className="font-bold tracking-wider uppercase text-[11px]">Explore Services</span>
            <ArrowDown size={13} className="text-[#E3280C] group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* Fullscreen Photo Lightbox Modal */}
      <AnimatePresence>
        {selectedMoment && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMoment(null)}
              className="fixed inset-0"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl bg-neutral-950 text-white rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 z-10 my-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMoment(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 hover:bg-[#E3280C] text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* High-Res Image Display */}
              <div className="relative h-[320px] sm:h-[440px] w-full bg-black">
                <img
                  src={selectedMoment.image}
                  alt={selectedMoment.title}
                  className="w-full h-full object-contain object-center"
                />
              </div>

              {/* Modal Details */}
              <div className="p-6 sm:p-8 space-y-3 bg-neutral-950">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#E3280C] uppercase tracking-wider">
                    <Sparkles size={14} />
                    <span>{selectedMoment.tag}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono">
                    <MapPin size={12} className="text-[#E3280C]" />
                    <span>{selectedMoment.location}</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-sans font-black text-white">
                  {selectedMoment.title}
                </h3>

                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
                  {selectedMoment.description}
                </p>

                <div className="pt-4 border-t border-white/10 flex justify-end">
                  <button
                    onClick={() => setSelectedMoment(null)}
                    className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-[#E3280C] text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
