import React, { useRef, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Gallery from './Gallery/';

import './App.scss'


function Slider(props) {
  return (
    <section className="Slider" style={{ left: props.left }} >
      {props.children}
    </section>  
  );
}


function App({testAction, testState, galleryItems}) {
  const mainEl = useRef(null);
  const [asideWidth, setAsideWidth] = useState(null);
  const [columnWidth, setColumnWidth] = useState(0);

  useEffect(() => {
    const columnWidth = mainEl.current.clientWidth / 3;
    const { top, right, bottom, left} = mainEl.current.getBoundingClientRect();

    const windowWidth = window.innerWidth;
    
    console.log({
      top,
      right,
      bottom,
      left,
      client: mainEl.current.getBoundingClientRect(),
      windowWidth
    });
    setAsideWidth(columnWidth);
    setColumnWidth(columnWidth)
  }, [asideWidth, testAction]);

  window.addEventListener('resize', event => {
    setAsideWidth(columnWidth);
  });

  return (
    <div className="App" >
      <aside style={{width: asideWidth}}>
        <div className="logo-wrapper">
          <button>
            <img className="logo-img" src='https://dummyimage.com/75x75.jpg?text=R' alt='Logo' />
          </button>
        </div>
        <nav>
          <button>concesionarias</button>
          <button>viviendas</button>
          <button>bares</button>
          <button>el estudio</button>
        </nav>
        <div className="instagram-wrapper">
          <a href="https://instagram.com" rel="noopener noreferrer" target="_blank" >
            @instagram
          </a>
        </div>
      </aside>
      <main ref={mainEl} >
        <Gallery />
        <Slider left={columnWidth}>
          asd
        </Slider>
      </main>
    </div>
  );
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
