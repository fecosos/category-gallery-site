import React from 'react';
import noop from 'lodash/noop';
import './Gallery.scss';


const GalleryItem = ({ item, onClick, selectedCategory }) => {
  const { id, title, url, year, category } = item;
  const isHidden = selectedCategory && selectedCategory !== category;

  const imageOpacity = isHidden ? 'opacity-0' : 'opacity-1';
  
  const clickHandler = isHidden ? noop : onClick;

  return (
    <figure className={`gallery-image-wrapper ${imageOpacity}`} id={id} onClick={clickHandler} >
      <img className="gallery-image-item" src={url} alt={title} />
      <figcaption>
        <p>{title}</p>
        <p>({year})</p>
      </figcaption>
    </figure>
  );
};

function Gallery({ items, setGalleryById, selectedCategory }) {
  return (
    <div className="Gallery gallery-items">
      {items.map(item => (
        <GalleryItem
          selectedCategory={selectedCategory}
          key={item.id}
          onClick={() => setGalleryById(item.id)}
          item={item} />
      ))}
    </div>
  );
}

export default Gallery