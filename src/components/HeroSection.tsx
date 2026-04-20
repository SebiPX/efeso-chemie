import { useState } from 'react';
import { FadeIn } from './FadeIn';
import { useLanguage } from '../context/LanguageContext';

type HeroExpert = {
  name: string;
  title: string;
  img: string;
  imgHover?: string;
  cv?: {
    de: string[];
    en: string[];
  };
};

const heroExperts: HeroExpert[] = [
  { 
    name: "DR. CHRISTOPH BALZAREK", 
    title: "EVP Corporate Development, Sustainability & Innovation\nOXEA", 
    img: "/image/Balzarek.png", 
    imgHover: "/image/iso_balzarek.png",
    cv: {
      de: [
        "VP Innovation & Technology, OQ",
        "VP Innovation & Technology, Oxea",
        "Weitere Positionen bei Oxea, Celanese"
      ],
      en: [
        "VP Innovation & Technology, OQ",
        "VP Innovation & Technology, Oxea",
        "Other positions at Oxea, Celanese"
      ]
    }
  },
  { 
    name: "PIETER BOON", 
    title: "Member of The Supervisory Board\nAnQore", 
    img: "/image/Boon.png", 
    imgHover: "/image/iso_boon.png",
    cv: {
      de: [
        "Executive Chairman, AnQore",
        "Chairman of the Supervisory Board, Stichting Chemelot",
        "Weitere Positionen bei Circle Infra Partners, Sitech, DSM"
      ],
      en: [
        "Executive Chairman, AnQore",
        "Chairman of the Supervisory Board, Stichting Chemelot",
        "Other positions at Circle Infra Partners, Sitech, DSM"
      ]
    }
  },
  { 
    name: "LUCA ROSETTO", 
    title: "Former Executive VP Operations\nRoyal DSM N.V.", 
    img: "/image/Rosetto.png", 
    imgHover: "/image/iso_rosetto.png",
    cv: {
      de: [
        "EVP Operations, Royal DSM N.V.",
        "Weitere Positionen bei DSM, Dow Chemicals"
      ],
      en: [
        "EVP Operations, Royal DSM N.V.",
        "Other positions at DSM, Dow Chemicals"
      ]
    }
  },
  { 
    name: "HATEM SOLIMAN", 
    title: "Former President Middle East, Asia Pacific and Latin America Regions\nSchlumberger", 
    img: "/image/Soliman.png", 
    imgHover: "/image/iso_soliman.png",
    cv: {
      de: [
        "President Middle East, Asia Pacific, Latin America Regions, Schlumberger",
        "Weitere Positionen bei Schlumberger, Rameda Pharmaceutical, Ocyan-SA"
      ],
      en: [
        "President Middle East, Asia Pacific, Latin America Regions, Schlumberger",
        "Other positions at Schlumberger, Rameda Pharmaceutical, Ocyan-SA"
      ]
    }
  },
  { name: "FERNANDO CRUZADO", title: "VP/Partner & Head of Chemical Industry EMEA\nEFESO Management Consultants", img: "/image/Cruzado.png", imgHover: "/image/iso_cruzado.png" },
  { name: "DIDIER BRACKENIER", title: "Senior Partner & Executive Vice President Benelux\nEFESO Management Consultants", img: "/image/Didier_Brackenier.png", imgHover: "/image/iso_brackenier.png" },
  { name: "JEROEN VAN DER MEER", title: "Senior Partner\nEFESO Management Consultants", img: "/image/VanDerMeer.png", imgHover: "/image/iso_vandermeer.png" },
  { name: "RALPH LODDER", title: "VP/Partner\nEFESO Management Consultants", img: "/image/RalphLodder.png", imgHover: "/image/iso_lodder.png" },
  { name: "MICHIEL VAN DEN BOOMEN", title: "VP/Partner\nEFESO Management Consultants", img: "/image/VanDenBoomen.png", imgHover: "/image/iso_vandenboomen.png" },
  { name: "JOACHIM KROHN", title: "Expert Director\nEFESO Management Consultants", img: "/image/kron.png", imgHover: "/image/iso_krohn.png" }
];

const HeroSection = () => {
  const { t, language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExpert, setSelectedExpert] = useState<HeroExpert | null>(null);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const submitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await fetch('https://n8n.labs-schickeria.com/webhook/b46dd91b-3ac2-4699-b223-d7958e506c48', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: '',
          lastName: '',
          email: email,
          phone: '',
          company: '',
          industry: '',
          timestamp: new Date().toISOString(),
        })
      });
      setIsSuccess(true);
      setTimeout(() => {
        setIsModalOpen(false);
        setIsSuccess(false);
        setEmail('');
      }, 3000);
    } catch (error) {
      console.error('Error submitting form', error);
      // Fallback
      window.location.href = `mailto:Kontakt.dach@efeso.com,Maike.klemmer@efeso.com?subject=From Pressure to Profit – Bitte um weitere Informationen&body=E-Mail: ${email}`;
      setIsModalOpen(false);
      setEmail('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-[100vh] pt-32 sm:pt-28 md:pt-20 lg:pt-24 pb-6 overflow-hidden flex items-center justify-center">

      {/* Main Container - Restricting max width to keep elements closer together like the original 970px layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-0 flex flex-col justify-center">
        
        {/* HERO TOP ROW (Text Left, Cube Right) */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 lg:gap-10 mb-4 md:mb-6 pt-0">
          
          {/* Left Side: Slogan & Text & Subheadline via Grid to sync widths */}
          <div className="flex flex-col items-start w-full md:w-[60%]">
            <div className="grid grid-cols-1 md:grid-cols-[max-content_1fr] w-full">
              
              {/* Row 1, Col 1: H1 sets the max-content width */}
              <div className="col-start-1">
                <h1 className="text-4xl sm:text-5xl md:text-[50px] lg:text-[60px] xl:text-[72px] font-bold text-white leading-[1.1] tracking-wide uppercase drop-shadow-md md:whitespace-nowrap">
                  FROM PRESSURE<br />
                  <span className="flex flex-wrap md:flex-nowrap items-center gap-3 md:gap-5 mt-1 sm:mt-2">
                    <span>TO <span className="text-[#ef7918]">PROFIT</span></span>
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="bg-[#ef7918] text-white font-bold py-1.5 px-4 rounded-md uppercase text-[13px] md:text-[15px] lg:text-[17px] leading-tight tracking-wider shadow-[0_0_15px_rgba(239,121,24,0.4)] hover:bg-orange-600 hover:-translate-y-1 transition-all whitespace-pre-line text-left mt-2 md:mt-0"
                    >
                      {t('hero.cta')}
                    </button>
                  </span>
                </h1>
              </div>

              {/* Row 2: Text breaks out of max-content and spans full 60% column */}
              <div className="col-span-1 md:col-span-2 pt-6 pb-6">
                <div 
                  className="w-full text-white text-[13px] xl:text-[15px] leading-relaxed text-justify opacity-90 font-light pr-0"
                  dangerouslySetInnerHTML={{ __html: `${t('hero.copy1')}<br/><br/>${t('hero.copy2')}` }}
                />
              </div>

              {/* Row 3, Col 1: H2 perfectly aligns and stretches to H1 width */}
              <div className="col-start-1 flex items-stretch">
                <h2 className="w-full text-lg sm:text-xl md:text-[26px] text-white font-medium leading-[1.4] tracking-wide">
                  <span className="bg-[#ef7918] text-white px-4 py-2 md:py-2 rounded-sm font-semibold shadow-sm block w-full text-left tracking-wide h-full flex flex-col justify-center">
                    {t('hero.subheadline')}
                  </span>
                </h2>
              </div>
              
            </div>
          </div>

          {/* Right Side: Ice Cube */}
          <div className="w-full md:w-[45%] flex justify-center md:justify-end shrink-0 mt-6 md:mt-0">
             <a href="https://www.roi.de/unternehmensberatung/referenzen/beratung-chemie" target="_blank" rel="noreferrer" className="block max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[480px]">
               <img 
                 src="/image/wuerfel-efeso-new.png" 
                 alt="Efeso Ice Cube" 
                 className="w-full h-auto object-contain transform hover:-translate-y-2 md:translate-x-4 lg:translate-x-16 transition-transform duration-700"
               />
             </a>
          </div>

        </div>

        {/* HERO ROW 3 (Experts Grid 5x2) */}
        <div id="advisory-board" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-3 gap-y-3 md:gap-x-4 md:gap-y-4 mt-2 w-full pt-0">
           {heroExperts.map((expert, idx) => (
             <FadeIn key={idx} delay={idx * 0.1} viewportMargin="50px">
               <div 
                 className={`flex flex-col items-start group h-full ${expert.cv ? 'cursor-pointer' : 'cursor-default'}`}
                 onClick={() => expert.cv && setSelectedExpert(expert)}
               >
                 
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
                      <p className="text-[10px] md:text-[11px] text-white font-medium leading-snug">
                        {expert.title.split('\n').map((line, i) => (
                          <span key={i}>
                            {line}
                            {i !== expert.title.split('\n').length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                   )}
                 </div>

               </div>
             </FadeIn>
           ))}
        </div>

      </div>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#2c2d33] border border-white/10 p-8 rounded-lg shadow-2xl max-w-md w-full relative">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-6">
                <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white text-center">
                  {language === 'de' ? 'Vielen Dank!' : 'Thank you!'}
                </h3>
                <p className="text-white/70 text-center mt-2 text-sm">
                  {language === 'de' 
                    ? 'Ihre Anfrage wurde erfolgreich gesendet.' 
                    : 'Your request has been sent successfully.'}
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-white mb-2 uppercase drop-shadow-sm">
                  {language === 'de' ? 'Gespräch vereinbaren' : 'Book a call'}
                </h3>
                <p className="text-white/80 text-[13px] mb-6">
                  {language === 'de' 
                    ? 'Tragen Sie Ihre E-Mail-Adresse ein und lassen Sie uns in Kontakt treten.' 
                    : 'Enter your email address and let\'s get in touch.'}
                </p>
                <form onSubmit={submitEmail} className="flex flex-col gap-4">
                  <input 
                    type="email" 
                    required
                    placeholder={language === 'de' ? 'Ihre E-Mail-Adresse' : 'Your email address'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-md text-white placeholder-white/40 focus:outline-none focus:border-[#ef7918] transition-colors disabled:opacity-50"
                  />
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#ef7918] text-white font-bold py-3 px-4 rounded-md uppercase tracking-wider shadow-[0_0_15px_rgba(239,121,24,0.4)] hover:bg-orange-600 hover:-translate-y-0.5 transition-all disabled:opacity-50 flex justify-center items-center gap-2"
                  >
                    {isSubmitting && (
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    )}
                    {language === 'de' ? 'Senden' : 'Send'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* CV Modal */}
      {selectedExpert && selectedExpert.cv && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
             onClick={(e) => { if (e.target === e.currentTarget) setSelectedExpert(null); }}>
          <div className="bg-[#2c2d33] border border-white/10 p-6 md:p-8 rounded-lg shadow-2xl max-w-lg w-full relative flex flex-col sm:flex-row gap-6 items-start">
            <button 
              onClick={() => setSelectedExpert(null)}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="w-24 sm:w-32 shrink-0 self-center sm:self-start">
               <img 
                 src={selectedExpert.imgHover || selectedExpert.img || "/image/wuerfel_ohne_frontal.png"} 
                 alt={selectedExpert.name} 
                 className="w-full h-auto object-contain drop-shadow-md" 
               />
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl font-bold text-[#ef7918] mb-1">{selectedExpert.name}</h3>
              <p className="text-white/80 text-xs md:text-sm mb-6 whitespace-pre-line leading-tight">
                {selectedExpert.title}
              </p>
              
              <h4 className="text-white font-bold mb-3 text-sm md:text-base border-b border-white/20 pb-2">
                {language === 'en' ? 'Industry expertise (selection)' : 'Branchenerfahrung (Auswahl)'}
              </h4>
              <ul className="text-white/80 text-sm flex flex-col gap-2 list-disc pl-5">
                {selectedExpert.cv[language === 'de' ? 'de' : 'en']?.map((item, idx) => (
                  <li key={idx} className="leading-snug">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
