import { FadeIn } from './FadeIn';
import { useLanguage } from '../context/LanguageContext';

const HowItWorksSection = () => {
  const { t } = useLanguage();
  return (
    <section id="how-it-works" className="relative w-full py-12 bg-transparent overflow-hidden">
      <FadeIn direction="up">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center md:items-start text-center md:text-left">
          


          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 w-full mb-12">
            
            {/* Cube 1 */}
            <div className="relative w-64 h-64 md:w-[300px] md:h-[300px] flex justify-center items-center transition-transform duration-500 hover:scale-105">
              <img src="/image/wuerfel_ohne_frontal.png" alt="Cube background" className="absolute inset-0 w-full h-full object-contain pointer-events-none" />
              <div className="relative z-10 flex flex-col justify-center items-start text-left p-6 w-[80%] h-[80%] mt-4 mr-2">
                <h3 className="text-[#ef7918] font-bold text-lg md:text-xl uppercase mb-1 leading-tight italic drop-shadow-sm">{t('howItWorks.cube1.titleTop')}</h3>
                <h4 className="text-[#3c3d43] font-bold text-xl md:text-2xl uppercase mb-3 leading-tight drop-shadow-sm">{t('howItWorks.cube1.titleBottom')}</h4>
                <p className="text-[#3c3d43] text-[10px] md:text-[11px] leading-snug font-medium opacity-80 max-w-[95%]">
                  {t('howItWorks.cube1.text')}
                </p>
              </div>
            </div>

            {/* Cube 2 */}
            <div className="relative w-64 h-64 md:w-[300px] md:h-[300px] flex justify-center items-center transition-transform duration-500 hover:scale-105">
              <img src="/image/wuerfel_ohne_frontal.png" alt="Cube background" className="absolute inset-0 w-full h-full object-contain pointer-events-none" />
              <div className="relative z-10 flex flex-col justify-center items-start text-left p-6 w-[80%] h-[80%] mt-4 mr-2">
                <h3 className="text-[#ef7918] font-bold text-lg md:text-xl uppercase mb-1 leading-tight italic drop-shadow-sm">{t('howItWorks.cube2.titleTop')}</h3>
                <h4 className="text-[#3c3d43] font-bold text-xl md:text-2xl uppercase mb-3 leading-tight drop-shadow-sm">{t('howItWorks.cube2.titleBottom')}</h4>
                <p className="text-[#3c3d43] text-[10px] md:text-[11px] leading-snug font-medium opacity-80 max-w-[95%]">
                  {t('howItWorks.cube2.text')}
                </p>
              </div>
            </div>

            {/* Cube 3 */}
            <div className="relative w-64 h-64 md:w-[300px] md:h-[300px] flex justify-center items-center transition-transform duration-500 hover:scale-105">
              <img src="/image/wuerfel_ohne_frontal.png" alt="Cube background" className="absolute inset-0 w-full h-full object-contain pointer-events-none" />
              <div className="relative z-10 flex flex-col justify-center items-start text-left p-6 w-[80%] h-[80%] mt-4 mr-2">
                <h3 className="text-[#3c3d43] font-bold text-lg md:text-xl uppercase mb-1 leading-tight italic drop-shadow-sm">{t('howItWorks.cube3.titleTop')}</h3>
                <h4 className="text-[#ef7918] font-bold text-xl md:text-2xl uppercase mb-3 leading-tight drop-shadow-sm">{t('howItWorks.cube3.titleBottom')}</h4>
                <p className="text-[#3c3d43] text-[10px] md:text-[11px] leading-snug font-medium opacity-80 max-w-[95%]">
                  {t('howItWorks.cube3.text')}
                </p>
              </div>
            </div>

          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default HowItWorksSection;
