import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Globe, Smartphone, PenTool, 
  Film, Sparkles, ArrowDown, ExternalLink, Video, Layers
} from 'lucide-react';

const SERVICES_LIST = [
  'FULL-STACK DEVELOPMENT',
  'WEB DEVELOPMENT',
  'APP DEVELOPMENT',
  'CONTENT CREATION',
  'VIDEO EDITING'
];

const SERVICE_CARDS = [
  {
    number: '01',
    title: 'Full-Stack Development',
    icon: Code2,
    desc: 'Architecting scalable, production-ready web platforms with modern React frontends, robust Java / Node backend APIs, and optimized MySQL database architectures.',
    tags: ['React.js', 'Java OOP', 'REST APIs', 'MySQL Relational DB']
  },
  {
    number: '02',
    title: 'Web Development',
    icon: Globe,
    desc: 'Crafting ultra-responsive, high-performance web applications with clean semantic code, fluid interactive animations, and pixel-perfect design across all devices.',
    tags: ['Modern Frontend', 'HTML5 / CSS3', 'JavaScript (ES6+)', 'Speed Optimization']
  },
  {
    number: '03',
    title: 'App Development',
    icon: Smartphone,
    desc: 'Building cross-platform mobile solutions and Progressive Web Apps (PWA) with smooth touch navigation, native-like 60 FPS performance, and intuitive UX.',
    tags: ['Mobile First', 'Progressive Web Apps', 'Cross-Platform', 'Touch UI/UX']
  },
  {
    number: '04',
    title: 'Content Creation',
    icon: PenTool,
    desc: 'Producing high-engagement technical and creative digital content, tech tutorials, developer storytelling, and social media brand strategies that drive organic reach.',
    tags: ['Tech Storytelling', 'Brand Growth', 'Social Strategy', 'Creative Digital Media']
  },
  {
    number: '05',
    title: 'Video Editing',
    icon: Film,
    desc: 'Professional video editing, dynamic motion graphics, cinematic color grading, sound design, and retention-focused storytelling for YouTube, Reels, and promos.',
    tags: ['Premiere Pro & After Effects', 'Cinematic Motion', 'Sound Design', 'Color Grading']
  }
];

export default function Process() {
  return (
    <section id="services" className="relative bg-[#060608] text-white pt-0 pb-0 overflow-hidden">
      
      {/* Dynamic Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#E3280C]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-700/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle Grid Pattern Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

      {/* Section Header Matching Reference: WHAT I BUILD // SERVICES */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-10 pt-16 sm:pt-24">
        <div className="text-left max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-bold tracking-[0.25em] text-[#E3280C] uppercase mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#E3280C] animate-pulse" />
            <span>WHAT I BUILD & CREATE</span>
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-black tracking-tight text-white uppercase leading-none">
            SERVICES<span className="text-[#E3280C]">.</span>
          </h2>
          
          <p className="text-base sm:text-lg text-neutral-400 font-sans mt-4 max-w-2xl leading-relaxed">
            Full-stack engineering, interactive web applications, cross-platform apps, engaging digital content creation, and professional video production.
          </p>
        </div>
      </div>

      {/* Infinite Right-To-Left Marquee Scroll Ticker Ribbon */}
      <div className="relative w-full bg-black/80 py-5 sm:py-6 border-y border-white/15 overflow-hidden shadow-2xl mb-16 backdrop-blur-md">
        {/* Left & Right Gradient Fade Masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-[#060608] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-[#060608] to-transparent z-10" />

        {/* Marquee Track (Seamless infinite loop with requested services) */}
        <div className="animate-marquee-infinite flex items-center select-none">
          {[...SERVICES_LIST, ...SERVICES_LIST, ...SERVICES_LIST, ...SERVICES_LIST].map((service, sIdx) => (
            <div key={sIdx} className="flex items-center shrink-0">
              <span className="text-lg sm:text-xl lg:text-2xl font-sans font-black tracking-wider uppercase text-neutral-200 hover:text-[#E3280C] transition-colors cursor-default whitespace-nowrap">
                {service}
              </span>

              {/* Glowing Red Dot Separator */}
              <div className="mx-6 sm:mx-10 flex items-center justify-center">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#E3280C] shadow-[0_0_12px_#E3280C] inline-block animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Clean Numbered Service Cards Grid (Alternating Dark & White matching reference screenshot) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-20 sm:mb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICE_CARDS.map((card, cIdx) => {
            const Icon = card.icon;
            const isDark = cIdx % 2 === 0; // Alternating dark and light cards matching reference screenshot style
            return (
              <motion.div
                key={cIdx}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className={`p-8 sm:p-9 rounded-[28px] border transition-all duration-300 flex flex-col justify-between shadow-2xl relative group ${
                  isDark
                    ? 'bg-neutral-900 border-white/20 text-white hover:border-[#E3280C]'
                    : 'bg-white border-neutral-200 text-neutral-950 hover:border-[#E3280C] hover:shadow-xl'
                }`}
              >
                <div>
                  {/* Top Row: Big Red Number & Minimal Outline Icon */}
                  <div className="flex items-start justify-between mb-8">
                    <span className="text-4xl sm:text-5xl font-sans font-black text-[#E3280C] leading-none">
                      {card.number}
                    </span>
                    <div className={`p-2.5 rounded-xl ${isDark ? 'bg-white/10 text-white' : 'bg-neutral-100 text-neutral-900'} group-hover:scale-110 group-hover:text-[#E3280C] transition-all`}>
                      <Icon size={24} strokeWidth={2} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`text-2xl sm:text-3xl font-sans font-black tracking-tight leading-snug mb-4 ${
                    isDark ? 'text-white' : 'text-neutral-950'
                  }`}>
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm sm:text-base leading-relaxed font-sans mb-6 ${
                    isDark ? 'text-neutral-300' : 'text-neutral-600'
                  }`}>
                    {card.desc}
                  </p>

                  {/* Key Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {card.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium ${
                          isDark
                            ? 'bg-white/5 text-neutral-300 border border-white/10'
                            : 'bg-neutral-100 text-neutral-700 border border-neutral-200'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Red Accent Line */}
                <div className="w-12 h-1 bg-[#E3280C] rounded-full mt-8 group-hover:w-20 transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Cyberpunk Notch Divider transitioning into next section */}
      <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#060608] to-[#0E1015] pt-6 pb-0">
        <div className="relative w-full flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#E3280C] to-transparent shadow-[0_0_15px_#E3280C]" />
          </div>

          <div className="relative z-10 flex items-center gap-3 px-6 py-2.5 rounded-full bg-neutral-950 border border-white/20 text-white shadow-2xl backdrop-blur-xl">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E3280C] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E3280C]"></span>
            </span>
            <span className="text-xs font-mono font-black tracking-[0.25em] text-white uppercase">
              TECHNICAL SKILLS // STACK
            </span>
            <div className="w-px h-3.5 bg-white/20 mx-0.5" />
            <ArrowDown size={14} className="text-neutral-400 animate-bounce" />
          </div>
        </div>
      </div>

    </section>
  );
}
