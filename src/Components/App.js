import React, { useRef, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Gallery from './Gallery';
import Navigation from './Navigation';

function App({testAction, testState, galleryItems}) {
  const mainEl = useRef(null);
  const [asideWidth, setAsideWidth] = useState(null);

  useEffect(() => {
    const width = mainEl.current.clientWidth / 3;
    setAsideWidth(width);
  }, [asideWidth, testAction]);

  window.addEventListener('resize', event => {
    console.log({event});
    const width = mainEl.current.clientWidth / 3;
    setAsideWidth(width);
  });

  return (
    <div className="App" >
      <aside style={{width: asideWidth}}>
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
      </main>
    </div>
  );
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
