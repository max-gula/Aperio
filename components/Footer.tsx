import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const MAPS_URL = "https://www.google.com/maps/place/8%2F397+Smith+St,+Fitzroy+VIC+3065/data=!4m2!3m1!1s0x6ad6431f4936b529:0x22fd44b202fd143d?sa=X&ved=1t:242&ictx=111";
const FSG_URL = "https://drive.google.com/file/d/1mqWmNncsMPB22TzS3P6dMbNlv4LytyD3/view?usp=sharing";

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || status === 'submitting') return;
    
    setStatus('submitting');
    
    const formData = new FormData();
    formData.append('Email', email);
    formData.append('Date', new Date().toLocaleString('en-AU'));

    try {
      await fetch("https://script.google.com/macros/s/AKfycbykKrb9izNU_3WI0vHLO_2kMiTrVQt97tQwzq_2F6ZCTU0KzXtI9hesR6KvqnZosf06/exec", {
        method: "POST",
        body: formData,
        mode: 'no-cors'
      });
      
      setStatus('success');
      setEmail('');
    } catch (error) {
      console.error("Subscription error:", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1">
            <div className="flex items-center mb-8">
              <Link to="/">
                <Logo className="h-12 w-auto" fill="#B41F24" />
              </Link>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Aperio is a premium multi-service practice integrating <span className="text-white font-bold">Tax Matters</span> and <span className="text-white font-bold">123 Loans</span>. We elevate wealth through data-driven advisory and borderless financial integration.
            </p>
            <div className="space-y-4 mb-6">
               <div className="flex items-center space-x-2 grayscale opacity-60">
                  <span className="text-xs font-black tracking-tighter">TAX MATTERS</span>
                  <div className="w-1 h-1 rounded-full bg-brand"></div>
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Accounting & Tax</span>
               </div>
               <div className="flex items-center space-x-2 grayscale opacity-60">
                  <span className="text-xs font-black tracking-tighter">123 LOANS</span>
                  <div className="w-1 h-1 rounded-full bg-brand"></div>
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Finance & Lending</span>
               </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-brand">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <span className="block text-white font-bold uppercase tracking-widest text-[10px] mb-1">Fitzroy Office</span>
                <a 
                  href={MAPS_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-brand transition-colors"
                >
                  Suite 8, 397 Smith St<br/>Fitzroy 3065, VIC
                </a>
              </li>
              <li>
                <span className="block text-white font-bold uppercase tracking-widest text-[10px] mb-1">Telephone</span>
                03 9230 1500
              </li>
              <li>
                <span className="block text-white font-bold uppercase tracking-widest text-[10px] mb-1">Email</span>
                info@aperio.com.au
              </li>
              <li>
                <span className="flex items-center text-white font-bold uppercase tracking-widest text-[10px] mb-1">
                  Instagram
                  <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2.5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="2.5"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2.5"></line>
                  </svg>
                </span>
                <a 
                  href="https://www.instagram.com/aperiomoney/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-brand transition-colors block"
                >
                  @aperiomoney
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-brand">Expertise</h4>
            <ul className="space-y-3 text-sm text-white">
              <li><Link to="/expertise#strategic-accounting" className="hover:text-brand transition-colors">Strategic Accounting</Link></li>
              <li><Link to="/expertise#tax-advisory" className="hover:text-brand transition-colors">Tax Advisory</Link></li>
              <li><Link to="/expertise#mortgage-broking" className="hover:text-brand transition-colors">Mortgage Broking</Link></li>
              <li><Link to="/expertise#superfunds-smsf" className="hover:text-brand transition-colors">Superfunds (SMSF)</Link></li>
              <li><Link to="/expertise#portfolio-review" className="hover:text-brand transition-colors">Portfolio Review</Link></li>
              <li><Link to="/expertise#wealth-protection" className="hover:text-brand transition-colors">Wealth Protection</Link></li>
              <li><Link to="/expertise#direct-shares" className="hover:text-brand transition-colors">Direct Shares</Link></li>
              <li><Link to="/expertise#expertise-planning" className="hover:text-brand transition-colors">Estate Planning</Link></li>
            </ul>
          </div>
        </div>

        {/* Long Bar Newsletter Section */}
        <div className="border-t border-gray-800 py-12 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Newsletter</h4>
              <p className="text-xs text-gray-400 leading-relaxed">Monthly insights on Australian financial legislation and market trends.</p>
            </div>
            
            <div className="lg:col-span-8">
              {status === 'success' ? (
                <div className="bg-white/5 border border-brand/30 p-4 rounded-sm animate-fadeIn text-center">
                  <p className="text-[10px] md:text-xs text-gray-200 leading-relaxed font-medium">
                    Success. You have been added to the Aperio Quarterly Review list.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0">
                  <input 
                    type="email" 
                    name="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address" 
                    className="bg-gray-800 border-none px-6 py-4 text-sm flex-grow focus:ring-1 focus:ring-brand text-white placeholder:text-gray-500"
                  />
                  <button 
                    type="submit"
                    disabled={status === 'submitting'}
                    className="bg-brand px-10 py-4 hover:bg-red-800 transition-colors disabled:opacity-50 font-bold uppercase tracking-widest text-xs shimmer-btn" 
                    aria-label="Subscribe"
                  >
                    {status === 'submitting' ? 'Processing...' : 'Join Review List'}
                  </button>
                </form>
              )}
              {status === 'error' && (
                <p className="mt-2 text-red-500 text-[10px] font-bold uppercase tracking-widest animate-fadeIn">
                  System busy. Please try again.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Legal & Copyright Block - Optimized for Mobile FAB spacing */}
        <div className="border-t border-gray-800 pt-8 flex flex-col items-start space-y-4 max-w-[75%] md:max-w-none">
          <div className="flex space-x-8 text-[10px] text-gray-500 uppercase tracking-[0.2em] relative z-20 font-bold">
            <Link to="/privacy" className="hover:text-white transition-colors cursor-pointer py-1">Privacy Policy</Link>
            <a href={FSG_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors py-1">FSG</a>
          </div>
          <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em] leading-relaxed">
            © 2026 Aperio Financial Services Pty Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;