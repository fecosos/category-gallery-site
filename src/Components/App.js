import React, { useRef, useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import pipe from 'lodash/fp/pipe';

import Gallery from './Gallery';
import Navigation from './Navigation';
import Slider from './Slider';
import Logo from '../assets/Logo';

import { getSelectedSliderDescription, getIsSliderOpen } from '../store/selectors/slider'
import { setCategory } from '../store/actions/category'
import { setGalleryById } from '../store/actions/gallery'


import SwipeGalleryManager from './SwipeGalleryManager';

import './App.scss'


const logoMapDispatchToProps = {
  setCategory,
  setGalleryById
}
const LogoWrapper = connect(null, logoMapDispatchToProps)(({ setCategory, setGalleryById}) => {
  const clickHandler = () => {
    setCategory(null);
    setGalleryById(null);
  }
  return (
    <div className="logo-wrapper">
      <button onClick={clickHandler} >
        {/* <img className="logo-img" src='https://dummyimage.com/75x75.jpg?text=R' alt='Logo' /> */}
        <Logo />
      </button>
    </div>
  )
});

const InstagramAnchor = () => (
  <div className="instagram-wrapper">
    <a href="https://instagram.com" rel="noopener noreferrer" target="_blank" >
      @instagram
    </a>
  </div>
);

function App({ description, isSilderOpen}) {
  const mainEl = useRef(null);
  const [columnWidth, setColumnWidth] = useState(0);
  const [mainWidth, setMainWidth] = useState(0);

  const getColumnWidthFromRef = ref => ref.current.clientWidth / 3;
  const setColumnWidthFromRef = pipe(getColumnWidthFromRef, setColumnWidth);
  const resizeHandler = useCallback(() => {
    setColumnWidth(mainEl);
    setMainWidth(mainEl.current.clientWidth);
  }, []);

  const wheelHandler = useCallback((event) => {
    if (isSilderOpen) {
      console.log('wheel', event)
      const slider = document.getElementById('slider-container');
      slider.scrollLeft += 25;
    }
  }, [isSilderOpen]);
  
  useEffect(() => {
    setColumnWidthFromRef(mainEl);
    setMainWidth(mainEl.current.clientWidth);
    window.addEventListener('resize', resizeHandler);
    // window.addEventListener('wheel', wheelHandler);
    

    return () => {
      window.removeEventListener('resize', resizeHandler);
      window.removeEventListener('wheel', wheelHandler);
    }
  }, [resizeHandler, wheelHandler, columnWidth, setColumnWidthFromRef]);

  return (
    <div className="App" >
      <aside style={{ width: columnWidth}}>
        <LogoWrapper />
        <Navigation />
        <div className={`description${isSilderOpen ? ' opacity-1': ' opacity-0'}`} >
          <ul>
            {
              description.map((li, index) => {
                return <li key={index}>{li}</li>
              })
            }
          </ul>
        </div>
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
  description: getSelectedSliderDescription(state),
  isSilderOpen: getIsSliderOpen(state)
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
