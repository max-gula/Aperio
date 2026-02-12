import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    title: "General & Integration",
    items: [
      {
        question: "Why should I use an integrated firm like Aperio instead of a separate accountant and broker?",
        answer: "Integration removes the 'silo effect.' By having our tax and lending teams working together, we ensure your loan structures are tax-efficient and your tax returns are optimised to support your future borrowing capacity."
      },
      {
        question: "Is Aperio a 'one-stop shop' for all my financial needs?",
        answer: "We specialise in the intersection of Accounting, Tax, and Mortgage Broking. This focus allows us to provide deep expertise in these areas while collaborating with your other advisors, such as financial planners or solicitors, to ensure a unified strategy."
      },
      {
        question: "Do you have a physical office, or are you fully digital?",
        answer: "We offer the best of both. We utilise secure, cloud-based technology like Xero for efficiency, but we maintain a physical presence for clients who prefer face-to-face strategic sessions."
      }
    ]
  },
  {
    title: "Accounting & Tax",
    items: [
      {
        question: "How do you charge for accounting and tax services?",
        answer: "We believe in transparency. Depending on your complexity, we offer both fixed-fee packages for ongoing compliance and value-based pricing for complex advisory projects. We provide a clear quote before any work begins."
      },
      {
        question: "Can you help me move away from my current accountant?",
        answer: "Yes. The transition is a standard professional process. Once you decide to move, we manage the 'Ethical Letter' process and the transfer of your files to ensure there is no disruption to your compliance cycle."
      },
      {
        question: "Do you specialise in certain business structures, like Trusts or SMSFs?",
        answer: "Our team is highly experienced in complex Australian structures, including Family Trusts, Unit Trusts, and SMSF borrowing. We focus on ensuring these structures remain compliant while meeting your asset protection goals."
      },
      {
        question: "How often will I hear from my accountant?",
        answer: "Communication is tailored to your needs. While we handle annual compliance, we recommend quarterly 'Strategic Health Checks' for business owners and investors to ensure no tax-planning opportunities are missed."
      }
    ]
  },
  {
    title: "Mortgage & Finance",
    items: [
      {
        question: "How do mortgage brokers get paid in Australia?",
        answer: "In most cases, we are remunerated by the lender via commissions after your loan settles. By law, these commissions must be disclosed to you, and our 'Best Interests Duty' ensures we prioritise your needs over lender incentives."
      },
      {
        question: "How many lenders do you have on your panel?",
        answer: "We have access to over 30+ lenders, ranging from the 'Big Four' banks to specialised non-bank lenders that cater to unique credit profiles or complex business structures."
      },
      {
        question: "What is 'Best Interests Duty' and how does it protect me?",
        answer: "Introduced in 2021, this is a legal obligation for mortgage brokers to act in the best interests of their clients. Unlike bank staff, who can only offer their own products, we must prove why the loan we recommend is the right fit for your specific goals."
      },
      {
        question: "Can you help with complex lending, such as commercial or development finance?",
        answer: "Yes. Our finance team handles residential, investment, and commercial lending. We are particularly adept at 'Alt-Doc' loans for self-employed clients who may not have up-to-date traditional financials."
      }
    ]
  },
  {
    title: "Trust & Compliance",
    items: [
      {
        question: "Are you licensed to provide both tax and credit advice?",
        answer: "Absolutely. We hold all required Australian registrations, including Tax Agent status and either an Australian Credit Licence (ACL) or an Authorised Representative status. We are also members of professional bodies like the CA/CPA and MFAA/FBAA."
      },
      {
        question: "How do you keep my financial data secure?",
        answer: "We use enterprise-grade, encrypted cloud storage and multi-factor authentication (MFA). We comply with the Australian Privacy Act to ensure your sensitive financial information is protected at all times."
      },
      {
        question: "What happens if I’m not happy with the service or a loan recommendation?",
        answer: "We have a formal Internal Dispute Resolution (IDR) process and are members of the Australian Financial Complaints Authority (AFCA), providing you with an independent external pathway for any concerns."
      },
      {
        question: "What is the first step to working with Aperio?",
        answer: "The process begins with a 30-minute introductory call. This is a no-obligation conversation where we listen to your goals, assess your current situation, and determine if our integrated approach is the right fit for you."
      }
    ]
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand uppercase tracking-[0.4em] font-bold text-sm mb-4">Support</h2>
          <p className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</p>
          <div className="w-20 h-1 bg-brand mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 items-start">
          {faqData.map((category, catIdx) => (
            <div key={catIdx} className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-3 uppercase tracking-widest text-sm text-brand text-center md:text-left">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.items.map((item, itemIdx) => {
                  const id = `${catIdx}-${itemIdx}`;
                  const isOpen = openIndex === id;
                  return (
                    <div 
                      key={id} 
                      className={`border border-gray-200 transition-all duration-300 rounded-sm ${isOpen ? 'bg-brand shadow-lg border-transparent' : 'bg-white hover:border-gray-300'}`}
                    >
                      <button
                        onClick={() => toggleFAQ(id)}
                        className="w-full flex items-center justify-between px-5 py-4 text-center md:text-left focus:outline-none"
                      >
                        <span className={`font-semibold pr-0 md:pr-4 leading-relaxed text-sm transition-colors duration-300 w-full ${isOpen ? 'text-white' : 'text-gray-900'}`}>
                          {item.question}
                        </span>
                        <span className={`hidden md:flex flex-shrink-0 transition-all duration-300 ${isOpen ? 'rotate-180 text-white' : 'text-gray-400'}`}>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </button>
                      <div 
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                      >
                        <div className={`px-5 pb-5 leading-relaxed text-sm transition-colors duration-300 text-center md:text-left ${isOpen ? 'text-white/90' : 'text-gray-600'}`}>
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center bg-gray-50 p-10 rounded-lg border border-gray-100 max-w-4xl mx-auto">
          <p className="text-gray-600 mb-6 font-medium">Still have questions? Our specialists are ready to provide clarity.</p>
          <Link 
            to="/#contact" 
            className="inline-block bg-brand text-white px-12 py-4 font-bold uppercase tracking-widest hover:bg-red-800 transition-all shimmer-btn text-sm"
          >
            Start a Conversation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;