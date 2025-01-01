import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Wambui Njoroge",
      role: "HCA Certified Caregiver",
      text: "The training program was thorough and practical. I especially appreciated how the instructors incorporated real-world scenarios into our learning. Now I feel confident in my role as a caregiver.",
      initial: "W",
      rating: 5
    },
    {
      name: "Themba Dlamini",
      role: "HCA Certified Caregiver",
      text: "Coming from Eswatini, I found the program very welcoming and supportive. The flexible schedule allowed me to complete my certification while working. The skills I learned are invaluable.",
      initial: "T",
      rating: 5
    },
    {
      name: "Akinyi Ochieng",
      role: "HCA Certified Caregiver",
      text: "The hands-on training and personalized attention from instructors made all the difference. I'm proud to be HCA certified and serving my community with the skills I gained here.",
      initial: "A",
      rating: 5
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
          <h2 className="text-4xl md:text-5xl font-bold text-[#112C4A] mb-4 tracking-tight flex items-center justify-center gap-3">
            <span className="text-[#61C36C] text-5xl">"</span>
            Student Testimonials
            <span className="text-[#61C36C] text-5xl">"</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#61C36C] to-[#4fa95a] mx-auto rounded-full"></div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ 
                y: -5,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="bg-white rounded-2xl p-8 
                shadow-[0_8px_30px_rgb(0,0,0,0.04)] 
                hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                transition-all duration-300 
                border border-gray-100/80
                hover:border-[#61C36C]/20
                backdrop-blur-sm"
            >
              {/* Quote Icon */}
              <div className="mb-6 relative">
                <span className="text-6xl text-[#61C36C]/20 font-serif absolute -top-4 -left-2">"</span>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 mb-6 relative z-10 italic leading-relaxed min-h-[120px]">
                {testimonial.text}
              </p>

              {/* Rating Stars */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.svg
                    key={i}
                    whileHover={{ scale: 1.2 }}
                    className="w-5 h-5 text-yellow-400 filter drop-shadow"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>

              {/* Author Info */}
              <div className="flex items-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-[#61C36C]/20 to-[#61C36C]/30 
                    flex items-center justify-center mr-4
                    shadow-[0_4px_12px_rgb(97,195,108,0.1)]"
                >
                  <span className="text-[#61C36C] font-bold text-xl">
                    {testimonial.initial}
                  </span>
                </motion.div>
                <div>
                  <h4 className="font-bold text-[#112C4A] mb-1">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 