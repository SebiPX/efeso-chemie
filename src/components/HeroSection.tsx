import { FadeIn } from './FadeIn';

type HeroExpert = {
  name: string;
  title: string;
  img: string;
  imgHover?: string;
};

const heroExperts: HeroExpert[] = [
  { name: "FERNANDO CRUZADO", title: "VP/Partner & Head of\nChemical Industry EMEA\nEFESO Management\nConsultants", img: "/image/wuerfel_ohne_frontal.png", imgHover: "/image/wuerfel_ohne_isometric.png" },
  { name: "DAVID SEDGE", title: "", img: "/image/wuerfel_ohne_frontal.png", imgHover: "/image/wuerfel_ohne_isometric.png" },
  { name: "JOACHIM KROHN", title: "", img: "/image/wuerfel_ohne_frontal.png", imgHover: "/image/wuerfel_ohne_isometric.png" },
  { name: "MICHIEL VAN DEN BOOMEN", title: "VP/Partner\nEFESO Management\nConsultants", img: "/image/wuerfel_ohne_frontal.png", imgHover: "/image/wuerfel_ohne_isometric.png" },
  { name: "JEROEN VAN DER MEER", title: "", img: "/image/wuerfel_ohne_frontal.png", imgHover: "/image/wuerfel_ohne_isometric.png" },
  { name: "PIETER BOON", title: "Member of The\nSupervisory Board\nAnQore", img: "/image/wuerfel_ohne_frontal.png", imgHover: "/image/wuerfel_ohne_isometric.png" },
  { name: "HATEM SOLIMAN", title: "Former President Middle East,\nAsia Pacific and Latin Ameri-\nca Regions Schlumberger", img: "/image/wuerfel_ohne_frontal.png", imgHover: "/image/wuerfel_ohne_isometric.png" },
  { name: "LUCA ROSETTO", title: "Former Executive\nVP Operations\nRoyal DSM N.V.", img: "/image/wuerfel_ohne_frontal.png", imgHover: "/image/wuerfel_ohne_isometric.png" },
  { name: "DR. CHRISTOPH BALZAREK", title: "EVP Corporate Development,\nSustainability & Innovation\nOXEA", img: "/image/wuerfel_ohne_frontal.png", imgHover: "/image/wuerfel_ohne_isometric.png" },
  { name: "HARALD GRUBER", title: "", img: "/image/wuerfel_ohne_frontal.png", imgHover: "/image/wuerfel_ohne_isometric.png" }
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[100vh] pt-32 pb-20 overflow-hidden flex items-center justify-center">

      {/* Main Container - Restricting max width to keep elements closer together like the original 970px layout */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        
        {/* HERO TOP ROW (Text Left, Cube Right) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-16 pt-10">
          
          {/* Left Side: Slogan & Text */}
          <div className="flex flex-col items-start w-full md:w-[60%]">
            <h1 className="text-5xl md:text-[65px] lg:text-[72px] font-bold text-white leading-[1.1] tracking-wide uppercase drop-shadow-md mb-6 md:whitespace-nowrap">
              FROM PRESSURE<br />
              <span className="flex items-center gap-5 mt-1">
                <span>TO <span className="text-[#ef7918]">PROFIT</span></span>
                <button className="bg-[#ef7918] text-white font-bold py-2 px-6 rounded-md uppercase text-lg lg:text-[22px] tracking-wider shadow-[0_0_15px_rgba(239,121,24,0.4)] hover:bg-orange-600 hover:-translate-y-1 transition-all">
                  Book a Call
                </button>
              </span>
            </h1>
            
            <div className="w-full text-white text-[15px] leading-relaxed text-justify mt-2 opacity-90 font-light pr-4">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel.
              </p>
            </div>
          </div>

          {/* Right Side: Ice Cube */}
          <div className="w-full md:w-[45%] flex justify-end shrink-0">
             <img 
               src="/image/wuerfel-ef.png" 
               alt="Efeso Ice Cube" 
               className="w-full max-w-[400px] md:max-w-[480px] h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform hover:-translate-y-2 transition-transform duration-700"
             />
          </div>

        </div>

        {/* HERO BOTTOM ROW (Subheadline only) */}
        <div className="flex w-full mb-10 px-2 mt-4">
          <div className="w-full text-left">
            <h2 className="text-xl md:text-[22px] text-white font-medium mb-6 leading-[1.4] tracking-wide">
              Capitalizing on Growth Opportunities in the Chemical Industry:<br />
              Recommendations from the <span className="text-[#ef7918] italic font-semibold">EFESO Chemicals Advisory Board EMEA</span>
            </h2>
          </div>
        </div>

        {/* HERO ROW 3 (Experts Grid 5x2) */}
        <div id="advisory-board" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-12 mt-16 w-full pt-10">
           {heroExperts.map((expert, idx) => (
             <FadeIn key={idx} delay={idx * 0.1}>
               <div className="flex flex-col items-start group cursor-pointer h-full">
                 
                 {/* Fixed Height Image Container with Hover Crossfade */}
                 <div className="w-full xl:w-[90%] aspect-square mb-4 relative transform group-hover:-translate-y-2 transition-transform duration-500">
                   
                   {/* 1) Frontal Image (visible when not hovered) */}
                   <img 
                      src={expert.img || "/image/wuerfel_ohne_frontal.png"} 
                      alt={expert.name} 
                      className="w-full h-full object-contain object-bottom drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)] absolute inset-0 transition-opacity duration-500 ease-in-out group-hover:opacity-0" 
                      onError={(e) => { (e.target as HTMLImageElement).src = "/image/wuerfel_ohne_frontal.png"; }}
                   />

                   {/* 2) Isometric Image (visible on hover) */}
                   <img 
                      src={expert.imgHover || "/image/wuerfel_ohne_isometric.png"} 
                      alt={expert.name + " hover"} 
                      className="w-full h-full object-contain object-bottom drop-shadow-[0_15px_30px_rgba(0,0,0,0.4)] absolute inset-0 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100" 
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
