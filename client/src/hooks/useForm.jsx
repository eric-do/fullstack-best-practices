// I: a list of input fields and their respective properties
// O: a) a function to render the fields, b) the input state

import React, { useState, useCallback } from 'react';
import InputField from '~/components/InputField';

function useForm(inputsConfig) {
  const [form, setForm] = useState(inputsConfig);

  const handleInputChange = useCallback((event) => {
    const { name, value } = event.target;

    const update = {
      ...form,
      [name]: {
        ...form[name],
        value,
      },
    };
    setForm(update);
  }, [form]);

  function renderFormInputs() {
    return Object.values(form).map(({
      id,
      isDisabled,
      type,
      label,
      name,
      value,
    }) => (
      <InputField
        id={id}
        key={id}
        isDisabled={isDisabled}
        type={type}
        label={label}
        name={name}
        value={value}
        handleInput={handleInputChange}
      />
    ));
  }
  return { renderFormInputs, form };
}

export default useForm;
