import { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button dynamically only when scrolled past 300px
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50">
      <button 
        onClick={scrollToTop}
        className={`hover:-translate-y-2 transition-all duration-300 flex items-center justify-center group focus:outline-none drop-shadow-[0_5px_15px_rgba(239,121,24,0.3)] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <img 
          src="/icons/icon-arrow-up.svg" 
          alt="Up Arrow" 
          className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" 
        />
      </button>
    </div>
  );
};

export default ScrollToTop;
