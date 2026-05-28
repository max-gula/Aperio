import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TeamMember } from '../types';

const teamMembers: TeamMember[] = [
  {
    name: 'Jim Gulabovski',
    role: 'Practice Manager',
    description: 'A veteran leader with 40+ years in financial planning. Dedicated to orchestrating integrated strategies that secure family futures and long-term lifestyle goals.',
    imageUrl: 'https://i.postimg.cc/qBGQZs3f/jim.jpg'
  },
  {
    name: 'Serhan Aslan',
    role: 'Senior Financial Planner',
    affiliate: 'Authorised Representative of Akumin Financial Planning Pty Ltd (No. 1262131)',
    description: 'A seasoned strategist with 15+ years’ expertise in Superannuation, Managed Investments, and Retirement planning. Dedicated to delivering clear, integrity-driven advice.',
    imageUrl: 'https://i.postimg.cc/15WWyrFR/030649B3-A06C-4B1E-A122-9B83213B9CA6.png'
  },
  {
    name: 'Joshua Gulabovski',
    role: 'Mortgage Broker',
    affiliate: '123 Loans Pty Ltd (Credit Rep No. 535675)',
    description: 'An expert problem-solver specialising in residential lending, from first homes to complex refinances. Dedicated to building long-term relationships and a stress-free path to property ownership.',
    imageUrl: 'https://i.postimg.cc/ZKgMrL5D/josh.jpg'
  },
  {
    name: 'Dersim Aslan',
    role: 'Associate Mortgage & Administration Manager',
    affiliate: '123 Loans Pty Ltd',
    description: 'A dedicated administrator with 10+ years’ experience in property and finance. Expertly managing loan lifecycles and post-settlement needs with precision and a client-first focus.',
    imageUrl: 'https://i.postimg.cc/15TjpK3T/dersim.jpg'
  },
  {
    name: 'Mahen Narenthiran',
    role: 'Certified Accountant (CPA)',
    affiliate: 'Tax Matters Fitzroy Pty Ltd',
    description: 'A CPA with 25+ years’ experience across audit and commercial finance. Specialising in taxation and strategic accounting for families and small businesses with absolute precision.',
    imageUrl: 'https://i.postimg.cc/DyDMqcwM/mahen.jpg'
  },
  {
    name: 'Alex Gulabovski',
    role: 'Growth & Protection Strategist',
    description: 'A high-impact strategist and the firm’s primary visionary. Known as a proactive force in the financial sector, Alex specialises in architecting sophisticated structures for high-net-worth growth.',
    imageUrl: 'https://i.postimg.cc/XYkntGLV/Gemini-Generated-Image-qqufpvqqufpvqquf.png'
  },
  {
    name: 'Charlie Nikolovski',
    role: 'Client Services Officer – Accounting',
    affiliate: 'Tax Matters Fitzroy Pty Ltd',
    description: 'A client relations specialist with 40+ years’ experience across accounting and property conveyancing. Known for his personal, professional approach to exceeding small business expectations.',
    imageUrl: 'https://i.postimg.cc/YqVs1xCP/charlie.jpg'
  },
  {
    name: 'Vijay Aswani',
    role: 'Accountant',
    affiliate: 'Tax Matters Fitzroy Pty Ltd',
    description: 'Focusing on meticulous financial administration and supporting the accounting team’s daily strategic operations. Vijay ensures seamless communication and workflow efficiency across all client engagement portals.',
    imageUrl: 'https://i.postimg.cc/wMb8NRBY/3182d802-a493-4dcb-9b4f-cf1997ec0401.png'
  },
  {
    name: 'Sean Lai',
    role: 'Client Services & Paraplanning Associate',
    description: 'Currently completing a Bachelor of Banking and Finance and playing for the Richmond Tigers VFL squad, Sean brings elite discipline and teamwork to his support role across client services, paraplanning, and financial planning.',
    imageUrl: 'https://i.postimg.cc/J0XcN919/Whats-App-Image-2026-05-28-at-4-07-21-PM.jpg'
  }
];

const Team: React.FC = () => {
  const location = useLocation();

  const handleScrollToBooking = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      const element = document.getElementById('book');
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10 md:mb-20">
        <h2 className="text-brand uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold text-[10px] md:text-sm mb-3 md:mb-4">The Personnel</h2>
        <p className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">Your Industry Experts</p>
        <div className="w-12 md:w-20 h-1 bg-brand mx-auto"></div>
        <p className="mt-6 md:mt-8 text-gray-600 max-w-2xl mx-auto text-sm md:text-lg">
          Meet the multi-disciplinary team driving the integrated financial strategies at Aperio.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-8 md:gap-x-8 md:gap-y-16">
        {teamMembers.map((member, idx) => {
          const isSpecialPosition = member.name === 'Alex Gulabovski' || member.name === 'Serhan Aslan';
          return (
            <div 
              key={idx} 
              className="group flex flex-col h-full"
            >
              {/* Changed md:aspect-[4/5] to lg:aspect-[4/5] to keep it square on tablets */}
              <div className={`relative overflow-hidden aspect-square lg:aspect-[4/5] mb-3 md:mb-6 ${member.name === 'Alex Gulabovski' ? 'bg-white' : 'bg-gray-100'}`}>
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  referrerPolicy="no-referrer"
                  className={`w-full h-full grayscale md:group-hover:grayscale-0 md:group-hover:scale-105 transition-all duration-500 ${
                    member.name === 'Alex Gulabovski' 
                      ? 'object-contain md:object-cover object-top' 
                      : isSpecialPosition
                        ? 'object-cover object-top'
                        : 'object-cover object-center'
                  }`}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-brand/10 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-1 leading-tight">{member.name}</h3>
              <div className="mb-2 md:mb-4 min-h-[32px] md:min-h-0">
                {member.role && (
                  <p className="text-brand font-bold text-[9px] md:text-xs uppercase tracking-wider leading-tight">
                    {member.role}
                  </p>
                )}
                {member.affiliate && (
                  <p className="text-gray-400 text-[7px] md:text-[10px] uppercase tracking-tighter mt-1 leading-tight line-clamp-2 md:line-clamp-none">
                    {member.affiliate}
                  </p>
                )}
              </div>
              
              <p className="text-gray-600 text-[9px] md:text-sm leading-relaxed border-l-2 border-gray-100 pl-3 md:pl-4 italic md:group-hover:border-brand transition-colors duration-300 flex-grow">
                {member.description}
              </p>
            </div>
          );
        })}
      </div>
      
      <div className="mt-12 md:mt-20 p-6 md:p-8 border border-gray-200 bg-white rounded-lg flex flex-col md:flex-row items-center justify-between shadow-sm">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Want to work with one of our specialists?</h4>
          <p className="text-gray-600 text-sm md:text-base">Secure a dedicated slot for a strategy session via our digital scheduler.</p>
        </div>
        <Link 
          to="/#book" 
          onClick={handleScrollToBooking}
          className="bg-brand text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-red-800 transition-all shimmer-btn inline-block whitespace-nowrap text-xs md:text-sm"
        >
          Free 30-Minute Strategy Call
        </Link>
      </div>
    </div>
  );
};

export default Team;