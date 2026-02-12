import React, { useState } from 'react';

const NewsletterSection: React.FC = () => {
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
    }
  };

  return (
    <div className="bg-gray-900 py-12 md:py-20 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand opacity-5 blur-[120px] rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand opacity-5 blur-[120px] rounded-full -ml-32 -mb-32"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-4">
            <h2 className="text-brand uppercase tracking-[0.4em] font-bold text-[10px] md:text-sm mb-2 md:mb-4">Stay Informed</h2>
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-6 leading-tight">
              Aperio Review <span className="text-gray-500 font-light italic">In Your Inbox.</span>
            </h3>
            <p className="text-gray-400 text-sm md:text-base mb-0 max-w-xl">
              Monthly executive summaries of Australian financial legislation and market trends.
            </p>
          </div>
          
          <div className="lg:col-span-8 min-h-[140px] flex flex-col justify-center">
            {status === 'success' ? (
              <div className="bg-white/5 border border-brand/30 p-6 md:p-8 rounded-sm backdrop-blur-sm text-center animate-fadeIn">
                <svg className="w-10 h-10 md:w-12 md:h-12 text-brand mx-auto mb-3 md:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">Success!</h4>
                <p className="text-xs md:text-sm text-gray-400">You have been added to the Aperio Quarterly Review list.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative group w-full">
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full items-stretch">
                  <input
                    type="email"
                    name="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your professional email"
                    className="flex-grow bg-white/5 border border-white/20 px-4 py-3 md:px-6 md:py-4 text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all text-xs md:text-sm lg:text-base placeholder:text-gray-600"
                  />
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="sm:flex-initial w-full sm:w-auto bg-brand text-white px-6 py-3 md:px-10 md:py-4 font-bold uppercase tracking-widest hover:bg-red-800 transition-all shimmer-btn whitespace-nowrap disabled:opacity-50 text-[10px] md:text-xs lg:text-sm shrink-0"
                  >
                    {status === 'submitting' ? 'Processing...' : 'Join the Quarterly Review List'}
                  </button>
                </div>
                {status === 'error' && (
                  <p className="mt-3 text-red-500 text-xs font-bold uppercase tracking-widest animate-fadeIn">
                    System busy. Please try again.
                  </p>
                )}
                <p className="mt-3 md:mt-4 text-[9px] md:text-[10px] text-gray-500 uppercase tracking-widest">
                  Secure. Private. Professional. Unsubscribe at any time.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;