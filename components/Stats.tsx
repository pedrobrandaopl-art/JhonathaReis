import React from 'react';
import { Counter } from './Counter';
import { ScrollReveal } from './ScrollReveal';

export const Stats: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 py-12 relative overflow-hidden">
      {/* Shine effect overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] animate-shine opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gold-700/20">
          
          <div className="text-center px-4">
            <ScrollReveal delay={0} direction="up">
              <div className="text-3xl md:text-5xl font-bold text-navy-950 mb-2 font-serif drop-shadow-sm">
                <Counter end={1500} prefix="+" />
              </div>
              <div className="text-navy-900 font-bold text-sm md:text-base uppercase tracking-wide opacity-90">
                Casos Avaliados
              </div>
            </ScrollReveal>
          </div>

          <div className="text-center px-4">
            <ScrollReveal delay={100} direction="up">
              <div className="text-3xl md:text-5xl font-bold text-navy-950 mb-2 font-serif drop-shadow-sm">
                <Counter end={98} suffix="%" />
              </div>
              <div className="text-navy-900 font-bold text-sm md:text-base uppercase tracking-wide opacity-90">
                Satisfação
              </div>
            </ScrollReveal>
          </div>

          <div className="text-center px-4">
            <ScrollReveal delay={200} direction="up">
              <div className="text-3xl md:text-5xl font-bold text-navy-950 mb-2 font-serif drop-shadow-sm">
                <Counter end={10} suffix=" Anos" />
              </div>
              <div className="text-navy-900 font-bold text-sm md:text-base uppercase tracking-wide opacity-90">
                De Experiência
              </div>
            </ScrollReveal>
          </div>

          <div className="text-center px-4">
            <ScrollReveal delay={300} direction="up">
              <div className="text-3xl md:text-5xl font-bold text-navy-950 mb-2 font-serif drop-shadow-sm flex justify-center items-center h-[48px] md:h-[60px]">
                <span className="text-2xl md:text-4xl">BRASIL</span>
              </div>
              <div className="text-navy-900 font-bold text-sm md:text-base uppercase tracking-wide opacity-90">
                Atendimento Nacional
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};