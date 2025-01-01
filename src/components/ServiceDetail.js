import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  const serviceData = {
    'basic-training': {
      id: 'basic-training',
      title: '75hr Basic Training/HCA',
      icon: '📚',
      tagline: 'Master caregiving essentials and start your journey with confidence.',
      category: 'Core Training',
      duration: '75 Hours',
      certification: 'DSHS Approved',
      overview: 'State-mandated comprehensive training program for caregivers, covering essential caregiving skills, knowledge, and hands-on practice.',
      whoFor: 'New caregivers or those entering the field.',
      curriculum: [
        'Foundational caregiving principles',
        'Infection prevention and control',
        'Promoting dignity and independence',
        'Basic health and safety practices',
        'Communication and interpersonal skills'
      ],
      testimonial: {
        quote: "This training gave me the skills I needed to succeed as a caregiver.",
        author: "Jane D."
      },
      faq: [
        {
          question: "How long does the course take to complete?",
          answer: "The course requires 75 hours of training, typically completed over several weeks."
        },
        {
          question: "Is this course required for all caregivers?",
          answer: "Yes, this is a state-mandated requirement for all new caregivers in Washington State."
        }
      ],
      ctaText: 'Start Your Training Today!'
    },
    'nurse-delegation': {
      id: 'nurse-delegation',
      title: 'Nurse Delegation',
      icon: '👨‍⚕️',
      tagline: 'Expand your skill set with advanced caregiving techniques.',
      category: 'Advanced Skills',
      duration: '9 Hours',
      certification: 'State Certified',
      overview: 'Designed for caregivers performing specific nursing tasks under the supervision of a Registered Nurse (RN). This course equips participants with the knowledge and skills required for specialized care settings.',
      whoFor: 'Certified caregivers seeking specialized roles.',
      curriculum: [
        'Medication administration',
        'Diabetes care and insulin injections',
        'Reporting and recording changes in patient health',
        'Collaboration with RNs',
        'Advanced patient care techniques'
      ],
      testimonial: {
        quote: "This course opened up new opportunities for me in advanced care settings.",
        author: "John M."
      },
      faq: [
        {
          question: "What are the prerequisites?",
          answer: "You must be a certified caregiver to enroll in this course."
        },
        {
          question: "What will I be able to do after completion?",
          answer: "You'll be qualified to perform delegated nursing tasks under RN supervision."
        }
      ],
      ctaText: 'Enroll Now for Advanced Skills!'
    },
    'continuing-education': {
      id: 'continuing-education',
      title: 'Continuing Education',
      icon: '🎓',
      tagline: 'Stay certified and up-to-date with the latest caregiving practices.',
      category: 'Professional Development',
      duration: '12 Hours',
      certification: 'CE Credits',
      overview: 'Annual courses designed to help caregivers maintain certification while staying updated with the latest caregiving practices and industry standards.',
      whoFor: 'Caregivers looking to renew certifications.',
      curriculum: [
        'Legal and regulatory updates',
        'Advanced caregiving strategies',
        'Stress management for caregivers',
        'Latest industry best practices',
        'Professional development skills'
      ],
      testimonial: {
        quote: "These courses keep me current and confident in my caregiving role.",
        author: "Maria R."
      },
      faq: [
        {
          question: "How often do I need to complete CE credits?",
          answer: "Caregivers need to complete 12 hours of CE credits annually."
        },
        {
          question: "Are online courses available?",
          answer: "Yes, we offer flexible online options for continuing education."
        }
      ],
      ctaText: 'Maintain Your Certification!'
    },
    'basic-life-support': {
      id: 'basic-life-support',
      title: 'Basic Life Support (BLS)',
      icon: '💗',
      tagline: 'Be ready to save lives with professional CPR training.',
      category: 'Emergency Response',
      duration: '4.5 Hours',
      certification: 'Red Cross Certified',
      overview: 'CPR certification program for healthcare providers covering adult, child, and infant life support techniques. Essential for emergency preparedness.',
      whoFor: 'Healthcare providers and caregivers.',
      curriculum: [
        'High-quality CPR for adults and infants',
        'Team-based resuscitation',
        'AED usage and maintenance',
        'Emergency response protocols',
        'Basic life support techniques'
      ],
      testimonial: {
        quote: "I used the skills from this course to help someone in an emergency.",
        author: "Sarah T."
      },
      faq: [
        {
          question: "How long is the certification valid?",
          answer: "BLS certification is valid for two years."
        },
        {
          question: "Is hands-on practice included?",
          answer: "Yes, the course includes extensive hands-on practice with mannequins."
        }
      ],
      ctaText: 'Get Certified in Life Support!'
    },
    'cpr-aed': {
      id: 'cpr-aed',
      title: 'CPR/AED & First Aid',
      icon: '🚑',
      tagline: 'Master life-saving techniques for any situation.',
      category: 'Emergency Response',
      duration: '4 Hours',
      certification: 'Red Cross Certified',
      overview: 'A foundational course covering life-saving CPR techniques, AED usage, and comprehensive first aid procedures for various emergencies.',
      whoFor: 'Parents, teachers, workplace teams, and caregivers.',
      curriculum: [
        'CPR techniques for adults and children',
        'AED operation and maintenance',
        'Emergency wound care',
        'Fracture management',
        'First aid procedures'
      ],
      testimonial: {
        quote: "This training gave me the confidence to respond to emergencies.",
        author: "Emma L."
      },
      faq: [
        {
          question: "Do I need prior experience?",
          answer: "No prior experience is needed. This course is designed for beginners."
        },
        {
          question: "What's included in the certification?",
          answer: "You'll receive CPR, AED, and First Aid certification valid for 2 years."
        }
      ],
      ctaText: 'Learn Essential First Aid Skills!'
    },
    'license-application': {
      id: 'license-application',
      title: 'License Application & Renewal',
      icon: '📋',
      tagline: 'Simplify the licensing process with our expert guidance.',
      category: 'Administrative Support',
      duration: 'Ongoing',
      certification: 'DOH Support',
      overview: 'Comprehensive support for obtaining and renewing Home Care Aide (HCA) licenses, ensuring compliance with Department of Health (DOH) regulations.',
      whoFor: 'New caregivers and those renewing licenses.',
      curriculum: [
        'Application submission guidance',
        'Renewal process assistance',
        'Documentation requirements',
        'Compliance tips',
        'License maintenance support'
      ],
      testimonial: {
        quote: "The support made the licensing process smooth and stress-free.",
        author: "Michael P."
      },
      faq: [
        {
          question: "When should I start the renewal process?",
          answer: "Begin the renewal process 60 days before your license expires."
        },
        {
          question: "What documents do I need?",
          answer: "We'll provide a complete checklist of required documents during consultation."
        }
      ],
      ctaText: 'Get Help with Your License!'
    }
  };

  const service = serviceData[serviceId];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'faq', label: 'FAQ' }
  ];

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-16">
      {/* Navigation Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-4">
            <li>
              <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            </li>
            <li>
              <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
            </li>
            <li>
              <Link to="/#services" className="text-gray-500 hover:text-gray-700">Services</Link>
            </li>
            <li>
              <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
            </li>
            <li className="text-gray-700 font-medium">{service.title}</li>
          </ol>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="bg-white rounded-t-2xl shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-[#112C4A] to-[#1a3c61] px-8 py-12 text-center">
            <span className="text-6xl mb-6 block">{service.icon}</span>
            <h1 className="text-3xl font-bold text-white mb-4">{service.title}</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">{service.tagline}</p>
          </div>

          {/* Tabs Navigation */}
          <div className="border-b border-gray-200">
            <nav className="flex justify-center -mb-px">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    py-4 px-8 text-sm font-medium border-b-2 transition-colors duration-300
                    ${activeTab === tab.id
                      ? 'border-[#61C36C] text-[#61C36C]'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                  `}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Content Section */}
          <div className="p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 'overview' && (
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                      <div>
                        <h2 className="text-2xl font-bold text-[#112C4A] mb-4">Overview</h2>
                        <p className="text-gray-600 leading-relaxed">{service.overview}</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#112C4A] mb-4">Who is this for?</h3>
                        <p className="text-gray-600">{service.whoFor}</p>
                      </div>
                    </div>
                    <div className="lg:col-span-1">
                      <div className="bg-gray-50 rounded-xl p-6 space-y-6">
                        <div>
                          <h3 className="text-lg font-medium text-[#112C4A] mb-3">Course Details</h3>
                          <div className="space-y-4">
                            <div className="flex items-center">
                              <svg className="w-5 h-5 text-[#61C36C] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="text-gray-600">{service.duration}</span>
                            </div>
                            <div className="flex items-center">
                              <svg className="w-5 h-5 text-[#61C36C] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                              </svg>
                              <span className="text-gray-600">{service.certification}</span>
                            </div>
                          </div>
                        </div>
                        {service.testimonial && (
                          <div className="border-t border-gray-200 pt-6">
                            <blockquote className="text-gray-600 italic">
                              "{service.testimonial.quote}"
                              <footer className="mt-2 text-sm text-gray-500">
                                - {service.testimonial.author}
                              </footer>
                            </blockquote>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'curriculum' && (
                  <div className="space-y-8">
                    <h2 className="text-2xl font-bold text-[#112C4A] mb-6">Course Curriculum</h2>
                    <div className="grid gap-4">
                      {service.curriculum.map((topic, index) => (
                        <div
                          key={index}
                          className="flex items-start p-4 bg-gray-50 rounded-lg"
                        >
                          <svg className="w-5 h-5 text-[#61C36C] mt-1 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-600">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'faq' && (
                  <div className="space-y-8">
                    <h2 className="text-2xl font-bold text-[#112C4A] mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                      {service.faq.map((item, index) => (
                        <div key={index} className="space-y-2">
                          <h3 className="text-lg font-medium text-[#112C4A]">{item.question}</h3>
                          <p className="text-gray-600">{item.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-8 bg-white rounded-2xl shadow-sm p-8 text-center">
          <h2 className="text-2xl font-bold text-[#112C4A] mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Take the first step towards your career in caregiving. Our team is here to support you every step of the way.
          </p>
          <button className="bg-[#61C36C] hover:bg-[#4fa95a] text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center group">
            {service.ctaText}
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail; 