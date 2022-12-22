import { useState, useEffect } from 'react';

import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import { Error } from 'components/Error/Error';

import { getFetchTrending } from 'utils/fetchAPI';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoadind] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoadind(true);
    (async () => {
      try {
        const movies = await getFetchTrending();
        setMovies(movies);
        setLoadind(false);
      } catch (error) {
        setLoadind(false);
        setError(true);
      }
    })();
  }, []);

  return (
    <>
      {movies.length && (
        <>
          <h2>Trending today</h2>
          <MoviesList movies={movies} />
        </>
      )}
      {loading && <Loader />}
      {error && <Error />}
    </>
  );
};

export default HomePage;
