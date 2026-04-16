import { FadeIn } from './FadeIn';
import { useLanguage } from '../context/LanguageContext';

type HeroExpert = {
  name: string;
  title: string;
  img: string;
  imgHover?: string;
};

const heroExperts: HeroExpert[] = [
  // Top row (Externals)
  { name: "DR. CHRISTOPH BALZAREK", title: "EVP Corporate Development, Sustainability & Innovation\nOXEA", img: "/image/Balzarek.png", imgHover: "/image/DR_CHRISTOPH_BALZAREK.jpg" },
  { name: "PIETER BOON", title: "Member of The Supervisory Board\nAnQore", img: "/image/Boon.png", imgHover: "/image/PIETER_BOON.jpg" },
  { name: "LUCA ROSETTO", title: "Former Executive VP Operations\nRoyal DSM N.V.", img: "/image/Rosetto.png", imgHover: "/image/LUCA_ROSETTO.jpg" },
  { name: "HATEM SOLIMAN", title: "Former President Middle East, Asia Pacific and Latin America Regions\nSchlumberger", img: "/image/Soliman.png", imgHover: "/image/HATEM_SOLIMAN.jpg" },
  // Bottom row (EFESO)
  { name: "FERNANDO CRUZADO", title: "VP/Partner & Head of Chemical Industry EMEA\nEFESO Management Consultants", img: "/image/Cruzado.png", imgHover: "/image/wuerfel_ohne_isometric.png" },
  { name: "JOACHIM KROHN", title: "Expert Director\nEFESO Management Consultants", img: "/image/kron.png", imgHover: "/image/wuerfel_ohne_isometric.png" },
  { name: "DAVID SEDGE", title: "Partner & Head of Chemical Industry Americas\nEFESO Management Consultants", img: "/image/Sedge.png", imgHover: "/image/wuerfel_ohne_isometric.png" },
  { name: "MICHIEL VAN DEN BOOMEN", title: "VP/Partner\nEFESO Management Consultants", img: "/image/VanDenBoomen.png", imgHover: "/image/wuerfel_ohne_isometric.png" },
  { name: "JEROEN VAN DER MEER", title: "Senior Partner\nEFESO Management Consultants", img: "/image/VanDerMeer.png", imgHover: "/image/wuerfel_ohne_isometric.png" }
];

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[100vh] pt-24 pb-6 overflow-hidden flex items-center justify-center">

      {/* Main Container - Restricting max width to keep elements closer together like the original 970px layout */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-0">
        
        {/* HERO TOP ROW (Text Left, Cube Right) */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-2 pt-0">
          
          {/* Left Side: Slogan & Text */}
          <div className="flex flex-col items-start w-full md:w-[60%]">
            <h1 className="text-5xl md:text-[65px] lg:text-[72px] font-bold text-white leading-[1.1] tracking-wide uppercase drop-shadow-md mb-3 md:whitespace-nowrap">
              FROM PRESSURE<br />
              <span className="flex items-center gap-5 mt-1">
                <span>TO <span className="text-[#ef7918]">PROFIT</span></span>
                <button className="bg-[#ef7918] text-white font-bold py-1.5 px-4 rounded-md uppercase text-[14px] md:text-[15px] lg:text-[17px] leading-tight tracking-wider shadow-[0_0_15px_rgba(239,121,24,0.4)] hover:bg-orange-600 hover:-translate-y-1 transition-all whitespace-pre-line text-left">
                  {t('hero.cta')}
                </button>
              </span>
            </h1>
            
            <div 
              className="w-full text-white text-[15px] leading-relaxed text-justify mt-2 opacity-90 font-light pr-4"
              dangerouslySetInnerHTML={{ __html: `${t('hero.copy1')}<br/><br/>${t('hero.copy2')}` }}
            />
          </div>

          {/* Right Side: Ice Cube */}
          <div className="w-full md:w-[45%] flex justify-end shrink-0">
             <img 
               src="/image/wuerfel-efeso-new.png" 
               alt="Efeso Ice Cube" 
               className="w-full max-w-[400px] md:max-w-[480px] h-auto object-contain transform hover:-translate-y-2 md:translate-x-8 lg:translate-x-16 transition-transform duration-700"
             />
          </div>

        </div>

        {/* HERO BOTTOM ROW (Subheadline only) */}
        <div className="flex w-full mb-2 px-2 mt-0">
          <div className="w-full text-left">
            <h2 className="text-xl md:text-[22px] text-white font-medium mb-2 leading-[1.4] tracking-wide">
              <span className="bg-[#ef7918] text-white px-4 py-1.5 rounded-sm font-semibold shadow-sm inline-block tracking-wide">{t('hero.subheadline')}</span>
            </h2>
          </div>
        </div>

        {/* HERO ROW 3 (Experts Grid 5x2) */}
        <div id="advisory-board" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-4 mt-2 w-full pt-0">
           {heroExperts.map((expert, idx) => (
             <FadeIn key={idx} delay={idx * 0.1} viewportMargin="50px">
               <div className="flex flex-col items-start group cursor-pointer h-full">
                 
                 {/* Fixed Height Image Container with Hover Crossfade */}
                 <div className="w-full xl:w-[90%] aspect-square mb-4 relative transform group-hover:-translate-y-2 transition-transform duration-500">
                   
                   {/* 1) Frontal Image (visible when not hovered) */}
                   <img 
                      src={expert.img || "/image/wuerfel_ohne_frontal.png"} 
                      alt={expert.name} 
                      className="w-full h-full object-contain object-bottom absolute inset-0 transition-opacity duration-500 ease-in-out group-hover:opacity-0" 
                      onError={(e) => { (e.target as HTMLImageElement).src = "/image/wuerfel_ohne_frontal.png"; }}
                   />

                   {/* 2) Isometric Image (visible on hover) */}
                   <img 
                      src={expert.imgHover || "/image/wuerfel_ohne_isometric.png"} 
                      alt={expert.name + " hover"} 
                      className="w-full h-full object-contain object-bottom absolute inset-0 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100" 
                      onError={(e) => { (e.target as HTMLImageElement).src = "/image/wuerfel_ohne_isometric.png"; }}
                   />
                   
                 </div>
                 
                 {/* Left-Aligned Text Content */}
                 <div className="text-left w-full pl-1">
                   <h4 className="text-[12px] md:text-[13px] text-gray-700 font-bold uppercase leading-tight group-hover:text-black mb-1 drop-shadow-sm">
                     {expert.name}
                   </h4>
                   {expert.title && (
                      <p className="text-[10px] md:text-[11px] text-white font-medium leading-snug whitespace-pre-line">
                        {expert.title}
                      </p>
                   )}
                 </div>

               </div>
             </FadeIn>
           ))}
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
