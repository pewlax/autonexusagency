import React from 'react';
import { Mail, Phone, MapPin, Zap, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="relative py-20 border-t border-purple-500/20">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-purple-950/10 to-black"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="sm:col-span-2 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <img src="/auto-nexus-logo.png" alt="Auto Nexus Logo" className="w-12 h-12" />
              <span className="text-xl font-medium bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">
                Auto Nexus
              </span>
            </div>
            <p className="text-gray-300 text-xs sm:text-sm mb-4 sm:mb-6 max-w-md leading-relaxed font-light">
              We help businesses stop losing money to missed calls, slow responses, and lack of follow-up. 
              Simple AI solutions that actually work.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="w-8 h-8 bg-purple-900/30 border border-purple-500/30 rounded-md flex items-center justify-center hover:bg-purple-600 hover:border-purple-400 transition-all duration-300">
             <a
  href="https://www.instagram.com/autonexuss/"
  target="_blank"
  rel="noopener noreferrer"
  className="w-8 h-8 bg-purple-900/30 border border-purple-500/30 rounded-md flex items-center justify-center hover:bg-purple-600 hover:border-purple-400 transition-all duration-300"
>
  <Instagram className="w-4 h-4 text-purple-300" />
</a>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-xs sm:text-sm font-medium mb-3 sm:mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 text-xs hover:text-purple-400 transition-colors">AI Receptionists</a></li>
              <li><a href="#" className="text-gray-300 text-xs hover:text-purple-400 transition-colors">Smart Chatbots</a></li>
              <li><a href="#" className="text-gray-300 text-xs hover:text-purple-400 transition-colors">Email Outreach</a></li>
              <li><a href="#" className="text-gray-300 text-xs hover:text-purple-400 transition-colors">Custom Solutions</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-xs sm:text-sm font-medium mb-3 sm:mb-4">Contact</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3 text-gray-300 text-xs">
                <Mail className="w-5 h-5 text-purple-400" />
                <span>steve@autonexusagency.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 text-xs">
                <Instagram className="w-5 h-5 text-purple-400" />
                <span>@autonexuss</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 text-xs">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span>Worldwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-purple-500/20 pt-6 sm:pt-8 text-gray-400 text-xs sm:text-sm flex justify-center">
          <div className="text-xs">© 2025 Auto Nexus. All rights reserved.</div>
          <div className="flex space-x-4 sm:space-x-6 mt-3 sm:mt-4 md:mt-0">
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
