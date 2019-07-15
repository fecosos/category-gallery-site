import React, { useRef } from 'react';
import './Slider.scss';

export default function Slider({ columnWidth, children, isOpen, closeSlider, width }) {
  const sliderRef = useRef(null);
  const left = isOpen ? `calc(50% - ${columnWidth}px)` : '200%';

  const childrenWithWidth = React.Children.map(children, child => {
    return React.cloneElement(child, { width });
  });
  
  return (
    <section ref={sliderRef} className="Slider" style={{ left }} >
      {
        isOpen ? 
        <div className="content" >
          <button className="close-button" onClick={closeSlider} >&gt;</button>
          {childrenWithWidth}
        </div>
        : null
      }
    </section>
  );
}
