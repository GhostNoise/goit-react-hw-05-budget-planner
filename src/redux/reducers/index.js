import { combineReducers } from 'redux';
import budgetReducer from './budgetReducer';
import expensesReducer from './expensesReducer';

const rootReducer = combineReducers({
  budget: budgetReducer,
  expenses: expensesReducer,
});

export default rootReducer;
