import React from 'react';
import PropTypes from 'prop-types';

import StyledInput from './Input.module';

const Input = ({
  type = '',
  value = '',
  onChange = () => null,
  name = '',
  placeholder,
}) => (
  <StyledInput
    type={type}
    value={value}
    onChange={onChange}
    name={name}
    placeholder={placeholder}
  />
);

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  type: ' text',
  value: '',
  onChange: () => null,
  name: '',
};

export default Input;
