import React from 'react';
import PropTypes from 'prop-types';

function InputField({
  id,
  isDisabled,
  type,
  label,
  name,
  value,
  handleInput,
}) {
  return (
    <div className="input-field">
      <label htmlFor={id}>
        {label}
        <input
          id={id}
          type={type}
          disabled={isDisabled}
          name={name}
          value={value}
          onChange={handleInput}
        />
      </label>
    </div>
  );
}

InputField.defaultProps = {
  isDisabled: false,
  type: 'text',
  label: '',
  name: '',
  value: '',
};

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
};

export default InputField;
