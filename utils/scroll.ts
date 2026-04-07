import React from 'react';

export const smoothScrollTo = (targetId: string, e?: React.MouseEvent | React.TouchEvent) => {
  if (e) {
    e.preventDefault();
  }
  
  const target = document.querySelector(targetId);
  if (!target) return;

  const headerOffset = 100; // Ajuste para compensar o header fixo
  const elementPosition = target.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
};