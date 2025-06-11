import React, { useEffect } from 'react';
import './land.css';

// motion
import { motion, Variants } from 'framer-motion';
import { fadeIn } from "../../../variants";
import { Link } from 'react-router-dom';

const LandService: React.FC = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            },
            { threshold: 0.2 }
        );

        const elements = document.querySelectorAll('.scroll-fade');
        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    // New animation variants - fixed TypeScript types
    const staggerChildren: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const pulseAnimation: Variants = {
        initial: { scale: 1 },
        animate: {
            scale: [1, 1.05, 1],
            transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
            }
        }
    };

    const rotateAnimation: Variants = {
        initial: { rotate: 0 },
        animate: {
            rotate: 360,
            transition: {
                duration: 20,
                repeat: Infinity,
                ease: "linear"
            }
        }
    };

    const floatAnimation: Variants = {
        initial: { y: 0 },
        animate: {
            y: [0, -15, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-16 px-4 relative overflow-hidden">
            {/* Animated Background dots */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 0.5, x: 0 }}
                transition={{ duration: 1.5 }}
                className="absolute top-10 right-20">
                <div className="grid grid-cols-10 gap-2">
                    {[...Array(100)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: i % 11 === 0 ? 1 : 0.5 }}
                            transition={{ delay: i * 0.01, duration: 0.5 }}
                            className={`h-2 w-2 rounded-full ${i % 11 === 0 ? 'bg-emerald-500' : 'bg-gray-200'}`}
                        ></motion.div>
                    ))}
                </div>
            </motion.div>

            <motion.div
                variants={pulseAnimation}
                initial="initial"
                animate="animate"
                className="absolute top-20 right-1/4 opacity-50">
                <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
            </motion.div>

            {/* Floating elements in background */}
            <motion.div
                variants={floatAnimation}
                initial="initial"
                animate="animate"
                className="absolute top-40 left-20 opacity-30">
                <div className="h-20 w-20 rounded-full border border-emerald-300"></div>
            </motion.div>

            <motion.div
                variants={rotateAnimation}
                initial="initial"
                animate="animate"
                className="absolute bottom-40 left-1/4 opacity-20">
                <div className="h-40 w-40 border-2 border-dashed border-gray-300 rounded-full"></div>
            </motion.div>

            <motion.div
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
                className="max-w-7xl mx-auto">
                {/* Services Header with slide animation */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.7 }}
                    className="flex items-center mb-16">
                    <h2 className="text-5xl font-bold text-black">OUR</h2>
                    <div className="ml-2 flex items-center">
                        <motion.div
                            whileHover={{ rotate: 90, scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                            className="flex items-center justify-center h-12 w-12 rounded-full border-2 border-emerald-500 text-emerald-500 mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </motion.div>
                        <h2 className="text-5xl font-bold text-black">SERVICES</h2>
                    </div>
                </motion.div>

                {/* Description with typing animation effect */}
                <motion.div
                    variants={fadeIn('up', 0.6)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                    className="max-w-2xl ml-auto mb-16">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="text-lg text-gray-700">
                        Agentlivery assists you in identifying and integrating cutting-edge AI solutions, guiding you
                        seamlessly from inception to deployment and beyond.
                    </motion.p>
                </motion.div>

                {/* Service Cards with stagger animation */}
                <Link to={'/services'}>
                    <motion.div
                        variants={staggerChildren}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 hover:cursor-pointer">

                        {/* Card 1 - Autonomous Agent Development */}
                        <motion.div
                            variants={fadeIn('right', 0.1)}
                            whileHover={{ scale: 1.05, y: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="bg-gray-200 rounded-xl p-8 relative overflow-hidden shadow-md group">
                            <div className="absolute top-4 right-4 flex items-center">
                                <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    className="h-6 w-6 rounded-full border-2 border-emerald-500 flex items-center justify-center">
                                    <motion.div
                                        animate={{ scale: [1, 1.5, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="h-2 w-2 bg-emerald-500 rounded-full"></motion.div>
                                </motion.div>
                            </div>

                            <h3 className="text-emerald-500 text-2xl font-bold mb-4">WORKFLOW  AUTOMATION</h3>

                            <motion.div
                                variants={staggerChildren}
                                className="mt-16 grid grid-cols-1 gap-4">
                                <motion.div
                                    whileHover={{ y: -5, backgroundColor: "#f8fdfb", borderColor: "#10b981" }}
                                    className="bg-white rounded-md p-3 text-md text-gray-700 border border-gray-200 transition-all duration-300 hover:shadow-md">
                                    We eliminate repetitive tasks by integrating powerful AI tools into your daily operations. From lead generation to data entry, follow-ups to reporting — we automate it all, so your team can focus on what really matters: growth, innovation, and customer experience.
                                </motion.div>
                                <button className='bg-gray-700 text-white rounded-md p-2'>for more</button>
                            </motion.div>

                            <motion.div
                                initial={{ scale: 0.8, opacity: 0.2 }}
                                whileHover={{ scale: 1.2, opacity: 0.4, rotate: 45 }}
                                transition={{ duration: 0.5 }}
                                className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-emerald-50"></motion.div>
                        </motion.div>

                        {/* Card 2 - Enterprise Consulting */}
                        <motion.div
                            variants={fadeIn('up', 0.2)}
                            whileHover={{ scale: 1.05, y: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="bg-black rounded-xl p-8 relative overflow-hidden shadow-md group">
                            <div className="absolute top-4 right-4 flex items-center">
                                <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    className="h-6 w-6 rounded-full border-2 border-emerald-500 flex items-center justify-center">
                                    <motion.div
                                        animate={{ scale: [1, 1.5, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="h-2 w-2 bg-emerald-500 rounded-full"></motion.div>
                                </motion.div>
                            </div>

                            <h3 className="text-white text-2xl font-bold mb-16">ENTERPRISE CONSULTING</h3>

                            <motion.div
                                variants={staggerChildren}
                                className="mt-4 flex flex-col space-y-4">
                                <motion.div
                                    whileHover={{ x: 5, backgroundColor: "#111", borderColor: "#10b981" }}
                                    className="border border-gray-700 rounded-md p-3 text-sm text-gray-300 transition-all duration-300 hover:shadow-emerald-900 hover:shadow-md">
                                    Not sure how AI fits into your business? We audit your current workflows and design a custom AI roadmap to reduce inefficiencies, cut costs, and uncover hidden growth opportunities. We speak business first, and tech second — so it all makes sense to you.
                                </motion.div>
                                <button className='bg-gray-700 text-white rounded-md p-2'>for more</button>
                            </motion.div>

                            <motion.div
                                initial={{ scale: 0.8, opacity: 0.3 }}
                                whileHover={{ scale: 1.5, opacity: 0.6 }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute -top-20 right-20 h-40 w-40 rounded-full bg-gray-800"></motion.div>
                        </motion.div>

                        {/* Card 3 - Chatbot Development */}
                        <motion.div
                            variants={fadeIn('left', 0.3)}
                            whileHover={{ scale: 1.05, y: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="bg-emerald-900 rounded-xl p-8 relative overflow-hidden shadow-md group">
                            <div className="absolute top-4 right-4 flex items-center">
                                <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    className="h-6 w-6 rounded-full border-2 border-emerald-300 flex items-center justify-center">
                                    <motion.div
                                        animate={{ scale: [1, 1.5, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="h-2 w-2 bg-emerald-300 rounded-full"></motion.div>
                                </motion.div>
                            </div>

                            <h3 className="text-white text-2xl font-bold mb-16">AI AGENT DEVELOPMENT</h3>

                            <motion.div
                                variants={staggerChildren}
                                className="mt-4 flex flex-col space-y-4">
                                <motion.div
                                    whileHover={{ x: -5, backgroundColor: "#064e3b", borderColor: "#6ee7b7" }}
                                    className="border border-emerald-700 rounded-md p-3 text-sm text-emerald-100 transition-all duration-300 hover:shadow-emerald-950 hover:shadow-md">
                                    We build intelligent agents that think, learn, and act on your behalf. Whether it’s handling customer queries, managing backend operations, or automating decision-making — our AI agents operate 24/7 with zero burnout and maximum precision
                                </motion.div>
                                <button className='bg-gray-700 text-white rounded-md p-2'>for more</button>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0.3, rotate: 0 }}
                                whileHover={{ opacity: 0.6, rotate: 45, scale: 1.2 }}
                                animate={{
                                    y: [0, 10, 0],
                                    rotate: [0, 10, 0]
                                }}
                                transition={{
                                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                                    rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                                }}
                                className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-emerald-800"></motion.div>
                        </motion.div>
                    </motion.div>
                </Link>
            </motion.div>
        </div>
    );
};

export default LandService;