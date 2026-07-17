import { motion } from 'motion/react';
import { Phone } from 'lucide-react';
import heroBg from '../assets/images/hero_bg_1784123059516.jpg';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100vh] flex items-center justify-center pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Construction site"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900/90"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto mt-12 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-mono font-bold text-white mb-2 tracking-tight uppercase drop-shadow-xl leading-tight">
            AS <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500 filter drop-shadow-lg">Construction</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 drop-shadow-lg capitalize">
            Your dream project starts here.
          </h2>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          AS Construction is a professional construction company delivering high-quality residential, commercial, and industrial construction services. With a commitment to excellence, timely project completion, and customer satisfaction, we build strong foundations for your future.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl font-medium text-yellow-400 mb-10 italic"
        >
          "Quality Construction. Honest Service. Lasting Relationships."
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contact" className="px-8 py-4 bg-yellow-500 text-slate-900 font-bold text-lg rounded-md hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto">
            <Phone size={20} />
            Contact Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
