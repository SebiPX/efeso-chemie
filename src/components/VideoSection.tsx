import { FadeIn } from './FadeIn';

// Reusable VideoCard Component to ensure perfectly uniform styling
const VideoCard = ({ imageSrc, name, role, fallbackSeed, logoType }: { imageSrc: string, name: string, role: string, fallbackSeed: string, logoType?: 'magenta' | 'orangeMenu' }) => {
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
    <section id="videos" className="relative w-full pt-4 pb-10 bg-transparent overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* -- SUSTAINABILITY INTRO -- */}
        <FadeIn direction="up">
        <div className="w-full mb-16 flex flex-col items-start text-left">
          <h3 className="text-6xl md:text-[85px] font-bold text-[#ef7918] mb-2 tracking-tight drop-shadow-sm uppercase leading-none">
            Sustainability
          </h3>
          <p className="text-white text-[20px] md:text-[24px] font-bold mb-4 drop-shadow-sm">
            Turning sustainability into competitive advantage
          </p>
          <div className="w-full md:w-[60%] space-y-5 text-white/90 text-[13px] md:text-[14px] leading-relaxed text-left mb-16">
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
            role={"EVP Corporate Development,\nSustainability & Innovation OXEA"}
            fallbackSeed="cbx"
            logoType="magenta"
          />
          <VideoCard 
            imageSrc="/image/Bildschirmfoto_2026-04-09_um_09.50.16.png"
            name="HATEM SOLIMAN"
            role={"Former President Middle East,\nAsia Pacific and Latin America\nRegions Schlumberger"}
            fallbackSeed="hsx"
            logoType="magenta"
          />
        </div>

        {/* -- DECARBONIZATION INTRO -- */}
        <FadeIn direction="up">
        <div className="w-full mt-24 pt-10 flex flex-col items-end text-right">
          <h3 className="text-5xl md:text-[65px] font-bold text-[#ef7918] mb-4 tracking-tight drop-shadow-sm uppercase">
            Decarbonization
          </h3>
          <p className="text-white text-[20px] md:text-[24px] font-bold mb-4">
            Decarbonization & Clean Energy
          </p>
          <div className="w-full md:w-[60%] space-y-5 text-white/95 text-[13px] md:text-[14px] leading-relaxed text-right">
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
            role={"Member of The Supervisory\nBoard AnQore"}
            fallbackSeed="pbx"
            logoType="magenta"
          />
          <VideoCard 
            imageSrc="/image/Bildschirmfoto_2026-04-09_um_09.50.26.png" 
            name="Luca Rosetto"
            role={"Former Executive VP Operations\nRoyal DSM N.V."}
            fallbackSeed="lrx"
            logoType="magenta"
          />
        </div>



        {/* -- INFRASTRUCTURE INTRO -- */}
        <div className="w-full pt-16 flex flex-col items-start text-left">
          <h3 className="text-5xl md:text-[65px] font-bold text-[#ef7918] mb-4 tracking-tight drop-shadow-sm uppercase">
            Infrastructure
          </h3>
          <p className="text-white text-[20px] md:text-[24px] font-bold mb-4">
            Creating future-proof organizations
          </p>
          <div className="w-full md:w-[60%] space-y-5 text-white/95 text-[13px] md:text-[14px] leading-relaxed text-left">
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
            role={"VP/Partner & Head of Chemical\nIndustry EMEA EFESO"}
            fallbackSeed="fcx"
            logoType="orangeMenu"
          />
          <VideoCard 
            imageSrc="/image/Bildschirmfoto_2026-04-09_um_09.49.10.png" 
            name="Luca Rosetto"
            role={"Former Executive VP Operations\nRoyal DSM N.V."}
            fallbackSeed="lrx2"
            logoType="magenta"
          />
          <VideoCard 
            imageSrc="/image/Bildschirmfoto_2026-04-09_um_09.49.56.png" 
            name="Michiel Van Den Boomen"
            role="VP/Partner EFESO"
            fallbackSeed="mvb3"
            logoType="orangeMenu"
          />
        </div>

        {/* -- OPERATIONAL EXCELLENCE INTRO -- */}
        <div className="w-full pt-16 flex flex-col items-end text-right">
          <h3 className="text-5xl md:text-[65px] font-bold text-[#ef7918] mb-4 tracking-tight drop-shadow-sm uppercase leading-none">
            Operational Excellence
          </h3>
          <p className="text-white text-[20px] md:text-[24px] font-bold mb-4 mt-4">
            Accelerating Operational Excellence
          </p>
          <div className="w-full md:w-[60%] space-y-5 text-white/95 text-[13px] md:text-[14px] leading-relaxed text-right">
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
            role={"VP/Partner & Head of Chemical\nIndustry EMEA EFESO"}
            fallbackSeed="fc2"
            logoType="orangeMenu"
          />
          <VideoCard 
            imageSrc="/image/Bildschirmfoto_2026-04-09_um_09.49.56.png" 
            name="Michiel Van Den Boomen"
            role="VP/Partner EFESO"
            fallbackSeed="mv2"
            logoType="orangeMenu"
          />
        </div>



      </div>
    </section>
  );
};

export default VideoSection;
