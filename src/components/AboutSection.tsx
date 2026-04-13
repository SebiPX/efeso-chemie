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
              <h2 className="text-5xl md:text-[65px] font-bold text-white mb-20 uppercase tracking-tight drop-shadow-sm leading-none">
                ABOUT EFESO
              </h2>
              
              <div className="flex flex-wrap gap-4 md:gap-8 text-[12px] md:text-[13px] text-[#ef7918] font-bold mb-6">
                 <span>Founded XXX</span>
                 <span>Projects XXXX</span>
                 <span>Countries XXXX</span>
              </div>
              
              <div className="w-full space-y-5 text-white/90 text-[12px] md:text-[13px] leading-relaxed text-justify mb-12">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
                </p>
              </div>

              <div>
                 <h4 className="text-sm md:text-base font-bold text-white mb-6">Reference Persons</h4>
                 <div className="flex gap-10">
                    {/* Person 1 */}
                    <div className="flex flex-col">
                      <div className="w-24 h-24 bg-[#ff00ff] mb-3 shadow-md"></div>
                      <div className="text-[12px] text-white leading-snug font-medium">
                        Anna Reitinger<br />
                        XXX<br />
                        XXX
                      </div>
                    </div>
                    
                    {/* Person 2 */}
                    <div className="flex flex-col">
                      <div className="w-24 h-24 bg-[#ff00ff] mb-3 shadow-md"></div>
                      <div className="text-[12px] text-white leading-snug font-medium">
                        André<br />
                        XXX<br />
                        XXX
                      </div>
                    </div>
                 </div>
              </div>
            </div>

            {/* Right Column: 3D Cubes Image */}
            <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end mt-10 md:mt-0 relative">
              <img 
                src="/image/wuerfel_efeso.png" 
                alt="EFESO Stacked Cubes" 
                className="w-full md:w-[115%] max-w-none h-auto object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.35)] hover:scale-[1.03] transition-transform duration-500 z-10"
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
