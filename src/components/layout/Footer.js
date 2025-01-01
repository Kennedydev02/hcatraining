import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-[#87A1FF] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <img 
              src="/images/logo.png" 
              alt="Caregiver Training & Huduma Center LLC" 
              className="h-16 w-auto"
            />
            <p className="text-[#112C4A]">
              Empowering Caregivers, Supporting Communities
            </p>
            <div className="space-y-4">
              <a 
                href="mailto:info@hudumacenter.com"
                className="flex items-center gap-2 text-[#112C4A] hover:text-[#61C36C] transition-colors"
              >
                <span>📧</span>
                <span>info@hudumacenter.com</span>
              </a>
              <a 
                href="tel:206-460-9022"
                className="flex items-center gap-2 text-[#112C4A] hover:text-[#61C36C] transition-colors"
              >
                <span>📞</span>
                <span>206-460-9022</span>
              </a>
              <div className="flex items-start gap-2 text-[#112C4A]">
                <span className="mt-1">📍</span>
                <span>30821 Pacific Hwy S, Federal Way, WA 98003</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[#112C4A]">Quick Links</h3>
            <nav>
              <ul className="space-y-4">
                {[
                  ['Home', '/'],
                  ['Courses', '/courses'],
                  ['Admissions', '/admissions'],
                  ['About Us', '/about'],
                  ['Contact Us', '/contact'],
                ].map(([title, url]) => (
                  <li key={title}>
                    <Link 
                      to={url}
                      className="text-[#112C4A] hover:text-[#61C36C] transition-colors"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[#112C4A]">Our Services</h3>
            <ul className="space-y-4">
              {[
                '75hr Basic Training/HCA',
                'Nurse Delegation',
                'CPR/AED & First Aid',
                'Continuous Education (CEs)',
                'Basic Life Support (BLS)',
              ].map((service) => (
                <li key={service} className="text-[#112C4A]">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-[#112C4A]/20">
          <p className="text-center text-[#112C4A]">
            © {new Date().getFullYear()} Caregiver Training & Huduma Center LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 