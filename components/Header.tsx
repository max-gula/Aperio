import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const isSolid = isScrolled || !isHomePage;

  const handleOpenAi = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('open-aperio-ai'));
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Expertise', to: '/#services' },
    { name: 'Team', to: '/#experts' },
    { name: 'Reviews', to: '/#reviews' },
    { name: 'FAQ', to: '/#faq' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-700 ease-in-out ${isSolid ? 'bg-white shadow-2xl py-4 lg:py-6' : 'bg-transparent py-6 lg:py-10'}`}>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-12 lg:px-16">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center group shrink-0">
            <Logo 
              fill={isSolid ? "#B41F24" : "#FFFFFF"} 
              className="transition-transform duration-500 scale-90 lg:scale-100"
            />
            <div className={`ml-6 h-8 w-[1.5px] mobile-hide-secondary ${isSolid ? 'bg-gray-200' : 'bg-white/30'}`}></div>
            <span className={`ml-6 text-[11px] uppercase tracking-[0.6em] font-black hidden lg:block whitespace-nowrap ${isSolid ? 'text-gray-400' : 'text-white/80'}`}>
              Financial Services
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center">
            <div className="flex items-center space-x-10 mr-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className={`text-sm font-black uppercase tracking-[0.2em] hover:text-brand transition-colors whitespace-nowrap ${isSolid ? 'text-gray-900' : 'text-white'}`}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={handleOpenAi}
                className={`text-sm font-black uppercase tracking-[0.2em] hover:opacity-70 transition-opacity whitespace-nowrap ${isSolid ? 'text-gray-900' : 'text-white'}`}
              >
                Aperio <span className="text-brand">Ai</span>
              </button>
            </div>
            <Link
              to="/#contact"
              className={`px-8 py-4 rounded-sm text-sm font-black uppercase tracking-[0.2em] transition-all transform hover:-translate-y-0.5 active:scale-95 whitespace-nowrap shimmer-btn ${
                isSolid 
                ? 'bg-brand text-white hover:bg-red-800' 
                : 'bg-white text-brand hover:bg-gray-100 shadow-2xl'
              }`}
            >
              Submit Enquiry
            </Link>
          </nav>

          {/* Mobile Menu Toggle - Positioned Right */}
          <button 
            className="xl:hidden ml-auto menu-btn p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className={`w-8 h-8 ${isSolid ? 'text-brand' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="xl:hidden bg-white fixed inset-0 top-0 left-0 w-full h-screen z-[60] animate-fadeIn overflow-y-auto">
          <div className="p-4 flex justify-between items-center border-b border-gray-100">
             <Logo fill="#B41F24" />
             <button onClick={() => setIsMenuOpen(false)} className="menu-btn p-2">
               <svg className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
               </svg>
             </button>
          </div>
          <div className="flex flex-col p-8 space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="menu-btn text-2xl font-black uppercase tracking-[0.2em] text-gray-900 hover:text-brand text-right block w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={handleOpenAi}
              className="menu-btn text-right text-2xl font-black uppercase tracking-[0.2em] text-gray-900 block w-full"
            >
              Aperio <span className="text-brand">Ai</span>
            </button>
            <Link
              to="/#contact"
              className="bg-brand text-white text-center py-6 rounded-sm font-black uppercase tracking-[0.2em] text-xl shimmer-btn mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Submit Enquiry
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;