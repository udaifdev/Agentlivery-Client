import React, { useRef } from 'react';
import './land.css'
// motion
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const PartnerStep = () => {
  const sectionRef = useRef(null);

  // Advanced scroll animations using useScroll hook
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Create smooth scrollYProgress with spring physics
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transform scroll progress into various animation values
  const opacity = useTransform(smoothProgress, [0, 0.2], [0, 1]);
  const scale = useTransform(smoothProgress, [0, 0.3], [0.8, 1]);
  const y = useTransform(smoothProgress, [0, 0.3], [100, 0]);
  const rotation = useTransform(smoothProgress, [0, 0.3], [-5, 0]);

  // Parallax effect for cards
  const cardOneY = useTransform(smoothProgress, [0.1, 0.5], [80, 0]);
  const cardTwoY = useTransform(smoothProgress, [0.2, 0.6], [100, 0]);
  const cardThreeY = useTransform(smoothProgress, [0.3, 0.7], [120, 0]);

  // Staggered opacity for cards
  const cardOneOpacity = useTransform(smoothProgress, [0.1, 0.3], [0, 1]);
  const cardTwoOpacity = useTransform(smoothProgress, [0.2, 0.4], [0, 1]);
  const cardThreeOpacity = useTransform(smoothProgress, [0.3, 0.5], [0, 1]);

  return (
    <motion.div
      ref={sectionRef}
      style={{ opacity, scale }}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-teal-900 text-white p-4 overflow-x-hidden"
    >
      <motion.h1
        style={{ y: useTransform(smoothProgress, [0.1, 0.3], [50, 0]), rotate: rotation }}
        className="text-4xl font-bold mb-16 text-center w-full"
      >
        3 Steps to <br />Partner with Us
      </motion.h1>

      {/* Add width constraints and center alignment */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full mx-auto px-4">
        {/* Consultation Card */}
        <motion.div
          style={{ y: cardOneY, opacity: cardOneOpacity }}
          className="bg-gray-900 rounded-lg p-6 flex flex-col items-center"
        >
          <div className="bg-teal-700 p-4 rounded-md mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <line x1="7" y1="8" x2="17" y2="8" />
              <line x1="7" y1="12" x2="17" y2="12" />
              <line x1="7" y1="16" x2="12" y2="16" />
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-4">Consultation</h2>
          <p className="text-gray-400 text-center">
            Define your vision and set clear goals with our experts.
          </p>
        </motion.div>

        {/* Design & Development Card */}
        <motion.div
          style={{ y: cardTwoY, opacity: cardTwoOpacity }}
          className="bg-gray-900 rounded-lg p-6 flex flex-col items-center"
        >
          <div className="bg-teal-700 p-4 rounded-md mb-6 relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 19l7-7 3 3-7 7-3-3z" />
              <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
              <path d="M2 2l7.586 7.586" />
              <circle cx="11" cy="11" r="2" fill="currentColor" />
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-4">Design & Development</h2>
          <p className="text-gray-400 text-center">
            Craft visually compelling, strategically effective solutions.
          </p>
        </motion.div>

        {/* Review & Launch Card */}
        <motion.div
          style={{ y: cardThreeY, opacity: cardThreeOpacity }}
          className="bg-gray-900 rounded-lg p-6 flex flex-col items-center"
        >
          <div className="bg-teal-700 p-4 rounded-md mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 12.5c0 4.142-3.582 7.5-8 7.5-1.28 0-2.489-.22-3.634-.655C7.22 21 3 21 3 21s1.5-3 2.119-4.2A7.297 7.297 0 0 1 6 12.5C6 8.358 9.582 5 14 5s8 3.358 8 7.5z" />
              <circle cx="14" cy="12.5" r="1" />
              <circle cx="17" cy="12.5" r="1" />
              <circle cx="11" cy="12.5" r="1" />
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-4">Review & Launch</h2>
          <p className="text-gray-400 text-center">
            Refine together and launch with impact, making it more premium.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PartnerStep;