
import './App.css'
import React, { useState, useEffect } from 'react';
import MovieList from './MovieList'
import Header from './Header'
import { fetchPopularMovies, searchMovies } from './api';
import Favorite from './Favorite';
import ListFavorite from './ListFavorite';



function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchPopularMovies().then(data => setMovies(data));
  }, []);

  //recherche de films
  const handleSearch = (query) => {
    if (query) {
      searchMovies(query).then(data => {
        console.log("films: ", data)
        if (data) { setMovies(data) }
        else { setMovies([]); }
      });
    } else {
      fetchPopularMovies().then(data => setMovies(data));
    }
  }
// afficher de nouveau la liste des films populaires
  const resetMovies = () => {
    fetchPopularMovies().then(data => setMovies(data));
  };

  const [favorites, setFavorites] = useState([]);

const addFavorite = (movie) => {
  if (!favorites.find(fav => fav.id === movie.id)) {
    setFavorites([...favorites, movie]);
  }
};

  return (
    <>
      <Header onSearch={handleSearch} onReset={resetMovies} />
      <div className='mx-10 my-10'>
      <MovieList movies={movies} ComponentFav={(props) => <Favorite {...props} onAddFavorite={addFavorite} />} />
      <hr />
      <ListFavorite favorites={favorites} />

      </div>
    </>
  )
}

export default App
