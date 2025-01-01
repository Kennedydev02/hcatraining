const HCAPrep = () => {
  const examFeatures = [
    {
      title: "Full Exam Prep",
      description: "We cover both the skills and knowledge tests to make sure you're fully prepared.",
      icon: "📚"
    },
    {
      title: "Skills Training",
      description: "Learn and practice all the key skills, like helping clients with daily needs, maintaining hygiene, and ensuring their safety.",
      icon: "👥"
    },
    {
      title: "Knowledge Test Prep",
      description: "Get familiar with the types of questions you'll face in the exam, and practice with real questions and answers.",
      icon: "✍️"
    },
    {
      title: "Flexible Timings",
      description: "Evening and weekend classes available - we work around your schedule.",
      icon: "🕒"
    },
    {
      title: "Personalized Support",
      description: "We give you feedback and tips based on your performance to help you improve.",
      icon: "🎯"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-[#112C4A] to-[#1a3c61] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Get Ready for Your HCA<br />Skills and Knowledge Test!
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Are you preparing for your Home Care Aide (HCA) exam?<br />
            Let us help you pass with flying colors!
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {examFeatures.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
            >
              <span className="text-3xl mb-4 block">{feature.icon}</span>
              <h3 className="text-[#61C36C] text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-[#061527] rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Book Your Session Now!
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href="tel:206-460-9022"
              className="flex items-center gap-3 bg-[#61C36C] text-white px-8 py-4 rounded-lg hover:bg-[#4fa95a] transition-all duration-300 text-xl font-semibold"
            >
              <span className="text-2xl">📞</span>
              206-460-9022
            </a>
            <a
              href="mailto:hca@hudumacenter.com"
              className="text-white hover:text-[#61C36C] transition-duration-300"
            >
              hca@hudumacenter.com
            </a>
          </div>
          <p className="text-gray-400 mt-6">
            30821 Pacific Hwy S, Federal Way, WA 98003
          </p>
        </div>

        {/* Key Benefits */}
        <div className="mt-16 text-center">
          <div className="inline-flex gap-4 text-xl text-white">
            <span className="flex items-center">
              <span className="text-[#61C36C] mr-2">✓</span> Fast
            </span>
            <span className="flex items-center">
              <span className="text-[#61C36C] mr-2">✓</span> Simple
            </span>
            <span className="flex items-center">
              <span className="text-[#61C36C] mr-2">✓</span> Convenient
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HCAPrep; 