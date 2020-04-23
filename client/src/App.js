import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';
import SavedList from './Movies/SavedList';
import { Route, Switch } from "react-router-dom";


const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };
console.log(movieList);
  return (
    <div>
    <SavedList list={savedList} />
<Switch>

  <Route exact path="/">
    <MovieList movies={movieList} />
  </Route>

  <Route path="/movie/:id" component={Movie}/> 

</Switch>
    </div>
  );
};

export default App;
