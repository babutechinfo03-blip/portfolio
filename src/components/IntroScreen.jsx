import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function IntroScreen({ onComplete }) {
  const [percent, setPercent] = useState(0);
  const [phase, setPhase] = useState('loading'); // 'loading' -> 'signature' -> 'wipe' -> 'done'
  const animFrameRef = useRef(null);
  const startTimeRef = useRef(null);

  const duration = 2600; // 2.6 seconds for 0% -> 100%
  const radius = 54;
  const circumference = 2 * Math.PI * radius; // ~339.29px

  // Phase 1: 0% to 100% synchronized counter & ring
  useEffect(() => {
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const step = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      const currentPercent = Math.min(Math.floor(easedProgress * 100), 100);

      setPercent(currentPercent);

      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(step);
      } else {
        setPercent(100);
        // Instant trigger of Phase 2: Morph to Signature
        setTimeout(() => {
          setPhase('signature');
        }, 150);
      }
    };

    animFrameRef.current = requestAnimationFrame(step);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // Phase 2 -> Phase 3 -> Phase 4 Progression
  useEffect(() => {
    if (phase === 'signature') {
      // Hold signature for ~1.2s draw + 0.4s hold = 1.6s
      const timer = setTimeout(() => {
        setPhase('wipe');
      }, 1650);
      return () => clearTimeout(timer);
    }

    if (phase === 'wipe') {
      // Transition wipe over 0.75s
      const timer = setTimeout(() => {
        handleFinish();
      }, 750);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  const handleFinish = () => {
    sessionStorage.setItem('leeshark_intro_seen', 'true');
    onComplete();
  };

  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden select-none pointer-events-auto">
      {/* 3. Transition Wipe Backdrop */}
      <motion.div
        className="absolute inset-0 z-10"
        initial={{ clipPath: 'inset(0% 0% 0% 0%)' }}
        animate={
          phase === 'wipe'
            ? {
                clipPath: 'inset(0% 0% 100% 0%)',
                transition: { duration: 0.75, ease: [0.77, 0, 0.175, 1] },
              }
            : { clipPath: 'inset(0% 0% 0% 0%)' }
        }
        style={{ backgroundColor: '#0a0a08' }}
      >
        {/* Subtle radial ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,220,192,0.06)_0%,transparent_70%)] pointer-events-none" />

        {/* Content Centered Container */}
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full px-6">
          <AnimatePresence mode="wait">
            {/* Phase 1: Percentage Counter & Circular Progress Ring */}
            {phase === 'loading' && (
              <motion.div
                key="loader"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85, filter: 'blur(4px)' }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="relative flex flex-col items-center justify-center"
              >
                {/* Large Center Percentage Counter */}
                <div className="relative flex items-center justify-center mb-6">
                  <span
                    className="font-syne font-black text-6xl sm:text-7xl md:text-8xl tracking-tighter"
                    style={{ color: '#E8DCC0' }}
                  >
                    {percent}
                    <span className="text-3xl sm:text-4xl md:text-5xl font-bold ml-1 opacity-70">
                      %
                    </span>
                  </span>
                </div>

                {/* Circular SVG Progress Ring */}
                <div className="relative flex items-center justify-center w-36 h-36">
                  <svg
                    className="w-full h-full -rotate-90 transform"
                    viewBox="0 0 130 130"
                  >
                    {/* Ring Track */}
                    <circle
                      cx="65"
                      cy="65"
                      r={radius}
                      fill="none"
                      stroke="#E8DCC0"
                      strokeWidth="2.5"
                      strokeOpacity="0.15"
                    />
                    {/* Active Animated Ring */}
                    <circle
                      cx="65"
                      cy="65"
                      r={radius}
                      fill="none"
                      stroke="#E8DCC0"
                      strokeWidth="3"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                      style={{
                        transition: 'stroke-dashoffset 40ms linear',
                      }}
                    />
                  </svg>

                  {/* Tiny Cursor / Dot Indicator at Center-Bottom of Ring */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="relative">
                      <span className="block w-2.5 h-2.5 rounded-full bg-[#E8DCC0] shadow-[0_0_12px_#E8DCC0] animate-pulse" />
                      <span className="absolute -inset-1 rounded-full bg-[#E8DCC0]/30 animate-ping" />
                    </div>
                  </div>
                </div>

                {/* Bottom Status Text */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  className="mt-6 text-[11px] font-mono tracking-[0.25em] uppercase text-[#E8DCC0]"
                >
                  INITIALIZING EXPERIENCE
                </motion.p>
              </motion.div>
            )}

            {/* Phase 2: Morph to Signature ("hello" handwriting reveal) */}
            {(phase === 'signature' || phase === 'wipe') && (
              <motion.div
                key="signature"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="relative flex flex-col items-center justify-center"
              >
                <div className="relative w-[300px] sm:w-[380px] md:w-[460px] h-[140px] sm:h-[160px] flex items-center justify-center">
                  <svg
                    viewBox="0 0 380 140"
                    className="w-full h-full overflow-visible"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Cursive Handwriting SVG Path for "hello" */}
                    <motion.path
                      d="M 40,105 C 55,88 68,32 78,28 C 86,24 82,60 76,110 C 84,80 102,68 116,74 C 128,80 126,106 128,110 C 135,104 150,78 164,80 C 176,82 168,106 156,110 C 168,106 186,34 195,25 C 203,18 198,52 192,110 C 200,104 218,34 228,25 C 236,18 230,54 225,110 C 235,104 248,78 264,78 C 280,78 282,94 275,106 C 268,116 248,114 246,98 C 244,82 264,76 276,78 C 288,80 305,82 335,74"
                      stroke="#E8DCC0"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{
                        pathLength: 1,
                        opacity: 1,
                        transition: {
                          pathLength: { duration: 1.15, ease: [0.45, 0, 0.25, 1] },
                          opacity: { duration: 0.15 },
                        },
                      }}
                    />
                  </svg>
                </div>

                {/* Subtle Welcome Tag below signature */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="flex items-center gap-2 mt-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8DCC0] animate-pulse" />
                  <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#E8DCC0]/70">
                    WELCOME TO MY WORLD
                  </span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Skip Intro Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          onClick={handleFinish}
          className="absolute bottom-8 right-8 px-4 py-2 text-[11px] font-mono tracking-widest uppercase rounded-full border border-[#E8DCC0]/20 text-[#E8DCC0]/70 hover:text-[#E8DCC0] hover:border-[#E8DCC0]/60 bg-black/40 backdrop-blur-sm transition-all duration-300 flex items-center gap-2 group cursor-pointer z-30"
        >
          <span>Skip Intro</span>
          <ArrowRight
            size={13}
            className="group-hover:translate-x-1 transition-transform text-[#E8DCC0]"
          />
        </motion.button>
      </motion.div>
    </div>
  );
}
