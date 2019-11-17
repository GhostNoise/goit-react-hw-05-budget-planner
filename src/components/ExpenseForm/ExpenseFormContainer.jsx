import { connect } from 'react-redux';
import { addExpense } from '../../redux/actions/expensesAction';
import ExpenseForm from './ExpenseForm';
import { getBudget, getExpenses } from '../../redux/selectors/selector';

const mapStateToProps = state => ({
  budget: getBudget(state),
  expenses: getExpenses(state),
});

const mapDispatchToProps = dispatch => ({
  newExpense: expense => dispatch(addExpense(expense)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpenseForm);
