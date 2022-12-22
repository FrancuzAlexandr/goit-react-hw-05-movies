import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import { Error } from 'components/Error/Error';
import { getFetchQuery } from 'utils/fetchAPI';
import css from './Movies.module.css';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoadind] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams('');
  const queryURL = searchParams.get('query') ?? '';

  const onChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    let value = e.currentTarget.search.value;

    e.preventDefault();
    if (value.length === 0) {
      Notify.info('Enter a request');
      return;
    }
    setQuery(value);
    setSearchParams({ query });
    value = '';
  };

  const fetchQuery = query => {
    setLoadind(true);
    (async () => {
      try {
        const movies = await getFetchQuery(query);
        setMovies(movies);
        setLoadind(false);
      } catch (error) {
        setLoadind(false);
        setError(true);
      }
    })();
  };

  useEffect(() => {
    if (queryURL) {
      fetchQuery(queryURL);
    }
  }, [queryURL]);

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.form__input}
          type="text"
          name="search"
          value={query}
          onChange={onChange}
        />
        <button className={css.form__btn} type="submit">
          Search
        </button>
      </form>
      {loading && <Loader />}
      {error && <Error />}
      {movies.length && <MoviesList movies={movies} />}
      {movies.length && queryURL && !loading
        ? 'Nothing found for your request!'
        : null}
    </>
  );
};

export default Movies;
