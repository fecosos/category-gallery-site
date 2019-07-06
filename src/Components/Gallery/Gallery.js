import React from 'react';
import { connect } from 'react-redux';
import './Gallery.scss';

const GalleryItem = (props) => {
  const { id, title, url, year } = props.item;

  return (
    <figure className="gallery-image-wrapper" id={id}>
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
  items: [
    {
      id: 0,
      title: 'Foo',
      url: 'https://dummyimage.com/330x375.jpg?text=img-item',
      year: 1986
    },
    {
      id: 1,
      title: 'Bar',
      url: 'https://dummyimage.com/330x375.jpg?text=img-item',
      year: 1996
    },
    {
      id: 2,
      title: 'Biz',
      url: 'https://dummyimage.com/330x375.jpg?text=img-item',
      year: 2006
    },
    {
      id: 3,
      title: 'Lorem Ipsum Dolor',
      url: 'https://dummyimage.com/330x375.jpg?text=img-item',
      year: 2016
    },
    {
      id: 5,
      title: 'Foo Bar Fizz Buzz',
      url: 'https://dummyimage.com/330x375.jpg?text=img-item',
      year: 2026
    }
  ]
});

export default connect(mapStateToProps)(Gallery);