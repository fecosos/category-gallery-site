import { SET_CATEGORY } from '../constants';

export default function(state = {}, action = {}) {
  if (action.type === SET_CATEGORY) {
    return {
      ...state,
      selected: action.category
    };
  }
  
  return state;
}