import shortid from 'shortid';

import { ADD_EXPENSE, DELETE_EXPENSE } from '../constants/constants';

export const addExpense = ({ name, amount }) => ({
  type: ADD_EXPENSE,
  payload: { id: shortid.generate(), name, amount: Number(amount) },
});

export const deleteExpense = id => ({
  type: DELETE_EXPENSE,
  payload: id,
});
