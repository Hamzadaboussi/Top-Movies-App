import {
    FETCH_TOP_RATED_MOVIES_REQUEST,
    FETCH_TOP_RATED_MOVIES_SUCCESS,
    FETCH_TOP_RATED_MOVIES_FAILURE,
  } from '../actions/moviesActions';
  
  const initialState = {
    topRatedMovies: [], // Store topRatedMovies fetched from the Api
    isLoading: false, // Store the isLoading flag define the state of the fetching
    error: null,  // Store the error in case fetching the movies from the Api failed
  };
  
  const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_TOP_RATED_MOVIES_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case FETCH_TOP_RATED_MOVIES_SUCCESS:
        return {
          ...state,
          isLoading: false,
          topRatedMovies: action.payload,
        };
      case FETCH_TOP_RATED_MOVIES_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default moviesReducer;
  