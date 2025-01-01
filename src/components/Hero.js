import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-[85vh] bg-gradient-to-br from-[#112C4A] via-[#1a3c61] to-[#61C36C]/20 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#61C36C]/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#112C4A]/20 rounded-full blur-[100px] animate-pulse" />
      </div>

      {/* Main Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[85vh] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Enhanced Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block"
            >
              <span className="inline-block px-4 py-1 bg-[#61C36C]/10 rounded-full text-[#61C36C] text-sm font-medium mb-6">
                Welcome to Huduma Care
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="block"
              >
                Empowering
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="block bg-gradient-to-r from-[#61C36C] to-[#4fa95a] text-transparent bg-clip-text"
              >
                Caregivers
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="block"
              >
                Every Day
              </motion.span>
            </h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 max-w-xl leading-relaxed mt-6"
            >
              Launch your healthcare career with our professional caregiver training and certification programs.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <Link
                to="/courses"
                className="group relative inline-flex items-center px-8 py-4 overflow-hidden rounded-lg bg-gradient-to-r from-[#61C36C] to-[#4fa95a] text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#61C36C]/20"
              >
                <span className="relative z-10 text-lg">Get Started Today</span>
                <svg 
                  className="w-6 h-6 ml-2 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <Link
                to="/about"
                className="group relative inline-flex items-center px-8 py-4 overflow-hidden rounded-lg border-2 border-white/20 text-white font-medium hover:bg-white/10 transition-all duration-300"
              >
                <span className="relative z-10 text-lg">Learn More</span>
                <svg 
                  className="w-6 h-6 ml-2 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/10"
            >
              <div>
                <h4 className="text-3xl font-bold text-[#61C36C]">500+</h4>
                <p className="text-gray-400 mt-1">Trained Caregivers</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-[#61C36C]">98%</h4>
                <p className="text-gray-400 mt-1">Success Rate</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-[#61C36C]">24/7</h4>
                <p className="text-gray-400 mt-1">Support</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Enhanced Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="relative z-10"
              >
                <img
                  src="/hero-illustration.png"
                  alt="Caregiver Illustration"
                  className="w-full h-auto max-w-lg mx-auto drop-shadow-2xl"
                />
              </motion.div>
              
              {/* Enhanced Decorative Elements */}
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#61C36C]/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#112C4A]/20 rounded-full blur-3xl animate-pulse" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 