import { motion } from 'framer-motion';

const clients = [
  { name: 'Inmobiliaria Miramar', logo: 'https://postventa.cl/wp-content/uploads/2020/08/cliente01-300x300-1.png', url: 'https://app.postventa.cl/miramar/gestionempresa' },
  { name: 'Constructora SW', logo: 'https://postventa.cl/wp-content/uploads/2023/03/constructora_sw.png', url: 'https://constructorasw.postventa.net/' },
  { name: 'Qualsot', logo: 'https://postventa.cl/wp-content/uploads/2020/07/logo-qualsot-redondo.jpg', url: 'https://www.qualsot.com' },
  { name: 'Grupo Arenas', logo: 'https://postventa.cl/wp-content/uploads/2025/08/grupoarenas.png', url: 'https://admin.postventa.net/' },
  { name: 'Constructora RC', logo: 'https://postventa.cl/wp-content/uploads/2021/04/cliente05-300x300-1.png', url: 'https://app.postventa.cl/constructorarc/gestionempresa' },
];

export const ClientSection = () => {
  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-sm font-bold text-gray-400 uppercase tracking-[0.3em]"
          >
            Nuestros clientes
          </motion.p>
        </div>

        <div className="relative">
          <div className="flex overflow-hidden group">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="flex flex-nowrap gap-2 md:gap-24 items-center whitespace-nowrap py-4"
            >
              {[...clients, ...clients].map((client, i) => (
                <div 
                  key={i}
                  className="flex flex-col items-center justify-center min-w-[130px] md:min-w-[280px] transition-transform duration-500 hover:scale-105"
                >
                  <img 
                    src={client.logo} 
                    alt={`Logo ${client.name}`} 
                    className="h-24 md:h-44 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  />
                  <span className="mt-2 text-[11px] font-bold text-gray-400 uppercase tracking-widest opacity-0 hover:opacity-100 transition-opacity duration-300">
                    {client.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Suaves gradientes blancos a los lados para difuminar */}
          <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
