import { FadeIn } from './FadeIn';
import { useLanguage } from '../context/LanguageContext';

const AboutSection = () => {
  const { t, language } = useLanguage();

  return (
    <section id="about" className="relative w-full py-12 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* -- ABOUT EFESO -- */}
        <FadeIn direction="up">
          <div className="mb-16 flex flex-col md:flex-row gap-12">
            
            {/* Left Column: Text & Persons */}
            <div className="w-full md:w-1/2">
              <h2 className="text-5xl md:text-[65px] font-bold text-[#ef7918] mb-6 uppercase tracking-tight drop-shadow-sm leading-none">
                {t('about.headline')}
              </h2>
              
              <div className="w-full space-y-4 text-white/90 text-[13px] md:text-[14px] leading-relaxed text-justify mb-12">
                <p className="font-bold text-white text-[15px] whitespace-pre-line">
                  {t('about.sub')}
                </p>
                <p dangerouslySetInnerHTML={{ __html: t('about.p1') }} />
                <p dangerouslySetInnerHTML={{ __html: t('about.p2') }} />
                <p dangerouslySetInnerHTML={{ __html: t('about.p3') }} />
                {t('about.p4') && t('about.p4') !== 'about.p4' && (
                  <p dangerouslySetInnerHTML={{ __html: t('about.p4') }} />
                )}
              </div>

               <div id="contact" className="scroll-mt-24">
                 <h4 className="text-sm md:text-base font-bold text-[#ef7918] mb-5 uppercase tracking-wider">{t('about.contactHeader')}</h4>
                 <div className="flex flex-col xl:flex-row items-stretch justify-between gap-4 lg:gap-6 w-full">
                   <div className="flex items-start gap-4 lg:gap-6 bg-[#3c3d43]/30 p-5 lg:p-6 rounded-[4px] border border-white/5 w-full xl:w-max hover:bg-[#3c3d43]/50 transition-colors shrink">
                      <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-md overflow-hidden border-2 border-[#ef7918]/50 flex-shrink-0 mt-1">
                        <img src="/image/Cruzado.png" alt="Fernando Cruzado Placeholder" className="w-full h-full object-cover" />
                      </div>
                      <div className="text-[12px] lg:text-[13px] text-white/80 leading-snug font-medium flex flex-col justify-center gap-1.5 min-w-[180px]">
                        <span className="font-bold uppercase text-[16px] lg:text-[18px] text-white tracking-wide mb-0.5">Fernando Cruzado</span>
                        <span>VP/Partner & Head of Chemical Industry EMEA</span>
                        <span className="text-[#ef7918] font-bold mb-2">EFESO Management Consultants</span>
                        
                        <div className="flex flex-col gap-2 mt-2">
                          <a href={`mailto:Fernando.cruzado@efeso.com?subject=${encodeURIComponent(t('about.emailSubject') || 'From Pressure to Profit')}`} className="flex items-center gap-3 hover:text-white transition-colors group">
                            <svg className="w-4 h-4 text-[#ef7918] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                            <span className="truncate">Fernando.cruzado@efeso.com</span>
                          </a>
                          <a href="https://www.linkedin.com/in/fernando-cruzado/" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition-colors group">
                            <svg className="w-4 h-4 text-[#ef7918] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                            <span>{t('about.linkedin')}</span>
                          </a>
                          <a href="tel:+491728986862" className="flex items-center gap-3 hover:text-white transition-colors group">
                            <svg className="w-4 h-4 text-[#ef7918] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                            <span>+49 1728986862</span>
                          </a>
                          <a href="tel:+49891215900" className="flex items-center gap-3 hover:text-white transition-colors group">
                            <svg className="w-4 h-4 text-[#ef7918] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                            <span>+49 891215900</span>
                          </a>
                        </div>
                      </div>
                   </div>
                   <a 
                     href={language === 'de' ? "https://www.roi.de/unternehmensberatung/referenzen/beratung-chemie" : "https://www.roi-international.com/management-consulting/references/chemicals"} 
                     target="_blank" 
                     rel="noreferrer"
                     className="bg-[#ef7918] text-white font-bold py-4 xl:py-0 px-3 lg:px-4 text-[12px] xl:text-[14px] rounded-md uppercase tracking-wide shadow-[0_0_15px_rgba(239,121,24,0.4)] hover:bg-orange-600 transition-all flex flex-col items-center justify-center w-full xl:w-max text-center overflow-hidden"
                   >
                     <span>{language === 'de' ? <>Zur Branchen-<br/>Expertise<br/>von EFESO</> : <>About EFESO's<br/>Industry<br/>Expertise</>}</span>
                   </a>
                 </div>
              </div>
            </div>

            {/* Right Column: 3D Cubes Image */}
            <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end mt-10 md:mt-0 relative">
              <img 
                src="/image/Würfel_EFESO2-alpha.png" 
                alt="EFESO Stacked Cubes" 
                className="w-full md:w-[115%] max-w-none h-auto object-contain md:translate-x-12 lg:translate-x-20 md:-translate-y-20 lg:-translate-y-32 hover:scale-[1.03] transition-transform duration-500 z-10"
              />
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default AboutSection;
