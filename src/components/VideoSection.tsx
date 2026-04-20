import { FadeIn } from './FadeIn';
import { useLanguage } from '../context/LanguageContext';

// Reusable VideoCard Component to ensure perfectly uniform styling
const VideoCard = ({ imageSrc, name, role, fallbackSeed, videoUrl }: { imageSrc: string, name: string, role: string, fallbackSeed: string, videoUrl?: string }) => {
  const isVideo = !!videoUrl;
  const Wrapper = isVideo ? "a" : "div";
  const wrapperProps = isVideo ? { href: videoUrl, target: "_blank", rel: "noreferrer" } : {};

  return (
    <FadeIn direction="up">
    <Wrapper {...(wrapperProps as any)} className="flex flex-col group cursor-pointer w-full">
      {/* Thumbnail Container */}
      <div className="w-full relative overflow-hidden rounded-md shadow-lg mb-6 transform group-hover:scale-[1.02] transition-transform duration-500">
        <img 
          src={imageSrc} 
          className="w-full h-auto aspect-[16/10] object-cover"
          alt={`${name} Video`}
          onError={(e) => { (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${fallbackSeed}/800/500` }}
        />
        {isVideo && (
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 flex items-center justify-center">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-[#ef7918]/90 rounded-full flex items-center justify-center transform group-hover:scale-110 group-hover:bg-[#ef7918] transition-all duration-500 shadow-lg">
              <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
        )}
      </div>
      
      {/* Lower Meta Block */}
      <div className="flex items-start">
         {/* Text Section */}
         <div className="flex flex-col items-start mt-1 text-left">
           <h4 className="text-[#3c3d43] font-extrabold text-[18px] mb-1 leading-tight uppercase group-hover:text-[#ef7918] transition-colors duration-300">{name}</h4>
           <p className="text-[#3c3d43] font-semibold text-[13px] leading-[1.3] whitespace-pre-line">{role}</p>
         </div>
      </div>
    </Wrapper>
    </FadeIn>
  );
};

const VideoSection = () => {
  const { t } = useLanguage();

  return (
    <section id="videos" className="relative w-full pt-20 pb-12 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* -- SUSTAINABILITY INTRO -- */}
        <FadeIn direction="up">
        <div id="sustainability" className="w-full mb-12 flex flex-col items-start text-left scroll-mt-32">
          <h3 className="text-[9vw] sm:text-5xl md:text-[65px] font-bold text-[#ef7918] mb-4 tracking-tight drop-shadow-sm uppercase leading-tight whitespace-pre-line">
            {t('videos.sustainability.title')}
          </h3>
          <p className="text-white text-[20px] md:text-[24px] font-bold mb-4 drop-shadow-sm whitespace-pre-line">
            {t('videos.sustainability.sub')}
          </p>
          <div className="w-full md:w-[85%] space-y-5 text-white/90 text-[13px] md:text-[14px] leading-relaxed text-justify">
            <p>
              {t('videos.sustainability.text1')}
            </p>
            <p>
              {t('videos.sustainability.text2')}
            </p>
          </div>
        </div>
        </FadeIn>

        {/* -- SUSTAINABILITY VIDEOS -- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <VideoCard 
            imageSrc="/image/NA-Christoph-TN.png"
            name="Dr. Christoph Balzarek"
            role={"EVP Corporate Development,\nSustainability & Innovation OXEA"}
            fallbackSeed="cbx"
            videoUrl="https://youtu.be/zFNR5h5E818"
          />
          <VideoCard 
            imageSrc="/image/NA-Hatem-TN.png"
            name="HATEM SOLIMAN"
            role={"Former President Middle East, Asia Pacific\nand Latin America Regions\nSchlumberger"}
            fallbackSeed="hsx"
            videoUrl="https://youtu.be/SbuNCT3s0wc"
          />
        </div>

        {/* -- DECARBONIZATION INTRO -- */}
        <FadeIn direction="up">
        <div id="decarbonization" className="w-full mt-20 mb-12 flex flex-col items-end text-right scroll-mt-32">
          <h3 className="text-[9vw] sm:text-5xl md:text-[65px] font-bold text-[#ef7918] mb-4 tracking-tight drop-shadow-sm uppercase whitespace-pre-line">
            {t('videos.decarbonization.title')}
          </h3>
          <p className="text-white text-[20px] md:text-[24px] font-bold mb-4 whitespace-pre-line">
            {t('videos.decarbonization.sub')}
          </p>
          <div className="w-full md:w-[85%] space-y-5 text-white/95 text-[13px] md:text-[14px] leading-relaxed text-justify [text-align-last:right]">
            <p>
              {t('videos.decarbonization.text1')}
            </p>
            <p>
              {t('videos.decarbonization.text2')}
            </p>
          </div>
        </div>
        </FadeIn>

        {/* -- DECARBONIZATION VIDEOS -- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <VideoCard 
            imageSrc="/image/DE-Pieter-TN.png" 
            name="Pieter Boon"
            role={"Member of The Supervisory\nBoard AnQore"}
            fallbackSeed="pbx"
            videoUrl="https://youtu.be/yOB2_34VAQM"
          />
          <VideoCard 
            imageSrc="/image/DE-Luca-TN.png" 
            name="Luca Rosetto"
            role={"Former Executive VP Operations\nRoyal DSM N.V."}
            fallbackSeed="lrx"
            videoUrl="https://youtu.be/qaIDQ8FJIpI"
          />
        </div>



        {/* -- INFRASTRUCTURE INTRO -- */}
        <div id="infrastructure" className="w-full mt-20 mb-12 flex flex-col items-start text-left scroll-mt-32">
          <h3 className="text-[9vw] sm:text-5xl md:text-[65px] font-bold text-[#ef7918] mb-4 tracking-tight drop-shadow-sm uppercase whitespace-pre-line">
            {t('videos.infrastructure.title')}
          </h3>
          <p className="text-white text-[20px] md:text-[24px] font-bold mb-4 whitespace-pre-line">
            {t('videos.infrastructure.sub')}
          </p>
          <div className="w-full md:w-[85%] space-y-5 text-white/95 text-[13px] md:text-[14px] leading-relaxed text-justify">
            <p>
              {t('videos.infrastructure.text1')}
            </p>
            <p>
              {t('videos.infrastructure.text2')}
            </p>
          </div>
        </div>

        {/* -- INFRASTRUCTURE VIDEOS -- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <VideoCard 
            imageSrc="/image/FU-Fernando.png" 
            name="Fernando Cruzado"
            role={"VP/Partner & Head of Chemical Industry EMEA\nEFESO Management Consultants"}
            fallbackSeed="fcx"
            videoUrl="https://youtu.be/crR9sV7VvUU"
          />
          <VideoCard 
            imageSrc="/image/FU-Luca-TN.png" 
            name="Luca Rosetto"
            role={"Former Executive VP Operations\nRoyal DSM N.V."}
            fallbackSeed="lrx2"
            videoUrl="https://youtu.be/PP-vIJ-HaAE"
          />
          <VideoCard 
            imageSrc="/image/FU-Michiel.png" 
            name="Michiel Van Den Boomen"
            role={"VP/Partner\nEFESO Management Consultants"}
            fallbackSeed="mvb3"
            videoUrl="https://youtu.be/pDy80kAh1J8"
          />
        </div>

        {/* -- OPERATIONAL EXCELLENCE INTRO -- */}
        <div id="operational-excellence" className="w-full mt-20 mb-12 flex flex-col items-end text-right scroll-mt-32">
          <h3 className="text-[9vw] sm:text-5xl md:text-[65px] font-bold text-[#ef7918] mb-4 tracking-tight drop-shadow-sm uppercase leading-tight whitespace-pre-line">
            {t('videos.opex.title')}
          </h3>
          <p className="text-white text-[20px] md:text-[24px] font-bold mb-4 mt-4 whitespace-pre-line">
            {t('videos.opex.sub')}
          </p>
          <div className="w-full md:w-[85%] space-y-5 text-white/95 text-[13px] md:text-[14px] leading-relaxed text-justify [text-align-last:right]">
            <p>
              {t('videos.opex.text1')}
            </p>
            <p>
              {t('videos.opex.text2')}
            </p>
          </div>
        </div>

        {/* -- OPERATIONAL EXCELLENCE VIDEOS -- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <VideoCard 
            imageSrc="/image/OP-Fernando-TN.png" 
            name="Fernando Cruzado"
            role={"VP/Partner & Head of Chemical Industry EMEA\nEFESO Management Consultants"}
            fallbackSeed="fc2"
            videoUrl="https://youtu.be/P7Qlk5Cb-qc"
          />
          <VideoCard 
            imageSrc="/image/OP-Michiel-TN.png" 
            name="Michiel Van Den Boomen"
            role={"VP/Partner\nEFESO Management Consultants"}
            fallbackSeed="mv2"
            videoUrl="https://youtu.be/d0r-7xpkg4E"
          />
        </div>



      </div>
    </section>
  );
};

export default VideoSection;
