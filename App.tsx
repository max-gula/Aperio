import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Reviews from './components/Reviews';
import AperioIntel from './components/AperioIntel';
import NewsletterSection from './components/NewsletterSection';
import FAQ from './components/FAQ';
import BookingSection from './components/BookingSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';

// Robust scroll to top/hash helper for route changes
const ScrollToAnchor = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash === '') {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Delay slightly to ensure content is rendered
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, [pathname, hash, key]);

  return null;
};

const expertiseDetails = [
  {
    id: 'strategic-accounting',
    title: 'Strategic Accounting',
    description: 'Comprehensive financial reporting and strategic business advisory to ensure your operation is lean and profitable.',
    subpoints: ['Business Reviews', 'Cloud Systems', 'Structuring'],
    paragraph: 'Through our partnering entity Tax Matters, we provide high-level visibility into your financial performance. We don\'t just count the numbers; we make the numbers count. Strategic accounting is the bedrock of business growth, providing data-driven insights that allow for scale and profitability in an increasingly competitive Australian market.',
    partner: 'Tax Matters'
  },
  {
    id: 'tax-advisory',
    title: 'Tax Advisory',
    description: 'Expert tax planning designed to minimise liabilities and protect your wealth across complex entities.',
    subpoints: ['High-Wealth Tax', 'CGT Management', 'ATO Compliance'],
    paragraph: 'Taxation is a complex landscape requiring proactive management. Our advisory team specialises in navigating the intricacies of Australian tax law to ensure your wealth is protected. We focus on advanced Capital Gains Tax (CGT) management and sophisticated trust planning to legally minimise liabilities.',
    partner: 'Tax Matters'
  },
  {
    id: 'mortgage-broking',
    title: 'Mortgage Broking',
    description: 'Sophisticated lending solutions. Accessing over 30 lenders to find the optimal structure for your portfolio.',
    subpoints: ['Investment Loans', 'Commercial Finance', 'Debt Strategy'],
    paragraph: 'Operating under our 123 Loans brand, we provide borderless access to Australia\'s leading lenders. Our credit specialists focus on the Best Interests Duty, ensuring your debt structure aligns perfectly with your long-term wealth strategy, whether you are securing your first home or expanding a commercial portfolio.',
    partner: '123 Loans'
  },
  {
    id: 'superfunds-smsf',
    title: 'Superfunds (SMSF)',
    description: 'Specialist advisory for Self-Managed Super Funds and standard superannuation optimisation strategies.',
    subpoints: ['SMSF Compliance', 'Contribution Strategy', 'Trustee Advice'],
    paragraph: 'Take control of your retirement with a Self-Managed Super Fund. We provide the technical expertise required to manage compliance, audit, and strategic contributions. Our integrated approach ensures your SMSF is a powerful tool for building wealth through property and equity investments.',
    partner: 'Tax Matters'
  },
  {
    id: 'portfolio-review',
    title: 'Portfolio Review',
    description: 'A holistic analysis of your investment universe. We assess risk-adjusted returns and rebalance for growth.',
    subpoints: ['Asset Allocation', 'Risk Mitigation', 'Performance Audit'],
    paragraph: 'Our holistic review process audits your current asset allocation across property, shares, and cash. We identify hidden fees and underperforming assets, strategically rebalancing your portfolio to match your life stage and risk profile for optimal risk-adjusted growth.',
    partner: 'Aperio Private'
  },
  {
    id: 'wealth-protection',
    title: 'Wealth Protection',
    description: 'Bespoke risk frameworks and high-level insurance strategies designed to safeguard your family and business legacy.',
    subpoints: ['Asset Protection', 'Life & TPD Insurance', 'Business Continuity'],
    paragraph: 'Wealth creation is only half the battle; protection ensures your legacy survives the unexpected. We architect robust risk frameworks, including high-limit life insurance and business continuity plans, shielding your personal and professional assets from systemic risks.',
    partner: 'Aperio Advisory'
  },
  {
    id: 'direct-shares',
    title: 'Direct Shares',
    description: 'Managed equity exposure. Leverage our market expertise for direct share portfolios and strategic positioning.',
    subpoints: ['Equity Strategy', 'Dividend Yield', 'Market Insights'],
    paragraph: 'Access direct equity markets with professional guidance. We focus on building high-yield, high-growth share portfolios that provide transparency and control over your capital. Our thematic investment positioning is based on rigorous market cycle analysis.',
    partner: 'Aperio Private'
  },
  {
    id: 'expertise-planning',
    title: 'Estate Planning',
    description: 'Strategic structural planning for tax-effective wealth transfer and intergenerational asset protection.',
    subpoints: ['Wills & Trusts', 'Succession Planning', 'Wealth Transfer'],
    paragraph: 'Ensure your wealth reaches the next generation exactly as intended. Estate planning at Aperio involves more than just a will; we create tax-effective testamentary trusts and business succession frameworks for the seamless transfer of complex family assets.',
    partner: 'Tax Matters'
  }
];

const MAPS_URL = "https://www.google.com/maps/place/8%2F397+Smith+St,+Fitzroy+VIC+3065/data=!4m2!3m1!1s0x6ad6431f4936b529:0x22fd44b202fd143d?sa=X&ved=1t:242&ictx=111";

const ContactInfoItem: React.FC<{ label: string, value: string, icon: React.ReactNode, href?: string }> = ({ label, value, icon, href }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    if (!href) {
      navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const Content = () => (
    <>
      <p className="text-gray-900 font-medium group-hover/item:text-brand transition-colors mr-2 text-sm md:text-base leading-tight">
        {value}
      </p>
      {!href && (
        <svg className="w-3.5 h-3.5 text-gray-200 group-hover/item:text-brand/40 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
        </svg>
      )}
    </>
  );

  return (
    <div className="flex items-start group">
      <div className="flex-shrink-0 bg-brand p-2.5 rounded-sm shadow-lg shadow-brand/10">
        {icon}
      </div>
      <div className="ml-5 relative flex-grow">
        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-1 leading-none">{label}</h4>
        {href ? (
          <a 
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer inline-flex items-center group/item"
          >
            <Content />
          </a>
        ) : (
          <div 
            onClick={handleCopy}
            className="cursor-pointer inline-flex items-center group/item"
          >
            <Content />
          </div>
        )}
        <div className={`absolute left-0 -top-8 bg-brand text-white text-[10px] font-black tracking-widest px-3 py-1.5 rounded-sm shadow-xl transition-all duration-300 pointer-events-none ${copied ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-90'}`}>
          COPIED
          <div className="absolute top-full left-4 w-2 h-2 bg-brand rotate-45 -mt-1"></div>
        </div>
      </div>
    </div>
  );
};

const ExpertisePage: React.FC = () => {
  const navigate = useNavigate();

  const handleBookingClick = (e: React.MouseEvent) => {
    navigate('/#book');
  };

  return (
    <div className="pt-40 pb-40 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center mb-32">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-10 tracking-tight leading-[0.9]">
            Our Integrated <br/> <span className="text-brand italic">Expertise.</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-500 leading-relaxed font-light">
            Aperio brings together specialists in accounting, tax, and lending to provide a unified financial engine. Explore our core competencies below.
          </p>
        </div>

        <div className="space-y-48">
          {expertiseDetails.map((service, idx) => (
            <div key={service.id} id={service.id} className="max-w-4xl mx-auto text-center scroll-mt-32">
              <div className="inline-block px-6 py-2 border-l-4 border-brand bg-brand/5 mb-10">
                <span className="text-brand font-bold tracking-[0.3em] text-sm uppercase">{service.partner}</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-10 tracking-tight">
                {service.title}
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed font-normal">
                {service.paragraph}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
                {service.subpoints.map((point, pIdx) => (
                  <div key={pIdx} className="bg-red-50/20 p-8 border border-red-100/50 rounded-sm group hover:border-brand/20 hover:bg-red-50/40 transition-all duration-300">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-gray-900 transition-colors">{point}</p>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={handleBookingClick}
                className="bg-brand text-white px-12 py-5 text-lg font-bold uppercase tracking-[0.2em] hover:bg-red-800 transition-all shimmer-btn transform hover:-translate-y-1 active:scale-95"
              >
                Discuss this Strategy
              </button>
              
              {idx !== expertiseDetails.length - 1 && (
                <div className="mt-48 w-24 h-px bg-gray-200 mx-auto"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <section id="services" className="py-24 bg-white scroll-mt-24">
        <Services />
      </section>
      <section id="experts" className="py-24 bg-gray-50 scroll-mt-24">
        <Team />
      </section>
      <NewsletterSection />
      <section id="reviews" className="py-24 bg-white scroll-mt-24">
        <Reviews />
      </section>
      <section id="faq" className="scroll-mt-24">
        <FAQ />
      </section>
      <BookingSection />
      <section id="contact" className="py-16 md:py-32 bg-white border-t border-gray-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
            <div className="pt-4">
              <h2 className="text-brand uppercase tracking-[0.6em] font-bold text-[10px] md:text-xs mb-4 md:mb-6">Contact</h2>
              <p className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 mb-10 md:mb-16 leading-[1.1] tracking-tight">Reach Out to our <span className="text-brand italic font-light">Senior Advisors.</span></p>
              
              <div className="space-y-8 md:space-y-12">
                <ContactInfoItem 
                  label="FITZROY HQ" 
                  value="Suite 8, 397 Smith St, Fitzroy VIC 3065" 
                  icon={<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>}
                  href={MAPS_URL}
                />
                <ContactInfoItem 
                  label="ENQUIRY LINE" 
                  value="03 9230 1500" 
                  icon={<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>}
                />
                <ContactInfoItem 
                  label="FAX LINE" 
                  value="03 9230 1599" 
                  icon={<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>}
                />
                <ContactInfoItem 
                  label="DIRECT EMAIL" 
                  value="info@aperio.com.au" 
                  icon={<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>}
                />
                <ContactInfoItem 
                  label="INSTAGRAM" 
                  value="@aperiomoney" 
                  icon={<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2.5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="2.5"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2.5"></line></svg>}
                  href="https://www.instagram.com/aperiomoney/"
                />
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToAnchor />
        <Header isScrolled={isScrolled} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/expertise" element={<ExpertisePage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
        <AperioIntel />
      </div>
    </Router>
  );
};

export default App;