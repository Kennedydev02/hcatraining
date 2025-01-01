const Services = () => {
  const services = [
    {
      title: "75hr Basic Training/HCA",
      description: "DSHS approved comprehensive training program for Healthcare Assistants",
      icon: "🎓"
    },
    {
      title: "Nurse Delegation",
      description: "Professional nursing delegation training and certification",
      icon: "👨‍⚕️"
    },
    {
      title: "CPR/AED & First Aid",
      description: "Essential life-saving skills and emergency response training",
      icon: "💗"
    },
    {
      title: "Continuous Education (CEs)",
      description: "Ongoing professional development and learning opportunities",
      icon: "📚"
    },
    {
      title: "Basic Life Support (BLS)",
      description: "Fundamental life support training and certification",
      icon: "🏥"
    }
  ];

  const benefits = [
    {
      title: "Airport pick-up",
      description: "Convenient transportation service for our students",
      icon: "✈️"
    },
    {
      title: "Full board accommodation",
      description: "Comfortable housing arrangements during your training",
      icon: "🏠"
    },
    {
      title: "Full training",
      description: "Complete, comprehensive training programs",
      icon: "📋"
    },
    {
      title: "Job Connections",
      description: "Career placement assistance and networking opportunities",
      icon: "🤝"
    }
  ];

  return (
    <section className="py-20 bg-[#112C4A]" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            DSHS Approved Courses
          </h2>
          <div className="w-24 h-1 bg-[#61C36C] mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Services Column */}
          <div className="bg-white/5 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
              <span className="w-12 h-1 bg-[#61C36C] mr-4"></span>
              Our Services
            </h3>
            <div className="space-y-6">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 group hover:bg-white/5 p-4 rounded-lg transition-all duration-300"
                >
                  <span className="text-3xl group-hover:scale-110 transition-transform">
                    {service.icon}
                  </span>
                  <div>
                    <h4 className="text-[#61C36C] font-semibold mb-2">{service.title}</h4>
                    <p className="text-gray-300 text-sm">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Column */}
          <div className="bg-white/5 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
              <span className="w-12 h-1 bg-[#61C36C] mr-4"></span>
              Added Benefits
            </h3>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 group hover:bg-white/5 p-4 rounded-lg transition-all duration-300"
                >
                  <span className="text-3xl group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </span>
                  <div>
                    <h4 className="text-[#61C36C] font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-gray-300 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <a
            href="tel:206-460-9022"
            className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-lg text-white bg-[#61C36C] hover:bg-[#4fa95a] transition-all duration-300 gap-3"
          >
            <span>📞</span>
            Call Us: 206-460-9022
          </a>
          <p className="mt-4 text-gray-300">
            30821 Pacific Hwy S, Federal Way, WA 98003
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services; 