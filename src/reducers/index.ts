import { createStore, applyMiddleware, combineReducers } from 'redux'
import userReducer from './session'
import dataReducer from './data'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

export const sagaMiddleware = createSagaMiddleware()

const reducer = combineReducers({
  session: userReducer,
  listOfData: dataReducer,
})

const middlewares = [logger, sagaMiddleware]

export const configureStore = () => {
  return createStore(reducer, applyMiddleware(...middlewares))
}
