import React from 'react';
import Form from '~/components/Form';
import useAddMovie from '../api/useAddMovie';
import { movieForm } from '../utils/formConfig';

function MovieForm() {
  const { addMovie } = useAddMovie();

  movieForm.submit.onSubmit = addMovie;

  return (
    <Form form={movieForm} />
  );
}

export default MovieForm;
