import { connect } from 'react-redux';
import { deleteExpense } from '../../redux/actions/expensesAction';
import ExpensesTable from './ExpensesTable';
import { getExpenses } from '../../redux/selectors/selector';

const mapStateToProps = state => ({
  items: getExpenses(state),
});

const mapDispatchToProps = {
  deleteExpense,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpensesTable);
