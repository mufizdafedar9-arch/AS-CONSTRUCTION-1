import { motion } from 'motion/react';
import { CheckCircle, Target, Shield, Construction } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Welcome to AS <span className="text-yellow-500">Construction</span>
          </motion.h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-slate-600 leading-relaxed"
          >
            <p>
              <strong className="text-slate-900">AS Construction</strong> is dedicated to delivering reliable, durable, and innovative construction solutions. Our experienced team combines skilled craftsmanship with modern construction techniques to complete every project efficiently and within budget.
            </p>
            <p>
              Whether it's a dream home, commercial building, renovation, or interior work, we focus on quality, safety, and customer satisfaction.
            </p>
            <p className="font-medium text-slate-900 text-xl border-l-4 border-yellow-500 pl-4">
              Our mission is to turn your vision into reality with precision and professionalism.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <Target className="text-yellow-500 mb-4" size={32} />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Our Vision</h3>
              <p className="text-slate-600 text-sm">To become one of the most trusted construction companies by delivering innovative, sustainable, and high-quality construction solutions.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <Shield className="text-yellow-500 mb-4" size={32} />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Our Mission</h3>
              <ul className="text-slate-600 text-sm space-y-2">
                <li className="flex items-start gap-2"><CheckCircle size={16} className="text-yellow-500 shrink-0 mt-0.5" /> Deliver quality construction services.</li>
                <li className="flex items-start gap-2"><CheckCircle size={16} className="text-yellow-500 shrink-0 mt-0.5" /> Build long-term customer relationships.</li>
                <li className="flex items-start gap-2"><CheckCircle size={16} className="text-yellow-500 shrink-0 mt-0.5" /> Complete projects safely and on schedule.</li>
                <li className="flex items-start gap-2"><CheckCircle size={16} className="text-yellow-500 shrink-0 mt-0.5" /> Maintain honesty and transparency.</li>
              </ul>
            </div>
            <div className="bg-slate-900 text-white p-6 rounded-xl sm:col-span-2 shadow-md">
              <Construction className="text-yellow-500 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Our Commitment</h3>
              <p className="text-slate-300 text-sm">At AS Construction, we believe every building should reflect quality, strength, and excellence. From foundation to finishing, we ensure every detail is completed with care and precision.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
