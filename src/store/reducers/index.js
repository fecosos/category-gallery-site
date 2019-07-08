import { combineReducers } from 'redux';

import galleryItems from './galleryItems';
import slider from './slider';
import category from './category';

export default combineReducers({
  galleryItems,
  slider,
  category
});