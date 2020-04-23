import React from 'react';

const MovieCard = props => {

  console.log({props})
  return(
    <div className="movie-card">
    <h2>{props.movie.title}</h2>
    <div className="movie-director">
      Director: <em>{props.movie.director}</em>
    </div>
    <div className="movie-metascore">
      Metascore: <strong>{props.movie.metascore}</strong>
    </div>
    <h3>Actors</h3>

    {props.stars.map(star => (
      <div key={star} className="movie-star">
        {star}
      </div>
    ))}
  </div>
  );
};

export default MovieCard;
