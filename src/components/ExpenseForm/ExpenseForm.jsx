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

export default class ExpenseForm extends Component {
  static propTypes = {
    newExpense: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    amount: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { newExpense } = this.props;
    const { name, amount } = this.state;
    if (!name || !amount) {
      toast.warn('Please, enter a value in all fields');
    } else if (Number(amount) <= 0) {
      toast.warn('Please, enter valid amount');
    } else {
      newExpense({
        ...this.state,
      });
    }

    this.setState({ name: '', amount: '' });
  };

  render() {
    const { name, amount } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter expense name
          <Input
            type="text"
            name="name"
            placeholder="Enter expense"
            value={name}
            onChange={this.handleChange}
          />
        </Label>
        <Label customStyles={labelStyles}>
          Enter expense amount
          <Input
            type="number"
            name="amount"
            placeholder="Enter amount"
            value={amount}
            onChange={this.handleChange}
          />
        </Label>

        <Button label="Add" type="submit" />
      </Form>
    );
  }
}
