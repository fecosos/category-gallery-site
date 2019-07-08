
import { SET_GALLERY_BY_ID } from '../constants';

export function setGalleryById(id) {
  return dispatch => {
    dispatch({
      type: SET_GALLERY_BY_ID,
      id
    });
  };
}