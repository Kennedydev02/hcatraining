import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'core', name: 'Core Training' },
    { id: 'advanced', name: 'Advanced Skills' },
    { id: 'emergency', name: 'Emergency Response' }
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
      price: '$650'
    },
    {
      id: 'nurse-delegation',
      title: 'Nurse Delegation',
      description: 'Learn specialized nursing tasks under the supervision of a registered nurse.',
      icon: '👨‍⚕️',
      category: 'advanced',
      duration: '9 Hours',
      certification: 'State Certified',
      price: '$250'
    },
    {
      id: 'continuing-education',
      title: 'Continuing Education',
      description: 'Stay updated with the latest caregiving practices and techniques.',
      icon: '🎓',
      category: 'advanced',
      duration: '12 Hours',
      certification: 'CE Credits',
      price: '$200'
    },
    {
      id: 'basic-life-support',
      title: 'Basic Life Support (BLS)',
      description: 'Essential life-saving techniques and emergency response training.',
      icon: '💝',
      category: 'emergency',
      duration: '4.5 Hours',
      certification: 'AHA Certified',
      price: '$95'
    },
    {
      id: 'cpr-aed',
      title: 'CPR/AED & First Aid',
      description: 'Learn critical emergency response skills and life-saving techniques.',
      icon: '🏥',
      category: 'emergency',
      duration: '8 Hours',
      certification: 'Red Cross Certified',
      price: '$120'
    },
    {
      id: 'mental-health',
      title: 'Mental Health First Aid',
      description: 'Understand and respond to mental health emergencies effectively.',
      icon: '🧠',
      category: 'advanced',
      duration: '8 Hours',
      certification: 'MHFA Certified',
      price: '$175'
    }
  ];

  const filteredCourses = courses.filter(course => 
    activeCategory === 'all' || course.category === activeCategory
  );

  const handleLearnMore = (courseId) => {
    window.location.href = `/courses/${courseId}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Category Navigation */}
      <div className="sticky top-0 z-10 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-4 overflow-x-auto py-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors duration-200
                  ${activeCategory === category.id 
                    ? 'bg-[#61C36C] text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="text-4xl mb-4">{course.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {course.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-500">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {course.duration}
                    </div>
                    <div className="flex items-center text-gray-500">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {course.certification}
                    </div>
                    <div className="flex items-center text-gray-500">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {course.price}
                    </div>
                  </div>
                  <div className="mt-6">
                    <button 
                      className="w-full bg-[#61C36C] hover:bg-[#4fa95a] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
                      onClick={() => handleLearnMore(course.id)}
                    >
                      Learn More
                      <svg 
                        className="w-5 h-5 ml-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Courses; 