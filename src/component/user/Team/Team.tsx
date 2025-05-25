import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  socials: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    github?: string;
  };
}

const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Ajmal Shan",
      role: "Chief Executive",
      image: "/images/ajmal shan.jpg",
      socials: {
        facebook: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      id: 2,
      name: "Muhammad Udaif",
      role: "Full Stack Developer",
      image: "/images/cot 1.png",
      socials: {
        facebook: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    // {
    //   id: 3,
    //   name: "Sara Fox",
    //   role: "Web Designer",
    //   image: "https://thumbs.dreamstime.com/b/handsome-charismatic-emotional-man-looking-serious-dark-shado-handsome-charismatic-emotional-man-looking-serious-dark-shadow-104045869.jpg",
    //   socials: {
    //     facebook: "#",
    //     twitter: "#",
    //     instagram: "#"
    //   }
    // }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const socialIconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
    hover: { scale: 1.2, y: -5 }
  };

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-blue-600 font-bold text-xl tracking-wide uppercase mb-3">
            Meet Our Experts
          </h3>
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-gray-300 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            The Team Behind Agentlivery
          </motion.h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-400 mb-4">
            Our dedicated team combines years of industry expertise with innovative thinking to deliver exceptional results for our clients.
          </p>
          <p className="max-w-3xl mx-auto text-lg text-gray-400">
            Each member brings unique skills and perspectives to the table, working collaboratively to build solutions that transform how businesses connect with their customers. With backgrounds spanning technology, design, and business strategy, we're equipped to tackle your most complex challenges.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {teamMembers.map((member) => (
            <motion.div 
              key={member.id}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 max-w-xs mx-auto"
            >
              <div className="overflow-hidden h-78 w-full">
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center filter grayscale brightness-78 contrast-155"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                
                <motion.div 
                  className="flex justify-center space-x-3"
                  initial="hidden"
                  animate="visible"
                  transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
                >
                  {member.socials.facebook && (
                    <motion.a
                      href={member.socials.facebook}
                      variants={socialIconVariants}
                      whileHover="hover"
                      className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                    >
                      <Facebook size={16} />
                    </motion.a>
                  )}
                  
                  {member.socials.twitter && (
                    <motion.a
                      href={member.socials.twitter}
                      variants={socialIconVariants}
                      whileHover="hover"
                      className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-400 hover:text-white transition-colors duration-300"
                    >
                      <Twitter size={16} />
                    </motion.a>
                  )}
                  
                  {member.socials.instagram && (
                    <motion.a
                      href={member.socials.instagram}
                      variants={socialIconVariants}
                      whileHover="hover"
                      className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-white transition-colors duration-300"
                    >
                      <Instagram size={16} />
                    </motion.a>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div 
        className="fixed bottom-6 right-6"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.3, type: "spring" }}
      >
        <motion.button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="sr-only">Back to top</span>
          TOP
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Team;