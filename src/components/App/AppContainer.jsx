import { connect } from 'react-redux';
import { getExpenses } from '../../redux/selectors/selector';
import App from './App';

const mapStateToProps = state => ({
  expenses: getExpenses(state),
});

export default connect(mapStateToProps)(App);
