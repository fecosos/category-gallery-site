import { TEST_CONSTANT } from '../constants';

export function testAction(value) {
  return dispatch => {
    dispatch({
      type: TEST_CONSTANT,
      value
    });
  };
}