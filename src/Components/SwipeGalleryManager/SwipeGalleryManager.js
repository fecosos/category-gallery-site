import React from 'react';
import get from 'lodash/get';

import './SwipeGalleryManager.scss';

const SwipeItem = props => {
  if (get(props, 'item.galleryImages')) return props.item.galleryImages.map((image, index) => (
    <div className="SwipeItem" key={index} >
      <img src={image} alt={`${props.item.title} ${index + 1}`} />
    </div>
    )
  )

  return null;
}

const NextItem = ({image}) => {
  if(image) {
    return (
      <div className="NextItem">
        <img src={image} alt={`Siguiente galeria`} />
      </div>
    );
  }

  return null;
  
};

export default class SwipeGalleryManager extends React.Component {
  state = {
    currentItemIndex: 0
  }
  
  componentDidMount() {
  }
  
  render() {
    const { categoryItems} = this.props;
    const { currentItemIndex } = this.state;
    const currentItem = categoryItems[currentItemIndex];
    
    const isLastItem = categoryItems.length - 1 === currentItemIndex;
    const nextImage = isLastItem ?
      get(categoryItems[0], 'galleryImages', [])[0] :
      get(categoryItems[currentItemIndex + 1], 'galleryImages', [])[0];
    
    return (
      <div id="SwipeGalleryManager" className="SwipeGalleryManager" >
        <SwipeItem item={currentItem} />
        <NextItem image={nextImage} />
        {/* <button onClick={() => this.setState({})} ></button> */}
      </div>
    );
  }
}