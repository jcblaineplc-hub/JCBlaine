import React from 'react';

export const TaxGuidePromo: React.FC = () => {
  return (
    <section id="tax-guide" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-lg p-8 md:p-12 shadow-sm">
          <div>
            <p className="text-law-blue font-bold uppercase tracking-widest text-xs mb-3">
              New Expat &amp; Entrepreneur Guide
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-law-dark mb-4">
              US-Thailand Tax Made Simple
            </h2>
            <p className="text-slate-600 max-w-2xl font-light">
              A condensed cross-border tax guidebook for Americans living, working, or migrating to
              Thailand &mdash; covering residency, remittances, treaty planning, and annual compliance rhythm.
            </p>
          </div>
          <a
            href="/tax-guide/"
            className="inline-flex items-center justify-center px-8 py-4 bg-law-blue hover:bg-law-dark text-white font-bold rounded-sm shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-sm uppercase tracking-wider whitespace-nowrap"
          >
            Download the Guide
          </a>
        </div>
      </div>
    </section>
  );
};
