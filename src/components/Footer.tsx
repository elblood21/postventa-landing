import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center mb-6">
            <Logo className="h-10 grayscale brightness-200 contrast-200" />
          </div>
          <p className="mb-8 leading-relaxed">
            La plataforma líder en gestión de postventa inmobiliaria en Chile. Transformando la eficiencia y la experiencia del cliente.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors"><Globe size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Globe size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Globe size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 text-lg">Soluciones</h4>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-white transition-colors">Inmobiliarias</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Constructoras</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Administradoras</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Pre-entrega</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 text-lg">Empresa</h4>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Casos de Éxito</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Términos y Privacidad</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 text-lg">Contacto</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3"><Mail size={18} className="text-brand-orange" /> contacto@postventa.cl</li>
            <li className="flex items-center gap-3"><Phone size={18} className="text-brand-orange" /> +56 9 94981050</li>
            <li className="flex items-center gap-3"><MapPin size={18} className="text-brand-orange" /> Santiago, Chile</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-800 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Postventa. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};
