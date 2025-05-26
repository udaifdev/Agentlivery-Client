import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ServiceSection = () => {
  const sectionRef = useRef(null);

  // Advanced scroll animations using useScroll hook
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Create smooth scrollYProgress with spring physics
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001
  });

  // Header animations
  const headerOpacity = useTransform(smoothProgress, [0, 0.2], [0, 1]);
  const headerY = useTransform(smoothProgress, [0, 0.2], [80, 0]);
  const headerScale = useTransform(smoothProgress, [0, 0.2], [0.8, 1]);

  // Left-to-right slide animations for service cards
  const serviceOneX = useTransform(smoothProgress, [0.15, 0.45], [-300, 0]);
  const serviceTwoX = useTransform(smoothProgress, [0.25, 0.55], [-300, 0]);
  const serviceThreeX = useTransform(smoothProgress, [0.35, 0.65], [-300, 0]);
  const serviceFourX = useTransform(smoothProgress, [0.45, 0.75], [-300, 0]);

  // Staggered opacity for service cards
  const serviceOneOpacity = useTransform(smoothProgress, [0.15, 0.45], [0, 1]);
  const serviceTwoOpacity = useTransform(smoothProgress, [0.25, 0.55], [0, 1]);
  const serviceThreeOpacity = useTransform(smoothProgress, [0.35, 0.65], [0, 1]);
  const serviceFourOpacity = useTransform(smoothProgress, [0.45, 0.75], [0, 1]);

  // Rotation effects for dynamic movement
  const serviceOneRotate = useTransform(smoothProgress, [0.15, 0.45], [-15, 0]);
  const serviceTwoRotate = useTransform(smoothProgress, [0.25, 0.55], [-15, 0]);
  const serviceThreeRotate = useTransform(smoothProgress, [0.35, 0.65], [-15, 0]);
  const serviceFourRotate = useTransform(smoothProgress, [0.45, 0.75], [-15, 0]);

  // Scale animations for each service
  const serviceOneScale = useTransform(smoothProgress, [0.15, 0.45], [0.85, 1]);
  const serviceTwoScale = useTransform(smoothProgress, [0.25, 0.55], [0.85, 1]);
  const serviceThreeScale = useTransform(smoothProgress, [0.35, 0.65], [0.85, 1]);
  const serviceFourScale = useTransform(smoothProgress, [0.45, 0.75], [0.85, 1]);

  const services = [
    {
      title: "Web Development",
      description: "Modern, responsive websites built with cutting-edge technologies for optimal performance.",
      icon: (
        <svg className="h-10 w-10 sm:h-14 sm:w-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v6m0 6v6"/>
          <path d="m21 12-6-3-6 3-6-3"/>
        </svg>
      ),
      gradient: "from-blue-600 to-purple-600"
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      icon: (
        <svg className="h-10 w-10 sm:h-14 sm:w-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
          <line x1="12" y1="18" x2="12.01" y2="18"/>
        </svg>
      ),
      gradient: "from-green-600 to-teal-600"
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that prioritize user experience and drive engagement.",
      icon: (
        <svg className="h-10 w-10 sm:h-14 sm:w-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      gradient: "from-pink-600 to-rose-600"
    },
    {
      title: "Digital Marketing",
      description: "Strategic campaigns that boost your online presence and drive measurable results.",
      icon: (
        <svg className="h-10 w-10 sm:h-14 sm:w-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 3v18h18"/>
          <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
        </svg>
      ),
      gradient: "from-orange-600 to-red-600"
    }
  ];

  const animations = [
    { x: serviceOneX, opacity: serviceOneOpacity, rotate: serviceOneRotate, scale: serviceOneScale },
    { x: serviceTwoX, opacity: serviceTwoOpacity, rotate: serviceTwoRotate, scale: serviceTwoScale },
    { x: serviceThreeX, opacity: serviceThreeOpacity, rotate: serviceThreeRotate, scale: serviceThreeScale },
    { x: serviceFourX, opacity: serviceFourOpacity, rotate: serviceFourRotate, scale: serviceFourScale }
  ];

  return (
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 text-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          style={{ opacity: headerOpacity, y: headerY, scale: headerScale }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.h2 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Our Project
          </motion.h2>
          <motion.p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions designed to elevate your digital presence and drive business growth
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 overflow-hidden">
          {services.map((service, index) => (
            <motion.div
              key={index}
              style={{
                x: animations[index].x,
                opacity: animations[index].opacity,
                rotate: animations[index].rotate,
                scale: animations[index].scale
              }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10"
                   style={{background: `linear-gradient(135deg, ${service.gradient.includes('blue') ? '#3B82F6, #8B5CF6' : service.gradient.includes('green') ? '#10B981, #14B8A6' : service.gradient.includes('pink') ? '#EC4899, #F43F5E' : '#EA580C, #EF4444'})`}} />
              
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 group-hover:transform group-hover:scale-105">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.gradient} mb-6 shadow-lg`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Decorative element */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-white/20 to-transparent rounded-full group-hover:scale-150 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          style={{ 
            opacity: useTransform(smoothProgress, [0.7, 0.9], [0, 1]),
            y: useTransform(smoothProgress, [0.7, 0.9], [50, 0])
          }}
          className="text-center mt-16 sm:mt-20"
        >
          <motion.button 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-dark-600 to-white-600 hover:from-white-700 hover:to-teal-700 text-white font-bold py-4 px-8 sm:px-12 rounded-full text-lg sm:text-xl shadow-2xl transition-all duration-300 hover:shadow-purple-500/25"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceSection;