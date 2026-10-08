import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, RotateCcw, Check, Send, ArrowUpRight, Download } from 'lucide-react';
import bgVideo from '../assets/enaku_intha_photo_pesara_amri.mp4';

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const restartVideo = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#DD0B0A] text-white pt-28 sm:pt-32 lg:pt-36 pb-16"
    >
      {/* 1. Large High-Impact Video Background on Right - Full height seamless radial mask blending */}
      <div className="absolute right-0 top-0 bottom-0 h-full w-full lg:w-[75vw] xl:w-[75vw] flex items-end justify-center lg:justify-end z-0 pointer-events-auto pb-0 pr-0 lg:pr-6 overflow-hidden">
        <video
          ref={videoRef}
          src={bgVideo}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          style={{
            WebkitMaskImage: 'radial-gradient(ellipse 75% 85% at 62% 78%, rgba(0,0,0,1) 35%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,0.3) 75%, transparent 92%)',
            maskImage: 'radial-gradient(ellipse 75% 85% at 62% 78%, rgba(0,0,0,1) 35%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,0.3) 75%, transparent 92%)',
          }}
          className="h-full max-h-[82vh] lg:max-h-[86vh] w-auto max-w-full object-contain object-bottom lg:object-right-bottom select-none translate-y-3 lg:translate-y-4"
        />
      </div>

      {/* 2. Left Column: Content (Constrained width for clean readability) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[75vh]">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:max-w-[560px] xl:max-w-[620px] flex flex-col justify-center text-left z-20 py-4"
          >
            {/* Tagline Header: HELLO! I'M */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="flex items-center gap-2 mb-2"
            >
              <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.28em] text-white/90 uppercase drop-shadow">
                HELLO! I'M
              </span>
            </motion.div>

            {/* Giant Bold Headline Name: BABU.V */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="font-outfit font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-white uppercase leading-none mb-3 select-none flex items-baseline drop-shadow-lg"
            >
              <span>BABU</span>
              <span className="text-neutral-950 inline-block mx-0.5">.</span>
              <span>V</span>
            </motion.h1>

            {/* Subtitle: Full Stack Developer | Content Creator & Video Editor */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-4 leading-snug drop-shadow"
            >
              <span>Full Stack Developer</span>{' '}
              <span className="text-white/60 font-normal">|</span>{' '}
              <span className="text-white">Content Creator</span>{' '}
              <span className="text-neutral-950">&</span>{' '}
              <span className="text-neutral-950">Video Editor</span>
            </motion.h2>

            {/* Description Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="text-sm sm:text-base text-white/95 leading-relaxed max-w-xl mb-6 font-normal drop-shadow"
            >
              Full Stack Developer and Software Engineer specializing in building scalable,
              high-performance web applications. Experienced in developing modern frontend and
              backend solutions, with additional expertise in AI-powered applications, content
              creation, and video editing.
            </motion.p>

            {/* Feature Bullets with Checkmarks */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="flex flex-col gap-2.5 mb-8"
            >
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white drop-shadow">
                <div className="w-5 h-5 rounded-full bg-neutral-950/40 flex items-center justify-center shrink-0">
                  <Check size={13} className="text-white stroke-[3]" />
                </div>
                <span>Full Stack Web Development with React.js, Node.js & MySQL</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white drop-shadow">
                <div className="w-5 h-5 rounded-full bg-neutral-950/40 flex items-center justify-center shrink-0">
                  <Check size={13} className="text-white stroke-[3]" />
                </div>
                <span>Core Java, OOP Architectures & Robust REST APIs</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white drop-shadow">
                <div className="w-5 h-5 rounded-full bg-neutral-950/40 flex items-center justify-center shrink-0">
                  <Check size={13} className="text-white stroke-[3]" />
                </div>
                <span>AI-Powered Solutions, Content Creation & Video Editing</span>
              </div>
            </motion.div>

            {/* CTA Button Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4"
            >
              {/* 1. BOOK A CALL */}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="px-6 sm:px-7 py-3 rounded-full bg-neutral-950 hover:bg-neutral-900 text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer font-mono"
              >
                <span>BOOK A CALL</span>
                <Send size={14} className="rotate-45" />
              </a>

              {/* 2. FREE WEBSITE AUDIT */}
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="px-5 sm:px-6 py-3 rounded-full bg-black/40 hover:bg-black/60 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase border border-white/30 hover:border-white/50 backdrop-blur-md hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer font-mono shadow-md"
              >
                <span>FREE WEBSITE AUDIT</span>
                <ArrowUpRight size={15} className="text-white/80" />
              </a>

              {/* 3. DOWNLOAD CV */}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="px-5 sm:px-6 py-3 rounded-full bg-black/40 hover:bg-black/60 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase border border-white/30 hover:border-white/50 backdrop-blur-md hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer font-mono shadow-md"
              >
                <span>DOWNLOAD CV</span>
                <Download size={15} className="text-white/80" />
              </a>
            </motion.div>

            {/* Audio Voice Controller Pill */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="mt-6 flex items-center gap-3 text-xs font-mono text-white/95 bg-black/40 w-fit px-3.5 py-1.5 rounded-full border border-white/20 backdrop-blur-md shadow-lg"
            >
              <button
                onClick={toggleMute}
                className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group"
              >
                <span className={`w-2 h-2 rounded-full ${!isMuted ? 'bg-emerald-400 animate-ping' : 'bg-white/60'}`} />
                <span className="font-medium text-[11px]">
                  {isMuted ? '🔇 Unmute Voice' : '🔊 Voice Playing'}
                </span>
                {isMuted ? <VolumeX size={13} className="text-white/70" /> : <Volume2 size={13} className="text-emerald-400" />}
              </button>

              <div className="w-px h-3 bg-white/25" />

              <button
                onClick={togglePlay}
                title={isPlaying ? "Pause Video" : "Play Video"}
                className="hover:text-white transition-colors cursor-pointer text-white/80"
              >
                {isPlaying ? <Pause size={13} /> : <Play size={13} />}
              </button>

              <button
                onClick={restartVideo}
                title="Restart Intro"
                className="hover:text-white transition-colors cursor-pointer text-white/80"
              >
                <RotateCcw size={12} />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Floating Play Intro Button for video */}
          <div className="hidden lg:flex flex-col justify-end items-end h-[70vh] pointer-events-auto pr-4 xl:pr-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mb-8 flex flex-col items-center"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.94 }}
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute Voice" : "Pause Voice"}
                className="relative group cursor-pointer flex flex-col items-center"
              >
                {!isMuted && isPlaying && (
                  <span className="absolute -inset-2.5 rounded-full bg-red-300/60 animate-ping" />
                )}

                <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-gradient-to-br from-[#E50914] to-[#99080F] border-2 border-white/60 shadow-2xl shadow-black/80 flex items-center justify-center text-white transition-all duration-300 group-hover:shadow-red-500/80 group-hover:border-white">
                  {!isMuted && isPlaying ? (
                    <Pause size={22} className="fill-white" />
                  ) : (
                    <Play size={22} className="fill-white translate-x-0.5" />
                  )}
                </div>

                <span className="mt-1 text-[10px] sm:text-[11px] font-mono font-bold tracking-wider text-white uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  {!isMuted && isPlaying ? 'PAUSE' : 'PLAY INTRO'}
                </span>
              </motion.button>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          viewBox="0 0 1440 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-5 sm:h-7 lg:h-8 text-neutral-950 preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M0,20 Q360,35 720,20 T1440,20"
            fill="none"
            stroke="rgba(255, 255, 255, 0.25)"
            strokeWidth="2"
          />
          <path
            d="M0,20 Q360,35 720,20 T1440,20 L1440,40 L0,40 Z"
            fill="#0E1015"
          />
        </svg>

        <div className="absolute bottom-1 sm:bottom-1.5 left-1/2 -translate-x-1/2 z-30 pointer-events-auto">
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, 'about')}
            className="group flex items-center gap-1.5 px-3.5 py-0.5 rounded-full bg-neutral-900/90 border border-white/20 hover:border-white/40 text-[10px] sm:text-[11px] font-mono text-white/90 backdrop-blur-md shadow-lg transition-all hover:scale-105"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#E3280C] animate-pulse" />
            <span className="font-semibold tracking-wider uppercase">About Babu</span>
            <span className="text-white/60 group-hover:translate-y-0.5 transition-transform">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
