const experts = [
  { name: "Dr. Christoph Balzarek", role: "Chemicals Advisory Board", image: "/image/1.png" },
  { name: "Pieter Boon", role: "Chemicals Advisory Board", image: "/image/2.png" },
  { name: "Fernando Cruzado", role: "Chemicals Advisory Board", image: "/image/3.png" },
  { name: "Hatem Soliman", role: "Chemicals Advisory Board", image: "/image/4.png" },
  { name: "Luca Rosetto", role: "Chemicals Advisory Board", image: "/image/5.png" },
  { name: "Michiel Van Den Boomen", role: "Chemicals Advisory Board", image: "/image/6.png" },
  { name: "Expert Placeholder", role: "Chemicals Advisory Board", image: "/image/7.png" },
  { name: "Expert Placeholder", role: "Chemicals Advisory Board", image: "/image/8.png" }
];

const ExpertGrid = () => {
  return (
    <section id="about-efeso" className="py-24 relative z-10 w-full bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold tracking-widest uppercase text-[#ef7918] mb-2">Our People</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Meet the Advisory Board</h3>
            <p className="mt-4 text-gray-400 max-w-2xl text-lg">
              Our experts bring decades of hands-on experience in the chemical industry, ready to guide your organization to operational excellence.
            </p>
          </div>
          <button className="bg-transparent border border-white/20 hover:border-[#ef7918] text-white hover:text-[#ef7918] px-6 py-3 rounded-full transition-colors whitespace-nowrap self-start md:self-auto">
            View All Experts
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          {experts.map((expert, index) => (
            <div key={index} className="group relative rounded-2xl overflow-hidden aspect-[3/4] bg-gray-800">
               {/* Note: since images might be transparent PNGs, we add a gradient background just in case */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-80"></div>
              
              <img 
                src={expert.image} 
                alt={expert.name} 
                className="absolute inset-0 w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${expert.name}&background=random&size=400`;
                }}
              />
              
              <div className="absolute inset-x-0 bottom-0 p-6 z-20 transform transition-transform duration-300">
                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-[#ef7918] transition-colors">{expert.name}</h4>
                <p className="text-sm text-gray-300 font-medium">{expert.role}</p>
                
                {/* Social icons that appear on hover */}
                <div className="mt-4 flex gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                  <a href="#" className="w-8 h-8 rounded-full bg-white/20 hover:bg-[#ef7918] flex items-center justify-center text-white hover:text-black transition-colors backdrop-blur-sm">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExpertGrid;
