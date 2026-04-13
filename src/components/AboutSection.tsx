import { FadeIn } from './FadeIn';

const AboutSection = () => {
  return (
    <section id="about" className="relative w-full py-20 bg-transparent overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* -- ABOUT EFESO -- */}
        <FadeIn direction="up">
          <div className="mb-32 flex flex-col md:flex-row gap-12">
            
            {/* Left Column: Text & Persons */}
            <div className="w-full md:w-1/2">
              <h2 className="text-5xl md:text-[65px] font-bold text-white mb-6 uppercase tracking-tight drop-shadow-sm leading-none">
                ABOUT EFESO
              </h2>
              
              <div className="flex flex-wrap gap-4 md:gap-8 text-[12px] md:text-[13px] text-[#ef7918] font-bold mb-6">
                 <span>Founded XXX</span>
                 <span>Projects XXXX</span>
                 <span>Countries XXXX</span>
              </div>
              
              <div className="w-full space-y-4 text-white/90 text-[13px] md:text-[14px] leading-relaxed text-left mb-12">
                <p className="font-bold text-[#ef7918] text-[15px] uppercase tracking-wide">
                  EFESO. Real Results, Together.
                </p>
                <p>
                  We deliver tailored, end-to-end services in operations, integrating industrial AI and digital, sustainability, and people development. Our expertise covers the full spectrum from operations strategy and transformation to transactions & turnaround, R&D and product profitability, cost and value engineering, manufacturing, procurement and supply chain. Each year, we work with leaders from global brands, mid-sized companies, and private equity on more than 1,500 across 75+ countries.
                </p>
                <p className="italic">
                  What sets us apart is deep industry knowledge combined with hands-on implementation. The outcome: improvements you can see, feel, and measure.
                </p>
              </div>

              <div>
                 <h4 className="text-sm md:text-base font-bold text-[#ef7918] mb-5 uppercase tracking-wider">Your Contact</h4>
                 <div className="flex items-center gap-5 bg-[#3c3d43]/30 p-4 rounded-md border border-white/5 w-max hover:bg-[#3c3d43]/50 transition-colors">
                    <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg border-2 border-white/20 flex-shrink-0">
                      <img src="https://ui-avatars.com/api/?name=Fernando+Cruzado&background=ef7918&color=fff&size=128" alt="Fernando Cruzado" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-[13px] text-white/90 leading-snug font-medium flex flex-col justify-center">
                      <span className="font-bold uppercase text-[15px] text-white tracking-wide mb-0.5">Fernando Cruzado</span>
                      <span>VP/Partner & Head of Chemical Industry EMEA</span>
                      <span className="text-[#ef7918] opacity-90">EFESO Management Consultants</span>
                    </div>
                 </div>
              </div>
            </div>

            {/* Right Column: 3D Cubes Image */}
            <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end mt-10 md:mt-0 relative">
              <img 
                src="/image/wuerfel_efeso.png" 
                alt="EFESO Stacked Cubes" 
                className="w-full md:w-[115%] max-w-none h-auto object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.35)] md:translate-x-12 lg:translate-x-20 hover:scale-[1.03] transition-transform duration-500 z-10"
              />
            </div>

          </div>
        </FadeIn>

        {/* -- FAQ -- */}
        <FadeIn direction="up">
          <div className="mb-32" id="faq">
          <h2 className="text-4xl md:text-[50px] font-bold text-white mb-20 tracking-tight uppercase">
            FAQ
          </h2>
          <ul className="space-y-6 text-[14px] font-medium text-white/90">
            <li className="cursor-pointer hover:text-[#ef7918] transition-colors">Question 1 XXX</li>
            <li className="cursor-pointer hover:text-[#ef7918] transition-colors">Question 2 XXX</li>
            <li className="cursor-pointer hover:text-[#ef7918] transition-colors">Question 3 XXX</li>
            <li className="cursor-pointer hover:text-[#ef7918] transition-colors">Question 4 XXX</li>
          </ul>
        </div>
        </FadeIn>

        {/* -- CONTACT -- */}
        <FadeIn direction="up">
        <div id="contact">
          <h2 className="text-4xl md:text-[50px] font-bold text-white mb-20 tracking-tight uppercase">
            CONTACT
          </h2>
          <div className="flex gap-12 items-center">
            
            {/* Envelope Icon */}
            <div className="w-32 md:w-[130px] h-auto cursor-pointer hover:-translate-y-2 transition-transform duration-300">
               <img src="/image/icon_mail.png" alt="Email Contact" className="w-full h-auto object-contain drop-shadow-md" />
            </div>
            
            {/* Phone Icon */}
            <div className="w-20 md:w-[85px] h-auto cursor-pointer hover:-translate-y-2 transition-transform duration-300">
               <img src="/image/icon_phone.png" alt="Phone Contact" className="w-full h-auto object-contain drop-shadow-md" />
            </div>

          </div>
        </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default AboutSection;
