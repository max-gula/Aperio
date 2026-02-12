
import React, { useState, useRef, useEffect } from 'react';

const countries = [
  { code: '+61', label: 'AU', name: 'Australia', flag: '🇦🇺' },
  { code: '+64', label: 'NZ', name: 'New Zealand', flag: '🇳🇿' },
  { code: '+44', label: 'UK', name: 'United Kingdom', flag: '🇬🇧' },
  { code: '+1', label: 'US', name: 'United States', flag: '🇺🇸' },
  { code: '+65', label: 'SG', name: 'Singapore', flag: '🇸🇬' },
  { code: '+852', label: 'HK', name: 'Hong Kong', flag: '🇭🇰' },
  { code: '+971', label: 'AE', name: 'UAE', flag: '🇦🇪' },
  { code: '+353', label: 'IE', name: 'Ireland', flag: '🇮🇪' },
];

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phone, setPhone] = useState(countries[0].code + ' ');
  const [showSelector, setShowSelector] = useState(false);
  const selectorRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectorRef.current && !selectorRef.current.contains(event.target as Node)) {
        setShowSelector(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    const prefix = selectedCountry.code + ' ';
    
    // Ensure the current country code + space is always at the start
    if (!val.startsWith(prefix)) {
      // If user deleted part of the prefix, restore it
      val = prefix + val.replace(/^\+?\d*/, '').trim();
    }
    
    setPhone(val);
  };

  const selectCountry = (country: typeof countries[0]) => {
    const currentNumber = phone.replace(selectedCountry.code, '').trim();
    setSelectedCountry(country);
    setPhone(country.code + ' ' + currentNumber);
    setShowSelector(false);
    // Refocus the input for a better user experience
    inputRef.current?.focus();
  };

  const handleBookingScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('book');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'submitting') return;

    setStatus('submitting');
    const formData = new FormData(e.currentTarget);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await response.json();
      if (result.success) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white p-8 md:p-12 rounded-lg border border-gray-100 shadow-2xl text-center animate-fadeIn flex flex-col justify-center min-h-[500px]">
        <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Enquiry Sent.</h3>
        <p className="text-gray-500 max-w-sm mx-auto leading-relaxed text-sm">
          Our senior advisors will contact you shortly.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-8 text-brand font-bold uppercase tracking-widest text-[10px] hover:text-red-800 transition-colors"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 md:p-10 rounded-lg border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-8 gap-4">
        <h3 className="text-2xl font-bold text-gray-900 tracking-tight">General Enquiry</h3>
        <button 
          onClick={handleBookingScroll}
          className="text-brand font-bold uppercase tracking-widest text-[9px] hover:opacity-70 transition-opacity"
        >
          OR BOOK CALL DIRECTLY &rarr;
        </button>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <input type="hidden" name="access_key" value="283f9fbc-1ac5-4139-9624-b42b3ea69aef" />
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 px-1">Full Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="John Doe"
              className="w-full px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all text-sm placeholder:text-gray-300"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 px-1">Email Address</label>
            <input
              type="email"
              name="email"
              required
              placeholder="john@example.com"
              className="w-full px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all text-sm placeholder:text-gray-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 px-1">Phone</label>
            <div className="relative flex group/phone" ref={selectorRef}>
              <button
                type="button"
                onClick={() => setShowSelector(!showSelector)}
                className="flex items-center justify-center px-4 py-3 bg-gray-50 border border-r-0 border-gray-200 rounded-l-lg hover:bg-gray-100 transition-colors shrink-0 min-w-[60px]"
                aria-label="Select Country"
              >
                <span className="text-xl leading-none">{selectedCountry.flag}</span>
                <svg className={`ml-2 w-3 h-3 text-gray-400 transition-transform ${showSelector ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <input
                ref={inputRef}
                type="tel"
                name="phone"
                required
                value={phone}
                onChange={handlePhoneChange}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-r-lg focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all text-sm font-medium"
              />

              {showSelector && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-2xl z-[80] animate-fadeIn max-h-60 overflow-y-auto overflow-x-hidden">
                  <div className="p-3 bg-gray-50 border-b border-gray-100 text-[9px] font-black uppercase tracking-widest text-gray-400">
                    Select Region
                  </div>
                  {countries.map((c) => (
                    <button
                      key={c.label}
                      type="button"
                      onClick={() => selectCountry(c)}
                      className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors text-left group/item"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-xl">{c.flag}</span>
                        <span className="text-xs font-bold text-gray-900">{c.name}</span>
                      </div>
                      <span className={`text-[10px] font-bold ${selectedCountry.code === c.code ? 'text-brand' : 'text-gray-400 group-hover/item:text-brand transition-colors'}`}>
                        {c.code}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 px-1">Primary Interest</label>
            <div className="relative">
              <select
                name="interest"
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all text-sm appearance-none cursor-pointer"
              >
                <option>Strategic Accounting</option>
                <option>Tax Advisory</option>
                <option>Mortgage Broking</option>
                <option>SMSF (Superfunds)</option>
                <option>Portfolio Review</option>
                <option>Wealth Protection</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 px-1">Message</label>
          <textarea
            name="message"
            required
            rows={4}
            placeholder="Tell us about your goals..."
            className="w-full px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all text-sm resize-none placeholder:text-gray-300"
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full bg-brand text-white py-5 font-bold uppercase tracking-[0.2em] hover:bg-red-800 transition-all shimmer-btn disabled:opacity-50 text-xs md:text-sm"
        >
          {status === 'submitting' ? 'SENDING...' : 'SEND ENQUIRY'}
        </button>
        
        {status === 'error' && (
          <p className="text-red-500 text-center text-[10px] font-bold uppercase tracking-widest mt-2 animate-fadeIn">
            Submission failed. Please try again.
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
