import React, { useRef } from 'react';
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

  // Left-to-right slide animations for cards with staggered timing
  const cardOneX = useTransform(smoothProgress, [0.1, 0.4], [-200, 0]);
  const cardTwoX = useTransform(smoothProgress, [0.2, 0.5], [-200, 0]);
  const cardThreeX = useTransform(smoothProgress, [0.3, 0.6], [-200, 0]);

  // Staggered opacity for cards
  const cardOneOpacity = useTransform(smoothProgress, [0.1, 0.4], [0, 1]);
  const cardTwoOpacity = useTransform(smoothProgress, [0.2, 0.5], [0, 1]);
  const cardThreeOpacity = useTransform(smoothProgress, [0.3, 0.6], [0, 1]);

  // Optional: Add slight rotation for more dynamic effect
  const cardOneRotate = useTransform(smoothProgress, [0.1, 0.4], [-10, 0]);
  const cardTwoRotate = useTransform(smoothProgress, [0.2, 0.5], [-10, 0]);
  const cardThreeRotate = useTransform(smoothProgress, [0.3, 0.6], [-10, 0]);

  return (
    <div ref={sectionRef} className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-teal-900 text-white p-4 py-8 sm:py-16">
      <motion.h1
        style={{ y: useTransform(smoothProgress, [0, 0.3], [50, 0]), rotate: rotation, opacity }}
        className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-16 text-center w-full px-2"
      >
        3 Steps to <br />Partner with Us
      </motion.h1>

      {/* Responsive grid with proper spacing */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl w-full mx-auto px-4 overflow-hidden">
        {/* Consultation Card */}
        <motion.div
          style={{ 
            x: cardOneX, 
            opacity: cardOneOpacity,
            rotate: cardOneRotate,
            scale: useTransform(smoothProgress, [0.1, 0.4], [0.9, 1])
          }}
          className="bg-gray-900 rounded-lg p-4 sm:p-6 flex flex-col items-center min-h-0 shadow-2xl border border-gray-800"
        >
          <div className="bg-teal-700 p-3 sm:p-4 rounded-md mb-4 sm:mb-6 flex-shrink-0 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-12 sm:w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <line x1="7" y1="8" x2="17" y2="8" />
              <line x1="7" y1="12" x2="17" y2="12" />
              <line x1="7" y1="16" x2="12" y2="16" />
            </svg>
          </div>
          <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center">Consultation</h2>
          <p className="text-gray-400 text-center text-sm sm:text-base leading-relaxed">
            Define your vision and set clear goals with our experts.
          </p>
        </motion.div>

        {/* Design & Development Card */}
        <motion.div
          style={{ 
            x: cardTwoX, 
            opacity: cardTwoOpacity,
            rotate: cardTwoRotate,
            scale: useTransform(smoothProgress, [0.2, 0.5], [0.9, 1])
          }}
          className="bg-gray-900 rounded-lg p-4 sm:p-6 flex flex-col items-center min-h-0 shadow-2xl border border-gray-800"
        >
          <div className="bg-teal-700 p-3 sm:p-4 rounded-md mb-4 sm:mb-6 relative flex-shrink-0 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-12 sm:w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 19l7-7 3 3-7 7-3-3z" />
              <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
              <path d="M2 2l7.586 7.586" />
              <circle cx="11" cy="11" r="2" fill="currentColor" />
            </svg>
          </div>
          <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center">Design & Development</h2>
          <p className="text-gray-400 text-center text-sm sm:text-base leading-relaxed">
            Craft visually compelling, strategically effective solutions.
          </p>
        </motion.div>

        {/* Review & Launch Card */}
        <motion.div
          style={{ 
            x: cardThreeX, 
            opacity: cardThreeOpacity,
            rotate: cardThreeRotate,
            scale: useTransform(smoothProgress, [0.3, 0.6], [0.9, 1])
          }}
          className="bg-gray-900 rounded-lg p-4 sm:p-6 flex flex-col items-center min-h-0 shadow-2xl border border-gray-800"
        >
          <div className="bg-teal-700 p-3 sm:p-4 rounded-md mb-4 sm:mb-6 flex-shrink-0 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-12 sm:w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 12.5c0 4.142-3.582 7.5-8 7.5-1.28 0-2.489-.22-3.634-.655C7.22 21 3 21 3 21s1.5-3 2.119-4.2A7.297 7.297 0 0 1 6 12.5C6 8.358 9.582 5 14 5s8 3.358 8 7.5z" />
              <circle cx="14" cy="12.5" r="1" />
              <circle cx="17" cy="12.5" r="1" />
              <circle cx="11" cy="12.5" r="1" />
            </svg>
          </div>
          <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center">Review & Launch</h2>
          <p className="text-gray-400 text-center text-sm sm:text-base leading-relaxed">
            Refine together and launch with impact, making it more premium.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PartnerStep;