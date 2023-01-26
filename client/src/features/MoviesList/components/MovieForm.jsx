import React from 'react';
import Form from '~/components/Form';
import useAddMovie from '../api/useAddMovie';
import { movieForm } from '../utils/formConfig';

function MovieForm() {
  const { addMovie } = useAddMovie();

  return (
    <Form form={movieForm} onSubmit={addMovie} />
  );
}

export default MovieForm;
