import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import recipeReducer from './reducer/recipeReducer'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  recipeReducer,
  composeEnhancer(applyMiddleware(thunk)),
);

export default store;
