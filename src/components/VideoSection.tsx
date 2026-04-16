import { FadeIn } from './FadeIn';

// Reusable VideoCard Component to ensure perfectly uniform styling
const VideoCard = ({ imageSrc, name, role, fallbackSeed }: { imageSrc: string, name: string, role: string, fallbackSeed: string }) => {
  return (
    <FadeIn direction="up">
    <div className="flex flex-col group cursor-pointer w-full">
      {/* Thumbnail Container */}
      <div className="w-full relative overflow-hidden rounded-md shadow-lg mb-6 transform group-hover:scale-[1.02] transition-transform duration-500">
        <img 
          src={imageSrc} 
          className="w-full h-auto aspect-[16/10] object-cover"
          alt={`${name} Video`}
          onError={(e) => { (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${fallbackSeed}/800/500` }}
        />
      </div>
      
      {/* Lower Meta Block */}
      <div className="flex items-start">
         {/* Text Section */}
         <div className="flex flex-col items-start mt-1 text-left">
           <h4 className="text-[#3c3d43] font-extrabold text-[18px] mb-1 leading-tight uppercase">{name}</h4>
           <p className="text-[#3c3d43] font-semibold text-[13px] leading-[1.3] whitespace-pre-line">{role}</p>
         </div>
      </div>
    </div>
    </FadeIn>
  );
};

const VideoSection = () => {
  return (
    <section id="videos" className="relative w-full py-20 bg-transparent overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* -- SUSTAINABILITY INTRO -- */}
        <FadeIn direction="up">
        <div id="sustainability" className="w-full mb-12 flex flex-col items-start text-left scroll-mt-32">
          <h3 className="text-6xl md:text-[85px] font-bold text-[#ef7918] mb-2 tracking-tight drop-shadow-sm uppercase leading-none">
            NACHHALTIGKEIT
          </h3>
          <p className="text-white text-[20px] md:text-[24px] font-bold mb-4 drop-shadow-sm">
            Nachhaltigkeit in einen Wettbewerbsvorteil verwandeln
          </p>
          <div className="w-full md:w-[60%] space-y-5 text-white/90 text-[13px] md:text-[14px] leading-relaxed text-left">
            <p>
              Chemieunternehmen treiben Nachhaltigkeit in zwei Rollen voran: als Lösungsanbieter für Recycling, erneuerbare Energien und Versorgungssicherheit sowie als Gestalter der eigenen Produktion. Dafür optimieren sie Prozesse, ihren Energieeinsatz sowie ihre Feedstocks und investieren in klimafreundliche Next‑Generation‑Anlagen. 
            </p>
            <p>
              „Game Changer“ für die Wertschöpfung und weitere Aspekte erläutern die Advisory Board-Mitglieder in diesen Video-Interviews.
            </p>
          </div>
        </div>
        </FadeIn>

        {/* -- SUSTAINABILITY VIDEOS -- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <VideoCard 
            imageSrc="/image/Bildschirmfoto_2026-04-09_um_09.49.10.png"
            name="Dr. Christoph Balzarek"
            role={"EVP Corporate Development,\nSustainability & Innovation OXEA"}
            fallbackSeed="cbx"
          />
          <VideoCard 
            imageSrc="/image/Bildschirmfoto_2026-04-09_um_09.50.16.png"
            name="HATEM SOLIMAN"
            role={"Former President Middle East,\nAsia Pacific and Latin America\nRegions Schlumberger"}
            fallbackSeed="hsx"
          />
        </div>

        {/* -- DECARBONIZATION INTRO -- */}
        <FadeIn direction="up">
        <div id="decarbonization" className="w-full mt-32 mb-12 flex flex-col items-end text-right scroll-mt-32">
          <h3 className="text-5xl md:text-[65px] font-bold text-[#ef7918] mb-4 tracking-tight drop-shadow-sm uppercase">
            DEKARBONISIERUNG &<br /> CLEAN ENERGY
          </h3>
          <p className="text-white text-[20px] md:text-[24px] font-bold mb-4">
            Hindernisse bei der Umsetzung von Dekarbonisierungszielen überwinden
          </p>
          <div className="w-full md:w-[60%] space-y-5 text-white/95 text-[13px] md:text-[14px] leading-relaxed text-right">
            <p>
              Der Druck zur Reduzierung der Scope-1- und Scope-2-Emissionen nimmt zu – vonseiten der Regulierungsbehörden, der Kunden sowie aus wirtschaftlicher Sicht. Im Chemiesektor erfordert das u.a. einen verstärkten Einsatz alternativer Energieträger und elektrifizierter Produktionsprozesse. 
            </p>
            <p>
              In den Video-Interviews schildern die Themenexperten, warum das Thema erfolgskritisch für eine zukunftsfähige Chemieindustrie ist und wo Potenziale vorhanden sind.
            </p>
          </div>
        </div>
        </FadeIn>

        {/* -- DECARBONIZATION VIDEOS -- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <VideoCard 
            imageSrc="/image/Bildschirmfoto_2026-04-09_um_09.49.56.png" 
            name="Pieter Boon"
            role={"Member of The Supervisory\nBoard AnQore"}
            fallbackSeed="pbx"
          />
          <VideoCard 
            imageSrc="/image/Bildschirmfoto_2026-04-09_um_09.50.26.png" 
            name="Luca Rosetto"
            role={"Former Executive VP Operations\nRoyal DSM N.V."}
            fallbackSeed="lrx"
          />
        </div>



        {/* -- INFRASTRUCTURE INTRO -- */}
        <div id="infrastructure" className="w-full mt-32 mb-12 flex flex-col items-start text-left scroll-mt-32">
          <h3 className="text-5xl md:text-[65px] font-bold text-[#ef7918] mb-4 tracking-tight drop-shadow-sm uppercase">
            ZUKUNFTSSICHERE ORGANISATION
          </h3>
          <p className="text-white text-[20px] md:text-[24px] font-bold mb-4">
            Zukunftsfähigkeit als TOP-Priorität
          </p>
          <div className="w-full md:w-[60%] space-y-5 text-white/95 text-[13px] md:text-[14px] leading-relaxed text-left">
            <p>
              Markwirtschaftliche Rahmenbedingungen zwingen die Chemieindustrie zu einer Optimierung von Prozessen und Abläufen. Gleichzeitig muss getreu dem Motto „form follows function“ die Frage gestellt werden, ob existierende organisatorische Strukturen diese neuen Anforderungen und Arbeitsweisen bestmöglich unterstützen.
            </p>
            <p>
              Erfahren Sie von Mitgliedern des EFESO Chemicals Advisory Board EMEA, wie sich Unternehmensorganisationen auf die Zukunft ausrichten und für effektive Prozesse sorgen. 
            </p>
          </div>
        </div>

        {/* -- INFRASTRUCTURE VIDEOS -- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <VideoCard 
            imageSrc="/image/Bildschirmfoto_2026-04-09_um_09.50.26.png" 
            name="Fernando Cruzado"
            role={"VP/Partner & Head of Chemical Industry EMEA\nEFESO Management Consultants"}
            fallbackSeed="fcx"
          />
          <VideoCard 
            imageSrc="/image/Bildschirmfoto_2026-04-09_um_09.49.10.png" 
            name="Luca Rosetto"
            role={"Former Executive VP Operations\nRoyal DSM N.V."}
            fallbackSeed="lrx2"
          />
          <VideoCard 
            imageSrc="/image/Bildschirmfoto_2026-04-09_um_09.49.56.png" 
            name="Michiel Van Den Boomen"
            role={"VP/Partner\nEFESO Management Consultants"}
            fallbackSeed="mvb3"
          />
        </div>

        {/* -- OPERATIONAL EXCELLENCE INTRO -- */}
        <div id="operational-excellence" className="w-full mt-32 mb-12 flex flex-col items-end text-right scroll-mt-32">
          <h3 className="text-5xl md:text-[65px] font-bold text-[#ef7918] mb-4 tracking-tight drop-shadow-sm uppercase leading-none">
            OPERATIONAL EXCELLENCE (OPEX)
          </h3>
          <p className="text-white text-[20px] md:text-[24px] font-bold mb-4 mt-4">
            Vom reaktiven in den proaktiven Modus wechseln 
          </p>
          <div className="w-full md:w-[60%] space-y-5 text-white/95 text-[13px] md:text-[14px] leading-relaxed text-right">
            <p>
              OPEX-Projekte in der Chemieindustrie sind auf eine umfassende Verbesserung der Wertschöpfungsprozesse des jeweiligen Unternehmens ausgerichtet. Im europäischen Umfeld sorgen Energiepreise, der Feedstock und regulatorische Rahmenbedingen für eine Benachteiligung im globalen Wettbewerb, insbesondere gegenüber den USA und Asien. 
            </p>
            <p>
              Erfahren Sie in den Videobeiträgen, wie Unternehmen diese Herausforderung meistern und ihre Ressourcen etwa im Kontext von „Maintenance Excellence“ bestmöglich nutzen.
            </p>
          </div>
        </div>

        {/* -- OPERATIONAL EXCELLENCE VIDEOS -- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <VideoCard 
            imageSrc="/image/Bildschirmfoto_2026-04-09_um_09.49.10.png" 
            name="Fernando Cruzado"
            role={"VP/Partner & Head of Chemical Industry EMEA\nEFESO Management Consultants"}
            fallbackSeed="fc2"
          />
          <VideoCard 
            imageSrc="/image/Bildschirmfoto_2026-04-09_um_09.49.56.png" 
            name="Michiel Van Den Boomen"
            role={"VP/Partner\nEFESO Management Consultants"}
            fallbackSeed="mv2"
          />
        </div>



      </div>
    </section>
  );
};

export default VideoSection;
