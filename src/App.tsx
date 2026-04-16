import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import { LanguageProvider } from './context/LanguageContext';

import TopicsSection from './components/TopicsSection';
import VideoSection from './components/VideoSection';
import AboutSection from './components/AboutSection';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
    <div className="relative min-h-screen font-sans antialiased selection:bg-[#ef7918] selection:text-black text-gray-200">
      
      {/* Global Background Gradient & Texture */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-[#afb7c1] to-[#606c7f] pointer-events-none">
        <img 
          src="/image/Landingpage_Background_V3.png" 
          alt="Background Texture" 
          className="w-full h-full object-cover object-center opacity-10 mix-blend-overlay"
        />
      </div>

      <div className="relative z-10 w-full overflow-x-hidden">
        <NavBar />
        <HeroSection />
        
        <main className="w-full relative">
          <TopicsSection />
          <VideoSection />
        </main>

      <AboutSection />

      <Footer />
      
      {/* Global Floating Actions */}
      <ScrollToTop />
      
      </div>
    </div>
    </LanguageProvider>
  );
}

export default App;
