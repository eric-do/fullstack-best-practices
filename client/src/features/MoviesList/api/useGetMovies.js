import { useState, useEffect } from 'react';
import axios from '~/lib/axios';

function useGetMovies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isPending, setPending] = useState(false);

  const getMovies = async () => {
    try {
      setError(null);
      setPending(true);

      const updatedMovies = await axios.get('/movies');
      setMovies(updatedMovies);
      setPending(false);
    } catch (err) {
      setError(err);
      setPending(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    movies,
    error,
    isPending,
    getMovies,
  };
}

export default useGetMovies;
