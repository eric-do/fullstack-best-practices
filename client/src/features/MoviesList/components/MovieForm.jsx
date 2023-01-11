import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useAddMovie from '../api/useAddMovie';

function MovieForm({ onSubmit }) {
  const [title, setTitle] = useState('');

  const { addMovie } = useAddMovie();

  const handleTitle = (e) => setTitle(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addMovie({ title });
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={handleTitle}
      />
    </form>
  );
}

MovieForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default MovieForm;
