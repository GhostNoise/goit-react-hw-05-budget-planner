import React from 'react';
import PropTypes from 'prop-types';
import StyledLabel from './Label.module';

const Label = ({ children, customStyles }) => (
  <StyledLabel customStyles={customStyles}>{children}</StyledLabel>
);

export default Label;

Label.propTypes = {
  children: PropTypes.PropTypes.arrayOf(PropTypes.any).isRequired,
  customStyles: PropTypes.string.isRequired,
};
