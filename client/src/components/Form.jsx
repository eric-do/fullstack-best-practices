import React from 'react';
import PropTypes from 'prop-types';
import useForm from '~/hooks/useForm';

function GenericForm({ form: { inputs, title }, onSubmit }) {
  const { renderFormInputs, form } = useForm(inputs);

  const handleSubmit = (event) => {
    event.preventDefault();

    const submit = Object.entries(form).reduce((submitObj, [inputName, inputProps]) => ({
      ...submitObj,
      [inputName]: inputProps.value,
    }), {});

    onSubmit(submit);
  };

  return (
    <form className="generic-form" onSubmit={handleSubmit}>
      <h1>{ title }</h1>
      { renderFormInputs() }
      <button type="submit">
        Submit
      </button>
    </form>
  );
}

GenericForm.defaultProps = {
  form: {
    id: '',
    title: '',
    inputs: {},
    submit: {},
  },
  onSubmit: () => {},
};

GenericForm.propTypes = {
  form: PropTypes.shape({
    title: PropTypes.string,
    inputs: PropTypes.objectOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        label: PropTypes.string,
        type: PropTypes.string,
      }),
    ),
    submit: PropTypes.shape({}),
  }),
  onSubmit: PropTypes.func,
};

export default GenericForm;
