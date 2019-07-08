import React from 'react';

export default function Slider({ columnWidth, children, isOpen, closeSlider }) {
  const left = isOpen ? `calc(50% - ${columnWidth}px)` : '100%';
  
  return (
    <section className="Slider" style={{ left }} >
      <button onClick={closeSlider} >&gt;</button>
      {children}
    </section>
  );
}
