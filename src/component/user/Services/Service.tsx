import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router-dom';

const Service: React.FC = () => {
    const [activeTab, setActiveTab] = useState(1);

    const services = [
        {
            id: 1,
            title: "WORKFLOW AUTOMATION",
            background: "bg-gradient-to-br from-gray-300 to-gray-500",
            lottieUrl: "https://lottie.host/9431ea59-a899-4e39-abdc-71da66b308e0/8922WRdbEa.lottie",
            description: `Our AI Workflow Automation service transforms your business operations by intelligently streamlining repetitive tasks and complex processes. We begin by carefully mapping your existing workflows to identify bottlenecks and opportunities for automation. Our team then develops custom AI solutions that can handle everything from data processing and document management to decision-making sequences and cross-department coordination.
These smart systems work around the clock, processing information in seconds rather than hours or days. They integrate seamlessly with your current software, creating a unified ecosystem where data flows automatically between applications without manual intervention. As these AI workflows learn from patterns and feedback, they become increasingly efficient over time.

The real magic happens when your team is freed from mundane tasks. Employees can redirect their talents toward creative problem-solving, customer relationships, and strategic initiatives that drive growth. Meanwhile, you'll see tangible benefits in reduced errors, faster turnaround times, consistent quality, and significant cost savings.`
        },
        {
            id: 2,
            title: "ENTERPRISE CONSULTING",
            background: "bg-gradient-to-br from-gray-600 to-gray-900",
            lottieUrl: "https://lottie.host/31253c9c-7f9f-441c-9a40-f54ca66333aa/TBPBTuru8t.lottie",
            description: `Our AI Business Consultation service helps organizations navigate the complex artificial intelligence landscape with clarity and purpose. We begin by thoroughly assessing your current operations, identifying specific challenges where AI can deliver meaningful impact, and establishing realistic goals for your AI initiatives.

            Our consultants explain complex AI concepts in straightforward language, focusing on practical applications rather than technical jargon. We analyze your industry's AI adoption trends, helping you understand where competitors are investing and where opportunities exist to gain competitive advantage through strategic implementation.
            
            Together, we develop a customized AI roadmap that balances quick wins with long-term transformation. This comprehensive plan addresses critical factors including data readiness, technology selection, integration requirements, staff training needs, and ethical considerations. We provide realistic timelines, budget forecasts, and expected ROI metrics for each initiative.
            
            Unlike general technology consultants, we specialize exclusively in AI implementation. Our guidance extends beyond strategy to practical execution support – helping you evaluate vendors, design pilot projects, measure outcomes, and scale successful solutions across your organization. Our goal is building your internal AI capabilities systematically, ensuring each step delivers tangible business value while positioning you for sustained innovation.`

        },
        {
            id: 3,
            title: "AI AGENT DEVELOPMENT",
            background: "bg-gradient-to-br from-green-700 to-green-950",
            lottieUrl: "https://lottie.host/b1eeb668-9d92-4c25-a6dc-d22834b53dd4/VM0V6okP0A.lottie",
            description: `Our AI Agent Development service empowers your business by deploying intelligent, autonomous agents that think, learn, and act on your behalf. We begin by identifying repetitive tasks, decision points, and customer interactions that can be enhanced or fully handled by AI. From there, we build custom-trained agents that operate across your digital ecosystem—whether it’s managing support tickets, qualifying leads, automating follow-ups, or executing backend operations.

These agents go beyond basic automation by using natural language processing, decision logic, and contextual memory to perform complex workflows without constant human supervision. Integrated seamlessly with your existing tools—like CRMs, messaging platforms, and internal databases—our AI agents deliver consistent performance 24/7, handling tasks in real-time with speed and accuracy.

Over time, they learn from interactions, improve responses, and adapt to evolving business needs—creating a self-improving system that scales effortlessly with your operations. The result? Your team is free to focus on high-level strategic initiatives while AI agents handle the rest. Expect measurable gains in productivity, reduced operational costs, faster execution, and dramatically improved customer experience.`
        },
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
            {/* Logo and Title Section */}
            <div className="flex items-center gap-2 mb-6 md:mb-8">
                <h2 className="uppercase text-lg sm:text-xl font-medium tracking-wider text-white">Agentlivery</h2>
            </div>

            {/* Services Title */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="relative mb-8 md:mb-12">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-600">SERVICES</span>
                </h1>
                <div className="absolute -right-2 sm:-right-4 top-2 sm:top-4">
                    <div className="rounded-full border-2 border-green-500 w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center bg-green-500/10 shadow-lg shadow-green-500/20">
                        <span className="text-green-500 text-xl sm:text-2xl">+</span>
                    </div>
                </div>
            </motion.div>

            <p className="text-base sm:text-lg md:text-xl mb-10 md:mb-16 text-gray-300 max-w-2xl">
                Our comprehensive suite of AI solutions designed to transform your business operations
            </p>

            {/* Dot Pattern Background */}
            <div className="relative mb-10 md:mb-16">
                <div className="absolute -top-24 sm:-top-36 left-5 sm:left-20 w-32 sm:w-64 h-32 sm:h-64 opacity-10">
                    {/* Abstract dot pattern - responsive grid */}
                    <div className="grid grid-cols-6 sm:grid-cols-12 gap-1 sm:gap-3">
                        {Array(80).fill(0).map((_, i) => (
                            <div key={i} className={`w-1 h-1 sm:w-2 sm:h-2 rounded-full ${i % 7 === 0 ? 'bg-green-400' : i % 5 === 0 ? 'bg-teal-500' : 'bg-gray-500'}`}></div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Service Selector (dropdown style for very small screens) */}
            <div className="block sm:hidden mb-6">
                <select 
                    className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
                    value={activeTab}
                    onChange={(e) => setActiveTab(Number(e.target.value))}
                >
                    {services.map(service => (
                        <option key={service.id} value={service.id}>
                            {service.title}
                        </option>
                    ))}
                </select>
            </div>

            {/* Service Cards - responsive grid */}
            <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-10">
                {services.map((service) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.5, delay: service.id * 0.1 }}
                        onClick={() => setActiveTab(service.id)}
                        className={`${service.background} rounded-xl h-48 md:h-60 lg:h-72 p-4 sm:p-6 md:p-8 relative overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-800 backdrop-blur-sm ${service.id === activeTab ? 'ring-2 ring-green-500 ring-opacity-70' : ''}`}
                    >
                        {/* Lottie Animation Background */}
                        <div className="absolute top-0 left-0 w-full h-full opacity-30">
                            <DotLottieReact
                                src={service.lottieUrl}
                                loop
                                autoplay
                            />
                        </div>

                        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex items-center z-10">
                            <div className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full border ${service.id === activeTab ? 'bg-green-500 border-green-500' : 'border-gray-400'} flex items-center justify-center`}>
                                {service.id === activeTab && (
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"
                                    />
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col h-full justify-between relative z-10">
                            <h3 className={`text-lg sm:text-xl md:text-2xl font-bold ${service.id !== 1 ? 'text-white' : 'text-green-700'}`}>
                                {service.title}
                            </h3>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Description with AnimatePresence for smooth transitions */}
            <motion.div
                key={`description-${activeTab}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut"
                }}
                className="max-w-6xl bg-gray-900/60 p-4 sm:p-6 md:p-8 rounded-xl border border-gray-800 shadow-xl overflow-hidden"
            >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-green-400">{services[activeTab - 1].title}</h2>

                {/* AnimatePresence for handling the animation of description changes */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`description-content-${activeTab}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{
                            duration: 0.5,
                            ease: "easeInOut"
                        }}
                        className="min-h-[12rem]"
                    >
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
                            {services[activeTab - 1].description}
                        </p>
                    </motion.div>
                </AnimatePresence>

                <Link to={'/contact'} className="block w-full sm:w-auto sm:inline-block">
                    <motion.button
                        className="mt-6 md:mt-8 px-4 sm:px-6 py-2 sm:py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-500 transition-colors w-full sm:w-auto"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        For More
                    </motion.button>
                </Link>
            </motion.div>
        </div>
    );
};

export default Service;