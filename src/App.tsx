import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClientSection } from './components/ClientSection';
import { Features } from './components/Features';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { Preloader } from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    if (loading || isContactModalOpen) {
      document.body.style.overflow = 'hidden';
      if (loading) window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.backgroundColor = '#ffffff'; // Fallback de seguridad
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [loading, isContactModalOpen]);

  return (
    <div className={`min-h-screen bg-white selection:bg-brand-orange/30 selection:text-brand-blue ${loading ? 'h-screen overflow-hidden fixed w-full' : ''}`}>
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <Navbar />
      <main>
        <Hero />
        <ClientSection />
        <Features />
        <CTA onOpenContact={() => setIsContactModalOpen(true)} />
      </main>
      <Footer isModalOpen={isContactModalOpen} setIsModalOpen={setIsContactModalOpen} />
    </div>
  );
}

export default App;
