import React from 'react';
import PropTypes from 'prop-types';

function SubmitButton({ isDisabled }) {
  return (
    <input
      type="submit"
      disabled={isDisabled}
    />
  );
}

SubmitButton.defaultProps = {
  isDisabled: false,
};

SubmitButton.propTypes = {
  isDisabled: PropTypes.bool,
};

export default SubmitButton;
