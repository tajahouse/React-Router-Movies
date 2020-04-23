import React from 'react';
import { Link } from "react-router-dom";

const SavedList = props => (

  <div className="saved-list">
  
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <Link  className="saved-movie"  to={`/movie/${movie.id}`}>{movie.title}</Link>
    ))}
    <Link className="home-button "to="/">Home</Link>
  </div>
    
);

export default SavedList;
