import React from 'react';
import { connect } from 'react-redux';

const GalleryItem = () => (
  <div className="gallery-image-wrapper">
    <img className="gallery-image-item" src='https://dummyimage.com/330x375.jpg?text=img-item' alt='Gallery item' />
  </div>
)

function App({testAction, testState}) {

  return (
    <div className="App">
      <aside>
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
      <main>
        <div className="Gallery gallery-items">
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
        </div>
      </main>
    </div>
  );
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
