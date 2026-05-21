import { Mail, Phone, MapPin, Globe, Share2 } from 'lucide-react';
import { Logo } from './Logo';

export const Footer = () => {
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
            <li><a href="#" className="hover:text-brand-orange transition-colors">Solicitar Demo</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Soporte</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-brand-orange transition-colors">Centro de Ayuda</a></li>
            <li><a href="#" className="hover:text-brand-orange transition-colors">Guías de Usuario</a></li>
            <li><a href="#" className="hover:text-brand-orange transition-colors">Preguntas Frecuentes</a></li>
            <li><a href="#" className="hover:text-brand-orange transition-colors">Términos de Servicio</a></li>
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
    </footer>
  );
};
