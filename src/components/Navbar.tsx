import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/minimal_construction_logo_1784134300261.jpg';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900 shadow-md py-3' : 'bg-slate-900/90 py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center bg-white rounded-full p-1 overflow-hidden h-14 w-14">
              <img src={logo} alt="AS Construction Logo" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="text-white font-bold text-2xl tracking-tight">
              AS <span className="text-yellow-500">Construction</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-200 hover:text-yellow-400 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-5 py-2.5 rounded-md font-bold transition-colors"
            >
              Get a Quote
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-slate-200 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-800 absolute top-full left-0 w-full shadow-lg border-t border-slate-700">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-200 hover:text-yellow-400 font-medium block px-2 py-1"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-yellow-500 text-slate-900 px-4 py-3 rounded-md font-bold text-center mt-2"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
