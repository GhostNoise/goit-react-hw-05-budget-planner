import { connect } from 'react-redux';
import { getExpenses, getBudget } from '../../redux/selectors/selector';

import Values from './Values';

const mapStateToProps = state => ({
  budget: getBudget(state),
  expenses: getExpenses(state),
});

export default connect(mapStateToProps)(Values);
