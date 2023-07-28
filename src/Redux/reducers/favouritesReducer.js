import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '../actions/moviesActions';

const initialState = {
  Favourites: [], // Store movie IDs of Favourite movies
};

const FavouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
        
      return {
        ...state,
        Favourites: [...state.Favourites, action.payload.id],
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        Favourites: state.Favourites.filter((id) => id !== action.payload),
      };
    default:
      return state;
  }
};

export default FavouritesReducer;
