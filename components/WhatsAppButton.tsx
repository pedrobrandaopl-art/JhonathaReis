import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.5)] hover:bg-green-600 transition-all duration-300 hover:scale-110 group animate-bounce-slow"
      aria-label="Fale conosco no WhatsApp"
    >
      <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-semibold shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden md:block border border-gray-200">
        Fale Agora
      </span>
      <MessageCircle className="w-8 h-8 text-white fill-current animate-pulse" />
      <div className="absolute inset-0 rounded-full border-2 border-green-400 animate-ping opacity-75"></div>
      <div className="absolute inset-0 rounded-full bg-green-400 opacity-20 animate-pulse"></div>
    </a>
  );
};