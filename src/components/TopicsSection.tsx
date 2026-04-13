

const TopicsSection = () => {
  const topics = [
    {
      title: "SUSTAINABILITY",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam"
    },
    {
      title: "INFRASTRUCTURE",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam"
    },
    {
      title: "DECARBONIZATION",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis"
    },
    {
      title: "OPERATIONAL\nEXCELLENCE",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam"
    }
  ];

  return (
    <section id="topics" className="relative w-full pb-20 pt-10 overflow-hidden">
      
      {/* FULL WIDTH BANNER: 2-3 prägnante Problemfelder */}
      <div className="w-full bg-gradient-to-r from-[#ef7918] via-[#cca878] to-transparent py-14 mb-20 relative -ml-4 md:-ml-0">
         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
           
           {/* Left Side: Headlines */}
           <div className="w-full md:w-[60%] flex flex-col items-start text-left">
             <h2 className="text-5xl md:text-[65px] font-bold text-white leading-tight drop-shadow-sm">
               2-3 prägnante
             </h2>
             <h3 className="text-4xl md:text-[55px] font-bold italic text-[#3c3d43] leading-tight drop-shadow-sm -mt-2">
               Problemfelder
             </h3>
           </div>

           {/* Right Side: Text & Button */}
           <div className="w-full md:w-[40%] flex flex-col items-start mt-8 md:mt-0 md:pl-10">
             <p className="text-white text-[15px] leading-snug font-medium mb-6 mt-4">
               Kurze Erklärung des Advisory<br />
               Board Konzepts
             </p>
             <button className="bg-[#ef7918] text-white font-bold py-3.5 px-8 rounded-[4px] uppercase text-[15px] tracking-wider shadow-lg hover:-translate-y-1 hover:bg-orange-600 transition-all flex flex-col items-center leading-tight">
                <span>MORE ON</span>
                <span>THIS TOPIC</span>
             </button>
           </div>

         </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Title & Button Row */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 px-4">
          <h2 className="text-5xl md:text-[65px] font-bold text-white uppercase leading-none drop-shadow-sm">
            OUR TOPICS
          </h2>
          <button className="bg-[#3c3d43] mt-6 md:mt-0 text-white font-bold py-4 px-8 rounded-[4px] uppercase text-[15px] tracking-wider shadow-lg hover:-translate-y-1 hover:bg-[#515761] transition-all">
            WATCH THE FIRST VIDEO
          </button>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4 mb-32">
          {topics.map((topic, idx) => (
            <div 
              key={idx} 
              className="flex flex-col relative w-full pt-10 pb-40 px-6 bg-gradient-to-b from-[#eb7614] via-[#e8812c]/90 to-transparent hover:-translate-y-2 transition-transform duration-500 rounded-[2px]"
            >
              <h3 className="text-white font-bold italic text-center text-[16px] md:text-[18px] tracking-wide uppercase mb-6 h-12 flex items-center justify-center leading-tight whitespace-pre-line drop-shadow-sm">
                {topic.title}
              </h3>
              <p className="text-white text-[12px] md:text-[13px] leading-relaxed text-left opacity-95">
                {/* Truncate text to standard length to match perfectly aligned design grid */}
                {topic.text.substring(0, 203)}
              </p>
            </div>
          ))}
        </div>



      </div>
    </section>
  );
};

export default TopicsSection;
