import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gradient-to-r from-[#112C4A] to-[#1a3c61] shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-4 group">
              <img 
                src="/logo.svg" 
                alt="Caregiver Training & Huduma Center LLC Logo" 
                className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="text-white font-semibold text-xl leading-tight">
                  Caregiver Training
                </span>
                <span className="text-[#61C36C] text-sm font-medium">
                  & Huduma Center LLC
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-8">
              <NavLink href="/services">Our Services</NavLink>
              <NavLink href="/courses">DSHS Courses</NavLink>
              <NavLink href="/benefits">Benefits</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>
          </div>

          {/* Contact Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:206-460-9022"
              className="flex items-center gap-2 text-white hover:text-[#61C36C] transition-all duration-300 group"
            >
              <PhoneIcon className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              <span className="font-medium">206-460-9022</span>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-lg text-white bg-[#61C36C] hover:bg-[#4fa95a] transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#61C36C]"
            >
              Enroll Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={handleToggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#61C36C] focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <MenuIcon isOpen={isMenuOpen} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-[#112C4A] shadow-lg">
          <MobileNavLink href="/services">Our Services</MobileNavLink>
          <MobileNavLink href="/courses">DSHS Courses</MobileNavLink>
          <MobileNavLink href="/benefits">Benefits</MobileNavLink>
          <MobileNavLink href="/contact">Contact</MobileNavLink>
          <div className="mt-4 px-3 py-4 border-t border-[#2a4a6d]">
            <a
              href="tel:206-460-9022"
              className="flex items-center gap-2 text-white hover:text-[#61C36C] mb-4"
            >
              <PhoneIcon className="h-5 w-5" />
              <span>206-460-9022</span>
            </a>
            <a
              href="/contact"
              className="block text-center px-4 py-2 rounded-md text-white bg-[#61C36C] hover:bg-[#4fa95a]"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a
      href={href}
      className="text-white hover:text-[#61C36C] px-3 py-2 text-sm font-medium transition-all duration-300 relative group"
      tabIndex={0}
      aria-label={`Navigate to ${children}`}
    >
      {children}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#61C36C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
    </a>
  );
};

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a
      href={href}
      className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#1a3c61] transition-colors duration-200"
    >
      {children}
    </a>
  );
};

const MenuIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    className={`h-6 w-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    {isOpen ? (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    ) : (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    )}
  </svg>
);

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
    />
  </svg>
);

export default Navbar; 