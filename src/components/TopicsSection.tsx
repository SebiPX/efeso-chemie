import { FadeIn } from './FadeIn';

const topics = [
  { title: "SUSTAINABILITY", text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu", link: "#" },
  { title: "INFRASTRUCTURE", text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu", link: "#" },
  { title: "DECARBONIZATION", text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu", link: "#" },
  { title: "OPERATIONAL\nEXCELLENCE", text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu", link: "#" }
];

const TopicsSection = () => {
  return (
    <section id="topics" className="relative w-full pb-8 overflow-hidden">
      
      {/* Banner removed based on feedback */}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Title & Button Row */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-20 px-4">
          <h2 className="text-5xl md:text-[65px] font-bold text-white uppercase leading-none drop-shadow-sm">
            OUR TOPICS
          </h2>
          <button className="bg-[#3c3d43] mt-6 md:mt-0 text-white font-bold py-4 px-8 rounded-[4px] uppercase text-[15px] tracking-wider shadow-lg hover:-translate-y-1 hover:bg-[#515761] transition-all">
            WATCH THE FIRST VIDEO
          </button>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4 mb-8">
           {topics.map((topic, idx) => (
             <FadeIn key={idx} delay={idx * 0.15}>
               <div className="flex flex-col relative w-full pt-10 pb-40 px-6 bg-gradient-to-b from-[#eb7614] via-[#e8812c]/90 to-transparent hover:-translate-y-2 transition-transform duration-500 rounded-[2px] h-full">
                 <h3 className="text-white font-bold italic text-center text-[16px] md:text-[18px] tracking-wide uppercase mb-6 h-12 flex items-center justify-center leading-tight whitespace-pre-line drop-shadow-sm">
                   {topic.title}
                 </h3>
                 <p className="text-white text-[12px] md:text-[13px] leading-relaxed text-left opacity-95">
                   {topic.text.substring(0, 203)}
                 </p>
               </div>
             </FadeIn>
           ))}
        </div>

      </div>
    </section>
  );
};

export default TopicsSection;
