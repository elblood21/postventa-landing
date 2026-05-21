import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

// Variantes para animación de revelado de texto por palabras
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -90 },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0,
    transition: { type: "spring" as const, damping: 12, stiffness: 100 }
  },
};

export const CTA = () => {
  const title = "¿Listo para transformar tu postventa?";
  const words = title.split(" ");

  return (
    <section className="relative py-40 overflow-hidden bg-[#050B14]">
      {/* Background animated glow effects */}
      <motion.div 
        animate={{ 
          x: [-50, 50, -50], 
          y: [-20, 30, -20],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-blue/20 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          x: [50, -50, 50], 
          y: [20, -30, 20],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-brand-orange/10 rounded-full blur-[100px] pointer-events-none" 
      />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 text-center z-10 flex flex-col items-center">
        
        {/* Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring" }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-medium mb-12 backdrop-blur-md shadow-[0_0_30px_rgba(255,255,255,0.05)]"
        >
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles size={16} className="text-brand-orange" />
          </motion.div>
          El futuro de la gestión inmobiliaria
        </motion.div>

        {/* 3D Staggered Text Reveal (No Gradient) */}
        <motion.h2 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-5xl md:text-7xl font-black text-white tracking-tight mb-10 flex flex-wrap justify-center gap-x-4 gap-y-2 [perspective:1000px]"
        >
          {words.map((word, index) => (
            <motion.span 
              key={index} 
              variants={wordVariants}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-16 font-light leading-relaxed"
        >
          Centraliza tus procesos, reduce costos operativos y eleva la satisfacción de tus clientes con la plataforma líder en Chile.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6 w-full sm:w-auto"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-brand-orange text-white font-bold rounded-full overflow-hidden w-full sm:w-auto shadow-[0_0_40px_rgba(243,112,33,0.3)]"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out rounded-full" />
            <span className="relative z-10 text-lg">Agendar Demo Gratuita</span>
            <motion.div
              className="relative z-10"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
            >
              <ArrowRight size={20} />
            </motion.div>
          </motion.button>
          
          <motion.button 
            whileHover={{ backgroundColor: "rgba(255,255,255,0.1)", scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-transparent border border-white/20 text-white font-bold rounded-full transition-colors w-full sm:w-auto text-lg backdrop-blur-sm"
          >
            Hablar con Ventas
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
