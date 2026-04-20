import { FadeIn } from './FadeIn';
import { useLanguage } from '../context/LanguageContext';

const TopicsSection = () => {
  const { t } = useLanguage();

  const topics = [
    { title: t('topics.pillar1.title'), text: t('topics.pillar1.text'), link: "#sustainability" },
    { title: t('topics.pillar2.title'), text: t('topics.pillar2.text'), link: "#decarbonization" },
    { title: t('topics.pillar3.title'), text: t('topics.pillar3.text'), link: "#infrastructure" },
    { title: t('topics.pillar4.title'), text: t('topics.pillar4.text'), link: "#operational-excellence" }
  ];

  return (
    <section id="topics" className="relative w-full pt-6 pb-0 overflow-hidden">
      
      {/* Banner removed based on feedback */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Intro Text Box */}
        <div className="flex flex-col mb-20 px-4">
          <div className="w-full text-white/90 text-[14px] md:text-[15px] leading-relaxed text-left font-light space-y-4">
            <p>
              {t('topics.intro1')}
            </p>
            <p>
              {t('topics.intro2')}
            </p>
          </div>
        </div>

        {/* Title & Button Row */}
        <div className="flex flex-col md:flex-row items-center mb-6 px-4">
          <h2 className="text-5xl md:text-[65px] font-bold text-white uppercase leading-none drop-shadow-sm text-left w-full break-words hyphens-auto">
            {t('topics.headline')}
          </h2>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4 mb-0">
            {topics.map((topic, idx) => (
              <FadeIn key={idx} delay={idx * 0.15}>
                <a href={topic.link} className="flex flex-col relative w-full pt-10 pb-40 px-6 bg-gradient-to-b from-[#eb7614] via-[#e8812c]/90 to-transparent hover:-translate-y-2 transition-transform duration-500 rounded-[2px] h-full block">
                  <h3 className="text-white font-bold italic text-center text-[16px] md:text-[18px] tracking-wide uppercase mb-6 h-12 flex items-center justify-center leading-tight whitespace-pre-line drop-shadow-sm">
                    {topic.title}
                  </h3>
                  {topic.text && (
                    <p className="text-white text-[14px] md:text-[15px] leading-relaxed text-left opacity-95">
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
