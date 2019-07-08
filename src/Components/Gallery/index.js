import Gallery from './Gallery'
import { connect } from 'react-redux';
import { setGalleryById } from '../../store/actions/gallery';
import { getGalleryIntros } from '../../store/selectors/gallery';
import { getSelectedCategory } from '../../store/selectors/category';

const mapStateToProps = state => ({
  items: getGalleryIntros(state),
  selectedCategory: getSelectedCategory(state)
});

const mapDispatchToProps = {
  setGalleryById
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);