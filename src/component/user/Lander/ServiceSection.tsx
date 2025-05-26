import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';


const ServiceSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    margin: "-100px" // Trigger when section is 100px from viewport
  });

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

  // Animation variants for header
  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: 60, 
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic-bezier for smooth ease
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  // Animation variants for service cards
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: -200, 
      rotate: -8, 
      scale: 0.9 
    },
    visible: (index:any) => ({
      opacity: 1,
      x: 0,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 1,
        delay: 0.2 + index * 0.15, // Smoother stagger
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 120,
        damping: 20
      }
    })
  };

  // Animation variants for CTA button
  const ctaVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        delay: 1, // Delay after cards
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 text-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Our Project
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions designed to elevate your digital presence and drive business growth
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 overflow-hidden">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={index}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10"
                   style={{background: `linear-gradient(135deg, ${service.gradient.includes('blue') ? '#3B82F6, #8B5CF6' : service.gradient.includes('green') ? '#10B981, #14B8A6' : service.gradient.includes('pink') ? '#EC4899, #F43F5E' : '#EA580C, #EF4444'})`}} />
              
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-700 group-hover:transform group-hover:scale-105 group-hover:shadow-2xl">
                <motion.div 
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.gradient} mb-6 shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {service.icon}
                </motion.div>
                
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
          variants={ctaVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-16 sm:mt-20"
        >
          <Link to={'/contact'}>
          <motion.button 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white font-bold py-4 px-8 sm:px-12 rounded-full text-lg sm:text-xl shadow-2xl transition-all duration-300 hover:shadow-blue-500/25"
            >
            Start Your Project
          </motion.button>
              </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceSection;