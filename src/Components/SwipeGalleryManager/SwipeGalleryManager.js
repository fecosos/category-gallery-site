import React from 'react';
import './SwipeGalleryManager.scss';

const SwipeItem = props => {
  return props.item.galleryImages.map((image, index) => (
    <div className="SwipeItem" key={index} >
      <img src={image} alt={props.item.year} />
    </div>
    )
  )
}

export default class SwipeGalleryManager extends React.Component {
  _handleScroll(event) {
    console.log(event);
  }
  node = null;

  componentDidMount() {
    this.node.addEventListener('scroll', this._handleScroll);
  }
  
  componentWillUnmount() {
    this.node.removeEventListener('scroll', this._handleScroll);
  }
  
  render() {
    const { categoryItems} = this.props;
    
    return (
      <div className="SwipeGalleryManager" ref={node => this.node = node} onDrag={a=> console.log('dag')} >
        {categoryItems.map((item) => (
          <SwipeItem item={item} key={item.title} />
        ))}
      </div>
    );
  }
}