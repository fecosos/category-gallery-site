import React from 'react';

import './Gallery.scss';

function GalleryItem({ item, onClick}) {
  const { id, title, url, year } = item;
  return (
    <figure className="gallery-image-wrapper" id={id} onClick={onClick}>
      <img className="gallery-image-item" src={url} alt={title} />
      <figcaption>
        <p>{title}</p>
        <p>({year})</p>
      </figcaption>
    </figure>
  );
};

function Gallery({ items, setGalleryById }) {
  return (
    <div className="Gallery gallery-items">
      {items.map(item => (
        <GalleryItem
          key={item.id}
          onClick={() => setGalleryById(item.id)}
          item={item} />
      ))}
    </div>
  );
}

export default Gallery