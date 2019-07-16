import get from 'lodash/fp/get';
import map from 'lodash/map';

export const getIsSliderOpen = state => !!get('slider.isOpen')(state);

export const getSelectedSliderDescription = state => {
  const selectedId = get('slider.id')(state);

  const itemYear = get(`galleryItems.${selectedId}.year`)(state);
  
  const description = map(
    get(`galleryItems.${selectedId}.description`)(state),
    (item, index) => {
      if(index === 0) {
        return `${item} [${itemYear}]`;
      }
      return item;
  });

  return description || [];
}