import React from 'react';
import { MousePointerClick, TrendingUp, ShieldCheck, MonitorSmartphone } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { WHATSAPP_LINK } from '../constants';

const REASONS = [
  {
    icon: MonitorSmartphone,
    title: "Atendimento 100% Digital",
    description: "Sem burocracia de deslocamento. Resolvemos tudo pelo WhatsApp e reuniões online, atendendo clientes em todo o Brasil com a mesma eficiência."
  },
  {
    icon: TrendingUp,
    title: "Advocacia de Resultado",
    description: "Não trabalhamos com 'aventuars jurídicas'. Analisamos a viabilidade real do seu caso para buscar a indenização máxima permitida por lei."
  },
  {
    icon: MousePointerClick,
    title: "Honorários no Êxito",
    description: "Confiança total no nosso trabalho: na maioria dos casos, você só paga os honorários se ganharmos a ação. O risco é nosso, não seu."
  },
  {
    icon: ShieldCheck,
    title: "Estratégia Artesanal",
    description: "Fugimos do 'copia e cola'. Cada processo recebe uma tese jurídica personalizada, desenhada especificamente para desmontar a defesa da empresa."
  }
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-gold-600/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-navy-800/20 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Coluna da Esquerda: Texto Persuasivo */}
          <ScrollReveal direction="right">
            <div>
              <div className="inline-block px-3 py-1 mb-4 border border-gold-500/30 rounded-full bg-navy-900/50 backdrop-blur-sm">
                <span className="text-gold-500 text-xs font-bold uppercase tracking-widest">Diferenciais Exclusivos</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                Por que confiar sua causa ao <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300">
                  Dr. Jhonatha Reis?
                </span>
              </h2>
              
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                O Direito Trabalhista mudou. Não basta apenas conhecer a lei; é preciso ter estratégia processual e agilidade. 
                Enquanto escritórios tradicionais tratam você como apenas "mais um número", nós tratamos seu caso como um projeto de vida.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gold-600 text-navy-950 font-bold rounded-sm hover:bg-gold-500 hover:shadow-[0_0_20px_rgba(180,151,90,0.4)] transition-all duration-300"
                >
                  QUERO UM ATENDIMENTO DIFERENCIADO
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Coluna da Direita: Grid de Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {REASONS.map((reason, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="left">
                <div className="group bg-navy-900/50 p-6 rounded-sm border border-slate-800 hover:border-gold-500/50 transition-all duration-300 hover:bg-navy-900 hover:-translate-y-1 h-full">
                  <div className="w-12 h-12 bg-navy-950 rounded-lg flex items-center justify-center mb-4 border border-slate-700 group-hover:border-gold-500 group-hover:shadow-[0_0_15px_rgba(180,151,90,0.2)] transition-all duration-300">
                    <reason.icon className="w-6 h-6 text-gold-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-gold-400 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};