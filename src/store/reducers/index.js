import { combineReducers } from 'redux';

import galleryItems from './galleryItems';
import slider from './slider';

export default combineReducers({
  galleryItems,
  slider
});