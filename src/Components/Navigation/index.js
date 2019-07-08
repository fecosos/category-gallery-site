import Navigation from './Navigation';
import { connect } from 'react-redux';
import { setCategory } from '../../store/actions/category';
import { getSelectedCategory } from '../../store/selectors/category';


const mapStateToProps = state => ({
  selectedCategory: getSelectedCategory(state)
});

const mapDispatchToProps = {
  setCategory
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
