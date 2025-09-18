import React from 'react';
import { ArrowRight, Zap, Phone, MessageCircle, Send, Instagram, } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient and glow effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/auto-nexus-logo.png" alt="Auto Nexus Logo" className="w-12 h-12 sm:w-16 sm:h-16" />
            <span className="text-sm sm:text-lg md:text-xl font-medium bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Auto Nexus
            </span>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-8">
            <a href="#services" className="text-xs text-gray-300 hover:text-purple-400 transition-colors hidden sm:block">Services</a>
            <a href="#features" className="text-xs text-gray-300 hover:text-purple-400 transition-colors hidden sm:block">Features</a>
            <a href="#contact" className="text-xs text-gray-300 hover:text-purple-400 transition-colors hidden sm:block">Contact</a>
            <a href="https://calendly.com/pewlax/ai-receptionist-consultation" target="_blank" rel="noopener noreferrer" className="px-2 py-1 sm:px-3 sm:py-1.5 md:px-5 md:py-2 bg-gradient-to-r from-purple-600 to-violet-600 rounded-md text-xs font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 mt-16 sm:mt-0">
        <h1 className="text-2xl sm:text-3xl md:text-6xl font-light mb-4 sm:mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white via-purple-200 to-violet-300 bg-clip-text text-transparent">
            Turn your missed leads
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent font-medium">
            into PAYING clients
          </span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed font-light px-4">
         Every missed call or message is lost revenue. With AI, your business is always available—answering customers instantly, capturing leads, and bringing you new clients while you focus on running your business.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 mb-8 sm:mb-12 md:mb-16">
          <a href="https://calendly.com/pewlax/ai-receptionist-consultation" target="_blank" rel="noopener noreferrer" className="group px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-violet-600 rounded-md text-sm font-medium hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center space-x-2">
            <span>Book a call</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Service Icons */}
        <div className="flex items-center justify-center space-x-4 sm:space-x-8 md:space-x-12">
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-2 text-purple-300">
            <div className="p-1.5 sm:p-2 bg-purple-900/30 rounded-md border border-purple-500/30">
              <Phone className="w-4 h-4" />
            </div>
            <span className="text-xs font-medium text-center">AI Receptionists</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-2 text-purple-300">
            <div className="p-1.5 sm:p-2 bg-purple-900/30 rounded-md border border-purple-500/30">
              <MessageCircle className="w-4 h-4" />
            </div>
            <span className="text-xs font-medium text-center">Smart Chatbots</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-2 text-purple-300">
            <div className="p-1.5 sm:p-2 bg-purple-900/30 rounded-md border border-purple-500/30">
              <Send className="w-4 h-4" />
            </div>
            <span className="text-xs font-medium text-center">Email Outreach</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
