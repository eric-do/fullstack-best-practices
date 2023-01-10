import { useState, useEffect } from 'react';
import axios from '~/lib/axios';

function useGetMovies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isPending, setPending] = useState(false);

  useEffect(() => {
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

    getMovies();
  }, []);

  return { movies, error, isPending };
}

export default useGetMovies;
