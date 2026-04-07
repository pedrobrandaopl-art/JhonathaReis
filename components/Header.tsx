import React, { useState, useEffect } from 'react';
import { Scale, Menu, X } from 'lucide-react';
import { NAV_ITEMS, WHATSAPP_LINK } from '../constants';
import { smoothScrollTo } from '../utils/scroll';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    smoothScrollTo(href, e);
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 group cursor-pointer"
          onClick={(e) => smoothScrollTo('#inicio', e)}
        >
          <div className="bg-gradient-to-br from-gold-400 to-gold-600 p-2 rounded-lg group-hover:shadow-[0_0_15px_rgba(180,151,90,0.5)] transition-all duration-300">
            <Scale className="w-6 h-6 text-[#0a0a0a]" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold text-slate-100 tracking-wide group-hover:text-gold-400 transition-colors">
              JHONATHA REIS
            </span>
            <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold">
              Advocacia Trabalhista
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-medium text-slate-300 hover:text-gold-400 transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-gold-500 after:bottom-[-4px] after:left-0 hover:after:w-full after:transition-all duration-300"
            >
              {item.label}
            </a>
          ))}
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-transparent border border-gold-500 text-gold-400 rounded-sm font-semibold text-sm hover:bg-gold-500 hover:text-navy-950 hover:shadow-[0_0_20px_rgba(180,151,90,0.4)] transition-all duration-300 animate-pulse-slow"
          >
            FALE CONOSCO
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-200 hover:text-gold-500 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-[#0a0a0a] shadow-2xl transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-96 border-t border-slate-800' : 'max-h-0'}`}>
        <div className="flex flex-col p-6 space-y-4">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-lg font-medium text-slate-300 hover:text-gold-400 border-b border-slate-800 pb-2"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href={WHATSAPP_LINK}
            className="w-full text-center py-3 bg-gold-600 text-white font-bold rounded shadow-[0_0_15px_rgba(180,151,90,0.4)] animate-pulse"
            onClick={() => setMobileMenuOpen(false)}
          >
            FALE COM UM ADVOGADO
          </a>
        </div>
      </div>
    </header>
  );
};