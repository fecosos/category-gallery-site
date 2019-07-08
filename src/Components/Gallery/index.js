import Gallery from './Gallery'
import { connect } from 'react-redux';
import { setGalleryById } from '../../store/actions/gallery';
import { getGalleryIntros } from '../../store/selectors/gallery';

const mapStateToProps = state => ({
  items: getGalleryIntros(state)
});

const mapDispatchToProps = {
  setGalleryById
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);