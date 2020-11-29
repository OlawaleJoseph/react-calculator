import React from 'react';
import PropTypes from 'prop-types';

export default function Display({ current }) {
  return (
    <div className="display">
      <div className="display_lower">{current}</div>
    </div>
  );
}

Display.defaultProps = {
  current: '0',
};

Display.propTypes = {
  current: PropTypes.string,
};
