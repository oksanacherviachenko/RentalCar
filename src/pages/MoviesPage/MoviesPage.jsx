import React, { useState } from 'react';
import { fetchMoviesByQuery } from '../../services/api';
import MovieList from '../../components/MovieList/MovieList';
import styles from './MoviesPage.module.css';

function MoviesPage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = e => {
    e.preventDefault();
    if (!query.trim()) {
      alert('Please enter a valid movie name.');
      return;
    }
    fetchMoviesByQuery(query)
      .then(setMovies)
      .catch(error => {
        console.error('Error fetching movies:', error);
        alert('Something went wrong. Please try again later.');
      });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder=""
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
}

export default MoviesPage;

