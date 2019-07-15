import { connect } from 'react-redux';
import SwipeGalleryManager from './SwipeGalleryManager';

import { getSelectedCategoryItems } from '../../store/selectors/category';

const mapStateToProps = state => ({
  categoryItems: getSelectedCategoryItems(state)
});

export default connect(mapStateToProps)(SwipeGalleryManager);
