import React from 'react';
import PropTypes from 'prop-types';

function MovieEntry({ movie }) {
  return (
    <div>{ movie.title }</div>
  );
}

MovieEntry.propTypes = {
  movie: PropTypes.string.isRequired,
};

export default MovieEntry;
