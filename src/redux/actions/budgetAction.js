import { CHANGE_BUDGET } from '../constants/constants';

const setBudget = value => ({
  type: CHANGE_BUDGET,
  payload: value,
});

export default setBudget;
