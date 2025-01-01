import React from 'react';
import { motion } from 'framer-motion';

const TrustBanner = () => {
  return (
    <div className="relative bg-[#112C4A] py-20">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg className="w-full h-24 fill-white" viewBox="0 0 1440 74" preserveAspectRatio="none">
          <path d="M0,0 C480,100 960,100 1440,0 L1440,74 L0,74 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Glowing Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#61C36C]/20 via-white/30 to-[#61C36C]/20 blur-3xl"></div>
          
          {/* Trust Badge */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#61C36C] rounded-full blur-xl opacity-30"></div>
              <svg className="w-24 h-24 text-[#61C36C]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </motion.div>
          </div>

          {/* Main Content Container */}
          <div className="relative backdrop-blur-sm bg-white/5 rounded-3xl border border-white/10 p-16 mt-8">
            {/* Main Text */}
            <div className="text-center space-y-6">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="font-serif text-white drop-shadow-2xl">Trusted</span>{' '}
                <span className="text-white font-bold">by healthcare facilities</span>
                <br />
                <span className="text-[#61C36C] font-bold">across Washington State</span>
              </h2>

              {/* Testimonial */}
              <p className="text-xl md:text-2xl text-gray-300 italic mt-8">
                "Recognized for excellence by healthcare institutions across the state"
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 mt-12">
                {[
                  { icon: "🏆", text: "DSHS Approved" },
                  { icon: "✓", text: "Certified Excellence" },
                  { icon: "💫", text: "Industry Leader" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 hover:border-[#61C36C]/50 transition-all duration-300"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-white font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24 fill-white transform rotate-180" viewBox="0 0 1440 74" preserveAspectRatio="none">
          <path d="M0,0 C480,100 960,100 1440,0 L1440,74 L0,74 Z" />
        </svg>
      </div>
    </div>
  );
};

export default TrustBanner; 