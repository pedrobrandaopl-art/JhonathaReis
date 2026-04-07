import React from 'react';
import { Scale, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';
import { NAV_ITEMS, WHATSAPP_LINK } from '../constants';
import { smoothScrollTo } from '../utils/scroll';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 pt-20 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-gold-600 p-1.5 rounded">
                <Scale className="w-5 h-5 text-navy-950" />
              </div>
              <span className="font-serif text-lg font-bold text-slate-100">
                JHONATHA REIS
              </span>
            </div>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Advocacia especializada em Direito Trabalhista. Comprometidos com a ética, transparência e a luta incansável pelos direitos dos trabalhadores.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/jhonatha_reisadv?igsh=MWNkdDltdTVtM2thNg==" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-gold-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/dr-jhonatha-reis-776a2a163" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-gold-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:jhonathareisdr@gmail.com" className="text-slate-400 hover:text-gold-500 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    onClick={(e) => smoothScrollTo(item.href, e)}
                    className="text-slate-400 hover:text-gold-500 text-sm transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-500 shrink-0" />
                <span className="text-slate-400 text-sm">
                  Atendimento Online para todo Brasil
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-500 shrink-0" />
                <a href="mailto:jhonathareisdr@gmail.com" className="text-slate-400 text-sm hover:text-white transition-colors">
                  jhonathareisdr@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href={WHATSAPP_LINK} 
                  className="inline-block mt-2 text-gold-500 font-semibold border-b border-gold-500 hover:text-gold-400 transition-colors"
                >
                  (11) 97454-5194
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-6">Aviso Legal</h4>
            <p className="text-slate-500 text-xs leading-relaxed">
              Este site não promete resultados específicos. Cada causa é analisada individualmente. O conteúdo deste site é informativo e não substitui a consulta com um advogado.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} Dr. Jhonatha Reis Advocacia. Todos os direitos reservados. | Desenvolvido por Pedro Brandão
          </p>
          <p className="text-slate-600 text-xs font-mono text-center md:text-right">
            Jhonatha Reis Ribeiro da Silva – OAB/SP 540.147
          </p>
        </div>
      </div>
    </footer>
  );
};