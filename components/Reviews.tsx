import React, { useState, useEffect, useCallback, useRef } from 'react';
import { getLiveGoogleRating } from '../services/geminiService';

const reviews = [
  {
    name: 'Sarah',
    date: '3 months ago',
    rating: 5,
    text: "Clear, transparent professionals. Thank you for your guidance with my parents centrelink and retirement needs, assistance with my home loans and my superannuation, i'll be recommending more family and friends your way.",
    initial: 'S',
    color: 'bg-red-700'
  },
  {
    name: 'Ben',
    date: '10 months ago',
    rating: 5,
    text: 'Serhan is a professional in handling my financial matters. He has help me and my wife to prepare for retirement, along with proper management of my investment portfolio. Thank you for your help mate! Highly recommended.',
    initial: 'B',
    color: 'bg-gray-700'
  },
  {
    name: 'Max',
    date: '10 months ago',
    rating: 5,
    text: 'Outstanding experience with Aperio. Their team is professional, knowledgeable, and genuinely committed to helping clients achieve financial clarity. From tailored advice to seamless tax planning, everything was handled with precision. Highly recommend!',
    initial: 'M',
    color: 'bg-brand'
  },
  {
    name: 'Alan',
    date: '5 days ago',
    rating: 5,
    text: "Great experience with Aperio setting up my Xero account and handling taxation solutions. The team were professional and clear, and Vijay was awesome. My business is good to go.",
    initial: 'A',
    color: 'bg-red-900'
  },
  {
    name: 'James',
    date: '2 months ago',
    rating: 5,
    text: "Alex's vision for integrated wealth management is second to none. The team helped me navigate a complex corporate restructure with ease. Pure professionalism and technical dominance.",
    initial: 'J',
    color: 'bg-stone-800'
  },
  {
    name: 'Alev',
    date: '2 months ago',
    rating: 5,
    text: "Great team of professionals at Aperio. They have done wonders for me in advising how best to manage my investments and build for the future. I recommend the Aperio team to anybody who needs honest and no nonsense advice.",
    initial: 'A',
    color: 'bg-emerald-800'
  },
  {
    name: 'Daniel Di Vito',
    date: '10 months ago',
    rating: 5,
    text: "Serhan and the Aperio crew are absolute experts. They helped us secure our dream home and multiple high-performing investment properties (inside and out of super). Professional, business-savvy, and community-minded, we wouldn’t trust anyone else with our family's future.",
    initial: 'D',
    color: 'bg-slate-900'
  },
  {
    name: 'Roma De Lange',
    date: '10 months ago',
    rating: 5,
    text: "Serhan and his team have been a blessing to my business and investment goals. He set up our family trust and manages all our business and home loans. Knowledgeable, contactable, and puts our minds at ease. We highly recommend them to everyone.",
    initial: 'R',
    color: 'bg-rose-900'
  }
];

// Prepend and append reviews for seamless "peeking" loop
const CLONE_COUNT = 3;
const displayReviews = [
  ...reviews.slice(-CLONE_COUNT),
  ...reviews,
  ...reviews.slice(0, CLONE_COUNT)
];

const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(CLONE_COUNT);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [itemsToShow, setItemsToShow] = useState(3);
  // Synchronized initial state with geminiService fallback (4.6 and 17 reviews)
  const [liveStats, setLiveStats] = useState({ rating: '4.6', count: '17', sources: [] as any[] });
  const [isVerifying, setIsVerifying] = useState(true);
  const [isAutoPaused, setIsAutoPaused] = useState(false);
  
  const pauseTimeoutRef = useRef<any>(null);
  const touchStartX = useRef<number | null>(null);
  const googleReviewUrl = "https://www.google.com/search?q=Aperio+Financial+Services+Pty+Ltd&rlz=1C1RXQR_enAU1124AU1124&oq=Aperio+Financial+Services+Pty+Ltd&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDIxMTdqMGoxqAIAsAIB&sourceid=chrome&ie=UTF-8#lrd=0x6ad65d36caacca37:0xc4b5fdf815d390e7,3,,,,";

  useEffect(() => {
    const fetchLive = async () => {
      const stats = await getLiveGoogleRating();
      setLiveStats(stats);
      setIsVerifying(false);
    };
    fetchLive();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(window.innerWidth < 768 ? 1 : 3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => prev - 1);
  }, []);

  const triggerManualPause = useCallback(() => {
    setIsAutoPaused(true);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => {
      setIsAutoPaused(false);
    }, 6000); 
  }, []);

  useEffect(() => {
    if (currentIndex >= reviews.length + CLONE_COUNT) {
      const timer = setTimeout(() => {
        setIsTransitionEnabled(false);
        setCurrentIndex(CLONE_COUNT);
      }, 500);
      return () => clearTimeout(timer);
    }
    if (currentIndex < CLONE_COUNT) {
      const timer = setTimeout(() => {
        setIsTransitionEnabled(false);
        setCurrentIndex(reviews.length + CLONE_COUNT - 1);
      }, 500);
      return () => clearTimeout(timer);
    }
    if (!isTransitionEnabled) {
      const timer = setTimeout(() => setIsTransitionEnabled(true), 50);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, isTransitionEnabled]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    triggerManualPause();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) { 
      if (diff > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  };

  const handleCardClick = (idx: number) => {
    if (window.innerWidth >= 768) return; // Only for mobile
    triggerManualPause();
    if (idx > currentIndex) {
      handleNext();
    } else if (idx < currentIndex) {
      handlePrev();
    }
  };

  useEffect(() => {
    if (isAutoPaused) return;
    const timer = setTimeout(handleNext, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex, handleNext, isAutoPaused]);

  // Precise Mobile Centering
  const isMobile = itemsToShow === 1;
  const mobileCardWidth = 60; 
  const mobileOffset = 20; 
  
  const translateX = isMobile 
    ? `translateX(calc(${mobileOffset}vw - ${currentIndex * mobileCardWidth}vw))` 
    : `translateX(-${currentIndex * (100 / itemsToShow)}%)`;

  return (
    <div className="max-w-7xl mx-auto !px-0 md:!px-8 overflow-x-hidden md:overflow-visible">
      {/* Testimonials Header */}
      <div className="px-6 md:px-0 flex flex-col md:flex-row md:items-end justify-between mb-6 md:mb-12">
        <div>
          <div className="flex items-center space-x-2 md:space-x-3 mb-1.5 md:mb-4">
            <h2 className="text-brand uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold text-[9px] md:text-sm">Testimonials</h2>
            <div className="flex items-center space-x-1 bg-green-500/10 px-1.5 md:px-2 py-0.5 rounded-full">
              <span className={`relative flex h-1.5 w-1.5 md:h-2 md:w-2 ${isVerifying ? 'opacity-40' : 'opacity-100'}`}>
                {!isVerifying && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>}
                <span className={`relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 ${isVerifying ? 'bg-gray-400 animate-pulse' : 'bg-green-500'}`}></span>
              </span>
              <span className={`text-[7px] md:text-[9px] font-black uppercase tracking-widest transition-colors duration-500 ${isVerifying ? 'text-gray-400' : 'text-green-600'}`}>
                {isVerifying ? 'LIVE...' : 'LIVE VERIFIED'}
              </span>
            </div>
          </div>
          <p className="text-xl md:text-4xl font-bold text-gray-900 mb-0.5 md:mb-2 leading-none">Google Reviews</p>
          <div className="flex items-center space-x-2 h-5 md:h-8">
            {isVerifying ? (
              <div className="w-8 h-3.5 md:w-10 md:h-6 bg-gray-100 rounded animate-pulse"></div>
            ) : (
              <>
                <span className="text-base md:text-2xl font-bold text-gray-900">{liveStats.rating}</span>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 md:w-5 md:h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <span className="text-gray-500 text-[9px] md:text-sm">({liveStats.count})</span>
              </>
            )}
          </div>
        </div>
        <div className="mt-3 md:mt-0 flex items-center justify-between md:justify-end md:space-x-8">
          <div className="hidden lg:flex space-x-1 items-center">
            {reviews.map((_, i) => (
              <div 
                key={i} 
                className={`h-1 transition-all duration-500 ${((currentIndex - CLONE_COUNT) % reviews.length + reviews.length) % reviews.length === i ? 'w-8 bg-brand' : 'w-2 bg-gray-200'}`}
              ></div>
            ))}
          </div>
          <a href={googleReviewUrl} target="_blank" rel="noopener noreferrer" className="border border-gray-300 px-3 md:px-8 py-1.5 md:py-3 rounded-full hover:bg-gray-50 transition-colors">
            <span className="font-bold text-[8px] md:text-sm uppercase tracking-widest">Write a review</span>
          </a>
        </div>
      </div>

      <div className="relative">
        {/* Navigation Arrows - Hidden on Mobile, Visible on Desktop */}
        <button 
          onClick={handlePrev} 
          className="hidden md:flex nav-btn absolute md:-left-6 top-1/2 -translate-y-1/2 z-30 md:p-4 bg-white border border-gray-200 rounded-full shadow-xl text-gray-400 hover:text-brand hover:border-brand transition-all items-center justify-center md:w-14 md:h-14 focus:outline-none active:scale-90"
          aria-label="Previous review"
        >
          <svg className="md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button 
          onClick={handleNext} 
          className="hidden md:flex nav-btn absolute md:-right-6 top-1/2 -translate-y-1/2 z-30 md:p-4 bg-white border border-gray-200 rounded-full shadow-xl text-gray-400 hover:text-brand hover:border-brand transition-all items-center justify-center md:w-14 md:h-14 focus:outline-none active:scale-90"
          aria-label="Next review"
        >
          <svg className="md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
        </button>

        <div 
          className="relative overflow-visible md:overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className={`flex transition-transform ${isTransitionEnabled ? 'duration-500 cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'duration-0'}`}
            style={{ transform: translateX }}
          >
            {displayReviews.map((review, idx) => {
              const isCenter = idx === currentIndex;
              return (
                <div 
                  key={idx} 
                  onClick={() => handleCardClick(idx)}
                  className={`flex-shrink-0 transition-all duration-700 ${isMobile ? 'w-[60vw] min-w-[60vw] px-1 cursor-pointer active:scale-95' : 'w-1/3 px-4'}`}
                  style={{ 
                    transform: isMobile ? (isCenter ? 'scale(1)' : 'scale(0.85) translateZ(0)') : 'none',
                    opacity: isMobile ? (isCenter ? 1 : 0.4) : 1,
                    filter: isMobile && !isCenter ? 'blur(1.2px)' : 'none'
                  }}
                >
                  <div className="bg-white p-5 md:p-8 border border-gray-100 shadow-xl md:shadow-sm hover:shadow-md transition-shadow flex flex-col h-full rounded-sm focus:outline-none">
                    <div className="flex items-center space-x-3 md:space-x-4 mb-3 md:mb-4">
                      <div className={`w-9 h-9 md:w-12 md:h-12 rounded-full ${review.color} flex items-center justify-center text-white font-bold text-xs md:text-lg shrink-0`}>
                        {review.initial}
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-bold text-gray-900 leading-none mb-1.5 text-[13px] md:text-base truncate">{review.name}</h4>
                        <p className="text-[9px] md:text-xs text-gray-400 uppercase tracking-widest">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex text-yellow-400 mb-2 md:mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 md:w-4 md:h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      ))}
                    </div>
                    <p className="text-gray-600 text-[12px] md:text-sm italic leading-relaxed flex-grow line-clamp-6 md:line-clamp-none">
                      "{review.text}"
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;