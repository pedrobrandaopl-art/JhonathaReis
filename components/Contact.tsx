import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { WHATSAPP_LINK, WHATSAPP_NUMBER } from '../constants';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Formatação da mensagem para o WhatsApp
    const text = `*Solicitação de Análise via Site*\n\n` +
      `*Nome:* ${formState.name}\n` +
      `*Telefone:* ${formState.phone}\n` +
      `*E-mail:* ${formState.email}\n` +
      `*Relato do Caso:* ${formState.message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;

    // Simulação de processamento para UX, seguido do redirecionamento
    setTimeout(() => {
      // Abre o WhatsApp em nova aba
      window.open(whatsappUrl, '_blank');

      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', phone: '', message: '' });
      
      // Reset da mensagem de sucesso após 5s
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-24 bg-navy-950 relative overflow-hidden border-t border-slate-900">
      {/* Background Decorativo */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Lado Esquerdo: Informações e Persuasão */}
          <ScrollReveal direction="right">
            <div>
              <div className="inline-block px-3 py-1 mb-6 border border-gold-500/30 rounded-full bg-navy-900/50 backdrop-blur-sm">
                <span className="text-gold-500 text-xs font-bold uppercase tracking-widest">Atendimento Nacional</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                Não deixe seus direitos <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300">
                  prescreverem.
                </span>
              </h2>
              
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                No Direito Trabalhista, o tempo corre contra você. Você tem apenas 2 anos após a saída da empresa para cobrar seus direitos. 
                <strong className="text-slate-200 block mt-2">Agende uma análise preliminar gratuita do seu caso hoje mesmo.</strong>
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center border border-slate-800 group-hover:border-gold-500 transition-colors shrink-0">
                    <Phone className="w-5 h-5 text-gold-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">WhatsApp & Telefone</h4>
                    <p className="text-slate-400 text-sm mb-1">Resposta rápida em horário comercial</p>
                    <a href={WHATSAPP_LINK} className="text-gold-400 hover:text-gold-300 font-semibold transition-colors">
                      (11) 97454-5194
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center border border-slate-800 group-hover:border-gold-500 transition-colors shrink-0">
                    <Mail className="w-5 h-5 text-gold-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">E-mail</h4>
                    <p className="text-slate-400 text-sm mb-1">Para envio de documentos e dúvidas</p>
                    <a href="mailto:jhonathareisdr@gmail.com" className="text-gold-400 hover:text-gold-300 font-semibold transition-colors">
                      jhonathareisdr@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center border border-slate-800 group-hover:border-gold-500 transition-colors shrink-0">
                    <Clock className="w-5 h-5 text-gold-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Horário de Atendimento</h4>
                    <p className="text-slate-400 text-sm">Segunda a Sexta: 09h às 18h</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gold-600/10 border border-gold-500/20 rounded-sm flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <p className="text-gold-200 text-sm">
                  <strong>Sigilo Absoluto:</strong> Todas as informações compartilhadas neste formulário são protegidas pelo sigilo advogado-cliente.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Lado Direito: Formulário */}
          <ScrollReveal direction="left" delay={200}>
            <div className="bg-navy-900 border border-slate-800 p-8 rounded-sm shadow-2xl relative">
              {/* Efeito de brilho na borda */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600"></div>

              <h3 className="text-2xl font-serif font-bold text-white mb-6">Inicie seu Atendimento</h3>
              
              {isSuccess ? (
                <div className="bg-green-500/10 border border-green-500/30 rounded p-6 text-center animate-fade-in-up">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">Mensagem Enviada!</h4>
                  <p className="text-slate-300">Você será redirecionado para o WhatsApp para concluir o atendimento.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1.5">Nome Completo</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full bg-navy-950 border border-slate-700 rounded p-3 text-slate-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all placeholder:text-slate-600"
                      placeholder="Digite seu nome"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-400 mb-1.5">WhatsApp / Celular</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full bg-navy-950 border border-slate-700 rounded p-3 text-slate-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all placeholder:text-slate-600"
                        placeholder="(DDD) 00000-0000"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1.5">E-mail</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full bg-navy-950 border border-slate-700 rounded p-3 text-slate-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all placeholder:text-slate-600"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1.5">Relate seu caso brevemente</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full bg-navy-950 border border-slate-700 rounded p-3 text-slate-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all resize-none placeholder:text-slate-600"
                      placeholder="Ex: Fui demitido sem justa causa e não recebi minhas verbas..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group relative flex items-center justify-center px-8 py-4 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-navy-950 font-bold rounded-sm shadow-lg hover:shadow-gold-500/20 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {isSubmitting ? 'PROCESSANDO...' : 'SOLICITAR ANÁLISE GRÁTIS'}
                      {!isSubmitting && <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                    </span>
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  </button>
                  
                  <p className="text-center text-xs text-slate-500 mt-4">
                    Seus dados não serão compartilhados com terceiros.
                  </p>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};