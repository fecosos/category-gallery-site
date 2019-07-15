import React, { useRef, useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import pipe from 'lodash/fp/pipe';

import Gallery from './Gallery';
import Navigation from './Navigation';
import Slider from './Slider';

import SwipeGalleryManager from './SwipeGalleryManager';

import './App.scss'


const Logo = () => (
  <div className="logo-wrapper">
    <button>
      <img className="logo-img" src='https://dummyimage.com/75x75.jpg?text=R' alt='Logo' />
    </button>
  </div>
);

const InstagramAnchor = () => (
  <div className="instagram-wrapper">
    <a href="https://instagram.com" rel="noopener noreferrer" target="_blank" >
      @instagram
    </a>
  </div>
);

function App({testState, galleryItems}) {
  const mainEl = useRef(null);
  const [columnWidth, setColumnWidth] = useState(0);
  const [mainWidth, setMainWidth] = useState(0);

  const getColumnWidthFromRef = ref => ref.current.clientWidth / 3;
  const setColumnWidthFromRef = pipe(getColumnWidthFromRef, setColumnWidth);
  const resizeHandler = useCallback(() => {
    setColumnWidth(mainEl);
    setMainWidth(mainEl.current.clientWidth);
  }, [])
  
  useEffect(() => {
    setColumnWidthFromRef(mainEl);
    setMainWidth(mainEl.current.clientWidth);
    window.addEventListener('resize', resizeHandler);
    

    return () => window.removeEventListener('resize', resizeHandler);
  }, [resizeHandler, columnWidth, setColumnWidthFromRef]);

  return (
    <div className="App" >
      <aside style={{ width: columnWidth}}>
        <Logo />
        <Navigation />
        <InstagramAnchor />
      </aside>
      <main ref={mainEl} >
        <Gallery />
        <Slider columnWidth={columnWidth} width={mainWidth} >
          <SwipeGalleryManager />
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
