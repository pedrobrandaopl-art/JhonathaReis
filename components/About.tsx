import React from 'react';
import { ShieldCheck, GraduationCap, Award } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-navy-950 overflow-hidden relative">
      {/* Background decoration suave */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-navy-800/50 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Coluna da Imagem (Desktop Only) - Escondida no Mobile */}
          <ScrollReveal direction="right" className="relative hidden lg:flex justify-center lg:justify-end order-1">
             {/* Elementos decorativos atrás da foto */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-gold-500/20 rounded-full blur-[60px] animate-pulse-slow pointer-events-none"></div>
             
             <div className="relative z-10 flex flex-col items-center">
                <img 
                  src="https://i.ibb.co/ZzhqLTBR/Foto-02-Photoroom.png" 
                  alt="Dr. Jhonatha Reis - Advogado Trabalhista" 
                  className="w-auto h-auto max-h-[500px] lg:max-h-[650px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform hover:scale-[1.02] transition-transform duration-700 ease-in-out relative z-10"
                  style={{
                    // Máscara Alpha: Faz a imagem desaparecer suavemente nos últimos 15%, fundindo perfeitamente com o fundo
                    maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
                  }}
                />
             </div>
          </ScrollReveal>

          {/* Coluna do Texto (Direita) - Contém Imagem Mobile */}
          <ScrollReveal direction="left" className="order-2 text-center lg:text-left">
            <h2 className="text-gold-500 font-semibold tracking-widest uppercase text-sm mb-4 animate-pulse-slow">
              Sobre o Advogado
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
              Dr. Jhonatha Reis
            </h3>
            
            {/* Badge OAB */}
            <div className="inline-flex items-center gap-3 bg-navy-900 border border-gold-500/30 px-6 py-2 rounded-full mb-8 shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:border-gold-500/60 transition-colors cursor-default group mx-auto lg:mx-0">
               <ShieldCheck className="w-5 h-5 text-gold-500 group-hover:scale-110 transition-transform" />
               <div className="flex items-center gap-3 text-sm">
                  <span className="text-slate-200 font-semibold tracking-wide">OAB/SP 540.147</span>
               </div>
            </div>

            {/* --- IMAGEM MOBILE (Visível apenas em telas menores que lg) --- */}
            <div className="relative w-full flex justify-center lg:hidden mb-10 mt-2">
               {/* Deco Background Mobile */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-gold-500/20 rounded-full blur-[50px] pointer-events-none"></div>
               
               <img 
                  src="https://i.ibb.co/ZzhqLTBR/Foto-02-Photoroom.png" 
                  alt="Dr. Jhonatha Reis" 
                  className="w-auto h-auto max-h-[400px] object-contain drop-shadow-2xl relative z-10"
                  style={{
                    maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
                  }}
               />
            </div>
            {/* ------------------------------------------------------------- */}

            <div className="space-y-6 text-slate-300 text-lg leading-relaxed opacity-90 mb-10">
              <p>
                Com uma trajetória marcada pela defesa incansável dos trabalhadores, 
                Dr. Jhonatha Reis consolidou-se como uma autoridade em Direito Trabalhista. 
                Sua atuação é pautada na ética, transparência e, acima de tudo, na luta 
                pela dignidade humana nas relações de trabalho.
              </p>
              <p>
                Entendemos que por trás de cada processo existe uma família, uma história e 
                sonhos. Por isso, não tratamos apenas de leis, mas de vidas. Nosso escritório 
                utiliza as mais modernas teses jurídicas para garantir o melhor resultado possível, 
                sempre com atendimento humanizado e estratégico.
              </p>
            </div>

            {/* Diferenciais em Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="group flex flex-col items-center lg:items-start p-6 bg-navy-900/40 rounded-sm border border-slate-800 hover:border-gold-500/40 transition-all duration-300 hover:bg-navy-900/60 hover:-translate-y-1">
                <div className="bg-navy-950 p-3 rounded-full border border-slate-800 mb-4 group-hover:border-gold-500/30 transition-colors">
                  <GraduationCap className="w-6 h-6 text-gold-500" />
                </div>
                <h5 className="text-white font-bold text-lg mb-2">Especialista</h5>
                <p className="text-slate-400 text-sm leading-relaxed text-center lg:text-left">Pós-graduado em Direito e Processo do Trabalho com foco em resultados.</p>
              </div>
              
              <div className="group flex flex-col items-center lg:items-start p-6 bg-navy-900/40 rounded-sm border border-slate-800 hover:border-gold-500/40 transition-all duration-300 hover:bg-navy-900/60 hover:-translate-y-1">
                <div className="bg-navy-950 p-3 rounded-full border border-slate-800 mb-4 group-hover:border-gold-500/30 transition-colors">
                  <Award className="w-6 h-6 text-gold-500" />
                </div>
                <h5 className="text-white font-bold text-lg mb-2">Combativo</h5>
                <p className="text-slate-400 text-sm leading-relaxed text-center lg:text-left">Atuação estratégica, firme e focada na maximização dos direitos do cliente.</p>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};