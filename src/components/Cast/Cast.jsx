import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ActorsList } from 'components/ActorsList/ActorsList';
import { Loader } from 'components/Loader/Loader';
import { Error } from 'components/Error/Error';
import { getFetchByCredits } from 'utils/fetchAPI';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const [loading, setLoadind] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setLoadind(true);
    (async () => {
      try {
        const movie = await getFetchByCredits(movieId);
        setActors(movie);
        setLoadind(false);
      } catch (error) {
        setLoadind(false);
        setError(true);
      }
    })();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error && <Error />}
      {actors.length ? (
        <ActorsList actors={actors} />
      ) : (
        <p>We don't find any actors for this movie!</p>
      )}
    </>
  );
};

export default Cast;
