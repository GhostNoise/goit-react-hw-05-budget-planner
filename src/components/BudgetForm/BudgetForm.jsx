import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import Form from '../helpers/Form/Form';
import Label from '../helpers/Label/Label';
import Input from '../helpers/Input/Input';
import Button from '../helpers/Button/Button';

const labelStyles = `
  margin-bottom: 16px;  
`;

class BudgetForm extends Component {
  static propTypes = {
    setBudget: PropTypes.func.isRequired,
  };

  state = { budget: '' };

  handleChange = e => {
    this.setState({
      budget: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { budget } = this.state;
    const { setBudget } = this.props;

    if (Number(budget) <= 0 || !budget) {
      toast.error('Please, enter your budget!');
    } else {
      setBudget(budget);
    }

    this.setState({ budget: '' });
  };

  render() {
    const { budget } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter your total budget
          <Input
            type="number"
            value={budget}
            onChange={this.handleChange}
            placeholder="Enter total budget"
          />
        </Label>

        <Button label="Save" type="submit" />
      </Form>
    );
  }
}
BudgetForm.propTypes = {
  setBudget: PropTypes.func.isRequired,
};
export default BudgetForm;
