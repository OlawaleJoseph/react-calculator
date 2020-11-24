import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ num, operator, acBtn }) {
  return (
    <button
      className={`btn ${operator ? 'operatorBtn' : ''} ${acBtn ? 'acBtn' : ''}`}
      type="button"
    >
      { num }
    </button>
  );
}

Button.defaultProps = {
  operator: false,
  acBtn: false,
};

Button.propTypes = {
  num: PropTypes.string.isRequired,
  operator: PropTypes.bool,
  acBtn: PropTypes.bool,
};
