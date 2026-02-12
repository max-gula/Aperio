import React from 'react';

const AperioAiSection: React.FC = () => {
  const handleLaunchAi = () => {
    // Trigger the global event that the floating widget listens to
    window.dispatchEvent(new CustomEvent('open-aperio-ai'));
  };

  return (
    <section id="ai-intelligence" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900 rounded-[2rem] overflow-hidden relative shadow-2xl border border-white/5">
          {/* Decorative accents */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#B41F24]/10 blur-[100px] -mr-48 -mt-48 rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B41F24]/5 blur-[100px] -ml-48 -mb-48 rounded-full"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center">
            {/* Left Content */}
            <div className="p-10 lg:p-20 lg:w-3/5">
              <div className="flex items-center space-x-3 mb-8">
                <span className="w-10 h-[2px] bg-[#B41F24]"></span>
                <span className="text-[#B41F24] font-bold uppercase tracking-[0.4em] text-[10px]">Proprietary Technology</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.1]">
                Aperio <span className="text-[#B41F24] italic">Intelligence.</span> <br/>
                <span className="text-gray-500 font-light">Financial Logic, Redefined.</span>
              </h2>
              
              <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
                Experience the intersection of high-wealth strategy and neural reasoning. Our AI Concierge provides immediate, high-level structural analysis—distilling complex tax and lending laws into clear, actionable insights for the modern investor.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                <div className="flex items-center space-x-3 text-gray-300 bg-white/5 border border-white/10 p-4 rounded-xl transition-colors hover:bg-white/10">
                  <div className="w-2 h-2 rounded-full bg-[#B41F24] animate-pulse"></div>
                  <span className="text-sm font-medium tracking-wide">Real-time Tax Guidance</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 bg-white/5 border border-white/10 p-4 rounded-xl transition-colors hover:bg-white/10">
                  <div className="w-2 h-2 rounded-full bg-[#B41F24] animate-pulse"></div>
                  <span className="text-sm font-medium tracking-wide">Lending Logic Analysis</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 bg-white/5 border border-white/10 p-4 rounded-xl transition-colors hover:bg-white/10">
                  <div className="w-2 h-2 rounded-full bg-[#B41F24] animate-pulse"></div>
                  <span className="text-sm font-medium tracking-wide">Lead Portfolio Structuring</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 bg-white/5 border border-white/10 p-4 rounded-xl transition-colors hover:bg-white/10">
                  <div className="w-2 h-2 rounded-full bg-[#B41F24] animate-pulse"></div>
                  <span className="text-sm font-medium tracking-wide">Integrity Risk Auditing</span>
                </div>
              </div>

              <button 
                onClick={handleLaunchAi}
                className="group relative inline-flex items-center justify-center px-12 py-5 font-bold text-white transition-all duration-300 bg-[#B41F24] hover:bg-red-800 shimmer-btn rounded-sm w-full sm:w-auto"
              >
                <span className="relative z-10 uppercase tracking-[0.2em] text-sm">Launch AI Concierge</span>
                <div className="absolute inset-0 bg-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>

            {/* Right Visual */}
            <div className="lg:w-2/5 w-full bg-black/20 p-12 lg:p-0 flex items-center justify-center relative min-h-[450px]">
              <div className="relative">
                {/* Robot Logo stylized large */}
                <div className="w-48 h-48 lg:w-72 lg:h-72 text-[#B41F24]/10 absolute -inset-10 animate-pulse scale-110">
                   <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2v2m-6 4h12a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 012-2zM9 12a1 1 0 100 2 1 1 0 000-2zm6 0a1 1 0 100 2 1 1 0 000-2zM9 16h6M2 11v2m20-2v2"/></svg>
                </div>
                
                <div className="w-48 h-48 lg:w-72 lg:h-72 text-[#B41F24] relative z-10 drop-shadow-[0_0_60px_rgba(180,31,22,0.4)]">
                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2m-6 4h12a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 012-2z" />
                      <circle cx="9" cy="12" r="1" fill="currentColor" />
                      <circle cx="15" cy="12" r="1" fill="currentColor" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 16h6" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2 11v2m20-2v2" />
                   </svg>
                </div>
                
                {/* Orbital Rings */}
                <div className="absolute inset-0 border-[1.5px] border-[#B41F24]/20 rounded-full animate-[spin_12s_linear_infinite] scale-[1.6]"></div>
                <div className="absolute inset-0 border-[1px] border-white/5 rounded-full animate-[spin_20s_linear_infinite_reverse] scale-[1.9]"></div>
                <div className="absolute inset-0 border-[0.5px] border-[#B41F24]/30 rounded-full animate-[spin_15s_linear_infinite] scale-[2.2]"></div>
              </div>
              
              {/* Bottom tag */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
                <span className="text-[10px] text-gray-600 uppercase tracking-[0.5em] font-black">APERIO AI ENGINE V3.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AperioAiSection;