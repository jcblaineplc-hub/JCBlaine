import React from 'react';
import { Icons } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-law-blue font-bold uppercase tracking-widest text-sm mb-2">Areas of Practice</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-law-dark">Strategic International Counsel</h3>
          <p className="mt-4 max-w-2xl mx-auto text-slate-600">
            Providing specialized legal services for high-net-worth individuals and multinational corporations navigating the complexities of US and Asian legal systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Private Client Services */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-law-blue to-law-silver rounded-lg blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative bg-white p-8 border border-slate-100 shadow-xl rounded-lg h-full">
              <div className="w-12 h-12 bg-law-blue text-white rounded-full flex items-center justify-center mb-6">
                <Icons.Scale />
              </div>
              <h4 className="text-2xl font-serif font-bold text-law-dark mb-4">Private Client & International Tax</h4>
              <p className="text-slate-600 mb-6">
                Expert advice for high-net-worth individuals, trustees, and financial institutions on international structuring and long-term investment strategy.
              </p>
              <ul className="space-y-3">
                {[
                  "Cross-border Estate & Trust Planning",
                  "Succession Planning for Family Businesses",
                  "US & Asian Investment Structuring",
                  "International Tax Planning & Compliance"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="text-law-blue mt-1 mr-3 flex-shrink-0">
                      <Icons.Check />
                    </div>
                    <span className="text-slate-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Corporate Compliance */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-slate-400 to-law-blue rounded-lg blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative bg-white p-8 border border-slate-100 shadow-xl rounded-lg h-full">
              <div className="w-12 h-12 bg-law-silver text-white rounded-full flex items-center justify-center mb-6">
                <Icons.Check />
              </div>
              <h4 className="text-2xl font-serif font-bold text-law-dark mb-4">Corporate Compliance & Investigations</h4>
              <p className="text-slate-600 mb-6">
                 Advising international clients on compliance systems development, assessment, and training across multiple jurisdictions.
              </p>
              <ul className="space-y-3">
                {[
                  "Anti-Bribery & Corruption Policy",
                  "Supply Chain Due Diligence",
                  "Business & Human Rights Compliance",
                  "International Sanctions Advisory",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="text-law-blue mt-1 mr-3 flex-shrink-0">
                      <Icons.Check />
                    </div>
                    <span className="text-slate-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Restructuring & Insolvency */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-law-blue to-law-silver rounded-lg blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative bg-white p-8 border border-slate-100 shadow-xl rounded-lg h-full">
              <div className="w-12 h-12 bg-law-silver text-white rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <h4 className="text-2xl font-serif font-bold text-law-dark mb-4">Restructuring & Insolvency</h4>
              <p className="text-slate-600 mb-6">
                Consolidated regional expertise for corporate restructuring. Raising the profile of recovery and turnaround strategies in Asia.
              </p>
              <ul className="space-y-3">
                {[
                  "Regional Practice Group Leadership",
                  "Cross-border Insolvency Proceedings",
                  "Debt Restructuring Strategies",
                  "Entity Liquidation & Dissolution"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="text-law-blue mt-1 mr-3 flex-shrink-0">
                      <Icons.Check />
                    </div>
                    <span className="text-slate-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* US & Thai Market Entry */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-law-blue to-slate-400 rounded-lg blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative bg-white p-8 border border-slate-100 shadow-xl rounded-lg h-full">
              <div className="w-12 h-12 bg-law-blue text-white rounded-full flex items-center justify-center mb-6">
                <Icons.Globe />
              </div>
              <h4 className="text-2xl font-serif font-bold text-law-dark mb-4">US & Thai Market Entry</h4>
              <p className="text-slate-600 mb-6">
                Bridging the Pacific with dual-licensed expertise. Helping Thai entities enter the US and US entities operate in Thailand.
              </p>
              <ul className="space-y-3">
                {[
                  "Entity Formation (Delaware, CA, Thailand)",
                  "Foreign Direct Investment (FDI) Strategy",
                  "Commercial Contracts & Negotiation",
                  "Regulatory Affairs & Licensing"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="text-law-blue mt-1 mr-3 flex-shrink-0">
                      <Icons.Check />
                    </div>
                    <span className="text-slate-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Corporate Directorship Services */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-law-blue to-law-silver rounded-lg blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative bg-white p-8 border border-slate-100 shadow-xl rounded-lg h-full">
              <div className="w-12 h-12 bg-law-silver text-white rounded-full flex items-center justify-center mb-6">
                <Icons.Users />
              </div>
              <h4 className="text-2xl font-serif font-bold text-law-dark mb-4">Corporate Directorship Services</h4>
              <p className="text-slate-600 mb-6">
                Strategic guidance for boards and directors to ensure robust oversight, minimize liability, and establish effective governance frameworks.
              </p>
              <ul className="space-y-3">
                {[
                  "Board & Directorship Appointments",
                  "Corporate Governance Frameworks",
                  "Director Duties & Liability Advice",
                  "Board Evaluations & Training"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="text-law-blue mt-1 mr-3 flex-shrink-0">
                      <Icons.Check />
                    </div>
                    <span className="text-slate-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Legal Education & Training */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-slate-400 to-law-blue rounded-lg blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative bg-white p-8 border border-slate-100 shadow-xl rounded-lg h-full">
              <div className="w-12 h-12 bg-law-blue text-white rounded-full flex items-center justify-center mb-6">
                <Icons.AcademicCap />
              </div>
              <h4 className="text-2xl font-serif font-bold text-law-dark mb-4">Legal Education & Training</h4>
              <p className="text-slate-600 mb-6">
                Specialized educational programs bridging the gap between law and business for legal professionals and high-net-worth investors.
              </p>
              <ul className="space-y-3">
                {[
                  "Mini-MBA for Lawyers",
                  "Business & Human Rights",
                  "Regulatory Systems & Compliance",
                  "Investment Planning for HNW/UHNW"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="text-law-blue mt-1 mr-3 flex-shrink-0">
                      <Icons.Check />
                    </div>
                    <span className="text-slate-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};