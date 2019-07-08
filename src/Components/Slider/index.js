import Slider from './Slider';

import { connect } from 'react-redux';
import { getIsSliderOpen } from '../../store/selectors/slider';
import { closeSlider } from '../../store/actions/slider';


const mapStateToProps = state => ({
  isOpen: getIsSliderOpen(state)
});

const mapDispatchToProps = {
  closeSlider
};

export default connect(mapStateToProps, mapDispatchToProps)(Slider);