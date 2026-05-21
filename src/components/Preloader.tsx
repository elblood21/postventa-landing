import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const sequence = async () => {
      // 1. Mostrar el skeleton 
      setStep(1); 
      
      // 2. Aparece el check SOBRE el contrato
      await new Promise(r => setTimeout(r, 1500));
      setStep(2); 
      
      // 3. Desaparece contrato+check, muestra spinner
      await new Promise(r => setTimeout(r, 1000));
      setStep(3); 
      
      // 4. "Cargando postventa" dura 2s. 
      await new Promise(r => setTimeout(r, 2000));
      document.body.style.backgroundColor = '#ffffff'; // CRÍTICO: Preparamos el fondo real
      setStep(4); // Contenido desaparece, interior celular y fondo azul externo se vuelven transparentes
      
      // 5. Iniciar la expansión hacia los lados (pantalla completa)
      await new Promise(r => setTimeout(r, 400));
      setStep(5); 

      // 6. Termina la expansión, se desmonta preloader
      await new Promise(r => setTimeout(r, 1000));
      onComplete(); 
    };
    
    sequence();
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center overflow-hidden pointer-events-none">
      <motion.div
        initial={{ 
          width: 140, height: 280, borderRadius: 32, y: 0, opacity: 1, 
          backgroundColor: "rgba(255, 255, 255, 1)", 
          border: "0px solid rgba(255,255,255,1)",
          boxShadow: "0 0 0 4000px rgba(0, 73, 144, 1)" // La magia: esta sombra ES el fondo azul
        }}
        animate={
          step === 5 
            ? { width: "100vw", height: "100vh", borderRadius: 0, y: 0, opacity: 1, backgroundColor: "rgba(255, 255, 255, 0)", border: "0px solid rgba(255,255,255,0)", boxShadow: "0 0 0 4000px rgba(0, 73, 144, 1)" } // Expansión total
            : step === 4
            ? { width: 140, height: 280, borderRadius: 32, y: 0, opacity: 1, backgroundColor: "rgba(255, 255, 255, 0)", border: "4px solid rgba(255,255,255,1)", boxShadow: "0 0 0 4000px rgba(0, 73, 144, 1)" } // Interior transparente, fondo azul se mantiene
            : { width: 140, height: 280, borderRadius: 32, y: 0, opacity: 1, backgroundColor: "rgba(255, 255, 255, 1)", border: "0px solid rgba(255,255,255,1)", boxShadow: "0 0 0 4000px rgba(0, 73, 144, 1)" }
        }
        transition={{ duration: step >= 4 ? 1.0 : 0.8, ease: [0.65, 0, 0.35, 1] }} 
        className="flex flex-col items-center justify-center relative overflow-hidden"
      >
        {/* Notch del Celular */}
        <motion.div 
          animate={{ opacity: step >= 4 ? 0 : 1 }} 
          transition={{ duration: 0.2 }}
          className="absolute top-4 w-12 h-1.5 bg-gray-200 rounded-full z-20" 
        />

        <AnimatePresence mode="wait">
          {/* FASE 1 y 2: Contrato y Check Overlay */}
          {(step === 1 || step === 2) && (
            <motion.div
              key="contract-phase"
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center w-full px-6"
            >
              {/* Esqueleto del Contrato */}
              <div className={`w-full flex flex-col gap-3 transition-all duration-500 ${step === 2 ? 'blur-sm opacity-40' : ''}`}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-brand-blue/20 rounded flex-shrink-0" />
                  <div className="h-3 w-16 bg-gray-200 rounded-full" />
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-gray-100 rounded-full" />
                  <div className="h-2 w-[90%] bg-gray-100 rounded-full" />
                  <div className="h-2 w-[70%] bg-gray-100 rounded-full" />
                </div>
                <div className="mt-4 p-2 border border-gray-100 rounded bg-gray-50 flex items-center justify-center">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5, ease: "linear" }}
                    className="h-1 bg-brand-orange rounded-full"
                  />
                </div>
              </div>

              {/* Check Overlay */}
              <AnimatePresence>
                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    className="absolute inset-0 flex items-center justify-center z-10"
                  >
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center shadow-lg shadow-green-500/20">
                      <CheckCircle2 className="text-green-500 w-10 h-10" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* FASE 3: Cargando Postventa (Permanece 2 segundos) */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }} // Desaparece rápido antes de volverse transparente
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-2 text-center"
            >
              <div className="relative flex items-center justify-center">
                <div className="absolute w-12 h-12 border-4 border-gray-100 rounded-full" />
                <div className="w-12 h-12 border-4 border-brand-orange border-t-transparent rounded-full animate-spin" />
              </div>
              <motion.span 
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-[10px] font-black text-brand-blue uppercase tracking-widest leading-tight mt-2"
              >
                Cargando<br/>postventa
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
