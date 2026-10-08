import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Terminal,
  Coffee,
  Code2,
  FileCode,
  Database,
  Zap,
  Layout,
  Server,
  GitBranch,
  Cpu,
  Layers,
} from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import devPhoto from '../assets/about-dev.jpg';

// 4-Point Sparkle Star Component
function StarSparkle({ className = '', style = {} }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={style}
    >
      <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
    </svg>
  );
}

function CounterItem({ targetValue, suffix, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const isDecimal = !Number.isInteger(targetValue);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1400; // ms
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = targetValue / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? Number(start.toFixed(1)) : Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, targetValue, isDecimal]);

  const formattedCount = isDecimal
    ? count.toFixed(1)
    : (count < 10 && targetValue >= 1 && targetValue < 10 ? `0${count}` : count);

  return (
    <div
      ref={ref}
      className="p-5 sm:p-6 rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/10 hover:border-[#E3280C]/50 hover:bg-white/[0.08] transition-all duration-300 group shadow-xl"
    >
      <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white group-hover:text-[#E3280C] group-hover:scale-105 transition-all duration-300 flex items-baseline gap-1">
        <span>{formattedCount}</span>
        <span className="text-[#E3280C] text-lg sm:text-2xl font-bold group-hover:text-white transition-colors">
          {suffix}
        </span>
      </div>
      <div className="text-xs sm:text-sm font-semibold text-neutral-400 group-hover:text-neutral-200 mt-1.5 font-mono tracking-wide transition-colors">
        {label}
      </div>
    </div>
  );
}

export default function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-80px' });

  const skillsList = [
    { name: 'VS Code & IDEs', icon: Terminal },
    { name: 'Java', icon: Coffee },
    { name: 'React.js', icon: Code2 },
    { name: 'JavaScript', icon: FileCode },
    { name: 'MySQL', icon: Database },
    { name: 'REST APIs', icon: Zap },
    { name: 'HTML5 & CSS3', icon: Layout },
    { name: 'Spring Boot', icon: Layers },
    { name: 'Node.js', icon: Server },
    { name: 'Git & GitHub', icon: GitBranch },
    { name: 'Python', icon: Cpu },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 relative bg-[#0E1015] text-white overflow-hidden">
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#E3280C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main "Hello!" Banner Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 lg:mb-20">
          
          {/* Left Column: Stylized Framed Photo Card with Floating Stars */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <div className="relative group select-none">
              
              {/* Floating 4-Point Stars with Red & White Glow */}
              <motion.div
                animate={{ scale: [1, 1.25, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -left-6 z-20 text-[#E3280C]"
              >
                <StarSparkle className="w-8 h-8 sm:w-10 sm:h-10 fill-[#E3280C] drop-shadow-[0_0_12px_rgba(227,40,12,0.8)]" />
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-6 -left-4 z-20 text-white"
              >
                <StarSparkle className="w-6 h-6 sm:w-8 sm:h-8 fill-white/80 drop-shadow-md" />
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -top-4 -right-4 z-20 text-[#E3280C]"
              >
                <StarSparkle className="w-7 h-7 sm:w-9 sm:h-9 fill-[#E3280C] drop-shadow-[0_0_10px_rgba(227,40,12,0.8)]" />
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.35, 1], rotate: [0, -90, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                className="absolute bottom-6 -right-6 z-20 text-white"
              >
                <StarSparkle className="w-5 h-5 sm:w-7 sm:h-7 fill-white/80 drop-shadow-md" />
              </motion.div>

              {/* Framed Photo Card with Red Gradient Border & Subtle Tilt */}
              <div className="relative rounded-[32px] p-2.5 bg-gradient-to-b from-neutral-800 to-neutral-900 border-2 border-white/20 shadow-2xl shadow-black/80 transform -rotate-2 group-hover:rotate-0 transition-transform duration-500 max-w-[320px] sm:max-w-[380px] w-full">
                <div className="relative overflow-hidden rounded-[24px] aspect-[4/4.5] bg-neutral-900 border border-white/10">
                  <img
                    src={devPhoto}
                    alt="Sanjai K - Software Engineer & Full Stack Developer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle inner shadow gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1015]/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: "Hello!", Bio Details & Scrolling Skills under text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Label Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.06] border border-white/15 text-xs font-mono text-white/80 w-fit mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E3280C]" />
              <span>ABOUT THE DEVELOPER</span>
            </div>

            {/* Big Bold "Hello!" Title */}
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-sans font-black text-white tracking-tight drop-shadow-md mb-4">
              Hello<span className="text-[#E3280C]">!</span>
            </h2>

            {/* Paragraph 1 */}
            <p className="text-base sm:text-lg lg:text-xl text-neutral-200 leading-relaxed font-sans font-normal mb-4">
              Hi, I'm <strong className="font-extrabold text-white">SANJAI K</strong>, a passionate Software Engineer & Full Stack Developer pursuing B.Tech in Information Technology at Anna University (MPNMJ Engineering College) with an <span className="text-[#E3280C] font-bold font-mono">8.49 CGPA</span>.
            </p>

            {/* Paragraph 2 */}
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-4 font-sans">
              I specialize in building <strong className="font-semibold text-white">scalable, responsive, and user-focused web applications</strong> using modern frontend and backend technologies. I enjoy turning ideas into reliable digital solutions with <strong className="font-semibold text-white">clean code</strong>, <strong className="font-semibold text-white">efficient APIs</strong>, and <strong className="font-semibold text-white">well-structured databases</strong>.
            </p>

            {/* Paragraph 3 */}
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed mb-6 font-sans">
              My core expertise includes <strong className="font-semibold text-white">React.js</strong>, <strong className="font-semibold text-white">Node.js</strong>, <strong className="font-semibold text-white">Java</strong>, <strong className="font-semibold text-white">MySQL</strong>, <strong className="font-semibold text-white">REST APIs</strong>, and <strong className="font-semibold text-white">Git & GitHub</strong>, with hands-on experience in developing real-world full-stack applications. I also explore <strong className="font-semibold text-white">AI-powered solutions</strong>, <strong className="font-semibold text-white">content creation</strong>, and <strong className="font-semibold text-white">video editing</strong> as additional creative skills.
            </p>

            {/* Scrolling Skills Marquee (Right-to-Left) - Placed directly under text within column width */}
            <div className="w-full max-w-full overflow-hidden py-2 select-none [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
              <div className="animate-marquee-infinite flex items-center gap-2.5">
                {[...skillsList, ...skillsList].map((skill, idx) => {
                  const IconComp = skill.icon;
                  return (
                    <div
                      key={idx}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-[#E3280C]/50 text-xs font-mono text-neutral-200 backdrop-blur-md shadow-sm transition-all whitespace-nowrap group shrink-0"
                    >
                      <IconComp size={13} className="text-neutral-400 group-hover:text-[#E3280C] transition-colors" />
                      <span className="font-medium">{skill.name}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E3280C] ml-0.5 opacity-80 group-hover:scale-125 transition-transform" />
                    </div>
                  );
                })}
              </div>
            </div>

          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-white/10"
        >
          {portfolioData.stats.map((stat, idx) => (
            <CounterItem
              key={idx}
              targetValue={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
