import { CHANGE_BUDGET } from '../constants/constants';

const initialState = 0;

const budgetReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_BUDGET:
      return payload;

    default:
      return state;
  }
};
export default budgetReducer;
