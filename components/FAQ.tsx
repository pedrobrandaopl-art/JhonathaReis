import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const FAQS = [
  {
    q: "Fui demitido, quais são meus direitos?",
    a: "Depende do tipo de demissão. Se foi sem justa causa, você tem direito a aviso prévio, saldo de salário, 13º proporcional, férias vencidas e proporcionais + 1/3, saque do FGTS com multa de 40% e seguro-desemprego."
  },
  {
    q: "A empresa não assinou minha carteira, posso processar?",
    a: "Sim. Se você cumpria horários, recebia ordens e salário, pode pedir o reconhecimento de vínculo empregatício na justiça e receber todos os direitos retroativos dos últimos 5 anos."
  },
  {
    q: "Quanto tempo demora um processo trabalhista?",
    a: "O tempo varia conforme a complexidade e a vara onde corre o processo. Existem casos que se resolvem em meses com acordo, e outros que podem levar anos. Nossa equipe trabalha para agilizar ao máximo."
  },
  {
    q: "Preciso pagar para entrar com o processo?",
    a: "Na maioria dos casos trabalhistas, atuamos com taxa de êxito (ad exitum), ou seja, você só paga um percentual sobre o que ganhar ao final do processo."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-navy-900 border-t border-slate-900/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="down">
          <h2 className="text-3xl font-serif font-bold text-white text-center mb-12">
            Dúvidas Frequentes
          </h2>
        </ScrollReveal>
        
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 100} direction="up">
              <div 
                className={`border rounded-sm overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-gold-500 bg-navy-950' : 'border-slate-800 bg-navy-950/50 hover:border-slate-600'}`}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className={`font-semibold text-lg transition-colors ${openIndex === index ? 'text-gold-400' : 'text-slate-200'}`}>
                    {faq.q}
                  </span>
                  {openIndex === index ? 
                    <Minus className="w-5 h-5 text-gold-500" /> : 
                    <Plus className="w-5 h-5 text-slate-400" />
                  }
                </button>
                
                <div 
                  className={`transition-all duration-500 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-slate-800/50">
                    {faq.a}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};