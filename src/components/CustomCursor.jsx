import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices with fine pointers
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    window.addEventListener('mousemove', updateMousePosition);

    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .interactive-card');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Primary red dot cursor */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-brand-red rounded-full pointer-events-none z-50 mix-blend-screen hidden lg:block"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovered ? 2.2 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 450, mass: 0.2 }}
      />
      {/* Outer ambient follower ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-brand-red/40 rounded-full pointer-events-none z-50 hidden lg:block"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovered ? 1.6 : 1,
          borderColor: isHovered ? '#E50914' : 'rgba(229, 9, 20, 0.4)',
          backgroundColor: isHovered ? 'rgba(229, 9, 20, 0.08)' : 'transparent',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200, mass: 0.6 }}
      />
    </>
  );
}
