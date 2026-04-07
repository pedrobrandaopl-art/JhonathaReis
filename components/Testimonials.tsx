import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import { ScrollReveal } from './ScrollReveal';

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 bg-navy-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="down">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              O que nossos clientes dizem
            </h2>
            <div className="w-20 h-1 bg-gold-500 mx-auto rounded-full"></div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <ScrollReveal key={i} delay={i * 150} direction="up">
              <div className="bg-navy-950 p-8 rounded-sm shadow-lg border border-slate-800 relative hover:border-gold-600/30 transition-colors duration-300">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-700 opacity-50" />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold-500 fill-current animate-pulse-slow" style={{ animationDelay: `${i * 200}ms` }} />
                  ))}
                </div>
                
                <p className="text-slate-300 italic mb-6">"{t.content}"</p>
                
                <div>
                  <p className="text-white font-bold text-lg">{t.name}</p>
                  <p className="text-gold-500 text-sm font-medium">{t.role}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};