import { motion } from 'framer-motion';
import { LayoutDashboard, Smartphone, ShieldCheck, BarChart3, Clock, Zap } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
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
            className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight"
          >
            Todo el control en <br className="hidden md:block" /> un solo lugar
          </motion.h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-auto md:auto-rows-[280px]">
          
          {/* Card 1: Large Feature */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            className="md:col-span-2 md:row-span-2 bg-white rounded-3xl p-8 md:p-10 border border-gray-200/60 shadow-xl shadow-gray-200/20 relative overflow-hidden group hover:border-brand-blue/30 transition-colors"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl -mr-32 -mt-32 transition-transform group-hover:scale-110" />
            
            <div className="relative z-10 h-full flex flex-col">
              <motion.div variants={itemVariants} className="w-12 h-12 md:w-14 md:h-14 bg-brand-blue rounded-2xl flex items-center justify-center text-white mb-6 md:mb-8 shadow-lg shadow-brand-blue/30">
                <LayoutDashboard size={28} />
              </motion.div>
              <motion.h3 variants={itemVariants} className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Gestión Centralizada</motion.h3>
              <motion.p variants={itemVariants} className="text-base md:text-lg text-gray-600 leading-relaxed max-w-sm mb-8">
                Visualiza el estado de cada solicitud, coordina equipos y comunícate con los propietarios desde un panel de control intuitivo.
              </motion.p>
              
              {/* Fake UI Element */}
              <motion.div variants={itemVariants} className="mt-auto w-full h-28 md:h-32 bg-gray-50 rounded-xl border border-gray-100 overflow-hidden relative shadow-inner">
                <div className="absolute top-4 left-4 right-4 h-4 bg-gray-200 rounded animate-pulse w-1/3" />
                <div className="absolute top-12 left-4 right-4 h-16 bg-white rounded-lg border border-gray-100 flex items-center px-4 gap-4">
                   <div className="w-8 h-8 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange"><Clock size={16} /></div>
                   <div className="space-y-2 flex-1">
                     <div className="h-2 bg-gray-200 rounded w-1/2" />
                     <div className="h-2 bg-gray-100 rounded w-1/4" />
                   </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            className="md:col-span-2 bg-gradient-to-br from-brand-blue to-blue-900 rounded-3xl p-10 border border-transparent shadow-xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
            <div className="relative z-10">
              <motion.div variants={itemVariants} className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 backdrop-blur-md">
                <Smartphone size={24} />
              </motion.div>
              <motion.h3 variants={itemVariants} className="text-2xl font-bold text-white mb-3">Portal de Clientes</motion.h3>
              <motion.p variants={itemVariants} className="text-blue-100 leading-relaxed">
                Tus clientes pueden cargar evidencias, revisar el estado de sus solicitudes y firmar documentos desde su celular, 100% online.
              </motion.p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            className="bg-white rounded-3xl p-8 border border-gray-200/60 shadow-lg shadow-gray-200/10 hover:border-brand-orange/30 transition-colors flex flex-col justify-between"
          >
            <div>
              <motion.div variants={itemVariants} className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-brand-orange mb-6">
                <BarChart3 size={24} />
              </motion.div>
              <motion.h3 variants={itemVariants} className="text-xl font-bold text-gray-900 mb-3">Métricas en Vivo</motion.h3>
              <motion.p variants={itemVariants} className="text-gray-600 text-sm leading-relaxed">
                Genera reportes automáticos y descubre qué fallas se repiten para no cometer los mismos errores en futuros proyectos.
              </motion.p>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            className="bg-white rounded-3xl p-8 border border-gray-200/60 shadow-lg shadow-gray-200/10 hover:border-brand-blue/30 transition-colors flex flex-col justify-between"
          >
            <div>
              <motion.div variants={itemVariants} className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-brand-blue mb-6">
                <ShieldCheck size={24} />
              </motion.div>
              <motion.h3 variants={itemVariants} className="text-xl font-bold text-gray-900 mb-3">Seguridad Total</motion.h3>
              <motion.p variants={itemVariants} className="text-gray-600 text-sm leading-relaxed">
                Toda la información y documentación de tus proyectos centralizada y respaldada bajo altos estándares de seguridad.
              </motion.p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

