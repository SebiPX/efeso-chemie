import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-lg py-3 border-b border-gray-200'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
            <img 
              src={scrolled ? "/image/efeso-logo.png" : "/image/efeso-logo-white-color.png"} 
              alt="EFESO" 
              className="h-10 transition-transform group-hover:scale-105" 
            />
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            {['Advisory Board', 'Topics', 'About', 'Contact'].map((item) => {
              const dictKey = item === 'Advisory Board' ? 'advisoryBoard' : item.toLowerCase();
              return (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className={`${scrolled ? 'text-[#3c3d43]' : 'text-white'} hover:text-[#ef7918] transition-colors font-semibold text-sm uppercase tracking-wider relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#ef7918] after:transition-all hover:after:w-full`}
              >
                {t(`nav.${dictKey}`)}
              </a>
            )})}
            
            <div className="flex items-center space-x-2 pl-4 border-l border-white/20">
              <button 
                onClick={() => setLanguage('de')} 
                className={`text-xs font-bold transition-colors ${lang === 'de' ? 'text-[#ef7918]' : (scrolled ? 'text-[#3c3d43] hover:text-[#ef7918]' : 'text-white hover:text-[#ef7918]')}`}
              >
                DE
              </button>
              <span className={scrolled ? 'text-[#3c3d43]/30' : 'text-white/30'}>|</span>
              <button 
                onClick={() => setLanguage('en')} 
                className={`text-xs font-bold transition-colors ${lang === 'en' ? 'text-[#ef7918]' : (scrolled ? 'text-[#3c3d43] hover:text-[#ef7918]' : 'text-white hover:text-[#ef7918]')}`}
              >
                EN
              </button>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <div className="flex items-center space-x-2 pr-4 border-r border-white/20">
              <button 
                onClick={() => setLanguage('de')} 
                className={`text-xs font-bold transition-colors ${lang === 'de' ? 'text-[#ef7918]' : (scrolled ? 'text-[#3c3d43] hover:text-[#ef7918]' : 'text-white hover:text-[#ef7918]')}`}
              >
                DE
              </button>
              <span className={scrolled ? 'text-[#3c3d43]/30' : 'text-white/30'}>|</span>
              <button 
                onClick={() => setLanguage('en')} 
                className={`text-xs font-bold transition-colors ${lang === 'en' ? 'text-[#ef7918]' : (scrolled ? 'text-[#3c3d43] hover:text-[#ef7918]' : 'text-white hover:text-[#ef7918]')}`}
              >
                EN
              </button>
            </div>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className={`${scrolled ? 'text-[#3c3d43]' : 'text-white'} focus:outline-none`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-64 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'}`}
      >
        {['Advisory Board', 'Topics', 'About', 'Contact'].map((item) => {
          const dictKey = item === 'Advisory Board' ? 'advisoryBoard' : item.toLowerCase();
          return (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              onClick={() => setMobileMenuOpen(false)}
              className="px-6 py-3 text-[#3c3d43] hover:text-[#ef7918] hover:bg-gray-50 transition-colors font-semibold text-sm uppercase tracking-wider border-b border-gray-50 last:border-0"
            >
              {t(`nav.${dictKey}`)}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;
