import React from 'react';
import PropTypes from 'prop-types';
import {
  calculateBalance,
  calculateTotalExpenses,
} from '../../helpersFunction/calculateFunctions';
import Stat from '../Stat/Stat';
import Container from './Values.module';

const Values = ({ budget, expenses }) => {
  const totalExpenses = calculateTotalExpenses(expenses);
  const balance = calculateBalance(budget, totalExpenses);

  return (
    <Container>
      <Stat label="Budget" value={budget} isPositive />
      <Stat label="Expenses" value={totalExpenses} />
      <Stat label="Balance" value={balance} isPositive={balance >= 0} />
    </Container>
  );
};

export default Values;

Values.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      amount: PropTypes.number,
      id: PropTypes.string,
    }),
  ).isRequired,
  budget: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
