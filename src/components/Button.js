import React from 'react';
import PropTypes from 'prop-types';

export default function Button({
  name, operator, acBtn,
}) {
  return (
    <button
      className={`btn ${operator ? 'operatorBtn' : ''} ${acBtn ? 'acBtn' : ''}`}
      type="button"
      value={name}
    >
      {name}
    </button>
  );
}

Button.defaultProps = {
  operator: false,
  acBtn: false,
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  operator: PropTypes.bool,
  acBtn: PropTypes.bool,
};
