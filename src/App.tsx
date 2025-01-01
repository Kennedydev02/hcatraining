import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-white font-poppins">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <img src="/logo.png" alt="Caregiver Training & Huduma Center LLC" className="h-16" />
          <div className="flex gap-8 uppercase text-sm font-medium">
            <a href="/" className="text-gray-700 hover:text-secondary">Home</a>
            <a href="/courses" className="text-gray-700 hover:text-secondary">Courses</a>
            <a href="/admissions" className="text-gray-700 hover:text-secondary">Admissions</a>
            <a href="/about" className="text-gray-700 hover:text-secondary">About Us</a>
            <a href="/contact" className="text-gray-700 hover:text-secondary">Contact Us</a>
          </div>
        </div>
      </nav>

      {/* Main Hero Section */}
      <section className="relative min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="/hero-caregiver.jpg" 
            alt="Caregiver helping patient" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold text-white mb-6 animate-fade-in-up">
              Empowering Caregivers, Supporting Communities
            </h1>
            <p className="text-2xl text-white/90 mb-8 animate-fade-in-up" style={{"--animation-delay": "200ms"} as React.CSSProperties}>
              Providing comprehensive training and support for tomorrow's healthcare professionals
            </p>
            <div className="flex gap-4 animate-fade-in-up" style={{"--animation-delay": "400ms"} as React.CSSProperties}>
              <a 
                href="/courses" 
                className="px-8 py-4 bg-secondary text-white rounded-lg text-xl font-semibold 
                         hover:bg-secondary/90 transition-colors duration-300 
                         focus:ring-4 focus:ring-secondary/30 focus:outline-none"
              >
                Enroll Today
              </a>
              <a 
                href="/about" 
                className="px-8 py-4 bg-white text-primary rounded-lg text-xl font-semibold 
                         hover:bg-gray-100 transition-colors duration-300
                         focus:ring-4 focus:ring-white/30 focus:outline-none"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DSHS Approved Courses Section */}
      <section className="relative bg-primary text-white">
        <div className="absolute inset-0">
          <img 
            src="/nurses-discussing.jpg" 
            alt="Nurses discussing" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative container mx-auto px-4 py-20">
          <h1 className="text-6xl font-bold mb-16 text-center">
            DSHS APPROVED COURSES
          </h1>

          <div className="grid grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Our Services */}
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold mb-8 border-b-4 border-secondary inline-block">
                Our Services
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="text-secondary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" />
                    </svg>
                  </div>
                  <span className="text-xl">75hr Basic Training/HCA</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="text-secondary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" />
                    </svg>
                  </div>
                  <span className="text-xl">Nurse Delegation</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="text-secondary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" />
                    </svg>
                  </div>
                  <span className="text-xl">CPR/AED & First Aid</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="text-secondary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" />
                    </svg>
                  </div>
                  <span className="text-xl">Continuous Education (CEs)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="text-secondary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" />
                    </svg>
                  </div>
                  <span className="text-xl">Basic Life Support (BLS)</span>
                </li>
              </ul>
            </div>

            {/* Added Benefits */}
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold mb-8 border-b-4 border-secondary inline-block">
                Added Benefits
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="text-secondary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" />
                    </svg>
                  </div>
                  <span className="text-xl">Airport pick-up</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="text-secondary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" />
                    </svg>
                  </div>
                  <span className="text-xl">Full board accomodation</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="text-secondary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" />
                    </svg>
                  </div>
                  <span className="text-xl">Full training</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="text-secondary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" />
                    </svg>
                  </div>
                  <span className="text-xl">Job Connections</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-16 text-center">
            <h2 className="text-4xl font-bold text-secondary mb-8">CONTACT US</h2>
            <div className="flex justify-center gap-8 text-xl">
              <a href="mailto:info@hudumacenter.com" className="flex items-center gap-2">
                <span className="text-secondary">✉</span>
                info@hudumacenter.com
              </a>
              <a href="tel:206-460-9022" className="flex items-center gap-2">
                <span className="text-secondary">📞</span>
                206-460-9022
              </a>
            </div>
            <p className="mt-4 text-lg">
              30821 Pacific Hwy S, Federal Way, WA 98003
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App; 