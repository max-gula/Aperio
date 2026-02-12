
import React from 'react';
import { InlineWidget } from 'react-calendly';

const BookingSection: React.FC = () => {
  return (
    <section id="book" className="pt-10 pb-16 md:py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-16 items-start">
          {/* Left Side: Strategic Copy */}
          <div className="lg:col-span-1">
            <h2 className="text-brand uppercase tracking-[0.4em] font-bold text-[10px] md:text-sm mb-2 md:mb-4">Scheduling</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">Secure Your <span className="text-brand italic">Discovery Call.</span></h3>
            <div className="w-12 md:w-16 h-1 bg-brand mb-6 md:mb-8"></div>
            
            <div className="space-y-6 md:space-y-8 text-gray-600">
              <p className="text-sm md:text-lg leading-relaxed text-center md:text-left">
                Select a time that suits your schedule for a focused, 30-minute introductory consultation. No jargon, just direct financial strategy.
              </p>
              
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 bg-brand/10 p-2 rounded-lg shrink-0">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="ml-3 md:ml-4 text-[10px] md:text-sm font-bold text-gray-900 uppercase tracking-wider mb-0.5 md:mb-1">Elite Strategy</p>
                    <p className="ml-3 md:ml-4 text-[11px] md:text-sm text-gray-500">Identify high-impact tax-saving opportunities.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 bg-brand/10 p-2 rounded-lg shrink-0">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="ml-3 md:ml-4 text-[10px] md:text-sm font-bold text-gray-900 uppercase tracking-wider mb-0.5 md:mb-1">Lending Power</p>
                    <p className="ml-3 md:ml-4 text-[11px] md:text-sm text-gray-500">Review your capacity across 30+ lenders.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 bg-brand/10 p-2 rounded-lg shrink-0">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="ml-3 md:ml-4 text-[10px] md:text-sm font-bold text-gray-900 uppercase tracking-wider mb-0.5 md:mb-1">Wealth Integration</p>
                    <p className="ml-3 md:ml-4 text-[11px] md:text-sm text-gray-500">Unify accounting and finance into one engine.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side: The Calendly Widget - Redesigned to be seamless */}
          <div className="lg:col-span-2 relative">
            {/* Single clean wrapper with shadow */}
            <div className="relative z-10 rounded-2xl shadow-2xl overflow-hidden h-[650px] md:h-[700px]">
              <div className="absolute inset-0">
                <InlineWidget
                  url="https://calendly.com/aperio-info/30min"
                  styles={{
                    height: '100%',
                    width: '100%',
                    margin: '0',
                    padding: '0'
                  }}
                  pageSettings={{
                    backgroundColor: 'ffffff',
                    hideEventTypeDetails: true,
                    hideGdprBanner: true,
                    primaryColor: 'b41f24',
                    textColor: '111827'
                  }}
                />
              </div>
            </div>
            
            {/* Footer Metadata */}
            <div className="mt-6 flex items-center justify-between px-2">
              <div className="flex items-center space-x-3 text-gray-400">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand animate-pulse"></div>
                <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em]">Secure encrypted interface</p>
              </div>
              <div className="flex space-x-1 opacity-40">
                <div className="w-1 h-1 rounded-full bg-brand"></div>
                <div className="w-1 h-1 rounded-full bg-brand"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
