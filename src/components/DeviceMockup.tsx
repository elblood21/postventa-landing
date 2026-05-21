import { motion } from 'framer-motion';

const AppSkeleton = () => {
  return (
    <div className="w-full h-full bg-gray-50 flex overflow-hidden">
      {/* Sidebar */}
      <div className="w-16 h-full bg-brand-blue flex flex-col items-center py-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-8 h-8 rounded-lg bg-white/20 animate-pulse" />
        ))}
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="h-12 border-b border-gray-200 bg-white flex items-center justify-between px-4">
          <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
          <div className="h-8 w-8 rounded-full bg-gray-200 animate-pulse" />
        </div>
        
        {/* Dashboard Grid */}
        <div className="p-4 grid grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-24 bg-white rounded-xl border border-gray-100 p-3 flex flex-col gap-2 shadow-sm">
              <div className="h-3 w-1/2 bg-gray-100 rounded animate-pulse" />
              <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse mt-auto" />
            </div>
          ))}
          
          <div className="col-span-3 h-48 bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
             <div className="flex justify-between mb-4">
               <div className="h-4 w-1/4 bg-gray-100 rounded animate-pulse" />
               <div className="h-4 w-1/6 bg-gray-100 rounded animate-pulse" />
             </div>
             <div className="space-y-3">
               {[1, 2, 3].map((i) => (
                 <div key={i} className="h-8 w-full bg-gray-50 rounded flex items-center px-3 gap-3">
                   <div className="h-4 w-4 rounded bg-gray-200 animate-pulse" />
                   <div className="h-3 flex-1 bg-gray-200 rounded animate-pulse" />
                   <div className="h-3 w-16 bg-gray-100 rounded animate-pulse" />
                 </div>
               ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DeviceMockup = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative mx-auto max-w-4xl"
    >
      {/* Device Frame */}
      <div className="bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl border-4 border-gray-800">
        <div className="bg-gray-800 rounded-[2rem] p-1 overflow-hidden border border-gray-700">
          {/* Screen Content */}
          <div className="aspect-video bg-white rounded-[1.8rem] overflow-hidden relative group">
            <AppSkeleton />
            
            {/* Glossy Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 to-transparent opacity-30" />
          </div>
        </div>
      </div>
      
      {/* Decorative Accents */}
      <div className="absolute -z-10 -top-12 -left-12 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl" />
      <div className="absolute -z-10 -bottom-12 -right-12 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl" />
    </motion.div>
  );
};
