import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';
import { smoothScrollTo } from '../utils/scroll';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative flex flex-col items-center pt-28 lg:pt-20 overflow-hidden bg-[#0a0a0a] lg:min-h-screen lg:justify-center">
      {/* Background Decorativo Minimalista */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Glow sutil no topo direito */}
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-gold-600/5 rounded-full blur-[120px] opacity-50"></div>
        {/* Glow sutil na base esquerda */}
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-navy-800/10 rounded-full blur-[100px] opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-0 lg:gap-20">
          
          {/* 1. IMAGEM (Topo no mobile) */}
          <div className="relative w-full lg:flex-1 flex justify-center lg:justify-end order-1 lg:order-2 z-30 pointer-events-none">
            {/* AUMENTADO max-w NO MOBILE E ADICIONADO mt-6 PARA DESCER A IMAGEM */}
            <div className="relative w-full max-w-[380px] sm:max-w-[480px] lg:max-w-none mx-auto lg:mx-0 flex justify-center lg:justify-end mt-6 lg:mt-0">
              
              {/* Efeito de brilho atrás da cabeça */}
              <div className="absolute top-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-gold-500/10 rounded-full blur-[50px] pointer-events-none"></div>

              {/* Imagem do Advogado */}
              <img 
                src="https://i.ibb.co/gLLbHkNy/image-9-Photoroom.png" 
                alt="Dr. Jhonatha Reis Advogado Trabalhista" 
                className="w-auto h-auto max-h-[50vh] sm:max-h-[60vh] lg:max-h-[85vh] object-contain drop-shadow-2xl relative z-10"
              />
              
              {/* Gradiente de Fusão na Base - REFORÇADO E POSICIONADO PARA ESCONDER CORTE */}
              <div 
                className="absolute -bottom-10 sm:bottom-0 -left-[20%] sm:left-0 w-[140%] sm:w-full h-64 sm:h-32 lg:h-64 z-20 pointer-events-none blur-2xl sm:blur-none"
                style={{
                  background: 'linear-gradient(to top, #0a0a0a 30%, rgba(10, 10, 10, 0.98) 60%, rgba(10, 10, 10, 0) 100%)'
                }}
              ></div>

            </div>
          </div>

          {/* 2. TEXTO (Abaixo no mobile - COM MARGEM NEGATIVA PARA SUBIR) */}
          <div className="flex-1 w-full max-w-4xl text-center lg:text-left z-40 order-2 lg:order-1 -mt-24 sm:mt-8 lg:mt-0 pb-16 lg:pb-0 relative">
            
            {/* BADGE - ACIMA DO TEXTO */}
            <div className="flex justify-center lg:justify-start mb-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
               <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#0a0a0a]/80 border border-gold-500/30 shadow-[0_4px_20px_rgba(0,0,0,0.8)] backdrop-blur-md ring-1 ring-white/5 w-auto whitespace-nowrap hover:border-gold-500/50 transition-colors">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
                  </span>
                  <span className="text-gold-400 text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase">
                    Atendimento Nacional
                  </span>
               </div>
            </div>

            <h1 className="font-serif font-bold leading-[1.1] drop-shadow-lg mb-6">
              <span 
                className="block text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-slate-100 tracking-tight lg:whitespace-nowrap animate-fade-in-up"
                style={{ animationDelay: '300ms' }}
              >
                Defesa Estratégica de
              </span>
              <span 
                className="block text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-gold-500 italic font-medium lg:whitespace-nowrap mt-1 animate-fade-in-up"
                style={{ animationDelay: '500ms' }}
              >
                Trabalho e Direitos.
              </span>
            </h1>
            
            <p 
              className="text-base sm:text-lg lg:text-xl text-zinc-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light mb-8 animate-fade-in-up px-4 sm:px-0"
              style={{ animationDelay: '700ms' }}
            >
              Escritório especializado na defesa dos direitos do trabalhador. 
              Atuação combativa e 100% digital em todo o Brasil.
            </p>

            <div 
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center lg:justify-start animate-fade-in-up px-4 sm:px-0"
              style={{ animationDelay: '900ms' }}
            >
              <a 
                href={WHATSAPP_LINK}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto group relative inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-[#0a0a0a] font-bold text-base rounded-sm shadow-[0_0_20px_rgba(180,151,90,0.2)] hover:bg-gold-400 transition-all duration-300 overflow-hidden animate-pulse-glow"
              >
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
                <span className="relative z-10 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  FALAR COM ADVOGADO
                </span>
              </a>
              
              <a 
                href="#especialidades"
                onClick={(e) => smoothScrollTo('#especialidades', e)}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-transparent border border-zinc-800 hover:border-gold-500/50 text-slate-300 font-semibold text-base rounded-sm transition-all duration-300 hover:text-white hover:bg-white/5"
              >
                CONHECER ÁREAS DE ATUAÇÃO
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};