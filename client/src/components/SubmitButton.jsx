import React from 'react';
import PropTypes from 'prop-types';

function SubmitButton({ isDisabled, name }) {
  return (
    <input
      type="submit"
      disabled={isDisabled}
      value={name}
    />
  );
}

SubmitButton.defaultProps = {
  isDisabled: false,
  name: 'Submit',
};

SubmitButton.propTypes = {
  isDisabled: PropTypes.bool,
  name: PropTypes.string,
};

export default SubmitButton;
