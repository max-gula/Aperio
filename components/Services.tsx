import React from 'react';
import { Link } from 'react-router-dom';

const allServices = [
  {
    id: 'strategic-accounting',
    title: 'Strategic Accounting',
    description: 'Reporting and advisory to ensure your operation is lean and profitable.',
    icon: (
      <svg className="w-5 h-5 md:w-8 md:h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    features: ['Business Reviews', 'Cloud Systems', 'Structuring']
  },
  {
    id: 'tax-advisory',
    title: 'Tax Advisory',
    description: 'Expert planning to minimise liabilities and protect wealth across entities.',
    icon: (
      <svg className="w-5 h-5 md:w-8 md:h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    features: ['High-Wealth Tax', 'CGT Management', 'ATO Compliance']
  },
  {
    id: 'mortgage-broking',
    title: 'Mortgage Broking',
    description: 'Sophisticated lending. Accessing 30+ lenders for optimal portfolio structure.',
    icon: (
      <svg className="w-5 h-5 md:w-8 md:h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    features: ['Investment Loans', 'Commercial Finance', 'Debt Strategy']
  },
  {
    id: 'superfunds-smsf',
    title: 'Superfunds (SMSF)',
    description: 'Specialist SMSF advisory and superannuation optimisation strategies.',
    icon: (
      <svg className="w-5 h-5 md:w-8 md:h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    features: ['SMSF Compliance', 'Contribution Strategy', 'Trustee Advice']
  },
  {
    id: 'portfolio-review',
    title: 'Portfolio Review',
    description: 'Holistic analysis. We assess risk-adjusted returns and rebalance for growth.',
    icon: (
      <svg className="w-5 h-5 md:w-8 md:h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    features: ['Asset Allocation', 'Risk Mitigation', 'Performance Audit']
  },
  {
    id: 'wealth-protection',
    title: 'Wealth Protection',
    description: 'Risk frameworks designed to safeguard family and business legacy.',
    icon: (
      <svg className="w-5 h-5 md:w-8 md:h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    features: ['Asset Protection', 'Life & TPD Insurance', 'Business Continuity']
  },
  {
    id: 'direct-shares',
    title: 'Direct Shares',
    description: 'Managed equity. Leverage market expertise for strategic share positioning.',
    icon: (
      <svg className="w-5 h-5 md:w-8 md:h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    features: ['Equity Strategy', 'Dividend Yield', 'Market Insights']
  },
  {
    id: 'estate-planning',
    title: 'Estate Planning',
    description: 'Structural planning for tax-effective wealth transfer and asset protection.',
    icon: (
      <svg className="w-5 h-5 md:w-8 md:h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    features: ['Wills & Trusts', 'Succession Planning', 'Wealth Transfer']
  }
];

const ServiceCard: React.FC<{ service: any }> = ({ service }) => (
  <Link 
    to={`/expertise#${service.id}`}
    className="group p-3 md:p-8 bg-gray-50 hover:bg-white border border-gray-100 hover:border-brand/20 hover:shadow-2xl transition-all duration-300 flex flex-col h-full cursor-pointer"
  >
    <div className="mb-3 md:mb-6 transform group-hover:scale-110 transition-transform duration-300">
      {service.icon}
    </div>
    <h3 className="text-[10px] md:text-xl font-bold text-gray-900 mb-1.5 md:mb-3 leading-tight tracking-tight uppercase md:normal-case h-6 md:h-auto flex items-center">
      {service.title}
    </h3>
    <p className="text-gray-600 text-[8.5px] md:text-sm mb-3 md:mb-6 leading-normal md:leading-relaxed h-10 md:h-20 line-clamp-3 md:line-clamp-none">
      {service.description}
    </p>
    
    {/* Hide features on mobile for compact pairs formation */}
    <ul className="hidden md:block space-y-1.5 md:space-y-2 mb-4 md:mb-8 flex-grow">
      {service.features.map((feature: string, fIdx: number) => (
        <li key={fIdx} className="flex items-center text-xs font-medium text-gray-500">
          <svg className="w-3 h-3 text-brand mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span className="truncate">{feature}</span>
        </li>
      ))}
    </ul>
    
    <div className="pt-2.5 md:pt-6 border-t border-gray-100 mt-auto">
      <span className="text-brand font-bold text-[8px] md:text-xs uppercase tracking-[0.1em] md:tracking-widest group-hover:text-red-800 transition-colors flex items-center">
        <span className="truncate">Strategy</span>
        <svg className="w-2 h-2 md:w-3 md:h-3 ml-1 md:ml-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </div>
  </Link>
);

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10 md:mb-24">
        <h2 className="text-brand uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold text-[10px] md:text-sm mb-2 md:mb-4">Core Competencies</h2>
        <p className="text-xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-6 leading-tight">Integrated Financial Excellence</p>
        <div className="w-10 md:w-20 h-1 bg-brand mx-auto"></div>
        <p className="mt-5 md:mt-8 text-gray-600 max-w-2xl mx-auto text-[13px] md:text-lg">
          Synchronised expertise across accounting, tax, and lending to ensure your financial structures are robust.
        </p>
      </div>

      {/* grid-cols-2 base for mobile, md:grid-cols-2, lg:grid-cols-4 for desktop */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
        {allServices.map((service, idx) => (
          <ServiceCard key={idx} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;