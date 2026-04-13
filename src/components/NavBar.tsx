import { useState, useEffect } from 'react';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

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
            {['Advisory Board', 'Topics', 'About', 'FAQ', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className={`${scrolled ? 'text-[#3c3d43]' : 'text-white'} hover:text-[#ef7918] transition-colors font-semibold text-sm uppercase tracking-wider relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#ef7918] after:transition-all hover:after:w-full`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
