import React from 'react';
import { Phone, MessageCircle, Send, Clock, Users, TrendingUp, Zap, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Phone,
      title: "AI Receptionists",
      subtitle: "Never Miss Another Call",
      description: "Your phone rings, someone answers. Every time. Our AI sounds human, books appointments straight into your calendar, and qualifies leads. Works nights, weekends, and holidays without asking for a raise.",
      features: [
        "24/7 call handling",
        "Appointment scheduling",
        "Lead qualification",
        "Multi-language support",
        "CRM integration (optional)"
      ],
      price: "Starting at $2499",
      highlight: "Most Popular"
    },
    {
      icon: MessageCircle,
      title: "AI Chatbots",
      subtitle: "Instant Customer Support",
      description: "Customers get answers immediately instead of waiting hours for email replies. Handles common questions, provides information, and captures new leads into a spreadsheet.",
      features: [
        "Replies instantly",
        "Knowledge base integration",
        "CRM integration",
        "Works 24/7 in any language",
        "Gets you more qualified leads"
      ],
      price: "Starting at just $997",
      highlight: null
    },
    {
      icon: Send,
      title: "AI Outreach Systems",
      subtitle: "Scale Your Lead Generation",
      description: "Sends personalized emails to thousands of prospects daily. Follows up automatically and helps you get more meetings with qualified leads. Like having a full sales team that never sleeps.",
      features: [
        "1000+ of emails daily",
        "Personalized messaging",
        "Automated follow-ups",
        "Targets your ICP (niche)",
        "Helps you get more appointments"
      ],
      price: "Starting at $10,997",
      highlight: "New Launch"
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-900/30 border border-purple-500/30 rounded-full mb-6">
            <span className="text-purple-300 text-xs font-medium">What We Do</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-light mb-4 sm:mb-6 px-4">
            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Three Ways We Help Your Business
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-3xl mx-auto font-light px-4">
            If you're losing customers because of missed calls, slow responses, or lack of follow-up, we can fix that.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-violet-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative p-4 sm:p-6 md:p-8 bg-gray-900/50 border border-purple-500/20 rounded-2xl hover:border-purple-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 backdrop-blur-sm">
                  {service.highlight && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full text-xs font-medium">
                        {service.highlight}
                      </span>
                    </div>
                  )}

                  <div className="mb-4 sm:mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600/20 to-violet-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/30 transition-shadow">
                      <IconComponent className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-medium mb-2 text-white">{service.title}</h3>
                    <p className="text-purple-300 text-xs sm:text-sm font-medium mb-3 sm:mb-4">{service.subtitle}</p>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light">{service.description}</p>
                  </div>

                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-white text-sm font-medium mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-gray-300 text-xs">
                          <CheckCircle className="w-4 h-4 text-purple-400" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-purple-500/20 pt-6">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <span className="text-sm sm:text-lg font-medium text-purple-300">{service.price}</span>
                    </div>
                    <a href="https://calendly.com/pewlax/ai-receptionist-consultation" target="_blank" rel="noopener noreferrer" className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-violet-600 rounded-md text-xs sm:text-sm font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 block text-center">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8 sm:mt-12 md:mt-16">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 p-4 sm:p-6 bg-gradient-to-r from-purple-900/30 to-violet-900/30 border border-purple-500/30 rounded-2xl">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 text-xs sm:text-sm">24/7 Operation</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 text-xs sm:text-sm">Unlimited Interactions</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 text-xs sm:text-sm">ROI Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
