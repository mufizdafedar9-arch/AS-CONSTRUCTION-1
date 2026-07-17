import { useState } from 'react';
import { motion } from 'motion/react';
import projectExterior from '../assets/images/WhatsApp Image 2026-07-16 at 8.24.35 PM (1).jpeg';
import projectFoundation from '../assets/images/WhatsApp Image 2026-07-16 at 8.24.24 PM (2).jpeg';
import projectConcrete from '../assets/images/WhatsApp Image 2026-07-16 at 8.24.23 PM (2).jpeg';
import projectExcavation from '../assets/images/WhatsApp Image 2026-07-16 at 8.24.24 PM (1).jpeg';

export default function Gallery() {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Our <span className="text-yellow-500">Projects</span>
          </motion.h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A glimpse into our portfolio of successfully completed projects that stand as a testament to our quality and dedication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onClick={() => setActiveImage(projectExterior)}
            className="group relative h-80 rounded-xl overflow-hidden cursor-pointer bg-slate-900 flex flex-col justify-end p-6 border border-slate-800 hover:border-yellow-500 transition-colors"
          >
            <img 
              src={projectExterior} 
              alt="Building Exterior" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-800/20"></div>
            <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-white">Building Exterior</h3>
              <p className="text-slate-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                View Project Details &rarr;
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onClick={() => setActiveImage(projectFoundation)}
            className="group relative h-80 rounded-xl overflow-hidden cursor-pointer bg-slate-900 flex flex-col justify-end p-6 border border-slate-800 hover:border-yellow-500 transition-colors"
          >
            <img 
              src={projectFoundation} 
              alt="Foundation Work" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-800/20"></div>
            <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-white">Foundation Work</h3>
              <p className="text-slate-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                View Project Details &rarr;
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            onClick={() => setActiveImage(projectConcrete)}
            className="group relative h-80 rounded-xl overflow-hidden cursor-pointer bg-slate-900 flex flex-col justify-end p-6 border border-slate-800 hover:border-yellow-500 transition-colors"
          >
            <img 
              src={projectConcrete} 
              alt="Concrete Pouring" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-800/20"></div>
            <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-white">Concrete Pouring</h3>
              <p className="text-slate-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                View Project Details &rarr;
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            onClick={() => setActiveImage(projectExcavation)}
            className="group relative h-80 rounded-xl overflow-hidden cursor-pointer bg-slate-900 flex flex-col justify-end p-6 border border-slate-800 hover:border-yellow-500 transition-colors"
          >
            <img 
              src={projectExcavation} 
              alt="Excavation" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-800/20"></div>
            <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-white">Excavation</h3>
              <p className="text-slate-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                View Project Details &rarr;
              </p>
            </div>
          </motion.div>
        </div>
        {activeImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={() => setActiveImage(null)}>
            <div className="relative max-w-5xl w-full max-h-full overflow-hidden rounded-3xl" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="absolute top-4 right-4 z-20 rounded-full bg-slate-900/90 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 transition"
                onClick={() => setActiveImage(null)}
              >
                Close
              </button>
              <img
                src={activeImage}
                alt="Full project view"
                className="h-[80vh] w-full object-contain rounded-3xl bg-slate-900"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
