import React from 'react';
import PropTypes from 'prop-types';
import Container from './App.module';

import BudgetFormContainer from '../BudgetForm/BudgetForm';
import ValuesContainer from '../Values/ValuesContainer';
import ExpenseFormContainer from '../ExpenseForm/ExpenseFormContainer';
import ExpensesTableContainer from '../ExpensesTable/ExpensesTableContainer';

const App = ({ expenses }) => {
  return (
    <Container>
      <BudgetFormContainer />
      <ValuesContainer />
      <ExpenseFormContainer />
      {expenses.length > 0 && <ExpensesTableContainer />}
    </Container>
  );
};
export default App;

App.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      amount: PropTypes.number,
    }),
  ).isRequired,
};
