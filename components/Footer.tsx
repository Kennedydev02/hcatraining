const Footer = () => {
  return (
    <footer className="w-full bg-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col space-y-4">
              <img 
                src="/logo.svg" 
                alt="Caregiver Training & Huduma Center LLC" 
                className="h-12 w-auto"
              />
              <p className="text-gray-600">
                Empowering Caregivers, Supporting Communities
              </p>
              <div className="space-y-3">
                <a 
                  href="mailto:info@hudumacenter.com"
                  className="flex items-center gap-2 text-gray-600 hover:text-[#61C36C] transition-colors"
                >
                  <EmailIcon className="h-5 w-5" />
                  <span>info@hudumacenter.com</span>
                </a>
                <a 
                  href="tel:206-460-9022"
                  className="flex items-center gap-2 text-gray-600 hover:text-[#61C36C] transition-colors"
                >
                  <PhoneIcon className="h-5 w-5" />
                  <span>206-460-9022</span>
                </a>
                <div className="flex items-start gap-2 text-gray-600">
                  <LocationIcon className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span>30821 Pacific Hwy S, Federal Way, WA 98003</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h3>
            <nav>
              <ul className="space-y-3">
                {[
                  ['Home', '/'],
                  ['Courses', '/courses'],
                  ['Admissions', '/admissions'],
                  ['About Us', '/about'],
                  ['Contact Us', '/contact'],
                ].map(([title, url]) => (
                  <li key={title}>
                    <a 
                      href={url}
                      className="text-gray-600 hover:text-[#61C36C] transition-colors"
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Our Services</h3>
            <ul className="space-y-3">
              {[
                '75hr Basic Training/HCA',
                'Nurse Delegation',
                'CPR/AED & First Aid',
                'Continuous Education (CEs)',
                'Basic Life Support (BLS)',
              ].map((service) => (
                <li key={service} className="text-gray-600">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Caregiver Training & Huduma Center LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Icons
const EmailIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const LocationIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export default Footer; 