import { FadeIn } from './FadeIn';

const AboutSection = () => {
  return (
    <section id="about" className="relative w-full py-12 bg-transparent overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* -- ABOUT EFESO -- */}
        <FadeIn direction="up">
          <div className="mb-16 flex flex-col md:flex-row gap-12">
            
            {/* Left Column: Text & Persons */}
            <div className="w-full md:w-1/2">
              <h2 className="text-5xl md:text-[65px] font-bold text-white mb-6 uppercase tracking-tight drop-shadow-sm leading-none">
                ABOUT EFESO
              </h2>
              
              <div className="w-full space-y-4 text-white/90 text-[13px] md:text-[14px] leading-relaxed text-left mb-12">
                <p className="font-bold text-[#ef7918] text-[15px]">
                  Real Results, Together
                </p>
                <p>
                  EFESO Management Consultants ist mit rund 1.000 Mitarbeitenden an 35 Standorten weltweit die führende internationale <a href="https://www.roi-international.com/glossary/operations" target="_blank" rel="noreferrer" className="text-white font-bold hover:underline transition-all">Operations-Beratung</a> und Transformationspartner für die produzierende Industrie. Gemeinsam mit unseren Kunden setzen wir Standards für Performance, <a href="https://www.roi-international.com/glossary/resilience" target="_blank" rel="noreferrer" className="text-white font-bold hover:underline transition-all">Resilienz</a> und Produktivität und ermöglichen eine signifikante Wertsteigerung in der gesamten Wertschöpfungskette.
                </p>
                <p>
                  Um diese Ziele zu erreichen, denken wir Produkte E-2-E von der Idee bis zur Industrialisierung, erstellen und realisieren ganzheitliche Smart Factory Konzepte, adaptive <a href="https://www.roi-international.com/glossary/supply-chain" target="_blank" rel="noreferrer" className="text-white font-bold hover:underline transition-all">Supply Chains</a> sowie neue Betriebs- und Organisationsmodelle. Bei der Gestaltung und Etablierung <a href="https://www.roi-international.com/glossary/operational-excellence" target="_blank" rel="noreferrer" className="text-white font-bold hover:underline transition-all">operativer Prozesse</a> stehen für uns <a href="https://www.roi-international.com/glossary/efficiency" target="_blank" rel="noreferrer" className="text-white font-bold hover:underline transition-all">Effizienz</a>, Kostenoptimierung und Kundenorientierung im Vordergrund. In all diesen Bereichen erschließen wir die Potenziale der industriellen Digitalisierung.
                </p>
                <p>
                  Die Nachhaltigkeit dieser Veränderungen sichern wir durch Qualifizierungsprogramme und Führungskräfteentwicklung ab. Darüber hinaus unterhalten wir zahlreiche strategische Partnerschaften zu taktgebenden Technologieunternehmen und hochspezialisierten Experten, um für unsere Kunden den Zugang zu Top-Knowhow in relevanten Bereichen zu ermöglichen.
                </p>
                <p>
                  Die Arbeit von EFESO wird regelmäßig für ihre Ergebnisqualität, Effizienz und den <a href="https://www.roi-international.com/glossary/innovation" target="_blank" rel="noreferrer" className="text-white font-bold hover:underline transition-all">Innovationsgrad</a> ausgezeichnet und erreicht Spitzenplatzierungen in bedeutenden Branchen-Rankings. Seit 2013 prämiert EFESO die besten Praxislösungen der industriellen Digitalisierung mit dem <a href="https://www.industrie40award.com/" target="_blank" rel="noreferrer" className="text-white font-bold hover:underline transition-all">INDUSTRIE 4.0 AWARD</a>, der zu den renommiertesten internationalen Industriepreisen zählt.
                </p>
              </div>

               <div id="contact" className="scroll-mt-24">
                 <h4 className="text-sm md:text-base font-bold text-[#ef7918] mb-5 uppercase tracking-wider">Your Contact</h4>
                 <div className="flex items-start gap-6 bg-[#3c3d43]/30 p-6 rounded-[4px] border border-white/5 w-full md:w-max hover:bg-[#3c3d43]/50 transition-colors">
                    <div className="w-24 h-24 rounded-md overflow-hidden border-2 border-[#ef7918]/50 flex-shrink-0 mt-1">
                      <img src="/image/wuerfel_ohne_frontal.png" alt="Fernando Cruzado Placeholder" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-[13px] text-white/80 leading-snug font-medium flex flex-col justify-center gap-1.5">
                      <span className="font-bold uppercase text-[18px] text-white tracking-wide mb-0.5">Fernando Cruzado</span>
                      <span>VP/Partner & Head of Chemical Industry EMEA</span>
                      <span className="text-[#ef7918] font-bold mb-2">EFESO Management Consultants</span>
                      
                      <div className="flex flex-col gap-2 mt-2">
                        <a href="mailto:Fernando.cruzado@efeso.com" className="flex items-center gap-3 hover:text-white transition-colors group">
                          <svg className="w-4 h-4 text-[#ef7918] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                          <span>Fernando.cruzado@efeso.com</span>
                        </a>
                        <a href="https://www.linkedin.com/in/fernando-cruzado/" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition-colors group">
                          <svg className="w-4 h-4 text-[#ef7918] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                          <span>LinkedIn Profil</span>
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
              </div>
            </div>

            {/* Right Column: 3D Cubes Image */}
            <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end mt-10 md:mt-0 relative">
              <img 
                src="/image/Würfel_EFESO2-alpha.png" 
                alt="EFESO Stacked Cubes" 
                className="w-full md:w-[115%] max-w-none h-auto object-contain md:translate-x-12 lg:translate-x-20 hover:scale-[1.03] transition-transform duration-500 z-10"
              />
            </div>

          </div>
        </FadeIn>

        {/* -- FAQ -- */}
        <FadeIn direction="up">
          <div className="mb-16" id="faq">
          <h2 className="text-4xl md:text-[50px] font-bold text-white mb-12 tracking-tight uppercase">
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



      </div>
    </section>
  );
};

export default AboutSection;
