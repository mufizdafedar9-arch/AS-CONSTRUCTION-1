import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  const areas = ['Belgaum (Belagavi)', 'Bhatkal', 'Kolhapur', 'Pune', 'Kerala', 'Dubai'];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Contact <span className="text-yellow-500">Us</span>
          </motion.h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ready to start your next construction project? Get in touch with us today for a consultation or quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-yellow-500 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Office Address</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Mannat Colony, Plot No. 44/45<br />
                      Mahantesh Nagar<br />
                      Belgaum (Belagavi), Karnataka, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-yellow-500 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Phone & WhatsApp</h4>
                    <p className="text-slate-600 text-sm mb-1">
                      <a href="tel:9036826820" className="hover:text-yellow-500 transition-colors">9036826820</a>
                    </p>
                    <p className="text-slate-600 text-sm">
                      <a href="tel:7770006069" className="hover:text-yellow-500 transition-colors">7770006069</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-yellow-500 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                    <p className="text-slate-600 text-sm break-all">
                      <a href="mailto:Asconstruction1876@gmail.com" className="hover:text-yellow-500 transition-colors">Asconstruction1876@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-xl text-white shadow-md">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <MapPin className="text-yellow-500" /> Areas We Serve
              </h3>
              <div className="flex flex-wrap gap-2">
                {areas.map((area, index) => (
                  <span key={index} className="bg-slate-800 text-slate-300 text-sm px-3 py-1.5 rounded-full border border-slate-700">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 h-full">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Request a Quote</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                    <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all bg-slate-50" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                    <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all bg-slate-50" placeholder="+91 98765 43210" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all bg-slate-50" placeholder="john@example.com" />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">Service Required</label>
                  <select id="service" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all bg-slate-50">
                    <option value="">Select a service</option>
                    <option value="residential">Residential Construction</option>
                    <option value="commercial">Commercial Construction</option>
                    <option value="renovation">Renovation & Remodeling</option>
                    <option value="interior">Interior & Exterior Works</option>
                    <option value="civil">Civil Works</option>
                    <option value="turnkey">Turnkey Projects</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Project Details</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all bg-slate-50 resize-none" placeholder="Tell us about your project requirements..."></textarea>
                </div>

                <button type="button" className="w-full bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2">
                  <Send size={20} />
                  Submit Request
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
