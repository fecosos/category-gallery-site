import { SET_GALLERY_BY_ID } from '../constants';

export default function(state = {}, action = {}) {
  if (action.type === SET_GALLERY_BY_ID) {
    if(action.id) {
      return {
        ...state,
        isOpen: true
      };
    }
    
    return {
      ...state,
      isOpen: false
    };
  }
  return state
} 