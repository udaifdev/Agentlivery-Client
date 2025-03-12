import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

interface BlogPost {
  id: number;
  date: string;
  title: string;
  description: string;
  tag: string;
  category: string;
}

const Blog = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const blogPosts: BlogPost[] = [
    // {
    //   id: 4,
    //   date: "December 19, 2024",
    //   title: "Introducing Agentive By Morningside AI",
    //   description: "Explore Agentive: Streamlining the Creation, Management, and Deployment of Advanced AI Agents",
    //   tag: "Read",
    //   category: "Product Launch"
    // },
    // {
    //   id: 2,
    //   title: "What OpenAI's Devday Announcements Mean For Your Business.",
    //   description: "A Discussion with Morningside's CEO, Liam Ottley, and CTO, Spencer Porter, on the Implications of OpenAI's Recent Announcements for Your Business.",
    //   date: "December 19, 2024",
    //   tag: "Read",
    //   category: "Industry News"
    // },
    // {
    //   id: 3,
    //   title: "Our State-of-the-Art Natural Language to SQL Innovation",
    //   description: "Get an inside look into how Morningside AI is surpassing SOTA performance for Natural Language to SQL.",
    //   date: "December 19, 2024",
    //   tag: "Read",
    //   category: "Technology"
    // }
  ];

  const containerVariants: Variants = {
    hidden: { 
      opacity: 0 
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0,
      x: -50,
      scale: 1
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    hover: { 
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17
      }
    }
  };

  const buttonVariants: Variants = {
    initial: { x: 0 },
    hover: { x: 5 }
  };

  return (
    <div className="min-h-screen  py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mb-12 text-center"
      >
        <h1 className="text-4xl font-bold text-gray-300 mb-4">Latest Articles</h1>
        <p className="text-lg text-gray-400">Discover our latest insights and innovations</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto grid gap-8"
      >
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            onHoverStart={() => setHoveredId(post.id)}
            onHoverEnd={() => setHoveredId(null)}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
          >
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">{post.date}</span>
                </div>
                <div className="flex items-center text-blue-600">
                  <Tag className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">{post.category}</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4 text-gray-800 leading-tight">
                {post.title}
              </h2>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {post.description}
              </p>

              <motion.div 
                className="flex items-center"
                animate={{ 
                  opacity: hoveredId === post.id ? 1 : 0.8,
                  x: hoveredId === post.id ? 10 : 0
                }}
                transition={{ duration: 0.2 }}
              >
                <motion.button
                  className="flex items-center text-blue-600 font-semibold group"
                  whileTap={{ scale: 0.95 }}
                >
                  {post.tag}
                  <motion.div
                    className="ml-2"
                    variants={buttonVariants}
                    initial="initial"
                    animate={hoveredId === post.id ? "hover" : "initial"}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Blog;