import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Left Section - Social Icons & Email */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-gray-400">
            <Facebook size={26}   />
            </a>
            <a href="#" className="hover:text-gray-400">
              <Instagram size={28} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <Linkedin size={28} />
            </a>
          </div>    
          <p className="text-sm">Or email us at:</p>
          <a href="mailto:agentlivery.@gmail.com" className="text-gray-300 hover:text-gray-400">
            agentlivery.@gmail.com
          </a>
        </div>

        {/* Center Section - Logo & Navigation */}
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold text-gray-700">Agentlivery</h2>
          <nav className="mt-4 space-y-2">
            <a href="#" className="block hover:text-gray-400">Home</a>
            <a href="#" className="block hover:text-gray-400">About Us</a>
            <a href="#" className="block hover:text-gray-400">Services</a>
            <a href="#" className="block hover:text-gray-400">Contact</a>
          </nav>
        </div>

        {/* Right Section - Office Address */}
        <div className="flex flex-col items-center md:items-end space-y-2">
          <h3 className="font-semibold">Office</h3>
          <p className="text-sm">Matha Arcade, Pullepady Road</p>
          <p className="text-sm">Opp. St. Mary’s Church, Ernakulam</p>
          <a href="tel:+917593974447" className="text-gray-300 hover:text-gray-400">
            +91 7593974447
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-xs text-gray-500 mt-8">
        © 2025 Agentlivery. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
