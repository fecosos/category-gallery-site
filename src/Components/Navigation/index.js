import Navigation from './Navigation';
import { connect } from 'react-redux';
import { setCategory } from '../../store/actions/category';
import { getSelectedCategory, getNavitemActive } from '../../store/selectors/category';
import { setGalleryById } from '../../store/actions/gallery'


const mapStateToProps = state => ({
  selectedCategory: getSelectedCategory(state),
  navitemActive: getNavitemActive(state)
});

const mapDispatchToProps = {
  setCategory,
  setGalleryById
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
