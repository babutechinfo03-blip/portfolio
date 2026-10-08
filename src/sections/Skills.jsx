import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, CheckCircle2, BookOpen, Terminal, 
  Sparkles, Layers, ShieldCheck, Cpu, 
  Code2, ExternalLink, Check, Zap, Globe
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

const SKILL_GROUPS = [
  {
    title: 'Programming Languages',
    badge: 'Core Competency',
    isPrimary: true,
    skills: ['HTML', 'CSS', 'JavaScript', 'Java', 'MySQL', 'APIs', 'Python'],
    description: 'Core programming languages, backend frameworks, and relational databases used in production applications.'
  },
  {
    title: 'Tools & Technologies',
    badge: 'Modern Workflow',
    isPrimary: false,
    skills: ['Git', 'GitHub', 'VS Code', 'Eclipse IDE', 'IntelliJ IDEA', 'Antigravity'],
    description: 'Modern developer workflows, version control systems, specialized IDEs, and agentic development tools.'
  },
  {
    title: 'Core Fundamentals',
    badge: 'Computer Science',
    isPrimary: false,
    skills: ['OOP Concepts', 'Data Structures & Algorithms', 'REST APIs', 'DBMS', 'Web Architecture'],
    description: 'Solid algorithmic foundations, object-oriented software engineering, and database design principles.'
  }
];

const CERTIFICATE_DETAILS = [
  {
    id: 'genai',
    title: 'GenAI Professional',
    issuer: 'Oracle',
    badge: 'Verified Certification',
    themeColor: 'from-[#E3280C] to-[#8E0C10]',
    accentColor: '#E3280C',
    icon: Sparkles,
    serialNumber: 'ORA-GENAI-VERIFIED',
    description: 'Generative AI foundational architectures, large language models (LLMs), prompt engineering, and enterprise AI deployment strategies.',
    skills: ['Generative AI', 'LLM Architectures', 'Prompt Engineering', 'Enterprise AI']
  },
  {
    id: 'cybersec',
    title: 'Cyber Security',
    issuer: 'Naan Mudhalvan',
    badge: 'State Certified',
    themeColor: 'from-emerald-600 to-teal-800',
    accentColor: '#10B981',
    icon: ShieldCheck,
    serialNumber: 'NM-CYBERSEC-VERIFIED',
    description: 'Network security fundamentals, threat analysis, cryptography, application vulnerability testing, and defensive system protocols.',
    skills: ['Threat Analysis', 'Network Security', 'Cryptography', 'Vulnerability Audits']
  },
  {
    id: 'python',
    title: 'Python Programming',
    issuer: 'Novitech',
    badge: 'Industry Certified',
    themeColor: 'from-blue-600 to-indigo-900',
    accentColor: '#3B82F6',
    icon: Code2,
    serialNumber: 'NOVI-PY-VERIFIED',
    description: 'Core Python development, data manipulation, object-oriented programming principles, and backend automation scripting.',
    skills: ['Python OOP', 'Data Structures', 'Automation Scripting', 'Backend Logic']
  },
  {
    id: 'java',
    title: 'Java Developer',
    issuer: 'Codec Technologies',
    badge: 'Industry Certified',
    themeColor: 'from-orange-600 to-red-900',
    accentColor: '#EA580C',
    icon: Terminal,
    serialNumber: 'CODEC-JAVA-VERIFIED',
    description: 'Java application engineering, OOP principles, data structures, algorithms, and API database integration.',
    skills: ['Java OOP', 'Data Structures', 'REST APIs', 'MySQL Integration']
  },
  {
    id: 'fullstack',
    title: 'Full Stack Web Development',
    issuer: 'Strydo Technologies',
    badge: 'Industry Certified',
    themeColor: 'from-purple-600 to-indigo-950',
    accentColor: '#9333EA',
    icon: Globe,
    serialNumber: 'STRYDO-FSW-VERIFIED',
    description: 'Full-stack web application development across frontend, backend, and database layers with reusable UI components.',
    skills: ['Full Stack Architecture', 'React.js', 'Node.js', 'Database Integration']
  }
];

const COURSEWORK_TILES = [
  { title: 'Full Stack Web Development', icon: Globe, highlight: 'React, Node, Express, REST APIs' },
  { title: 'Data Structures & Algorithms', icon: Cpu, highlight: 'Trees, Graphs, Sorting, Dynamic Programming' },
  { title: 'Object Oriented Programming', icon: Terminal, highlight: 'Java OOP, Polymorphism, Encapsulation' },
  { title: 'Cloud Computing', icon: Layers, highlight: 'Cloud Infrastructure, Virtualization, Services' },
  { title: 'Database Management Systems', icon: Zap, highlight: 'MySQL, Relational Schemas, Indexing' },
  { title: 'Web Essentials', icon: BookOpen, highlight: 'Semantic HTML, CSS Layouts, Web Architecture' }
];

export default function Skills() {
  const [selectedCert, setSelectedCert] = useState(0);

  return (
    <section id="skills" className="py-24 sm:py-32 relative bg-[#F9FAFB] text-neutral-900 overflow-hidden border-t border-neutral-200">
      
      {/* Dynamic Ambient Background Watermarks */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-neutral-950/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. Technical Skills Section */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E3280C] animate-pulse" />
            <span className="text-xs sm:text-sm font-sans font-bold tracking-wider text-neutral-500 uppercase">
              Skills & Competencies
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-black text-neutral-950 tracking-tight leading-[1.08] mb-5">
            Technical skills built on a strong foundation.
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-sans">
            A focused breakdown of programming languages, frameworks, databases, and development tools directly from my academic and internship journey.
          </p>
        </div>

        {/* 4 Skill Cards in Hanging Punch-Hole Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {SKILL_GROUPS.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative group"
            >
              <div
                className={`relative rounded-[32px] p-8 sm:p-10 transition-all duration-300 shadow-xl ${
                  group.isPrimary
                    ? 'bg-[#E3280C] text-white shadow-red-500/25 border-2 border-white/20 hover:-translate-y-2'
                    : 'bg-white text-neutral-900 border-2 border-neutral-200/90 hover:border-[#E3280C]/40 hover:shadow-2xl hover:-translate-y-2'
                }`}
              >
                {/* Punch hole at top center */}
                <div
                  className={`w-5 h-5 rounded-full mx-auto -mt-4 mb-6 shadow-inner ${
                    group.isPrimary ? 'bg-white border-2 border-neutral-300' : 'bg-[#E3280C]'
                  }`}
                />

                {/* Top Badge & Title */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider ${
                      group.isPrimary ? 'bg-black/30 text-white border border-white/20' : 'bg-neutral-100 text-neutral-600'
                    }`}
                  >
                    {group.badge}
                  </span>
                  <span
                    className={`text-xs font-serif italic ${
                      group.isPrimary ? 'text-white/80' : 'text-neutral-400'
                    }`}
                  >
                    0{idx + 1}
                  </span>
                </div>

                <h3
                  className={`text-2xl sm:text-3xl font-sans font-black tracking-tight mb-3 ${
                    group.isPrimary ? 'text-white' : 'text-neutral-950'
                  }`}
                >
                  {group.title}
                </h3>

                <p
                  className={`text-xs sm:text-sm leading-relaxed mb-6 font-sans ${
                    group.isPrimary ? 'text-white/90' : 'text-neutral-600'
                  }`}
                >
                  {group.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-sans font-semibold transition-transform duration-200 hover:scale-105 ${
                        group.isPrimary
                          ? 'bg-white text-neutral-950 shadow-md font-bold'
                          : 'bg-neutral-100 text-neutral-900 border border-neutral-200/80 hover:bg-[#E3280C] hover:text-white hover:border-[#E3280C]'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 2. REVOLUTIONIZED CERTIFICATIONS & CREDENTIALS VAULT */}
        <div className="pt-20 border-t-2 border-neutral-200/80 relative">
          
          {/* Floating Sparkle Stars */}
          <motion.div
            animate={{ scale: [1, 1.25, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-16 right-6 z-20 hidden sm:block"
          >
            <StarSparkle className="w-9 h-9 fill-[#E3280C] drop-shadow-md" />
          </motion.div>

          <motion.div
            animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
            className="absolute top-28 left-6 z-20 hidden sm:block"
          >
            <StarSparkle className="w-8 h-8 fill-neutral-950 drop-shadow-md" />
          </motion.div>

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-18 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 border border-red-200 mb-4">
                <Award size={15} className="text-[#E3280C]" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E3280C]">
                  Official Industry Credentials
                </span>
              </div>

              <h3 className="text-3xl sm:text-5xl font-sans font-black text-neutral-950 tracking-tight leading-[1.08]">
                Verified Certifications & Accreditations
              </h3>

              <p className="text-base text-neutral-600 mt-3 font-sans">
                Industry certifications in Artificial Intelligence, Cybersecurity, and Python Programming verified from top institutions.
              </p>
            </div>

            <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
              [ 3 VERIFIED CREDENTIALS ]
            </div>
          </div>

          {/* 3 Holographic Certification Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {CERTIFICATE_DETAILS.map((cert, idx) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative group cursor-default"
                >
                  {/* Holographic Border Glow Container */}
                  <div className="relative rounded-[32px] p-8 sm:p-9 bg-white border-2 border-neutral-200 hover:border-[#E3280C] shadow-xl hover:shadow-2xl hover:shadow-red-500/15 transition-all duration-500 flex flex-col justify-between h-full overflow-hidden">
                    
                    {/* Top Punch Hole with Accent Glow */}
                    <div className="w-5 h-5 rounded-full bg-[#E3280C] mx-auto -mt-4 mb-6 shadow-inner" />

                    {/* Subtle Holographic Gradient Sweep overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div>
                      {/* Issuer & Verification Stamp */}
                      <div className="flex items-center justify-between gap-2 mb-5">
                        <span className="px-3 py-1 rounded-full bg-neutral-950 text-white font-mono font-bold text-xs uppercase tracking-wider shadow-sm">
                          {cert.issuer}
                        </span>

                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-mono font-bold">
                          <CheckCircle2 size={12} className="text-emerald-600" />
                          <span>Verified</span>
                        </span>
                      </div>

                      {/* Certificate Title */}
                      <h4 className="text-2xl sm:text-3xl font-sans font-black text-neutral-950 tracking-tight mb-3 group-hover:text-[#E3280C] transition-colors">
                        {cert.title}
                      </h4>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans mb-6">
                        {cert.description}
                      </p>

                      {/* Key Topics Covered Chips */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {cert.skills.map((s, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-1 rounded-lg bg-neutral-100 border border-neutral-200/80 text-[11px] font-mono font-medium text-neutral-700"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Official Stamp & Serial Number Footer */}
                    <div className="pt-5 border-t border-neutral-100 flex items-center justify-between gap-2 text-xs font-mono">
                      <div>
                        <span className="text-neutral-400 block text-[10px] uppercase">Credential ID</span>
                        <span className="font-bold text-neutral-800">{cert.serialNumber}</span>
                      </div>

                      <div className="w-10 h-10 rounded-2xl bg-neutral-100 group-hover:bg-[#E3280C] group-hover:text-white transition-colors flex items-center justify-center text-neutral-700 shadow-sm">
                        <Icon size={18} />
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* 3. UNDERGRADUATE COURSEWORK & INTERESTS BENTO */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Undergraduate Coursework Matrix (6 Interactive Bento Tiles) */}
            <div className="lg:col-span-8 p-8 sm:p-10 rounded-[32px] bg-white border-2 border-neutral-200 shadow-lg">
              <div className="flex items-center gap-2 mb-6">
                <BookOpen size={20} className="text-[#E3280C]" />
                <h4 className="text-2xl font-sans font-black text-neutral-950 tracking-tight">
                  Core Undergraduate Coursework
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {COURSEWORK_TILES.map((tile, tIdx) => {
                  const TileIcon = tile.icon;
                  return (
                    <motion.div
                      key={tIdx}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="p-5 rounded-2xl bg-[#F9FAFB] border border-neutral-200 hover:border-[#E3280C]/40 hover:bg-white transition-all shadow-sm flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-8 h-8 rounded-xl bg-red-100 text-[#E3280C] flex items-center justify-center mb-3">
                          <TileIcon size={16} />
                        </div>
                        <div className="font-sans font-bold text-sm text-neutral-950 mb-1">
                          {tile.title}
                        </div>
                      </div>
                      <div className="text-[11px] font-mono text-neutral-500 mt-2 pt-2 border-t border-neutral-200/60">
                        {tile.highlight}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right: Technical & Creative Interests */}
            <div className="lg:col-span-4 p-8 sm:p-10 rounded-[32px] bg-neutral-950 text-white shadow-2xl space-y-6">
              
              <div className="flex items-center gap-2">
                <Sparkles size={20} className="text-[#E3280C]" />
                <h4 className="text-xl sm:text-2xl font-sans font-black text-white tracking-tight">
                  Interests & Passions
                </h4>
              </div>

              {/* Technical Interests */}
              <div className="space-y-2.5">
                <div className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">
                  Technical Focus:
                </div>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.interests.technical.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl bg-white/10 text-white font-mono text-xs border border-white/15 hover:bg-[#E3280C] transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Non-Technical Interests */}
              <div className="space-y-2.5 pt-4 border-t border-white/15">
                <div className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">
                  Creative & Personal:
                </div>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.interests.nonTechnical.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl bg-white/5 text-neutral-300 font-mono text-xs border border-white/10 hover:text-white transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 text-xs font-mono text-neutral-400 leading-relaxed">
                Combining technical precision with creative digital craftsmanship.
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
