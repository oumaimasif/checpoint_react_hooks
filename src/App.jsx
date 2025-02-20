
import './App.css'
import React, { useState, useEffect } from 'react';
import MovieList from './MovieList'
import Header from './Header'
import { fetchPopularMovies, searchMovies } from './api';


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
// afficher de neouveau la liste des films populaires
  const resetMovies = () => {
    fetchPopularMovies().then(data => setMovies(data));
  };

  return (
    <>
      <Header onSearch={handleSearch} onReset={resetMovies} />
      <div className='mx-10 my-10'>
        <MovieList movies={movies} />
      </div>
    </>
  )
}

export default App
