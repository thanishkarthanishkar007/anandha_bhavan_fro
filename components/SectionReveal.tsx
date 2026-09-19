'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
}

export default function SectionReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.8,
}: SectionRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const getInitial = () => {
    if (shouldReduceMotion || direction === 'none') {
      return { opacity: 0 };
    }
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 36 };
      case 'down':
        return { opacity: 0, y: -36 };
      case 'left':
        return { opacity: 0, x: 36 };
      case 'right':
        return { opacity: 0, x: -36 };
      default:
        return { opacity: 0, y: 36 };
    }
  };

  const getAnimate = () => {
    if (shouldReduceMotion || direction === 'none') {
      return { opacity: 1 };
    }
    return { opacity: 1, x: 0, y: 0 };
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={getAnimate()}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: shouldReduceMotion ? 0.01 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
