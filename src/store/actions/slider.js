import { CLOSE_SLIDER } from '../constants';
import { setGalleryById } from './gallery';

export const closeSlider = () => setGalleryById(false);