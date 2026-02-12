import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="hero-section-wrapper relative h-screen min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center grayscale brightness-50 contrast-125"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')`,
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>

      <div className="hero-container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 lg:pt-0">
        <div className="max-w-4xl">
          {/* Label Container */}
          <div className="hero-mobile-labels group/labels flex flex-wrap gap-2 lg:gap-3 mb-6 lg:mb-8">
            <div className="label-item inline-block px-3 py-1 lg:px-4 lg:py-1 border-l-4 transition-all duration-300 cursor-default
              border-brand bg-brand/10
              group-hover/labels:border-white/40 group-hover/labels:bg-white/5
              hover:!border-brand hover:!bg-brand/10">
              <span className="font-bold tracking-widest text-[10px] lg:text-xs uppercase transition-colors duration-300
                text-brand
                group-hover/labels:text-white/80
                hover:!text-brand">
                Aperio
              </span>
            </div>
            
            <a 
              href="https://taxmatters.net.au/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="label-item inline-block px-3 py-1 lg:px-4 lg:py-1 border-l-4 border-white/40 bg-white/5 hover:border-green-500 hover:bg-green-500/10 transition-all duration-300 group/tax cursor-pointer decoration-none"
            >
              <span className="text-white/80 group-hover/tax:text-green-500 font-bold tracking-widest text-[10px] lg:text-xs uppercase transition-colors duration-300">
                Tax Matters
              </span>
            </a>
            
            <a 
              href="https://www.instagram.com/123loans.au/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="label-item inline-block px-3 py-1 lg:px-4 lg:py-1 border-l-4 border-white/40 bg-white/5 hover:border-red-600 hover:bg-red-600/10 transition-all duration-300 group/loans cursor-pointer decoration-none"
            >
              <span className="text-white/80 group-hover/loans:text-red-600 font-bold tracking-widest text-[10px] lg:text-xs uppercase transition-colors duration-300">
                123 Loans
              </span>
            </a>
          </div>
          
          <h1 className="text-3xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Integrated Financial <span className="text-brand italic">Clarity</span> for Business Owners and Investors.
          </h1>
          <h2 className="text-base lg:text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl font-normal">
            Master your wealth through elite tax strategy and financial dominance. We unify accounting, lending, and advisory into a singular, high-performance engine for Australia’s most ambitious investors.
          </h2>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              to="/#book" 
              className="px-8 py-4 lg:px-10 lg:py-4 bg-brand text-white text-center font-bold uppercase tracking-widest hover:bg-red-800 transition-all shimmer-btn text-[13px] lg:text-base"
            >
              Free 30-Minute Strategy Call
            </Link>
            <Link 
              to="/#contact" 
              className="px-8 py-4 lg:px-10 lg:py-4 border-2 border-white text-white text-center font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all text-[13px] lg:text-base"
            >
              Submit an enquiry
            </Link>
          </div>
        </div>
      </div>

      {/* Trust Badges / Stats - Desktop Only */}
      <div className="absolute bottom-12 left-0 w-full hidden lg:block border-t border-white/10 pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="grid grid-cols-4 gap-16 flex-grow">
              <div className="text-white">
                <p className="text-3xl font-bold">$2B+</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em]">Client Lending Secured</p>
              </div>
              <div className="text-white">
                <p className="text-3xl font-bold">40+</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em]">Years Industry Tenure</p>
              </div>
              <div className="text-white">
                <p className="text-3xl font-bold">500+</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em]">Active Entities Managed</p>
              </div>
              <div className="text-white">
                <p className="text-3xl font-bold">98%</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em]">Client Retention Rate</p>
              </div>
            </div>
            <div className="flex space-x-12 ml-12 border-l border-white/20 pl-12">
              <a href="https://taxmatters.net.au/" target="_blank" rel="noopener noreferrer" className="opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 contrast-125 flex flex-col items-start group">
                 <span className="text-white group-hover:text-green-500 font-black text-xl tracking-tighter leading-none transition-colors">TAX MATTERS</span>
                 <span className="text-[8px] text-white font-bold uppercase tracking-widest mt-1">Accounting & Tax</span>
              </a>
              <a href="https://www.instagram.com/123loans.au/" target="_blank" rel="noopener noreferrer" className="opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 contrast-125 flex flex-col items-start group">
                 <span className="text-white group-hover:text-red-600 font-black text-xl tracking-tighter leading-none transition-colors">123 LOANS</span>
                 <span className="text-[8px] text-white font-bold uppercase tracking-widest mt-1">Finance & Lending</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;