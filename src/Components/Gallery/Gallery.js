import React from 'react';
import './Gallery.scss';

const GalleryItem = () => (
  <div className="gallery-image-wrapper">
    <img className="gallery-image-item" src='https://dummyimage.com/330x375.jpg?text=img-item' alt='Gallery item' />
  </div>
);

export default function Gallery() {
  return (
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
  );
}