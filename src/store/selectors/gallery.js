import get from 'lodash/fp/get';
import map from 'lodash/map';

export const getGalleryItems = get('galleryItems');

export const getGalleryIntros = (state) => {
  const items = getGalleryItems(state);
  
  return map(items, (item, index) => {
    const { title, year, introImage, category} = item;
    
    return {
      id: index,
      title,
      year,
      category,
      url: introImage
    };
  });
};