import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PropTypes from 'prop-types';
import Container from './App.module';

import BudgetFormContainer from '../BudgetForm/BudgetFormContainer';
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange={false}
        draggable
        pauseOnHover
      />
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
