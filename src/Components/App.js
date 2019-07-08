import React, { useRef, useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import pipe from 'lodash/fp/pipe';

import Gallery from './Gallery';
import Navigation from './Navigation';
import Slider from './Slider';

import './App.scss'


function App({testState, galleryItems}) {
  const mainEl = useRef(null);
  const [columnWidth, setColumnWidth] = useState(0);

  const getColumnWidthFromRef = ref => ref.current.clientWidth / 3;
  const setColumnWidthFromRef = pipe(getColumnWidthFromRef, setColumnWidth);
  const resizeHandler = useCallback(() => {
    setColumnWidth(mainEl);
  }, [])

  useEffect(() => {
    setColumnWidthFromRef(mainEl);
    window.addEventListener('resize', resizeHandler);

    return () => window.removeEventListener('resize', resizeHandler);
  }, [resizeHandler, columnWidth, setColumnWidthFromRef]);

  return (
    <div className="App" >
      <aside style={{ width: columnWidth}}>
        <div className="logo-wrapper">
          <button>
            <img className="logo-img" src='https://dummyimage.com/75x75.jpg?text=R' alt='Logo' />
          </button>
        </div>
        <Navigation />
        <div className="instagram-wrapper">
          <a href="https://instagram.com" rel="noopener noreferrer" target="_blank" >
            @instagram
          </a>
        </div>
      </aside>
      <main ref={mainEl} >
        <Gallery />
        <Slider columnWidth={columnWidth} />
      </main>
    </div>
  );
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
