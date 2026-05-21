import { useState } from 'react';
import { Mail, Phone, MapPin, Globe, Share2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';

export const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center mb-6">
            <Logo className="h-10 grayscale brightness-200 contrast-200" />
          </div>
          <p className="mb-8 leading-relaxed text-sm">
            La plataforma líder en gestión de postventa inmobiliaria en Chile. Digitalizamos la comunicación entre inmobiliarias y propietarios.
          </p>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/company/postventa-cl/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all">
              <Globe size={18} />
            </a>
            <a href="https://www.instagram.com/postventa.cl/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all">
              <Share2 size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Plataforma</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="https://app.postventa.cl" className="hover:text-brand-orange transition-colors">Acceso Empresa</a></li>
            <li><a href="https://app.postventa.cl" className="hover:text-brand-orange transition-colors">Acceso Clientes</a></li>
            <li><a href="#features" className="hover:text-brand-orange transition-colors">Características</a></li>
            <li><a href="https://dev.postventa.net/registro" className="hover:text-brand-orange transition-colors">Comenzar ahora</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Soporte</h4>
          <ul className="space-y-4 text-sm">
            <li>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="hover:text-brand-orange transition-colors cursor-pointer text-left"
              >
                Contáctanos
              </button>
            </li>
            <li><a href="#" className="hover:text-brand-orange transition-colors">Centro de Ayuda</a></li>
            <li><a href="#" className="hover:text-brand-orange transition-colors">Preguntas Frecuentes</a></li>
          </ul>
        </div>

        <div>
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
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400">
                <MapPin size={16} />
              </div>
              Santiago, Chile
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-center text-xs tracking-wide">
        <p>&copy; {new Date().getFullYear()} Postventa.cl - Todos los derechos reservados.</p>
      </div>

      {/* Contact Modal */}
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
              className="relative w-full max-w-lg bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-900 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="mb-8">
                <h3 className="text-3xl font-black text-brand-blue mb-2">Contáctanos</h3>
                <p className="text-gray-500">Déjanos tu mensaje y te responderemos a la brevedad.</p>
              </div>

              {formStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-500 mx-auto mb-6">
                    <X size={32} className="rotate-45" /> {/* Check replacement */}
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">¡Mensaje enviado!</h4>
                  <p className="text-gray-500">Gracias por contactarnos.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Nombre</label>
                    <input required type="text" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all" placeholder="Tu nombre..." />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Email</label>
                    <input required type="email" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all" placeholder="tu@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Mensaje</label>
                    <textarea required rows={4} className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all resize-none" placeholder="¿En qué podemos ayudarte?"></textarea>
                  </div>
                  <button 
                    disabled={formStatus === 'submitting'}
                    className="w-full py-5 bg-brand-blue text-white font-bold rounded-xl hover:bg-brand-blue/90 transition-all shadow-xl shadow-brand-blue/20 disabled:opacity-50"
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
