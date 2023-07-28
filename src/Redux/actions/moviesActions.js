
export const FETCH_TOP_RATED_MOVIES_REQUEST = 'FETCH_TOP_RATED_MOVIES_REQUEST';
export const FETCH_TOP_RATED_MOVIES_SUCCESS = 'FETCH_TOP_RATED_MOVIES_SUCCESS';
export const FETCH_TOP_RATED_MOVIES_FAILURE = 'FETCH_TOP_RATED_MOVIES_FAILURE';

export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

// Action Creators
export const fetchTopRatedMoviesRequest = () => ({
  type: FETCH_TOP_RATED_MOVIES_REQUEST,
});

export const fetchTopRatedMoviesSuccess = (movies) => ({
  type: FETCH_TOP_RATED_MOVIES_SUCCESS,
  payload: movies,
});

export const fetchTopRatedMoviesFailure = (error) => ({
  type: FETCH_TOP_RATED_MOVIES_FAILURE,
  payload: error,
});

export const addToFavourites = (movie) => ({
  type: ADD_TO_FAVORITES,
  payload: movie,
});

export const removeFromFavourites = (movieId) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: movieId,
});

