import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { jokesReducer } from './reducer';
export const store = createStore(
  combineReducers({ jokesData: jokesReducer }),
  applyMiddleware(ReduxThunk)
);
