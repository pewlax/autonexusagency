import React from 'react';
import { BarChart3, Shield, Zap, Globe, Brain, Rocket, Instagram } from 'lucide-react';

const Features = () => {
  const stats = [
    { number: "24/7", label: "Available", icon: Shield },
    { number: "3x", label: "More Leads Captured", icon: BarChart3 },
    { number: "100%", label: "Calls/questions answered", icon: Zap },
    { number: "50+", label: "Languages Supported", icon: Globe }
  ];

  const benefits = [
    {
      icon: Brain,
      title: "Sounds Actually Human",
      description: "Built on GPT-4, so your customers won't know they're talking to AI. Natural conversations, not robotic responses."
    },
    {
      icon: Rocket,
      title: "Set Up in less than 48-78 hours",
      description: "No complicated setup or months of training. Tell us about your business, and we'll have your AI running ASAP."
    },
    {
      icon: BarChart3,
      title: "See What's Working",
      description: "Clear reports show you exactly how many calls were handled, questions answered, and leads generated. No guesswork."
    },
    {
      icon: Shield,
      title: "Your leads never go missed",
      description: "Our AI solutions will make sure you never miss a client again."
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-purple-600/20 to-violet-600/20 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/30 transition-shadow">
                  <IconComponent className="w-4 sm:w-6 h-4 sm:h-6 text-purple-400" />
                </div>
                <div className="text-lg sm:text-2xl font-medium bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-xs font-light px-1">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Benefits Grid */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-light mb-4 sm:mb-6 px-4">
            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Why Businesses Choose Us
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-3xl mx-auto font-light px-4">
            We focus on solving real problems that cost you money every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="group p-4 sm:p-6 bg-gray-900/30 border border-purple-500/20 rounded-xl hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
              >
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-r from-purple-600/20 to-violet-600/20 rounded-md flex items-center justify-center mb-3 sm:mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/30 transition-shadow">
                  <IconComponent className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-base sm:text-lg font-medium text-white mb-2 sm:mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="relative p-6 sm:p-8 md:p-10 bg-gradient-to-r from-purple-900/40 to-violet-900/40 border border-purple-500/30 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-violet-600/10 animate-pulse"></div>
            
            <div className="relative z-10">
              <h2 className="text-lg sm:text-xl md:text-3xl font-light mb-4 sm:mb-6 px-4">
                <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  Ready to Stop Losing Customers?
                </span>
              </h2>
              <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto font-light px-4">
                See how much revenue you're actually losing to missed calls and slow responses. Most businesses are surprised by the number.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6">
                <a href="https://calendly.com/pewlax/ai-receptionist-consultation" target="_blank" rel="noopener noreferrer" className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-violet-600 rounded-md text-sm font-medium hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300">
                  Book a free consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
