import React, { useState, useEffect } from 'react';
import { FIRM_NAME, Icons } from '../constants';

interface NavbarProps {
  scrollToSection: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-law-blue/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
  }`;

  const linkClasses = `text-sm font-semibold uppercase tracking-widest hover:text-law-silver transition-colors cursor-pointer ${
    isScrolled ? 'text-white' : 'text-white'
  }`;

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
            <div className="text-white mr-2">
              <Icons.Scale />
            </div>
            <span className={`font-serif font-bold text-xl sm:text-2xl text-white`}>
              {FIRM_NAME}
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <button onClick={() => handleNavClick('home')} className={linkClasses}>Home</button>
            <button onClick={() => handleNavClick('services')} className={linkClasses}>Expertise</button>
            <button onClick={() => handleNavClick('about')} className={linkClasses}>Attorney Profile</button>
            <button 
              onClick={() => handleNavClick('contact')} 
              className="bg-law-silver hover:bg-slate-400 text-law-dark px-5 py-2 rounded-sm font-semibold transition-all uppercase text-xs tracking-wider"
            >
              Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-law-silver focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-law-blue border-t border-blue-800 absolute w-full shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => handleNavClick('home')} className="block px-3 py-2 text-base font-medium text-white hover:text-law-silver w-full text-left">Home</button>
            <button onClick={() => handleNavClick('services')} className="block px-3 py-2 text-base font-medium text-white hover:text-law-silver w-full text-left">Expertise</button>
            <button onClick={() => handleNavClick('about')} className="block px-3 py-2 text-base font-medium text-white hover:text-law-silver w-full text-left">Attorney Profile</button>
            <button onClick={() => handleNavClick('contact')} className="block w-full text-left px-3 py-2 text-base font-medium text-law-silver hover:text-white">Schedule Consultation</button>
          </div>
        </div>
      )}
    </nav>
  );
};