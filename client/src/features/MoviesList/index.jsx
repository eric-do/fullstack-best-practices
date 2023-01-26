import React from 'react';
import MovieEntry from './components/MovieEntry';
import MovieForm from './components/MovieForm';
import useGetMovies from './api/useGetMovies';

function MoviesList() {
  const {
    movies,
    error,
    isPending,
  } = useGetMovies();

  return (
    <div>
      <MovieForm />
      { error && <div>There was an error </div> }
      { isPending && <div>Making request</div> }
      {
        !error && movies.map((movie) => (
          <MovieEntry movie={movie} key={movie} />
        ))
      }
    </div>
  );
}

export default MoviesList;
