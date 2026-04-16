const Footer = () => {
  return (
    <footer className="bg-transparent py-8 relative z-20 border-t border-white/10 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col xl:flex-row items-center justify-between gap-6">
        
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <img src="/image/efeso-logo-white-color.png" alt="EFESO" className="h-6 opacity-80" />
        </div>

        {/* Middle: Links */}
        <div className="flex flex-wrap justify-center gap-4 text-[11px] uppercase tracking-wider text-white/50">
          <a href="#topics" className="hover:text-[#ef7918] transition-colors">Topics</a>
          <a href="#about" className="hover:text-[#ef7918] transition-colors">About EFESO</a>
          <a href="#faq" className="hover:text-[#ef7918] transition-colors">FAQ</a>
          <a href="#contact" className="hover:text-[#ef7918] transition-colors">Contact</a>
          <span className="hidden md:inline text-white/20">|</span>
          <a href="https://www.efeso.com/privacy-policy/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="https://www.efeso.com/legal-notice/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Legal Notice</a>
        </div>

        {/* Right: Copyright */}
        <div className="text-white/40 text-[10px] text-center xl:text-right uppercase tracking-wider">
          &copy; {new Date().getFullYear()} EFESO Management Consultants.<br className="md:hidden" /> All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
