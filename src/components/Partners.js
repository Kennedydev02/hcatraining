import React from 'react';
import { motion } from 'framer-motion';

const Partners = () => {
  const partners = [
    {
      name: "Washington State DSHS",
      category: "State Department",
      description: "Official DSHS approved training provider",
      icon: "🏛️"
    },
    {
      name: "Providence Health & Services", 
      category: "Healthcare Network",
      description: "Preferred training partner",
      icon: "🏥"
    },
    {
      name: "MultiCare Health System",
      category: "Healthcare Provider", 
      description: "Workforce development partner",
      icon: "⚕️"
    },
    {
      name: "Swedish Medical Center",
      category: "Medical Institution",
      description: "Healthcare employer partner", 
      icon: "🏨"
    },
    {
      name: "UW Medicine",
      category: "Healthcare System",
      description: "Training collaboration partner",
      icon: "🎓"
    },
    {
      name: "CHI Franciscan",
      category: "Healthcare Network",
      description: "Strategic workforce partner",
      icon: "🏥"
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-20">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#112C4A] mb-4 tracking-tight">
            Our Partners
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#61C36C] to-[#4fa95a] mx-auto rounded-full"></div>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -5,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group bg-white rounded-2xl p-8 
                shadow-[0_8px_30px_rgb(0,0,0,0.04)] 
                hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                transition-all duration-300 
                border border-gray-100/80
                hover:border-[#61C36C]/20
                backdrop-blur-sm"
            >
              <div className="flex items-center space-x-6">
                {/* Partner Icon */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#61C36C]/10 to-[#61C36C]/20 
                    rounded-2xl flex items-center justify-center
                    shadow-[0_4px_12px_rgb(97,195,108,0.1)] 
                    group-hover:shadow-[0_4px_12px_rgb(97,195,108,0.2)]
                    transition-all duration-300"
                  >
                    <span className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                      {partner.icon}
                    </span>
                  </div>
                </motion.div>

                {/* Partner Info */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#112C4A] mb-1 tracking-tight">
                    {partner.name}
                  </h3>
                  <div className="text-[#61C36C] text-sm font-medium mb-2 inline-block">
                    <span className="border-b-2 border-[#61C36C]/30 pb-1">
                      {partner.category}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {partner.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 italic relative inline-block">
            Partnering with leading healthcare institutions across Washington State
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#61C36C]/30 to-transparent"></div>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;