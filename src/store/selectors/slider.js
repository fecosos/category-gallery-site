import get from 'lodash/fp/get';

export const getIsSliderOpen = state => !!get('slider.isOpen')(state);