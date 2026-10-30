import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, GraduationCap, Calendar, MapPin, 
  CheckCircle2, Sparkles, ArrowRight, Code2, 
  Terminal, Award, ChevronDown, Laptop, 
  Cpu, Database, ShieldCheck, ExternalLink, School, BookOpen
} from 'lucide-react';
import { portfolioData } from '../data/portfolio';

// 4-Point Sparkle Star Component
function StarSparkle({ className = '', style = {} }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
      <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
    </svg>
  );
}

const CAREER_EXPERIENCES = [
  {
    id: 'strydo',
    company: 'STRYDO TECHNOLOGIES PVT. LTD.',
    role: 'Full Stack Web Development Intern',
    period: 'Jun 2026 – Jul 2026',
    duration: '2 Months',
    location: 'India',
    badge: 'Full Stack & LLM APIs',
    tagline: 'Integrating LLM APIs, building AI mentor controllers, and architecting secure authentication and exam proctoring.',
    colorTheme: 'red',
    points: [
      'Integrated LLM APIs (OpenAI SDK, Groq Llama 3.3 70B) in 5 backend controllers: AI mentor, interview prep, resume analysis.',
      'Implemented JWT and Google OAuth 2.0 login and a webcam-proctored exam flow with face detection and integrity scoring.'
    ],
    techStack: ['OpenAI SDK', 'Groq Llama 3.3 70B', 'JWT', 'Google OAuth 2.0', 'Webcam Proctoring', 'Face Detection', 'React.js', 'Node.js'],
    metrics: [
      { label: 'LLM Controllers', value: 'OpenAI & Groq 70B' },
      { label: 'Security Auth', value: 'JWT & OAuth 2.0' },
      { label: 'Proctoring Engine', value: 'Face Detection' }
    ]
  },
  {
    id: 'codec',
    company: 'CODEC TECHNOLOGIES',
    role: 'Java Developer Intern',
    period: 'Jan 2026 – Apr 2026',
    duration: '4 Months',
    location: 'Hybrid, India',
    badge: 'Backend & Java 21',
    tagline: 'Engineering enterprise ERP backend with Java 21, Spring Boot 3, and containerized Docker environments.',
    colorTheme: 'dark',
    points: [
      'Developed an ERP backend (Java 21, Spring Boot 3): 115 REST endpoints, 20 controllers, 10 services, 28 JPA repositories.',
      'Designed 29 JPA entities in MySQL and secured endpoints using JWT, Spring Security and 8 roles (38 @PreAuthorize guards).',
      'Built STOMP WebSocket live updates and containerized the backend, frontend and MySQL 8 with Docker Compose.',
      'Generated a test dataset of 4,440 students, 423 faculty and 444,000 attendance records across 25 departments.'
    ],
    techStack: ['Java 21', 'Spring Boot 3', 'Spring Data JPA', 'Spring Security', 'MySQL 8', 'STOMP WebSocket', 'Docker Compose', 'JWT RBAC'],
    metrics: [
      { label: 'API Architecture', value: '115 REST Endpoints' },
      { label: 'Security Guards', value: '29 Entities / 8 Roles' },
      { label: 'Data Scale', value: '444,000 Records' }
    ]
  },
  {
    id: 'codealpha',
    company: 'CODEALPHA',
    role: 'Frontend Development Intern',
    period: 'Nov 2025 – Dec 2025',
    duration: '2 Months',
    location: 'Chennai, Tamil Nadu',
    badge: 'Frontend Engineering',
    tagline: 'Designing high-performance React 19 component systems with Framer Motion animations.',
    colorTheme: 'dark',
    points: [
      'Designed a responsive React 19 and Tailwind CSS portfolio with 10 sections and 10 reusable components.',
      'Implemented Framer Motion animations in 15 files; the production build is 138 kB gzipped JS and 13 kB gzipped CSS.'
    ],
    techStack: ['React 19', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Component Architecture', 'Performance Optimization'],
    metrics: [
      { label: 'System Design', value: '10 Sections & Comps' },
      { label: 'Animation Suite', value: '15 Framer Files' },
      { label: 'Production Size', value: '138 kB gzipped' }
    ]
  }
];

const EDUCATION_LIST = [
  {
    id: 'btech',
    degree: 'B.Tech. – Information Technology',
    period: '2023 – 2027 (Expected)',
    institution: 'M.P.N.M.J. Engineering College',
    location: 'Erode, Tamil Nadu',
    badge: 'Undergraduate Degree',
    highlight: 'CGPA: 7.8 / 10',
    description: 'Specializing in software engineering, object-oriented systems, data structures, and enterprise application development.'
  },
  {
    id: 'hsc',
    degree: 'Higher Secondary Certificate (HSC)',
    period: '2023 (Completed)',
    institution: 'Govt Boys Higher Secondary School Ponnai',
    location: 'Vellore, Tamil Nadu',
    badge: 'HSC Board Exam',
    highlight: 'Percentage: 74%',
    description: 'Comprehensive study in Mathematics, Physics, Chemistry, and Computer Science.'
  },
  {
    id: 'sslc',
    degree: 'Secondary School Leaving Certificate (SSLC)',
    period: '2021 (Completed)',
    institution: 'Govt Boys Higher Secondary School Ponnai',
    location: 'Vellore, Tamil Nadu',
    badge: 'SSLC Board Exam',
    highlight: 'Percentage: 100% (Perfect Score)',
    description: 'Graduated with a perfect 100% aggregate score across all subjects in the state secondary board examination.'
  }
];

export default function Journey() {
  const [activeExp, setActiveExp] = useState(0);

  return (
    <section id="journey" className="py-24 sm:py-32 relative bg-[#FAFAFA] text-neutral-900 overflow-hidden border-t border-neutral-200">
      
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-neutral-950/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E3280C] animate-pulse" />
              <span className="text-xs sm:text-sm font-sans font-bold tracking-wider text-neutral-500 uppercase">
                Career & Experience Hub
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-black text-neutral-950 tracking-tight leading-[1.08]">
              Where engineering meets execution.
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-sans mt-4">
              Professional software development internships, enterprise systems delivery, and rigorous academic foundations.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-neutral-200 text-xs font-mono text-neutral-600 shadow-sm">
            <Sparkles size={14} className="text-[#E3280C]" />
            <span>VERIFIED MILESTONES</span>
          </div>
        </div>

        {/* 1. Main Interactive Experience Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-24">
          
          {/* Left Navigation Timeline Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-2">
              Select Internship ({CAREER_EXPERIENCES.length})
            </div>

            {CAREER_EXPERIENCES.map((exp, idx) => {
              const isSelected = activeExp === idx;
              return (
                <motion.div
                  key={exp.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveExp(idx)}
                  className={`p-6 sm:p-7 rounded-[28px] cursor-pointer transition-all duration-300 relative border-2 ${
                    isSelected
                      ? 'bg-[#E3280C] text-white border-transparent shadow-xl shadow-red-500/25'
                      : 'bg-white text-neutral-900 border-neutral-200 hover:border-neutral-300 shadow-sm hover:shadow-md'
                  }`}
                >
                  {/* Timeline Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-mono font-bold ${
                        isSelected
                          ? 'bg-black/30 text-white border border-white/20'
                          : 'bg-neutral-100 text-neutral-600'
                      }`}
                    >
                      {exp.period}
                    </span>
                    <span
                      className={`text-xs font-serif italic ${
                        isSelected ? 'text-white/80' : 'text-neutral-400'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                  </div>

                  <h3
                    className={`text-xl sm:text-2xl font-sans font-black tracking-tight ${
                      isSelected ? 'text-white' : 'text-neutral-950'
                    }`}
                  >
                    {exp.company}
                  </h3>

                  <p
                    className={`text-sm font-semibold mt-1 font-sans ${
                      isSelected ? 'text-white/90' : 'text-[#E3280C]'
                    }`}
                  >
                    {exp.role}
                  </p>

                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-current/15 text-xs font-mono">
                    <span className="opacity-80 flex items-center gap-1">
                      <MapPin size={12} /> {exp.location}
                    </span>
                    <span className="font-bold flex items-center gap-1">
                      <span>View Highlights</span>
                      <ArrowRight size={12} className={isSelected ? 'translate-x-0.5' : ''} />
                    </span>
                  </div>

                  {/* Active Indicator Bar on right edge */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeTimelineGlow"
                      className="absolute -left-1 top-6 bottom-6 w-1.5 bg-neutral-950 rounded-full"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Right Main Stage Interactive Showcase Card */}
          <div className="lg:col-span-8 relative">
            
            {/* Floating Sparkles around Stage Card */}
            <motion.div
              animate={{ scale: [1, 1.25, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 z-20 hidden sm:block"
            >
              <StarSparkle className="w-10 h-10 fill-neutral-950 drop-shadow-md" />
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
              className="absolute -bottom-6 -left-6 z-20 hidden sm:block"
            >
              <StarSparkle className="w-8 h-8 fill-[#E3280C] drop-shadow-md" />
            </motion.div>

            <AnimatePresence mode="wait">
              {(() => {
                const current = CAREER_EXPERIENCES[activeExp];
                return (
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 25, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -25, scale: 0.98 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="relative"
                  >
                    {/* Hanging Card Container */}
                    <div className="rounded-[36px] p-8 sm:p-12 bg-white border-2 border-neutral-200 shadow-2xl relative overflow-hidden">
                      
                      {/* Top Hanging Hole Tag */}
                      <div className="w-5 h-5 rounded-full bg-[#E3280C] mx-auto -mt-4 mb-8 shadow-inner" />

                      {/* Header Area */}
                      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-100 mb-8">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="px-3 py-1 rounded-full bg-red-50 text-[#E3280C] font-mono text-xs font-bold border border-red-200">
                              {current.badge}
                            </span>
                            <span className="text-xs font-mono text-neutral-500">
                              {current.duration}
                            </span>
                          </div>
                          <h3 className="text-3xl sm:text-4xl font-sans font-black text-neutral-950 tracking-tight">
                            {current.role}
                          </h3>
                          <div className="text-lg font-bold text-[#E3280C] font-mono mt-1">
                            {current.company}
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="text-xs font-mono text-neutral-400 uppercase">Location & Mode</div>
                          <div className="text-sm font-bold text-neutral-900 flex items-center gap-1.5 justify-end mt-1">
                            <MapPin size={14} className="text-[#E3280C]" />
                            <span>{current.location}</span>
                          </div>
                          <div className="text-xs font-mono text-neutral-500 mt-1">
                            {current.period}
                          </div>
                        </div>
                      </div>

                      {/* Key Metric Gauges */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
                        {current.metrics.map((m, mIdx) => (
                          <div
                            key={mIdx}
                            className="p-4 rounded-2xl bg-[#F9FAFB] border border-neutral-200 text-center"
                          >
                            <span className="text-[11px] font-mono uppercase text-neutral-500 block mb-1">
                              {m.label}
                            </span>
                            <span className="text-sm sm:text-base font-black text-neutral-950 font-sans">
                              {m.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Key Responsibilities & Highlights */}
                      <div className="mb-8">
                        <div className="text-xs font-mono uppercase tracking-wider font-bold text-neutral-400 mb-4">
                          Core Achievements & Technical Impact:
                        </div>
                        <div className="space-y-3.5">
                          {current.points.map((point, pIdx) => (
                            <motion.div
                              key={pIdx}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: pIdx * 0.1 }}
                              className="p-4 sm:p-5 rounded-2xl bg-[#F9FAFB] hover:bg-neutral-100 border border-neutral-200 transition-all flex items-start gap-4 group"
                            >
                              <div className="w-6 h-6 rounded-lg bg-[#E3280C] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm group-hover:scale-110 transition-transform">
                                <CheckCircle2 size={14} />
                              </div>
                              <p className="text-sm sm:text-base leading-relaxed text-neutral-800 font-sans">
                                {point}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack Applied */}
                      <div className="pt-6 border-t border-neutral-100">
                        <div className="text-xs font-mono uppercase tracking-wider font-bold text-neutral-400 mb-3">
                          Skills & Technologies Applied:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {current.techStack.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-3.5 py-1.5 rounded-xl bg-neutral-100 hover:bg-[#E3280C] hover:text-white transition-all text-xs sm:text-sm font-mono font-semibold text-neutral-800 border border-neutral-200/80 cursor-default"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>

          </div>

        </div>

        {/* 2. Education Foundation Section */}
        <div className="pt-16 border-t border-neutral-200">
          <div className="mb-10 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-mono font-bold text-[#E3280C] uppercase mb-3">
              <GraduationCap size={14} />
              <span>ACADEMIC FOUNDATION</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-sans font-black text-neutral-950 tracking-tight">
              Education & Academic Credentials
            </h3>
            <p className="text-neutral-600 text-sm sm:text-base mt-2 font-sans">
              Strong theoretical knowledge, consistent academic performance, and foundational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {EDUCATION_LIST.map((edu, eIdx) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: eIdx * 0.1 }}
                className="p-7 rounded-[30px] bg-white border-2 border-neutral-200 hover:border-[#E3280C] transition-all shadow-sm hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 font-mono text-xs font-bold">
                      {edu.badge}
                    </span>
                    <span className="text-xs font-mono text-neutral-400">
                      {edu.period}
                    </span>
                  </div>

                  <h4 className="text-xl font-sans font-black text-neutral-950 mb-1.5">
                    {edu.degree}
                  </h4>
                  <div className="text-sm font-bold text-[#E3280C] font-mono mb-1">
                    {edu.institution}
                  </div>
                  <div className="text-xs text-neutral-500 font-mono mb-4 flex items-center gap-1">
                    <MapPin size={12} /> {edu.location}
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans mb-6">
                    {edu.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-400 uppercase">Score / Grade</span>
                  <span className="px-3 py-1 rounded-xl bg-red-50 text-[#E3280C] font-mono font-bold text-xs sm:text-sm border border-red-200">
                    {edu.highlight}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
