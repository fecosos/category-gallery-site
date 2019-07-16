import { SET_CATEGORY, SET_CATEGORIES_ORDER } from '../constants';

export const setCategory = category => ({
  type: SET_CATEGORY,
  category
});

export const setCategoryOrder = category => ({
  type: SET_CATEGORIES_ORDER,
  category
});