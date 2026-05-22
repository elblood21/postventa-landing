import { useState } from 'react';
import { Mail, Phone, Globe, Share2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';

interface FooterProps {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
}

export const Footer = ({ isModalOpen, setIsModalOpen }: FooterProps) => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simular envío de email
    await new Promise(r => setTimeout(r, 1500));
    setFormStatus('success');
    setTimeout(() => {
      setIsModalOpen(false);
      setFormStatus('idle');
    }, 2000);
  };

  return (
    <footer className="bg-[#050B14] text-gray-400 py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left">
        <div className="col-span-1">
          <div className="flex items-center justify-center md:justify-start mb-6">
            <Logo className="h-10 grayscale brightness-200 contrast-200" />
          </div>
          <p className="mb-8 leading-relaxed text-sm max-w-xs mx-auto md:mx-0">
            La plataforma líder en gestión de postventa inmobiliaria en Chile. Digitalizamos la comunicación entre inmobiliarias y propietarios.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="https://www.linkedin.com/company/postventa-cl/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all">
              <Globe size={18} />
            </a>
            <a href="https://www.instagram.com/postventa.cl/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all">
              <Share2 size={18} />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Soporte</h4>
          <ul className="space-y-4 text-sm">
            <li>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="hover:text-brand-orange transition-colors cursor-pointer text-left font-medium"
              >
                Contáctanos
              </button>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Contacto</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                <Mail size={16} />
              </div>
              contacto@postventa.cl
            </li>
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                <Phone size={16} />
              </div>
              +56 9 94981050
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-center text-xs tracking-wide">
        <p>&copy; {new Date().getFullYear()} Postventa.cl - Todos los derechos reservados.</p>
      </div>

      {/* Contact Modal (More compact) */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-gray-950/80 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-[1.5rem] p-6 md:p-8 shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-900 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="mb-6">
                <h3 className="text-2xl font-black text-brand-blue mb-1">Contáctanos</h3>
                <p className="text-sm text-gray-500">Te responderemos a la brevedad.</p>
              </div>

              {formStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-8 text-center"
                >
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-500 mx-auto mb-4">
                    <X size={24} className="rotate-45" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">¡Enviado!</h4>
                  <p className="text-sm text-gray-500">Gracias por contactarnos.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 mb-1 uppercase tracking-widest">Nombre</label>
                    <input required type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all" placeholder="Tu nombre..." />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 mb-1 uppercase tracking-widest">Email</label>
                    <input required type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all" placeholder="tu@email.com" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 mb-1 uppercase tracking-widest">Mensaje</label>
                    <textarea required rows={3} className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all resize-none" placeholder="¿Cómo podemos ayudarte?"></textarea>
                  </div>
                  <button 
                    disabled={formStatus === 'submitting'}
                    className="w-full py-4 bg-brand-blue text-white text-sm font-bold rounded-lg hover:bg-brand-blue/90 transition-all shadow-lg shadow-brand-blue/20 disabled:opacity-50"
                  >
                    {formStatus === 'submitting' ? 'Enviando...' : 'Enviar mensaje'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
};
