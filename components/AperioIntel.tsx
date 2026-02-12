import React, { useState, useRef, useEffect } from 'react';
import { getAperioInsights } from '../services/geminiService';
import { ChatMessage } from '../types';

const AperioAI: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      role: 'assistant', 
      content: 'Welcome to Aperio AI. I am your strategic concierge for integrated accounting, tax advisory, and lending solutions.\n\nI can assist you in identifying structural friction within your portfolio and help optimise your financial position for long-term growth. How can I assist you today?' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && chatContainerRef.current && !chatContainerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-aperio-ai', handleOpen);
    return () => window.removeEventListener('open-aperio-ai', handleOpen);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await getAperioInsights(messages, currentInput);
      setMessages(prev => [...prev, { role: 'assistant', content: responseText }]);
    } catch (error) {
      console.error("Aperio AI UI Error:", error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "Aperio AI is currently in maintenance mode. Please contact our Fitzroy office directly at 03 9230 1500 for immediate assistance." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCtaClick = () => {
    const element = document.getElementById('book');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const renderMessageContent = (content: string) => {
    const parts = content.split('[NEXTSTEP]');
    const mainText = parts[0];
    const ctaText = parts[1];

    if (!ctaText) {
      return <p className="text-xs md:text-sm leading-relaxed whitespace-pre-wrap text-gray-700">{mainText.trim()}</p>;
    }

    const ctaParts = ctaText.trim().split('. ');
    const line1 = ctaParts[0] + '.';
    const line2Full = ctaParts[1] || "";
    const linkText = "Book your 30-minute free intro call";
    const line2Parts = line2Full.split(linkText);

    return (
      <div className="space-y-4">
        <p className="text-xs md:text-sm leading-relaxed whitespace-pre-wrap text-gray-700">{mainText.trim()}</p>
        
        <div className="pt-5 border-t border-gray-100">
          <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] text-gray-400 mb-3">Next Step</p>
          <div className="space-y-1">
            <p className="text-xs md:text-sm text-gray-800 font-medium">{line1}</p>
            <p className="text-xs md:text-sm text-gray-800 leading-relaxed">
              {line2Parts[0]}
              <button 
                onClick={handleCtaClick}
                className="fab-btn text-[#B41F24] font-bold underline decoration-2 underline-offset-4 hover:opacity-80 transition-opacity p-0 border-none bg-transparent inline-block text-left"
              >
                {linkText}
              </button>
              {line2Parts[1]}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {!isOpen && (
        <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[60] flex flex-col items-end space-y-3 animate-fadeIn pointer-events-none">
          {/* Teaser Speech Bubble */}
          <div 
            onClick={() => setIsOpen(true)}
            className={`relative cursor-pointer transition-all duration-500 group mb-2 animate-living-bounce pointer-events-auto ${hasScrolled ? 'md:opacity-100 opacity-0 md:translate-y-0 translate-y-10 scale-90 md:scale-100' : 'opacity-100 translate-y-0 scale-100'}`}
            style={{ transformOrigin: 'bottom right' }}
          >
            <div className="bg-white border-2 border-[#B41F24] p-2.5 md:p-4 rounded-xl shadow-2xl max-w-[170px] md:max-w-[280px] relative z-20 text-center md:text-left">
              <p className="text-[9px] md:text-xs font-bold text-gray-800 leading-tight">
                Engineered for financial clarity.<br/>
                <span className="text-[#B41F24] whitespace-nowrap">Ask Aperio ai here...</span>
              </p>
            </div>
            <div className="absolute top-full -mt-[2px] right-4 md:right-5 w-5 h-3 md:w-6 md:h-4 z-30">
              <div className="absolute inset-0 bg-[#B41F24]" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)' }} />
              <div className="absolute inset-x-[2px] -top-[2px] bottom-[2px] bg-white" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)' }} />
            </div>
          </div>

          <div 
            role="button"
            tabIndex={0}
            onClick={() => setIsOpen(true)}
            onKeyDown={(e) => e.key === 'Enter' && setIsOpen(true)}
            className="fab-btn flex items-center justify-center bg-[#B41F24] rounded-full hover:scale-110 active:scale-95 transition-all duration-300 group pointer-events-auto p-0 border-none shrink-0 shimmer-btn"
            style={{ 
              width: '48px', 
              height: '48px', 
              minWidth: '48px', 
              minHeight: '48px',
              maxWidth: '48px',
              maxHeight: '48px'
            }}
          >
            <svg className="w-7 h-7 text-white transition-transform duration-500 group-hover:scale-110 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2m-6 4h12a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 012-2z" />
              <circle cx="9" cy="12" r="1" fill="currentColor" />
              <circle cx="15" cy="12" r="1" fill="currentColor" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 16h6" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2 11v2m20-2v2" />
            </svg>
          </div>
        </div>
      )}

      {isOpen && (
        <div 
          ref={chatContainerRef}
          className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[70] w-[calc(100vw-2rem)] md:w-[420px] bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden border border-gray-100 animate-slideUp"
        >
          <div className="bg-[#B41F24] px-5 py-4 flex items-center justify-between cursor-pointer" onClick={() => setIsOpen(false)}>
            <div className="flex items-center space-x-3">
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white font-bold tracking-widest uppercase text-[11px]">Aperio AI</span>
            </div>
            <button onClick={(e) => { e.stopPropagation(); setIsOpen(false); }} className="fab-btn text-white hover:text-white/80 transition-colors p-2 bg-transparent border-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div ref={scrollRef} className="h-[350px] md:h-[450px] overflow-y-auto p-5 md:p-6 space-y-6 bg-gray-50/50 scroll-smooth">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] rounded-2xl px-4 py-3 md:px-5 md:py-4 ${
                  msg.role === 'user' 
                  ? 'bg-[#B41F24] text-white rounded-br-none shadow-md' 
                  : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-none'
                }`}>
                  {msg.role === 'user' ? (
                    <p className="text-xs md:text-sm leading-relaxed">{msg.content}</p>
                  ) : (
                    renderMessageContent(msg.content)
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-none px-5 py-4 shadow-sm">
                  <div className="flex space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#B41F24]/30 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-[#B41F24]/30 rounded-full animate-bounce delay-100"></div>
                    <div className="w-1.5 h-1.5 bg-[#B41F24]/30 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-gray-100 bg-white">
            <div className="flex space-x-2 md:space-x-3">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask Aperio AI.."
                className="flex-grow px-3 py-2 md:px-4 md:py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B41F24] focus:bg-white transition-all text-sm"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="fab-btn bg-[#B41F24] text-white px-4 py-2 md:px-5 md:py-3 rounded-lg font-bold uppercase tracking-widest hover:bg-red-800 transition-all shimmer-btn disabled:opacity-50 flex items-center shrink-0 w-auto border-none"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
            <div className="flex justify-between items-center mt-3 px-1">
              <p className="text-[8px] text-gray-400 uppercase tracking-[0.3em] font-black">APERIO AI ENGINE V3.0</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AperioAI;