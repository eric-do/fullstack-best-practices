import { useState } from 'react';
import axios from '~/lib/axios';

function useAddMovie() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setPending] = useState(false);

  const addMovie = async (movie) => {
    try {
      setError(null);
      setSuccess(false);
      setPending(true);

      await axios.post('/movies', { movie });

      setSuccess(true);
      setPending(false);
    } catch (err) {
      setError(err);
      setPending(false);
    }
  };

  return {
    success,
    error,
    isPending,
    addMovie,
  };
}

export default useAddMovie;
