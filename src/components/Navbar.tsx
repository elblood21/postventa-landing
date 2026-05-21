import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar el botón después de scrollear 300px
      if (window.scrollY > 300) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo className="h-10 w-auto" />
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#features" className="hover:text-brand-blue transition-colors">Características</a>
          <a href="#about" className="hover:text-brand-blue transition-colors">Nosotros</a>
          <a href="#contact" className="hover:text-brand-blue transition-colors">Contacto</a>
        </div>

        <AnimatePresence>
          {scrolled && (
            <motion.a 
              href="https://dev.postventa.net/registro"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-brand-blue text-white px-4 py-2 rounded-full text-[13px] font-semibold hover:bg-brand-blue/90 transition-all shadow-lg shadow-brand-blue/20 flex items-center justify-center"
            >
              Comenzar ahora
            </motion.a>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
