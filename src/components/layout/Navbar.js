import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed w-full top-0 bg-white z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="/images/logo.png"
                alt="Caregiver Training Center"
                className="h-16 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
                Home
              </Link>
              <Link to="/courses" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
                Courses
              </Link>
              <Link to="/admissions" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
                Admissions
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
                Contact Us
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block w-full h-0.5 bg-gray-600 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
                <span className={`block w-full h-0.5 bg-gray-600 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-full h-0.5 bg-gray-600 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <nav className="bg-white border-t border-gray-100 px-4 py-2">
            <div className="flex flex-col space-y-2">
              <Link to="/" className="py-3 text-gray-600 hover:text-[#4CAF50]" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/courses" className="py-3 text-gray-600 hover:text-[#4CAF50]" onClick={() => setIsOpen(false)}>Courses</Link>
              <Link to="/admissions" className="py-3 text-gray-600 hover:text-[#4CAF50]" onClick={() => setIsOpen(false)}>Admissions</Link>
              <Link to="/about" className="py-3 text-gray-600 hover:text-[#4CAF50]" onClick={() => setIsOpen(false)}>About Us</Link>
              <Link to="/contact" className="py-3 text-gray-600 hover:text-[#4CAF50]" onClick={() => setIsOpen(false)}>Contact</Link>
              <Link 
                to="/enroll" 
                className="bg-[#4CAF50] text-white py-3 px-6 rounded-lg font-medium text-center
                  hover:bg-[#45a049] transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Enroll Now
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <div className="h-20" /> {/* Spacer */}
    </>
  );
};

export default Navbar; 