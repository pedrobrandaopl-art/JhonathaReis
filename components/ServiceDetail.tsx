import React, { useEffect } from 'react';
import { X, ArrowRight, CheckCircle2, ArrowLeft, Scale } from 'lucide-react';
import { ServiceItem } from '../types';
import { WHATSAPP_LINK } from '../constants';
import { smoothScrollTo } from '../utils/scroll';

interface ServiceDetailProps {
  service: ServiceItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, isOpen, onClose }) => {
  // Previne rolagem do body quando o modal está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!service || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-navy-950 animate-fade-in-up overflow-hidden flex flex-col">
      
      {/* 1. Sticky Header - Barra Fixa no Topo */}
      <div className="flex-none sticky top-0 z-50 bg-navy-950/90 backdrop-blur-md border-b border-slate-800 shadow-md">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-gold-500 opacity-80">
             <Scale className="w-5 h-5" />
             <span className="text-xs uppercase tracking-widest font-semibold hidden sm:block">Área de Atuação</span>
          </div>

          <button 
            onClick={onClose}
            className="group flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-gold-600/20 text-slate-300 hover:text-gold-400 rounded-full border border-slate-700 hover:border-gold-500/50 transition-all duration-300"
          >
            <span className="text-sm font-semibold uppercase tracking-wide">Fechar</span>
            <div className="bg-slate-700 group-hover:bg-gold-500 rounded-full p-0.5 transition-colors">
              <X className="w-4 h-4 text-navy-950" />
            </div>
          </button>
        </div>
      </div>

      {/* 2. Área de Conteúdo com Scroll */}
      <div className="flex-grow overflow-y-auto custom-scrollbar">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 pb-24">
          
          {/* Header do Conteúdo */}
          <div className="text-center mb-16 relative">
            {/* Glow de fundo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold-500/10 rounded-full blur-[60px] pointer-events-none"></div>
            
            <div className="relative inline-flex items-center justify-center w-24 h-24 bg-navy-900 rounded-2xl border border-gold-500/30 mb-8 shadow-[0_0_40px_rgba(180,151,90,0.15)] animate-float">
              <service.icon className="w-10 h-10 text-gold-500" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              {service.title}
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto"></div>
          </div>

          {/* Corpo do Texto Style "Documento" */}
          <div className="bg-navy-900/40 border border-slate-800 p-8 md:p-12 rounded-sm shadow-2xl relative overflow-hidden">
             
             {/* Texto Principal */}
             <div className="space-y-8 text-slate-300 text-lg md:text-xl leading-relaxed font-light">
               {service.details.map((paragraph, index) => (
                 <p key={index} className={index === 0 ? "text-white font-medium drop-shadow-sm" : ""}>
                   {paragraph}
                 </p>
               ))}
             </div>

             {/* Seção "Como Atuamos" */}
             <div className="mt-16 bg-navy-950/50 p-8 rounded border border-slate-800/60">
                <h4 className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5" />
                  Nossa Estratégia Jurídica
                </h4>
                
                <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                  <div className="flex items-center gap-3 text-slate-300">
                    <span className="w-2 h-2 bg-gold-500 rounded-full shadow-[0_0_10px_#B4975A]"></span>
                    Análise minuciosa de documentos
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <span className="w-2 h-2 bg-gold-500 rounded-full shadow-[0_0_10px_#B4975A]"></span>
                    Cálculo exato das verbas devidas
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <span className="w-2 h-2 bg-gold-500 rounded-full shadow-[0_0_10px_#B4975A]"></span>
                    Atuação combativa em audiências
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <span className="w-2 h-2 bg-gold-500 rounded-full shadow-[0_0_10px_#B4975A]"></span>
                    Busca pela indenização máxima
                  </div>
                </div>
             </div>
          </div>

          {/* 3. Rodapé de Ação */}
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
            <button 
              onClick={(e) => {
                onClose();
                smoothScrollTo('#inicio', e);
              }}
              className="w-full md:w-auto px-8 py-4 bg-transparent border border-slate-600 text-slate-400 font-semibold rounded-sm hover:border-gold-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Voltar para o Início
            </button>

            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-navy-950 font-bold text-lg rounded-sm shadow-[0_0_25px_rgba(180,151,90,0.3)] hover:shadow-[0_0_40px_rgba(180,151,90,0.5)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 animate-pulse-slow"
            >
              FALAR COM ESPECIALISTA AGORA
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>
          
          <p className="text-center text-slate-500 text-sm mt-6">
            Não cobramos para avaliar o seu caso. Atendimento 100% online e seguro.
          </p>

        </div>
      </div>
    </div>
  );
};