import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-32 overflow-hidden bg-white min-h-[90vh] flex items-center">
      <div className="relative max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center z-10 lg:-mt-16">
        
        {/* Lado Izquierdo: Imagen en forma personalizada */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: -40 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full aspect-[3/4] flex items-center justify-center order-2 lg:order-1 -mt-4 lg:-mt-24 overflow-visible"
        >
          {/* Contenedor de recortes para los gradientes (Expandido para ignorar padding) */}
          <div className="absolute -inset-x-6 lg:inset-0 pointer-events-none overflow-hidden lg:overflow-visible h-[120%] lg:h-full">
            {/* Fade azul horizontal detrás del dispositivo */}
            <div className="absolute inset-y-0 -left-[100vw] right-0 bg-gradient-to-r from-brand-blue/10 via-brand-blue/5 to-transparent" />
            
            {/* Overlay de gradiente blanco sobre TODO (forma y dispositivo) */}
            <div className="absolute -bottom-[5.25rem] -left-[100vw] right-0 h-[25.75rem] bg-gradient-to-t from-white via-white/80 to-transparent z-20" />
          </div>
          
          {/* App Skeleton en rectangulo redondeado inclinado */}
          <div className="relative w-[85%] md:w-[75%] h-[70%] md:h-[75%] overflow-hidden rounded-[2rem] md:rounded-[2.5rem] border-4 md:border-8 border-white shadow-2xl rotate-[-15deg] md:rotate-[-20deg] origin-center md:origin-bottom-right bg-gray-50 flex flex-col z-10">
              
              {/* Topbar skeleton */}
              <div className="h-12 md:h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4 md:px-6 shadow-sm shrink-0">
                <div className="w-20 md:w-24 h-3 md:h-4 bg-gray-200 rounded-full animate-pulse" />
                <div className="flex gap-2 md:gap-3">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-200 rounded-full animate-pulse" />
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-brand-blue/30 rounded-full animate-pulse" />
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 flex p-4 md:p-6 gap-4 md:gap-6 overflow-hidden">
                
                {/* Dashboard Grid */}
                <div className="flex-1 flex flex-col gap-4 md:gap-6">
                   <div className="flex gap-3 md:gap-4 shrink-0">
                     <div className="flex-1 h-20 md:h-28 bg-white rounded-xl md:rounded-2xl border border-gray-100 shadow-sm p-3 md:p-5 flex flex-col justify-between">
                       <div className="w-10 h-2 md:h-3 bg-brand-orange/40 rounded-full animate-pulse" />
                       <div className="w-16 h-4 md:h-6 bg-gray-200 rounded-full animate-pulse" />
                     </div>
                     <div className="flex-1 h-20 md:h-28 bg-white rounded-xl md:rounded-2xl border border-gray-100 shadow-sm p-3 md:p-5 flex flex-col justify-between">
                       <div className="w-10 h-2 md:h-3 bg-brand-blue/40 rounded-full animate-pulse" />
                       <div className="w-20 h-4 md:h-6 bg-gray-200 rounded-full animate-pulse" />
                     </div>
                   </div>
                   
                   <div className="flex-1 bg-white rounded-xl md:rounded-2xl border border-gray-100 shadow-sm p-4 md:p-6 flex flex-col gap-3 md:gap-5 overflow-hidden">
                      <div className="w-24 h-3 md:h-4 bg-gray-200 rounded-full animate-pulse mb-1" />
                      {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className="w-full h-8 md:h-12 bg-gray-50 rounded-lg md:rounded-xl flex items-center px-3 md:px-4 gap-3 md:gap-4 shrink-0">
                           <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-200 rounded-full animate-pulse shrink-0" />
                           <div className="flex-1 h-2 md:h-3 bg-gray-200 rounded-full animate-pulse" />
                           <div className="w-12 h-2 md:h-3 bg-brand-blue/20 rounded-full animate-pulse" />
                        </div>
                      ))}
                   </div>
                </div>
              </div>

          </div>
        </motion.div>

        {/* Lado Derecho: Contenido Textual */}
        <div className="flex flex-col order-1 lg:order-2 lg:-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-white text-gray-600 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-brand-blue" />
            Software de postventa
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-4xl font-black tracking-tighter text-[#0A1128] mb-6 leading-[1.1]"
          >
            Digitalizamos el proceso de <br className="hidden md:block" />
            <span className="text-brand-blue">postventa inmobiliaria.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-base text-gray-500 max-w-lg mb-10 leading-relaxed font-medium"
          >
            Olvídate del desorden. Gestiona requerimientos, coordina equipos y comunícate con propietarios desde una única plataforma diseñada para la eficiencia.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a 
              href="https://dev.postventa.net/registro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#0A1128] text-white px-6 py-3 rounded-lg font-bold text-base hover:bg-brand-blue transition-colors flex items-center justify-center gap-2 group w-full sm:w-auto"
            >
              Comenzar ahora 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="bg-white text-[#0A1128] border border-gray-200 px-6 py-3 rounded-lg font-bold text-base hover:border-gray-300 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto shadow-sm">
              <PlayCircle size={18} className="text-brand-orange" />
              Ver video demo
            </button>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
};
