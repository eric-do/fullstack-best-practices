import React from 'react';
import PropTypes from 'prop-types';

function MovieEntry({ movie }) {
  return (
    <div>{ movie.title }</div>
  );
}

MovieEntry.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieEntry;
