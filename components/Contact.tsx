import React from 'react';
import { ADDRESS, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_TH, Icons } from '../constants';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-law-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-law-silver font-bold uppercase tracking-widest text-sm mb-2">Get In Touch</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold mb-8">Global Reach, Local Expertise</h3>
            <p className="text-slate-300 mb-12 text-lg font-light">
              Based in San Francisco and Bangkok, JCBlaine is uniquely positioned to handle your matters across time zones.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-law-blue/20 p-3 rounded-full mr-4 text-law-silver">
                   <Icons.Globe />
                </div>
                <div>
                  <h4 className="font-bold text-white">Locations</h4>
                  <p className="text-slate-400">San Francisco, CA (USA)</p>
                  <p className="text-slate-400">Bangkok, Thailand</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-law-blue/20 p-3 rounded-full mr-4 text-law-silver">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white">Phone</h4>
                  <p className="text-slate-400">US: {CONTACT_PHONE}</p>
                  <p className="text-slate-400">TH: {CONTACT_PHONE_TH}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-law-blue/20 p-3 rounded-full mr-4 text-law-silver">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white">Email</h4>
                  <p className="text-slate-400">{CONTACT_EMAIL}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-lg p-8 text-slate-900">
            <h4 className="text-xl font-bold font-serif text-law-dark mb-6">Request a Consultation</h4>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-law-blue" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-law-blue" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input type="email" className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-law-blue" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Primary Interest</label>
                <select className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-law-blue">
                  <option>US Investment (from Asia)</option>
                  <option>SE Asia Expansion (from US)</option>
                  <option>Tax & Estate Planning</option>
                  <option>Corporate Compliance</option>
                  <option>Corporate Directorship Services</option>
                  <option>Legal Education & Training</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea rows={4} className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-law-blue"></textarea>
              </div>
              <button type="submit" className="w-full bg-law-blue hover:bg-blue-900 text-white font-bold py-3 rounded transition-colors uppercase text-sm tracking-widest">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};