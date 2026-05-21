import { motion } from 'framer-motion';
import { Smartphone, Users, ClipboardCheck, Calendar, BarChart3, Zap } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4 }
  }
};

export const Features = () => {
  return (
    <section id="features" className="py-32 bg-gray-50 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-24 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-bold tracking-widest uppercase mb-6"
          >
            <Zap size={16} /> Potencia tu operación
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight"
          >
            ¿Qué puede hacer <br className="hidden md:block" /> Postventa por ti?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-2xl mx-auto text-lg"
          >
            La única plataforma que combina reducción de costos, ahorro de tiempo y satisfacción total del propietario.
          </motion.p>
        </div>

        {/* Bento Grid Layout - Expanded for 6 items */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-auto md:auto-rows-[300px]">
          
          {/* Card 1: Ordena tus Reclamos (Large) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            className="md:col-span-3 md:row-span-2 bg-white rounded-3xl p-8 md:p-10 border border-gray-200/60 shadow-xl shadow-gray-200/20 relative overflow-hidden group hover:border-brand-blue/30 transition-colors"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl -mr-32 -mt-32 transition-transform group-hover:scale-110" />
            <div className="relative z-10 h-full flex flex-col">
              <motion.div variants={itemVariants} className="w-12 h-12 bg-brand-blue rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-brand-blue/30">
                <ClipboardCheck size={24} />
              </motion.div>
              <motion.h3 variants={itemVariants} className="text-2xl font-bold text-gray-900 mb-4">Ordena tus Reclamos</motion.h3>
              <motion.p variants={itemVariants} className="text-base text-gray-600 leading-relaxed max-w-sm mb-8">
                Carga fotos, videos y documentos al instante. Automatiza la burocracia y genera reportes para volver a enfocarte en liderar tu negocio.
              </motion.p>
              {/* UI Skeleton */}
              <motion.div variants={itemVariants} className="mt-auto w-full h-32 bg-gray-50 rounded-xl border border-gray-100 overflow-hidden relative p-4 flex flex-col gap-3">
                 <div className="h-2 w-1/3 bg-gray-200 rounded-full animate-pulse" />
                 <div className="flex gap-2">
                   <div className="w-10 h-10 bg-white border border-gray-100 rounded-lg animate-pulse" />
                   <div className="w-10 h-10 bg-white border border-gray-100 rounded-lg animate-pulse" />
                   <div className="w-10 h-10 bg-white border border-gray-100 rounded-lg animate-pulse" />
                 </div>
                 <div className="h-6 w-full bg-brand-orange/10 rounded-lg border border-brand-orange/20 mt-auto" />
              </motion.div>
            </div>
          </motion.div>

          {/* Card 2: Portal de Clientes (Wide) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            className="md:col-span-3 bg-gradient-to-br from-brand-blue to-blue-900 rounded-3xl p-8 border border-transparent shadow-xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
            <div className="relative z-10 h-full flex flex-col justify-center">
              <motion.div variants={itemVariants} className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 backdrop-blur-md">
                <Users size={24} />
              </motion.div>
              <motion.h3 variants={itemVariants} className="text-2xl font-bold text-white mb-3">Portal del Propietario</motion.h3>
              <motion.p variants={itemVariants} className="text-blue-100 leading-relaxed max-w-md">
                Transparencia 24/7. Tus clientes siguen sus solicitudes en tiempo real y acceden a toda la documentación de su propiedad desde un solo lugar.
              </motion.p>
            </div>
          </motion.div>

          {/* Card 3: Atención Remota (Square) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            className="md:col-span-1.5 lg:col-span-1 bg-white rounded-3xl p-8 border border-gray-200/60 shadow-lg hover:border-brand-orange/30 transition-colors"
          >
            <motion.div variants={itemVariants} className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-brand-orange mb-6">
              <Smartphone size={20} />
            </motion.div>
            <motion.h3 variants={itemVariants} className="text-lg font-bold text-gray-900 mb-3">Atención Digital</motion.h3>
            <motion.p variants={itemVariants} className="text-gray-500 text-sm leading-relaxed">
              Verifica garantías de forma remota y coordina soluciones sin traslados innecesarios.
            </motion.p>
          </motion.div>

          {/* Card 4: Coordinación (Square) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            className="md:col-span-1.5 lg:col-span-1 bg-white rounded-3xl p-8 border border-gray-200/60 shadow-lg hover:border-brand-blue/30 transition-colors"
          >
            <motion.div variants={itemVariants} className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-brand-blue mb-6">
              <Calendar size={20} />
            </motion.div>
            <motion.h3 variants={itemVariants} className="text-lg font-bold text-gray-900 mb-3">Control de Equipos</motion.h3>
            <motion.p variants={itemVariants} className="text-gray-500 text-sm leading-relaxed">
              Gestiona el calendario de inspección y asigna tareas a técnicos o contratistas.
            </motion.p>
          </motion.div>

          {/* Card 5: Indicadores (Square/Wide) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            className="md:col-span-1 lg:col-span-1 bg-white rounded-3xl p-8 border border-gray-200/60 shadow-lg hover:border-brand-orange/30 transition-colors"
          >
            <motion.div variants={itemVariants} className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-700 mb-6">
              <BarChart3 size={20} />
            </motion.div>
            <motion.h3 variants={itemVariants} className="text-lg font-bold text-gray-900 mb-3">Indicadores operacionales</motion.h3>
            <motion.p variants={itemVariants} className="text-gray-500 text-sm leading-relaxed">
              Analiza indicadores por área y evita repetir errores en tus futuros proyectos.
            </motion.p>
          </motion.div>

          {/* Card 6: Ahorro (Wide) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            className="md:col-span-2 lg:col-span-2 bg-gray-900 rounded-3xl p-8 border border-white/10 shadow-2xl relative overflow-hidden group"
          >
            <div className="relative z-10 h-full flex flex-col justify-center">
              <motion.div variants={itemVariants} className="w-10 h-10 bg-brand-orange/20 rounded-xl flex items-center justify-center text-brand-orange mb-4">
                <Zap size={20} />
              </motion.div>
              <motion.h3 variants={itemVariants} className="text-xl font-bold text-white mb-2">Eficiencia real</motion.h3>
              <motion.p variants={itemVariants} className="text-gray-400 text-sm max-w-xs">
                Elimina la molestia de preparar y enviar reclamos por mail o formularios web tediosos.
              </motion.p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
