import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section - Social Icons & Email */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h3 className="text-xl font-semibold mb-2">Connect With Us</h3>
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="hover:text-blue-400 transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a 
              href="#" 
              className="hover:text-pink-400 transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="#" 
              className="hover:text-blue-500 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>    
          <p className="text-sm text-gray-400">Or email us at:</p>
          <a 
            href="mailto:info@agentlivery.com" 
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            info@agentlivery.com
          </a>
        </div>

        {/* Center Section - Logo & Navigation */}
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold text-gray-500">Agentlivery</h2>
          <nav className="mt-4 flex flex-col items-center space-y-2">
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">Home</a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">About Us</a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">Services</a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">Contact</a>
          </nav>
        </div>

        {/* Right Section - Address & Hours */}
        <div className="flex flex-col items-center md:items-end text-right">
          <h3 className="text-xl font-semibold mb-2">About Us</h3>
          <p className="text-sm text-gray-400 text-center md:text-right max-w-xs mt-2">
            Agentlivery connects businesses with AI-powered solutions to streamline operations and enhance customer experiences through innovative technology.
          </p>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 border-t border-gray-800 mt-8 pt-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2025 Agentlivery. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;