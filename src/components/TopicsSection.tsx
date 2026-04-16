import { FadeIn } from './FadeIn';

const topics = [
  { title: "NACHHALTIGKEIT", text: "Als Lösungsanbieter neue Märkte erschließen und die eigene Produktion kontinuierlich optimieren.", link: "#sustainability" },
  { title: "DEKARBONISIERUNG\n& CLEAN ENERGY", text: "Transformationserfolge erzielen und über Organisationseinheiten und Werke skalieren.", link: "#decarbonization" },
  { title: "ZUKUNFTSSICHERE\nORGANISATION", text: "Unternehmen auf die Zukunft ausrichten und von effektiven Prozessen profitieren.", link: "#infrastructure" },
  { title: "OPERATIONAL\nEXCELLENCE", text: "Veränderungen vorantreiben und kontinuierliche Verbesserung etablieren.", link: "#operational-excellence" }
];

const TopicsSection = () => {
  return (
    <section id="topics" className="relative w-full pt-6 pb-12 overflow-hidden">
      
      {/* Banner removed based on feedback */}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Intro Text Box */}
        <div className="flex flex-col mb-12 px-4">
          <div className="w-full text-white/90 text-[14px] md:text-[15px] leading-relaxed text-left font-light space-y-4">
            <p>
              Das EFESO Chemicals Advisory Board EMEA unterstützt EFESO bei der Weiterentwicklung relevanter Beratungsansätze und der erfolgreichen Positionierung im Markt. Es stellt sicher, dass zentrale Fragestellungen und strukturelle Herausforderungen der Industrie frühzeitig identifiziert und in relevante, wirksame Lösungen übersetzt werden.
            </p>
            <p>
              Darüber hinaus bringt das Advisory Board bedarfsgerecht Knowhow in ausgewählte Consulting-Projekte ein. EFESO‑Kunden profitieren in mehrfacher Hinsicht: von fundierter, praxiserprobter Expertise, der Relevanz der angebotenen Lösungen auf Top‑Management‑Ebene – und von Antworten auf die entscheidenden strategischen und operativen Fragen. Beispielhafte Themenschwerpunkte und Maßnahmen erläutern Mitglieder des Advisory Board in den hier gezeigten Video-Interviews.
            </p>
          </div>
        </div>

        {/* Title & Button Row */}
        <div className="flex flex-col md:flex-row items-center mb-12 px-4">
          <h2 className="text-5xl md:text-[65px] font-bold text-white uppercase leading-none drop-shadow-sm text-left w-full">
            WACHSTUMSCHANCEN NUTZEN
          </h2>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4 mb-8">
            {topics.map((topic, idx) => (
              <FadeIn key={idx} delay={idx * 0.15}>
                <a href={topic.link} className="flex flex-col relative w-full pt-10 pb-40 px-6 bg-gradient-to-b from-[#eb7614] via-[#e8812c]/90 to-transparent hover:-translate-y-2 transition-transform duration-500 rounded-[2px] h-full block">
                  <h3 className="text-white font-bold italic text-center text-[16px] md:text-[18px] tracking-wide uppercase mb-6 h-12 flex items-center justify-center leading-tight whitespace-pre-line drop-shadow-sm">
                    {topic.title}
                  </h3>
                  {topic.text && (
                    <p className="text-white text-[12px] md:text-[13px] leading-relaxed text-left opacity-95">
                      {topic.text.substring(0, 203)}
                    </p>
                  )}
                </a>
              </FadeIn>
            ))}
        </div>

      </div>
    </section>
  );
};

export default TopicsSection;
