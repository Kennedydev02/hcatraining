import React from 'react';

const HCAPrep = () => {
  const services = [
    {
      title: "75hr Basic Training/HCA",
      description: "Comprehensive training program for Home Care Aide certification",
      icon: "📚"
    },
    {
      title: "Nurse Delegation",
      description: "Specialized training for delegated nursing tasks",
      icon: "👩‍⚕️"
    },
    {
      title: "CPR/AED & First Aid",
      description: "Essential life-saving skills certification",
      icon: "🏥"
    },
    {
      title: "Continuous Education (CEs)",
      description: "Ongoing professional development courses",
      icon: "🎓"
    },
    {
      title: "Basic Life Support (BLS)",
      description: "Professional healthcare provider CPR certification",
      icon: "💗"
    }
  ];

  return (
    <section className="py-20 bg-[#112C4A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-[#61C36C] mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-[#61C36C]/30"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl group-hover:scale-110 transition-transform">
                  {service.icon}
                </span>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#61C36C]">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <a
            href="/courses"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-gradient-to-r from-[#61C36C] to-[#4fa95a] hover:from-[#4fa95a] hover:to-[#3d8245] transition-all duration-300 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            View Course Details
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HCAPrep; 