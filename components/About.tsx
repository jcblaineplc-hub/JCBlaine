import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-law-blue font-bold uppercase tracking-widest text-sm mb-2">Attorney Profile</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-law-dark mb-4">
              Jonathan Blaine, Esq.
            </h3>
            <p className="text-lg text-slate-500 mb-6 font-light">
              Licensed California Attorney &bull; Certified Public Accountant (HI) &bull; Chartered MSCI
            </p>
            
            <div className="prose prose-slate text-slate-600 mb-8">
              <p className="mb-4">
                Jonathan is an International Lawyer with over 20 years of experience advising on cross-border corporate planning and individual matters, with a particular focus on the US-Asia corridor.
              </p>
              <p className="mb-4">
                Formerly a Director at DFDL (Thailand) and Senior Associate at Baker McKenzie, Jonathan has established and headed multiple top-tier practice groups including Private Client Services, Corporate Compliance, and Restructuring. His multidisciplinary expertise bridges Law, Accounting, and Finance.
              </p>
              <p>
                He holds US Juris Doctorate in Corporate Law, as well as 2 Masters degrees, an LLM in International Law from the Australian National University and an MBA from Chaminade University of Honolulu. He is a frequent speaker at seminars throughout Southeast Asia and a lecturer in finance and law at several prestigious universities.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-law-blue uppercase text-xs tracking-wider mb-2">Education</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>&bull; LL.M. (International Law) ANU</li>
                  <li>&bull; JD (Cum Laude) Seton Hall Law</li>
                  <li>&bull; MBA, Chaminade University</li>
                  <li>&bull; BA (International Relations), Kent State</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-law-blue uppercase text-xs tracking-wider mb-2">Experience</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>&bull; DFDL (Thailand) Ltd.</li>
                  <li>&bull; Baker McKenzie (Bangkok)</li>
                  <li>&bull; KPMG Phoomchai Tax Ltd.</li>
                  <li>&bull; Lehman Brothers (Japan)</li>
                </ul>
              </div>
            </div>
            
          </div>
          
          <div className="relative mt-8 lg:mt-0">
            <div className="absolute top-4 -right-4 w-full h-full border-2 border-law-silver z-0 hidden md:block"></div>
            <img 
              src="https://picsum.photos/seed/jonathanblaine/600/800" 
              alt="Jonathan Blaine, Esq." 
              className="relative z-10 rounded shadow-2xl w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
             <div className="relative z-20 -mt-10 -ml-6 bg-law-blue text-white p-6 shadow-lg max-w-xs hidden md:block">
                <p className="font-serif italic text-lg">
                  "We don't just translate languages; we translate legal systems and business cultures."
                </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};