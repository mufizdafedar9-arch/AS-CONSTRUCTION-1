import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const reasons = [
  "Experienced Construction Team",
  "High-Quality Materials",
  "On-Time Project Delivery",
  "Transparent Pricing",
  "Modern Construction Techniques",
  "Customer Satisfaction",
  "Safe Working Standards",
  "Professional Project Management"
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-yellow-500">AS Construction</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 rounded-full mb-8"></div>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              We don't just build structures; we build trust. Our commitment to excellence and transparent processes ensures that your project is in safe hands from start to finish.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-yellow-500 shrink-0" size={24} />
                  <span className="font-medium text-slate-200">{reason}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80" 
              alt="Construction worker"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 border-l-4 border-yellow-500 pl-4">
              <p className="text-xl font-bold text-white">Quality without compromise.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
