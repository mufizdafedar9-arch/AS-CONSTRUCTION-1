import { motion } from 'motion/react';
import { Home, Building2, Wrench, Paintbrush, HardHat, Key } from 'lucide-react';

const servicesList = [
  {
    title: 'Residential Construction',
    icon: Home,
    description: 'Building dream homes with modern designs and robust structures.',
    items: ['Independent Houses', 'Villas', 'Apartments', 'Duplex Homes']
  },
  {
    title: 'Commercial Construction',
    icon: Building2,
    description: 'Functional and aesthetic spaces for your business needs.',
    items: ['Office Buildings', 'Shops & Showrooms', 'Warehouses', 'Industrial Structures']
  },
  {
    title: 'Renovation & Remodeling',
    icon: Wrench,
    description: 'Breathing new life into existing structures with expert care.',
    items: ['Home Renovation', 'Building Extensions', 'Structural Repairs', 'Modern Upgrades']
  },
  {
    title: 'Interior & Exterior Works',
    icon: Paintbrush,
    description: 'Premium finishing services to make your space stand out.',
    items: ['False Ceiling', 'Painting', 'Flooring & Tiles', 'POP Work', 'Elevation Design']
  },
  {
    title: 'Civil Works',
    icon: HardHat,
    description: 'Core construction services providing a strong foundation.',
    items: ['RCC Construction', 'Foundation Work', 'Brick Masonry', 'Plastering', 'Concrete Works']
  },
  {
    title: 'Turnkey Projects',
    icon: Key,
    description: 'End-to-end solutions for a hassle-free experience.',
    items: ['Complete planning', 'Design & Architecture', 'Construction execution', 'Handover under one roof']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Our <span className="text-yellow-500">Services</span>
          </motion.h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive construction solutions tailored to meet your specific requirements, delivered with uncompromising quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group"
              >
                <div className="p-8">
                  <div className="w-14 h-14 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors">
                    <Icon size={28} className="text-slate-900" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-6 text-sm">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-center text-slate-700 text-sm font-medium">
                        <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2 shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
