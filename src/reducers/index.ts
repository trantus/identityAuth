import {createStore, applyMiddleware, combineReducers} from 'redux';
import userReducer from './session';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

export const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  session: userReducer,
});

const middlewares = [logger, sagaMiddleware];

export const configureStore = () => {
  return createStore(reducer, applyMiddleware(...middlewares));
};
