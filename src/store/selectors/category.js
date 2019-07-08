import get from 'lodash/fp/get';

export const getSelectedCategory = get('category.selected');

export const getCategoryById = (state, id) => get(`galleryItems.${id}.category`)(state);