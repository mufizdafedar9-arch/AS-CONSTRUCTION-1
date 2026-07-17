import { motion } from 'motion/react';
import { ClipboardList, PenTool, Hammer, CheckSquare, KeyRound } from 'lucide-react';

const steps = [
  { id: 1, title: 'Consultation', desc: 'Understand your requirements and project goals.', icon: ClipboardList },
  { id: 2, title: 'Planning', desc: 'Prepare designs, estimates, and project schedules.', icon: PenTool },
  { id: 3, title: 'Construction', desc: 'Execute the project with quality workmanship.', icon: Hammer },
  { id: 4, title: 'Quality Inspection', desc: 'Ensure every stage meets quality standards.', icon: CheckSquare },
  { id: 5, title: 'Handover', desc: 'Deliver your completed project on time.', icon: KeyRound }
];

export default function WorkProcess() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Our Work <span className="text-yellow-500">Process</span>
          </motion.h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A systematic approach to ensure your project is completed flawlessly, on time, and within budget.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-24 h-24 rounded-full bg-slate-50 border-4 border-white shadow-lg flex items-center justify-center mb-6 relative group-hover:scale-110 group-hover:border-yellow-500 transition-all duration-300">
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 text-yellow-500 flex items-center justify-center font-bold border-2 border-white shadow-sm">
                      {step.id}
                    </div>
                    <Icon size={32} className="text-slate-700 group-hover:text-slate-900 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm px-2">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
