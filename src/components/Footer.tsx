import logo from '../assets/images/minimal_construction_logo_1784134300261.jpg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center justify-center bg-white rounded-full p-1 overflow-hidden h-10 w-10">
                <img src={logo} alt="AS Construction Logo" className="w-full h-full object-cover rounded-full" />
              </div>
              <div className="text-white font-bold text-xl tracking-tight">
                AS <span className="text-yellow-500">Construction</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Building Strong Foundations for a Better Tomorrow. We deliver quality, strength, and excellence in every project.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-yellow-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-yellow-500 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-yellow-500 transition-colors">Our Services</a></li>
              <li><a href="#projects" className="hover:text-yellow-500 transition-colors">Projects Gallery</a></li>
              <li><a href="#contact" className="hover:text-yellow-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" className="hover:text-yellow-500 transition-colors">Residential Construction</a></li>
              <li><a href="#services" className="hover:text-yellow-500 transition-colors">Commercial Construction</a></li>
              <li><a href="#services" className="hover:text-yellow-500 transition-colors">Renovation & Remodeling</a></li>
              <li><a href="#services" className="hover:text-yellow-500 transition-colors">Interior Works</a></li>
              <li><a href="#services" className="hover:text-yellow-500 transition-colors">Turnkey Projects</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex gap-3">
                <span className="text-yellow-500">📍</span>
                <span>Mannat Colony, 44/45, Mahantesh Nagar, Belgaum, Karnataka</span>
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-500">📞</span>
                <span>
                  <a href="tel:9036826820" className="hover:text-white transition-colors">9036826820</a> | <a href="tel:7770006069" className="hover:text-white transition-colors">7770006069</a>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-500">📧</span>
                <a href="mailto:Asconstruction1876@gmail.com" className="hover:text-white transition-colors break-all">Asconstruction1876@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {currentYear} AS Construction. All rights reserved.</p>
          <div className="text-center md:text-right">
            Service Locations: Belgaum • Bhatkal • Kolhapur • Pune • Kerala • Dubai
          </div>
        </div>
        <div className="mt-5 text-base text-yellow-400 text-center md:text-left space-y-1">
          <p><strong className="text-yellow-300">Owner:</strong> <span className="text-yellow-50">TUFAIL AHMED MOMIN</span></p>
          <p><strong className="text-yellow-300">Engineer:</strong> <span className="text-yellow-50">UZAIR AHMED MOMIN</span></p>
        </div>
      </div>
    </footer>
  );
}
