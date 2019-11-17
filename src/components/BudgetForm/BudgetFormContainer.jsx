import { connect } from 'react-redux';
import setBudget from '../../redux/actions/budgetAction';

import BudgetForm from './BudgetForm';

const mapDispatchToProps = {
  setBudget,
};

export default connect(
  null,
  mapDispatchToProps,
)(BudgetForm);
