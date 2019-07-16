import get from 'lodash/fp/get';
import omitBy from 'lodash/omitBy';
import slice from 'lodash/slice';
import keys from 'lodash/keys';
import concat from 'lodash/concat';
import indexOf from 'lodash/indexOf';
import map from 'lodash/map';
import { getGalleryItems } from './gallery';

export const getSelectedCategory = get('category.selected');

export const getCategoryById = (state, id) => {
  const galleryItems = get('galleryItems')(state);
  const category = get(`[${id}].category`)(galleryItems);

  return category;
}

export const getSelectedCategoryItems = state => {
  const sliderItemId = get('slider.id')(state);
  const currentSliderItemCategory = getCategoryById(state, sliderItemId)
  const galleryItems = getGalleryItems(state);

  const categoryItems = omitBy(galleryItems, item => 
    item.category !== currentSliderItemCategory
  );

  const indexes = keys(categoryItems);

  const indexOfSelectedId = indexOf(indexes, sliderItemId);
  const orderedCategoryItemsIndexes = concat(
    slice(indexes, indexOfSelectedId),
    slice(indexes, 0, indexOfSelectedId)
  );

  const orderedCategoryItems = map(orderedCategoryItemsIndexes, index => {
    return {
      ...categoryItems[index],
      id: index
    };
  });

  return orderedCategoryItems;
}