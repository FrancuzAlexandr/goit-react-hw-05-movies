const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '2c7f5557ee0d3184d19fc3f4461cd963';

export const getFetchTrending = async () => {
  const response = await fetch(`${BASE_URL}trending/all/day?api_key=${KEY}`);
  if (response.ok) {
    const data = await response.json();
    return data.results;
  }
  throw new Error('Error responsive');
};

export const getFetchById = async movieId => {
  const response = await fetch(
    `${BASE_URL}movie/${movieId}?api_key=${KEY}&language=en-US`
  );
  if (response.ok) {
    const data = await response.json();
    return data;
  }
  throw new Error('Error responsive');
};

export const getFetchByCredits = async movieId => {
  const response = await fetch(
    `${BASE_URL}movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );
  if (response.ok) {
    const data = await response.json();
    return data.cast;
  }
  throw new Error('Error responsive');
};

export const getFetchByReviews = async movieId => {
  const response = await fetch(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
  if (response.ok) {
    const data = await response.json();
    return data.results;
  }
  throw new Error('Error responsive');
};

export const getFetchQuery = async query => {
  const response = await fetch(
    `${BASE_URL}search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  if (response.ok) {
    const data = await response.json();
    return data.results;
  }
  throw new Error('Error responsive');
};
