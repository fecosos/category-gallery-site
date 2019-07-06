import get from 'lodash/fp/get';
import map from 'lodash/map';

export const getGalleryIntros = (state) => {
  const items = get('galleryItems')(state);
  
  return map(items, (item, index) => {
    const { title, year, introImage} = item;
    
    return {
      id: index,
      title,
      year,
      url: introImage
    }
  });
};