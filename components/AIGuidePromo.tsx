import React from 'react';

export const AIGuidePromo: React.FC = () => {
  return (
    <section id="ai-guide" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-lg p-8 md:p-12 shadow-sm">
          <div>
            <p className="text-law-blue font-bold uppercase tracking-widest text-xs mb-3">
              New Executive Guide
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-law-dark mb-4">
              The AI-Ready Law Firm
            </h2>
            <p className="text-slate-600 max-w-2xl font-light">
              A 90-day implementation roadmap for law firm leaders addressing AI governance,
              workflow redesign, pricing, talent, and profitability.
            </p>
          </div>
          <a
            href="/ai-ready-law-firm/"
            className="inline-flex items-center justify-center px-8 py-4 bg-law-blue hover:bg-law-dark text-white font-bold rounded-sm shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-sm uppercase tracking-wider whitespace-nowrap"
          >
            Download the Guide
          </a>
        </div>
      </div>
    </section>
  );
};
