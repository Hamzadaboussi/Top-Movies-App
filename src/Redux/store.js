import { combineReducers } from 'redux';
import moviesReducer from './reducers/moviesReducer';
import FavouritesReducer from './reducers/favouritesReducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  movies: moviesReducer,
  Favourites: FavouritesReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

