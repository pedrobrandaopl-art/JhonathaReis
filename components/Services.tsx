import React, { useState } from 'react';
import { SERVICES_WORKERS, SERVICES_COMPANIES, WHATSAPP_LINK } from '../constants';
import { ArrowRight, Plus, Users, Building2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { ServiceDetail } from './ServiceDetail';
import { ServiceItem } from '../types';

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeTab, setActiveTab] = useState<'workers' | 'companies'>('workers');

  const handleOpenDetail = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const handleCloseDetail = () => {
    setSelectedService(null);
  };

  const activeServices = activeTab === 'workers' ? SERVICES_WORKERS : SERVICES_COMPANIES;

  return (
    <section id="especialidades" className="py-20 bg-navy-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
      
      {/* Glow effects no background */}
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-gold-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-navy-800/50 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="down">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-gold-500 font-semibold tracking-widest uppercase text-sm mb-3 animate-pulse-slow">
              Especialidades Jurídicas
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Como podemos ajudar você hoje?
            </h3>
            <p className="text-slate-400 text-lg">
              Selecione seu perfil abaixo para ver as soluções especializadas.
            </p>
          </div>
        </ScrollReveal>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-navy-950 p-1 rounded-full border border-slate-800 shadow-xl">
            <button
              onClick={() => setActiveTab('workers')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm sm:text-base font-bold transition-all duration-300 ${
                activeTab === 'workers'
                  ? 'bg-gold-500 text-navy-950 shadow-lg scale-105'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Users className="w-4 h-4 sm:w-5 sm:h-5" />
              PARA TRABALHADORES
            </button>
            <button
              onClick={() => setActiveTab('companies')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm sm:text-base font-bold transition-all duration-300 ${
                activeTab === 'companies'
                  ? 'bg-gold-500 text-navy-950 shadow-lg scale-105'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
              PARA EMPRESAS
            </button>
          </div>
        </div>

        {/* Grid de Serviços - Key force remount for animation */}
        <div key={activeTab} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeServices.map((service, index) => {
            // Lógica para centralizar o último item se ele sobrar na grade de 3 colunas (desktop)
            // 10 itens -> sobra 1 na última linha -> centraliza (col-start-2)
            const isLast = index === activeServices.length - 1;
            const remainder = activeServices.length % 3;
            const gridClass = (isLast && remainder === 1) ? "lg:col-start-2" : "";

            return (
              <ScrollReveal 
                key={service.title} 
                delay={index * 50} 
                direction="up"
                className={gridClass}
              >
                <div 
                  className="group relative bg-navy-800 p-8 rounded-sm border border-slate-700 hover:border-gold-500 transition-all duration-500 hover:shadow-[0_0_30px_rgba(180,151,90,0.15)] hover:-translate-y-2 flex flex-col h-full"
                >
                  {/* Linha dourada animada no topo */}
                  <div className="absolute top-0 left-0 w-0 h-1 bg-gold-500 transition-all duration-500 group-hover:w-full"></div>
                  
                  <div className="w-14 h-14 bg-navy-950 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-700 group-hover:border-gold-500 group-hover:shadow-[0_0_15px_rgba(180,151,90,0.3)]">
                    <service.icon className="w-7 h-7 text-gold-500 group-hover:text-white transition-colors" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-4 group-hover:text-gold-400 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-slate-400 mb-6 leading-relaxed group-hover:text-slate-300 flex-grow text-sm">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                    {/* Botão Saiba Mais (Abre a Página) */}
                    <button 
                      onClick={() => handleOpenDetail(service)}
                      className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-navy-950 border border-slate-600 text-white font-semibold text-xs rounded-sm hover:border-gold-500 hover:text-gold-400 transition-all duration-300 group/btn"
                    >
                      <Plus className="w-4 h-4 mr-2 group-hover/btn:rotate-90 transition-transform" />
                      DETALHES
                    </button>

                    {/* Botão Avaliar Caso (WhatsApp direto) */}
                    <a 
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-gold-600/10 border border-gold-500/50 text-gold-500 font-semibold text-xs rounded-sm hover:bg-gold-500 hover:text-navy-950 transition-all duration-300"
                    >
                      {activeTab === 'workers' ? 'AVALIAR CASO' : 'CONSULTORIA'}
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={300} direction="up">
          <div className="mt-16 text-center">
            <a 
              href={WHATSAPP_LINK}
              className="group relative inline-flex items-center justify-center px-10 py-4 bg-transparent border-2 border-gold-500 text-gold-500 font-bold rounded-sm overflow-hidden transition-all duration-300 hover:text-navy-950 uppercase tracking-wider hover:shadow-[0_0_20px_rgba(180,151,90,0.5)]"
            >
              <span className="absolute inset-0 w-full h-full bg-gold-500 transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0 ease-out"></span>
              <span className="relative z-10 flex items-center gap-2">
                Fale com um Especialista Agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>
        </ScrollReveal>

        {/* Modal / Página Exclusiva */}
        <ServiceDetail 
          service={selectedService} 
          isOpen={!!selectedService} 
          onClose={handleCloseDetail} 
        />
      </div>
    </section>
  );
};