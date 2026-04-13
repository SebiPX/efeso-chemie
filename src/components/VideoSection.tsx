import { FadeIn } from './FadeIn';

// Reusable VideoCard Component to ensure perfectly uniform styling
const VideoCard = ({ imageSrc, name, question, fallbackSeed, isBoxedQuestion = false, logoType = 'magenta' }: { imageSrc: string, name: string, question: string, fallbackSeed: string, isBoxedQuestion?: boolean, logoType?: 'magenta' | 'orangeMenu' }) => {
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
      <div className="flex items-start gap-4">
         {/* Logo Icon logic */}
         {logoType === 'magenta' ? (
           <div className="w-14 h-14 rounded-full bg-[#ff00ff] flex-shrink-0 flex items-center justify-center shadow-lg mt-1">
             <span className="text-white text-[12px] font-bold tracking-wide">Logo</span>
           </div>
         ) : (
           <div className="w-14 h-14 bg-[#ef7918] flex-shrink-0 flex flex-col items-center justify-center shadow-lg mt-1 gap-1.5 p-3 rounded-[2px]">
             <div className="w-full h-[3px] bg-white rounded-full"></div>
             <div className="w-full h-[3px] bg-white rounded-full"></div>
             <div className="w-full h-[3px] bg-white rounded-full"></div>
           </div>
         )}
         
         {/* Text Section */}
         <div className="flex flex-col items-start mt-1">
           <h4 className="text-[#3c3d43] font-extrabold text-[18px] mb-1 leading-tight">{name}</h4>
           {isBoxedQuestion ? (
             <div className="bg-[#3c3d43] p-3 pr-6 rounded-[2px] mt-1 shadow-md">
               <p className="text-white text-[15px] italic leading-snug">{question}</p>
             </div>
           ) : (
             <p className="text-white text-[15px] italic leading-snug">{question}</p>
           )}
         </div>
      </div>
    </div>
    </FadeIn>
  );
};

const VideoSection = () => {
  return (
    <section id="videos" className="relative w-full py-10 bg-transparent overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* -- SUSTAINABILITY INTRO -- */}
        <FadeIn direction="up">
        <div className="w-full mb-16">
          <h3 className="text-6xl md:text-[85px] font-bold text-[#ef7918] mb-2 tracking-tight drop-shadow-sm uppercase leading-none">
            Sustainability
          </h3>
          <p className="text-white text-[20px] md:text-[24px] font-bold mb-4 drop-shadow-sm">
            Turning sustainability into competitive advantage
          </p>
          <div className="w-full md:w-[60%] space-y-5 text-white/90 text-[13px] md:text-[14px] leading-relaxed text-justify mb-16">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus
            </p>
          </div>
        </div>
        </FadeIn>

        {/* -- SUSTAINABILITY VIDEOS -- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-24">
          <VideoCard 
            imageSrc="/image/Bildschirmfoto_2026-04-09_um_09.49.10.png"
            name="Dr. Christoph Balzarek"
            question="Frage"
            fallbackSeed="cbx"
            isBoxedQuestion={false}
            logoType="magenta"
          />
          <VideoCard 
            imageSrc="/image/Bildschirmfoto_2026-04-09_um_09.50.16.png"
            name="HATEM SOLIMAN"
            question="Which development could become the next sustainability game changer in the chemical industry?"
            fallbackSeed="hsx"
            isBoxedQuestion={true}
            logoType="magenta"
          />
        </div>

        {/* -- DECARBONIZATION INTRO -- */}
        <FadeIn direction="up">
        <div className="w-full mt-24 pt-10">
          <h3 className="text-5xl md:text-[65px] font-bold text-[#ef7918] mb-4 tracking-tight drop-shadow-sm uppercase">
            Decarbonization
          </h3>
          <p className="text-white text-[20px] md:text-[24px] font-bold mb-4">
            Decarbonization & Clean Energy
          </p>
          <div className="w-full md:w-[60%] space-y-5 text-white/95 text-[13px] md:text-[14px] leading-relaxed text-justify">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus
            </p>
          </div>
        </div>
        </FadeIn>

        {/* -- DECARBONIZATION VIDEOS -- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-16 mb-20">
          <VideoCard 
            imageSrc="/image/Bildschirmfoto_2026-04-09_um_09.49.56.png" 
            name="Pieter Boon"
            question="Why is decarbonization so important – and so difficult to achieve?"
            fallbackSeed="pbx"
            isBoxedQuestion={false}
            logoType="magenta"
          />
          <VideoCard 
            imageSrc="/image/Bildschirmfoto_2026-04-09_um_09.50.26.png" 
            name="Luca Rosetto"
            question="Why is the transition to clean energy essential for a future proof chemical industry?"
            fallbackSeed="lrx"
            isBoxedQuestion={false}
            logoType="magenta"
          />
        </div>

        {/* Action Button Segment */}
        <div className="flex justify-center w-full mb-32 relative z-20">
          <button className="bg-[#ef7918] text-white font-bold py-3.5 px-8 rounded-[4px] uppercase text-[15px] tracking-wider shadow-lg hover:bg-orange-600 hover:-translate-y-1 transition-all">
            CONTACT US
          </button>
        </div>

        {/* -- INFRASTRUCTURE INTRO -- */}
        <div className="w-full pt-16">
          <h3 className="text-5xl md:text-[65px] font-bold text-[#ef7918] mb-4 tracking-tight drop-shadow-sm uppercase">
            Infrastructure
          </h3>
          <p className="text-white text-[20px] md:text-[24px] font-bold mb-4">
            Creating future-proof organizations
          </p>
          <div className="w-full md:w-[60%] space-y-5 text-white/95 text-[13px] md:text-[14px] leading-relaxed text-justify">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
            </p>
          </div>
        </div>

        {/* -- INFRASTRUCTURE VIDEOS -- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-16 mb-24">
          <VideoCard 
            imageSrc="/image/Bildschirmfoto_2026-04-09_um_09.50.26.png" 
            name="Fernando Cruzado"
            question="Why is future viability a top priority for the industry?"
            fallbackSeed="fcx"
            isBoxedQuestion={false}
            logoType="orangeMenu"
          />
          <VideoCard 
            imageSrc="/image/Bildschirmfoto_2026-04-09_um_09.49.10.png" 
            name="Luca Rosetto"
            question="What skills and competencies do future-oriented leaders possess?"
            fallbackSeed="lrx2"
            isBoxedQuestion={false}
            logoType="magenta"
          />
          <VideoCard 
            imageSrc="/image/Bildschirmfoto_2026-04-09_um_09.49.56.png" 
            name="Michiel Van Den Boomen"
            question="What are key obstacles on the path to a future-proof organization?"
            fallbackSeed="mvb3"
            isBoxedQuestion={false}
            logoType="orangeMenu"
          />
        </div>

        {/* -- OPERATIONAL EXCELLENCE INTRO -- */}
        <div className="w-full pt-16">
          <h3 className="text-5xl md:text-[65px] font-bold text-[#ef7918] mb-4 tracking-tight drop-shadow-sm uppercase leading-none">
            Operational Excellence
          </h3>
          <p className="text-white text-[20px] md:text-[24px] font-bold mb-4 mt-4">
            Accelerating Operational Excellence
          </p>
          <div className="w-full md:w-[60%] space-y-5 text-white/95 text-[13px] md:text-[14px] leading-relaxed text-justify">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
            </p>
          </div>
        </div>

        {/* -- OPERATIONAL EXCELLENCE VIDEOS -- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-16 mb-20">
          <VideoCard 
            imageSrc="/image/Bildschirmfoto_2026-04-09_um_09.49.10.png" 
            name="Fernando Cruzado"
            question="How do companies go from being reactive to being in the driver's seat?"
            fallbackSeed="fc2"
            isBoxedQuestion={false}
            logoType="orangeMenu"
          />
          <VideoCard 
            imageSrc="/image/Bildschirmfoto_2026-04-09_um_09.49.56.png" 
            name="Michiel Van Den Boomen"
            question="Why is maintenance excellence essential for the chemical industry?"
            fallbackSeed="mv2"
            isBoxedQuestion={false}
            logoType="orangeMenu"
          />
        </div>

        {/* Action Button Segment (Operational Excellence) */}
        <div className="flex justify-center w-full mb-32 relative z-20">
          <button className="bg-[#ef7918] text-white font-bold py-3.5 px-8 rounded-[4px] uppercase text-[15px] tracking-wider shadow-lg hover:bg-orange-600 hover:-translate-y-1 transition-all">
            CONTACT US
          </button>
        </div>

      </div>
    </section>
  );
};

export default VideoSection;
