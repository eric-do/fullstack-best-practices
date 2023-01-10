import React from 'react';
import MovieEntry from './components/MovieEntry';
import useGetMovies from './api/useGetMovies';

function MoviesList() {
  const { movies, error, isPending } = useGetMovies();
  return (
    <div>
      { error && <div>There was an error </div> }
      { isPending && <div>Making request</div> }
      {
        !error && movies.map((movie) => (
          <MovieEntry movie={movie} />
        ))
      }
    </div>
  );
}

export default MoviesList;
