import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const milestones = [
    {
      year: 2024,
      title: 'Founded in Washington',
      description: 'Established with a vision to transform caregiver training.',
      icon: '📅'
    },
    {
      year: 2024,
      title: 'First 100 Caregivers',
      description: 'Successfully trained and certified our first batch of caregivers.',
      icon: '🌟'
    },
    {
      year: 2025,
      title: 'Program Expansion',
      description: 'Expanded our training programs to include specialized courses.',
      icon: '📚'
    }
  ];

  const values = [
    { icon: '❤️', title: 'Compassion', description: 'Care with empathy and understanding' },
    { icon: '🤝', title: 'Integrity', description: 'Honest and ethical practices' },
    { icon: '⭐', title: 'Excellence', description: 'Commitment to highest standards' },
    { icon: '🎯', title: 'Innovation', description: 'Continuous improvement and growth' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-[#112C4A] to-[#1a3c61] flex items-center">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Empowering Caregivers Since 2024
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8"
          >
            Founded with the vision to train and equip caregivers with exceptional skills to serve communities with compassion and excellence.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#61C36C] hover:bg-[#4fa95a] text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
          >
            Learn About Our Mission
          </motion.button>
        </div>
      </section>

      {/* Founding Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#112C4A] mb-6">Our Founding Story</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Caregiver Training & Huduma Center LLC was founded in 2024 by Eng. Kennedy Gichobi, a visionary leader driven by a passion for empowering caregivers. With a background in engineering and a commitment to service, Eng. Gichobi recognized the need for high-quality caregiver training to support communities. From this vision, our journey began.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-50 rounded-xl p-6"
                  >
                    <span className="text-4xl mb-4 block">{milestone.icon}</span>
                    <h3 className="text-lg font-semibold text-[#112C4A] mb-2">{milestone.title}</h3>
                    <p className="text-gray-600 text-sm">{milestone.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/path-to-your-image.jpg" 
                alt="Caregivers in action" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-[#112C4A] mb-6">Meet Eng. Kennedy Gichobi</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Eng. Kennedy Gichobi, our Founder and CEO, has spent his career innovating and leading with purpose. As an engineer with a deep commitment to community impact, he envisioned a future where caregivers are trained with the highest standards of excellence to uplift those in need. Today, his vision fuels our mission to empower caregivers and support communities.
              </p>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-semibold text-[#112C4A] mb-2">Why I Care</h3>
                <p className="text-gray-600 italic">
                  "Our mission is personal - it's about creating positive change in healthcare, one caregiver at a time."
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl bg-gray-200">
                <img 
                  src="/path-to-ceo-image.jpg" 
                  alt="Eng. Kennedy Gichobi" 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#112C4A] mb-6">Our Mission & Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Guided by our commitment to excellence and compassion, we strive to make a lasting impact in healthcare education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <span className="text-4xl mb-4 block">{value.icon}</span>
                <h3 className="text-lg font-semibold text-[#112C4A] mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#112C4A] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Be part of our mission to transform caregiving through excellence in training and education.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#61C36C] hover:bg-[#4fa95a] text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300">
              Contact Us
            </button>
            <button className="bg-white text-[#112C4A] font-medium py-3 px-8 rounded-lg transition-colors duration-300 hover:bg-gray-100">
              Explore Our Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 