import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'core', name: 'Core Training' },
    { id: 'advanced', name: 'Advanced Skills' },
    { id: 'emergency', name: 'Emergency Response' },
    { id: 'professional', name: 'Professional Development' }
  ];

  const courses = [
    {
      id: 'basic-training',
      title: '75hr Basic Training/HCA',
      description: 'Comprehensive training program covering essential caregiving skills and hands-on practice.',
      icon: '📚',
      category: 'core',
      duration: '75 Hours',
      certification: 'DSHS Approved',
      topics: [
        'Foundational caregiving principles',
        'Health and safety practices',
        'Communication skills',
        'Hands-on care techniques'
      ]
    },
    {
      id: 'nurse-delegation',
      title: 'Nurse Delegation',
      description: 'Advanced training for specific nursing tasks under RN supervision.',
      icon: '👨‍⚕️',
      category: 'advanced',
      duration: '9 Hours',
      certification: 'State Certified',
      topics: [
        'Medication administration',
        'Diabetes care',
        'Patient monitoring',
        'Documentation'
      ]
    },
    {
      id: 'continuing-education',
      title: 'Continuing Education',
      description: 'Stay updated with the latest caregiving practices and maintain certification.',
      icon: '🎓',
      category: 'professional',
      duration: '12 Hours',
      certification: 'CE Credits',
      topics: [
        'Industry updates',
        'Best practices',
        'Skill enhancement',
        'Professional growth'
      ]
    },
    {
      id: 'basic-life-support',
      title: 'Basic Life Support (BLS)',
      description: 'Essential life support techniques for healthcare providers.',
      icon: '💗',
      category: 'emergency',
      duration: '4.5 Hours',
      certification: 'Red Cross Certified',
      topics: [
        'CPR techniques',
        'AED usage',
        'Emergency response',
        'Team coordination'
      ]
    },
    {
      id: 'cpr-aed',
      title: 'CPR/AED & First Aid',
      description: 'Comprehensive first aid and life-saving procedures training.',
      icon: '🚑',
      category: 'emergency',
      duration: '4 Hours',
      certification: 'Red Cross Certified',
      topics: [
        'CPR basics',
        'First aid procedures',
        'Emergency care',
        'Safety protocols'
      ]
    },
    {
      id: 'license-application',
      title: 'License Application Support',
      description: 'Expert guidance for HCA license applications and renewals.',
      icon: '📋',
      category: 'professional',
      duration: 'Ongoing',
      certification: 'DOH Support',
      topics: [
        'Application process',
        'Documentation help',
        'Renewal guidance',
        'Compliance support'
      ]
    }
  ];

  const filteredCourses = activeCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  const handleLearnMore = (courseId) => {
    navigate(`/services/${courseId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header Section */}
      <div className="bg-[#112C4A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Our Courses
          </h1>
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
            Comprehensive training programs designed to empower caregivers with the skills and knowledge they need to provide exceptional care.
          </p>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="sticky top-20 bg-white shadow-md z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-start overflow-x-auto py-4 -mb-px space-x-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  whitespace-nowrap px-3 py-2 font-medium text-sm rounded-lg transition-all duration-300
                  ${activeCategory === category.id
                    ? 'bg-[#61C36C] text-white shadow-md'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                  }
                `}
              >
                {category.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  {/* Icon and Category */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-[#61C36C]/10 rounded-full flex items-center justify-center text-3xl">
                      {course.icon}
                    </div>
                    <span className="text-sm font-medium text-[#61C36C] bg-[#61C36C]/10 px-3 py-1 rounded-full">
                      {categories.find(cat => cat.id === course.category)?.name}
                    </span>
                  </div>

                  {/* Course Info */}
                  <h3 className="text-xl font-bold text-[#112C4A] mb-3">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {course.description}
                  </p>

                  {/* Course Details */}
                  <div className="flex items-center justify-between mb-6 text-sm text-gray-500">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-[#61C36C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-[#61C36C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      {course.certification}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleLearnMore(course.id)}
                    className="w-full bg-white text-[#61C36C] border-2 border-[#61C36C] hover:bg-[#61C36C] hover:text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center group"
                  >
                    Learn More
                    <svg 
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-4 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <p className="text-gray-600 font-medium">
            Ready to start your journey?
          </p>
          <button className="bg-[#61C36C] hover:bg-[#4fa95a] text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courses; 