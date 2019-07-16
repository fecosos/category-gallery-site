import { SET_CATEGORY, SET_CATEGORIES_ORDER } from '../constants';

import {
  CATEGORY_CONCESIONARIAS,
  CATEGORY_VIVIENDAS,
  CATEGORY_BARES,
} from '../constants';

export default function(state = {}, action = {}) {
  if (action.type === SET_CATEGORY) {
    return {
      ...state,
      selected: action.category
    };
  }

  if (action.type === SET_CATEGORIES_ORDER) {
    const { category } = action;
    const categories = [
      category,
      CATEGORY_BARES,
      CATEGORY_CONCESIONARIAS,
      CATEGORY_VIVIENDAS
    ];

    const orderedCategories = Array.from(
      new Set([...categories])
    );
    
    return {
      ...state,
      order: orderedCategories
    };
  }
  
  return state;
}