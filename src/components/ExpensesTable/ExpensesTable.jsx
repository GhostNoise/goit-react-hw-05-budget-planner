import React from 'react';
import PropTypes from 'prop-types';
import Button from '../helpers/Button/Button';
import Table from './ExpensesTable.module';

const ExpensesTable = ({ items = [], deleteExpense }) => (
  <Table>
    <thead>
      <tr>
        <th>Expense name</th>
        <th>Expense amount</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {items.map(({ id, name, amount }) => (
        <tr key={id}>
          <td>{name}</td>
          <td>{amount}</td>
          <td>
            <Button label="Delete" onClick={() => deleteExpense(id)} />
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default ExpensesTable;

ExpensesTable.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      amount: PropTypes.number,
    }),
  ).isRequired,
  deleteExpense: PropTypes.func.isRequired,
};
