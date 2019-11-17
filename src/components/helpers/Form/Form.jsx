import React from 'react';
import PropTypes from 'prop-types';
import styled from './Form.module.css';

const Form = ({ onSubmit = () => null, children }) => (
  <form onSubmit={onSubmit} className={styled.form}>
    {children}
  </form>
);

export default Form;
Form.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
  onSubmit: PropTypes.func,
};
