import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import gameReducer from '../reducers/current_game';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({gameReducer: gameReducer});

export const store = createStore(
  rootReducer,
  applyMiddleware(
    createLogger(),
  ),
);

