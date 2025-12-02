import React from 'react';
import { FIRM_NAME, Icons } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-law-dark text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
             <div className="text-law-silver mr-2">
               <Icons.Scale />
             </div>
             <span className="font-serif font-bold text-white text-lg">{FIRM_NAME}</span>
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Attorney Advertising</a>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-slate-600">
          <p>&copy; {new Date().getFullYear()} {FIRM_NAME}. All rights reserved.</p>
          <p className="mt-2">Disclaimer: The information on this website is for general information purposes only and does not constitute legal advice. Past results do not guarantee a similar outcome.</p>
        </div>
      </div>
    </footer>
  );
};