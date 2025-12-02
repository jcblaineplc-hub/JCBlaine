import React from 'react';
import { Icons } from '../constants';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <div id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/sfbridge/1920/1080" 
          alt="San Francisco Bridge" 
          className="w-full h-full object-cover"
        />
        {/* Updated overlay to use law-blue */}
        <div className="absolute inset-0 bg-law-blue/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-law-blue via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-law-silver mb-6 border border-white/20">
            <Icons.Globe />
            <span className="text-sm font-semibold uppercase tracking-widest text-white">San Francisco &bull; Bangkok &bull; Southeast Asia</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-white leading-tight mb-6">
            JCBlaine, PLC <br className="hidden md:block" />
            <span className="text-law-silver italic text-3xl sm:text-5xl font-light">International Legal Counsel</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-200 font-light mb-10">
            Expert guidance on cross-border corporate planning, tax, and investment structuring. 
            Bridging the gap between the US and Southeast Asia.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-gradient-to-r from-slate-300 to-white hover:from-white hover:to-slate-200 text-law-blue font-bold rounded-sm shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-sm uppercase tracking-wider"
            >
              Contact Us
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="px-8 py-4 bg-transparent border border-white text-white hover:bg-white hover:text-law-blue font-bold rounded-sm shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-sm uppercase tracking-wider"
            >
              Expertise
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
