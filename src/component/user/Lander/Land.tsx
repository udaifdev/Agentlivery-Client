import React, { Component, ErrorInfo, ReactNode, useState } from 'react';
import { motion } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import LandService from './LandService';
import PartnerStep from './PartnerStep';
import { Link } from 'react-router-dom';
import ServicesSection from './ServiceSection';

// Props for the ErrorBoundary component
interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

// State for the ErrorBoundary component
interface ErrorBoundaryState {
  hasError: boolean;
}

// Error Boundary Component
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Animation error:", error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

// Animated fallback component
const AnimatedFallback: React.FC = () => (
  <div className="w-full h-full flex items-center justify-center">
    <motion.div 
      className="p-12 rounded-lg bg-gradient-to-br from-teal-500/20 to-cyan-500/20 flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-20 h-20 text-teal-400 mb-4" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </motion.svg>
      <p className="text-lg font-medium text-teal-300">Innovative AI Solutions</p>
    </motion.div>
  </div>
);

const Land: React.FC = () => {
  const [animationError, setAnimationError] = useState(false);

  // Handle Lottie animation errors
  const handleLottieError = (error: any): void => {
    console.error("Lottie animation error:", error);
    setAnimationError(true);
  };

  const handleLottieLoad = (): void => {
    console.log("Lottie animation loaded successfully");
  };

  return (
    <div className="relative">
      {/* Full Height Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-teal-900 text-white flex flex-col">
        {/* Header */}
        <header className="container mx-auto px-8 sm:px-12 lg:px-16 mt-4">
          <div className="flex items-center space-x-4">
            {/* <img
              src="/images/agentlivery-logos.png"
              alt="Agentlivery Logo"
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
            /> */}
            <span className="text-gray-300 text-md font-medium tracking-wider">
              Agentlivery
            </span>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 sm:px-6 lg:px-20 flex-grow flex items-center py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 md:space-y-8"
            >
              <motion.h1
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 
                           text-transparent bg-clip-text 
                           bg-gradient-to-r from-teal-400 to-cyan-300
                           leading-tight"
              >
                YOUR BUSINESS
                <br />
                ON AUTOPILOT
              </motion.h1>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 md:mb-8">
                Leverage cutting-edge AI to transform your business operations, drive innovation, and unlock unprecedented efficiency.
              </p>

              <div className="flex flex-wrap gap-4 md:gap-6 items-center">
                <Link to={'/contact'}>
                  <motion.button
                    className="bg-gradient-to-r from-teal-500 to-cyan-400 
                    text-slate-900 px-8 sm:px-10 py-3 sm:py-4 rounded-full 
                    text-base md:text-lg font-bold tracking-wider
                    hover:from-teal-600 hover:to-cyan-500 
                    transition-all duration-300
                    shadow-lg hover:shadow-xl
                    transform hover:-translate-y-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Let's Talk
                  </motion.button>
                </Link>

                <Link to={'/services'} className='text-gray-300 hover:text-white flex items-center space-x-2 group'>
                  <span>Our Services</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Animation Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="flex justify-center items-center"
            >
              {/* Animation with Better Error Handling */}
              <div className="relative w-full h-72 md:h-96 lg:h-full">
                <ErrorBoundary fallback={<AnimatedFallback />}>
                  {animationError ? (
                    <AnimatedFallback />
                  ) : (
                    <div className="h-full w-full">
                      <DotLottieReact
                        src="https://lottie.host/931309c3-6ea1-4bc8-9848-a0435f8c1c4d/4FMDhe43WZ.lottie"
                        loop
                        autoplay
                        onError={handleLottieError}
                        onLoad={handleLottieLoad}
                        style={{ height: '100%', width: '100%' }}
                      />
                    </div>
                  )}
                </ErrorBoundary>
              </div>
            </motion.div>
          </div>
        </main>
      </div>

      {/* Additional Sections */}
      <div className="overflow-x-hidden">
        <LandService />
        <PartnerStep />
        <ServicesSection/>
      </div>
    </div>
  );
};

export default Land;