import React from 'react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();
  const services = [
    {
      id: 'basic-training',
      title: '75hr Basic Training/HCA',
      description: 'State-mandated comprehensive training program covering essential caregiving skills, knowledge, and hands-on practice.',
      icon: '📚',
      category: 'Core Training',
      hours: '75 Hours',
      certification: 'DSHS Approved'
    },
    {
      id: 'nurse-delegation',
      title: 'Nurse Delegation',
      description: 'Advanced training for specific nursing tasks under RN supervision. Required for specialized care settings.',
      icon: '👨‍⚕️',
      category: 'Advanced Skills',
      hours: '9 Hours',
      certification: 'State Certified'
    },
    {
      id: 'continuing-education',
      title: 'Continuing Education',
      description: 'Annual required courses to maintain certification and stay updated with latest caregiving practices.',
      icon: '🎓',
      category: 'Professional Development',
      hours: '12 Hours',
      certification: 'CE Credits'
    },
    {
      id: 'basic-life-support',
      title: 'Basic Life Support (BLS)',
      description: 'Professional healthcare provider CPR certification including adult, child, and infant life support.',
      icon: '💗',
      category: 'Emergency Response',
      hours: '4.5 Hours',
      certification: 'Red Cross Certified'
    },
    {
      id: 'cpr-aed',
      title: 'CPR/AED & First Aid',
      description: 'Essential life-saving techniques including CPR, AED use, and comprehensive first aid procedures.',
      icon: '🚑',
      category: 'Emergency Response',
      hours: '4 Hours',
      certification: 'Red Cross Certified'
    },
    {
      id: 'license-application',
      title: 'License Application & Renewal',
      description: 'Complete support for initial HCA license applications and annual renewal requirements.',
      icon: '📋',
      category: 'Administrative Support',
      hours: 'Ongoing',
      certification: 'DOH Support'
    }
  ];

  const handleLearnMore = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#112C4A] tracking-tight">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-[#61C36C] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full flex flex-col"
            >
              <div className="p-8 pb-6 text-center border-b border-gray-100">
                <div className="inline-block p-4 rounded-full bg-gradient-to-br from-[#61C36C]/10 to-[#61C36C]/20 mb-4">
                  <span className="text-4xl">{service.icon}</span>
                </div>
                <span className="inline-block px-4 py-1 rounded-full text-[#61C36C] text-sm font-medium bg-[#61C36C]/10 mb-3">
                  {service.category}
                </span>
                <h3 className="text-xl font-bold text-[#112C4A] tracking-tight leading-tight min-h-[56px] flex items-center justify-center">
                  {service.title}
                </h3>
              </div>

              <div className="p-8 pt-6 flex-grow flex flex-col">
                <p className="text-gray-600 mb-6 flex-grow">
                  {service.description}
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-500">
                      <svg className="w-5 h-5 mr-2 text-[#61C36C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {service.hours}
                    </div>
                    <div className="flex items-center text-gray-500">
                      <svg className="w-5 h-5 mr-2 text-[#61C36C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      {service.certification}
                    </div>
                  </div>

                  <button
                    onClick={() => handleLearnMore(service.id)}
                    className="w-full bg-white text-[#61C36C] border-2 border-[#61C36C] hover:bg-[#61C36C] hover:text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      Learn More
                      <svg 
                        className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 