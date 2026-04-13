

const HowItWorksSection = () => {
  return (
    <section className="relative w-full overflow-hidden pb-20 pt-10">

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        <h2 className="text-5xl md:text-[65px] font-bold text-white mb-20 uppercase tracking-tight drop-shadow-sm text-center md:text-left">
          HOW IT <span className="text-[#ef7918]">WORKS</span>
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 w-full px-4 mb-20">
          
          {/* Cube 1 */}
          <div className="relative w-64 h-64 md:w-[300px] md:h-[300px] flex justify-center items-center transition-transform duration-500 hover:scale-105">
            <img src="/image/wuerfel_ohne_frontal.png" alt="Cube background" className="absolute inset-0 w-full h-full object-contain pointer-events-none drop-shadow-xl" />
            <div className="relative z-10 flex flex-col justify-center items-start text-left p-6 w-[80%] h-[80%] mt-4 mr-2">
              <h3 className="text-[#ef7918] font-bold text-lg md:text-xl uppercase mb-1 leading-tight italic drop-shadow-sm">EXPLORE</h3>
              <h4 className="text-[#3c3d43] font-bold text-xl md:text-2xl uppercase mb-3 leading-tight drop-shadow-sm">THE VIDEOS</h4>
              <p className="text-[#3c3d43] text-[10px] md:text-[11px] leading-snug font-medium opacity-80 max-w-[95%]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
              </p>
            </div>
          </div>

          {/* Cube 2 */}
          <div className="relative w-64 h-64 md:w-[300px] md:h-[300px] flex justify-center items-center transition-transform duration-500 hover:scale-105">
            <img src="/image/wuerfel_ohne_frontal.png" alt="Cube background" className="absolute inset-0 w-full h-full object-contain pointer-events-none drop-shadow-xl" />
            <div className="relative z-10 flex flex-col justify-center items-start text-left p-6 w-[80%] h-[80%] mt-4 mr-2">
              <h3 className="text-[#ef7918] font-bold text-lg md:text-xl uppercase mb-1 leading-tight italic drop-shadow-sm">PICK</h3>
              <h4 className="text-[#3c3d43] font-bold text-xl md:text-2xl uppercase mb-3 leading-tight drop-shadow-sm">A TOPIC</h4>
              <p className="text-[#3c3d43] text-[10px] md:text-[11px] leading-snug font-medium opacity-80 max-w-[95%]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
              </p>
            </div>
          </div>

          {/* Cube 3 */}
          <div className="relative w-64 h-64 md:w-[300px] md:h-[300px] flex justify-center items-center transition-transform duration-500 hover:scale-105">
            <img src="/image/wuerfel_ohne_frontal.png" alt="Cube background" className="absolute inset-0 w-full h-full object-contain pointer-events-none drop-shadow-xl" />
            <div className="relative z-10 flex flex-col justify-center items-start text-left p-6 w-[80%] h-[80%] mt-4 mr-2">
              <h3 className="text-[#3c3d43] font-bold text-lg md:text-xl uppercase mb-1 leading-tight italic drop-shadow-sm">TALK TO</h3>
              <h4 className="text-[#ef7918] font-bold text-xl md:text-2xl uppercase mb-3 leading-tight drop-shadow-sm">OUR EXPERTS</h4>
              <p className="text-[#3c3d43] text-[10px] md:text-[11px] leading-snug font-medium opacity-80 max-w-[95%]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;
