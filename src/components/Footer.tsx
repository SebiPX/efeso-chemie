const Footer = () => {
  return (
    <footer id="contact" className="bg-black py-20 relative z-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/image/efeso-logo.png" alt="EFESO" className="h-10" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Capitalizing on Growth Opportunities in the Chemical Industry.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Navigation</h4>
            <ul className="space-y-3">
              {['Topics', 'About EFESO', 'FAQ', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-[#ef7918] transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Legal</h4>
            <ul className="space-y-3">
              {['Privacy Policy', 'Terms of Service', 'Imprint', 'Cookie Settings'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Ready to talk?</h4>
            <button className="w-full bg-[#ef7918] text-white font-bold py-3 px-6 rounded-lg transition-transform duration-300 hover:scale-105 shadow-[0_0_15px_rgba(239,121,24,0.3)] mb-4">
              Book a Call
            </button>
            <p className="text-gray-500 text-xs">
              Reach out to our Advisory Board for bespoke strategies tailored to your organization.
            </p>
          </div>

        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} EFESO Management Consultants. All rights reserved.
          </p>
          <div className="flex gap-6">
             <img src="/image/EFESO_logo-2.png" alt="EFESO Logo" className="h-6 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
