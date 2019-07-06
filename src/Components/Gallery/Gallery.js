import React from 'react';
import { connect } from 'react-redux';
import { getGalleryIntros } from '../../store/selectors/gallery';
import './Gallery.scss';

const GalleryItem = (props) => {
  console.log(props.items)
  const { id, title, url, year } = props.item;

  return (
    <figure className="gallery-image-wrapper" id={id} onClick={() => alert('AAAAAAH!')}>
      <img className="gallery-image-item" src={url} alt={title} />
      <figcaption>
        <p>{title}</p>
        <p>({year})</p>
      </figcaption>
    </figure>
  );
};

function Gallery({ items }) {
  return (
    <div className="Gallery gallery-items">
      {items.map(item => <GalleryItem key={item.id} item={item} /> )}
    </div>
  );
}

const mapStateToProps = state => ({
  items: getGalleryIntros(state)
});

export default connect(mapStateToProps)(Gallery);