import React from 'react';
import { motion } from 'framer-motion';

interface WaveSectionProps {
  reverse?: boolean;
}

const WaveSection: React.FC<WaveSectionProps> = ({ reverse = false }) => {
  return (
    <div className={`relative ${reverse ? 'transform rotate-180' : ''}`}>
      <svg
        className="w-full h-16 md:h-20"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
          fill="rgba(255, 255, 255, 0.6)"
          animate={{
            d: [
              "M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z",
              "M0,80 C300,20 900,100 1200,40 L1200,120 L0,120 Z",
              "M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.path
          d="M0,80 C400,20 800,100 1200,40 L1200,120 L0,120 Z"
          fill="rgba(90, 122, 90, 0.15)"
          animate={{
            d: [
              "M0,80 C400,20 800,100 1200,40 L1200,120 L0,120 Z",
              "M0,40 C400,100 800,20 1200,80 L1200,120 L0,120 Z",
              "M0,80 C400,20 800,100 1200,40 L1200,120 L0,120 Z"
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: -2
          }}
        />
        <motion.path
          d="M0,100 C300,50 900,90 1200,70 L1200,120 L0,120 Z"
          fill="rgba(217, 119, 6, 0.1)"
          animate={{
            d: [
              "M0,100 C300,50 900,90 1200,70 L1200,120 L0,120 Z",
              "M0,70 C300,110 900,30 1200,100 L1200,120 L0,120 Z",
              "M0,100 C300,50 900,90 1200,70 L1200,120 L0,120 Z"
            ]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: -4
          }}
        />
      </svg>
    </div>
  );
};

export default WaveSection;