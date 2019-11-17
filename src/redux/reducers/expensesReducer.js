import { DELETE_EXPENSE, ADD_EXPENSE } from '../constants/constants';

const initialState = [];

const expensesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_EXPENSE:
      return [...state, payload];
    case DELETE_EXPENSE:
      return state.filter(expense => expense.id !== payload);

    default:
      return state;
  }
};
export default expensesReducer;
