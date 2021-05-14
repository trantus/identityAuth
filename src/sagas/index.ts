import { all } from 'redux-saga/effects'
import { SagaIterator } from 'redux-saga'
import { sessionSagas } from './sessionSagas'
import { dataSagas } from './dataSagas'

export default function* rootSaga(): SagaIterator {
  yield all([...sessionSagas, ...dataSagas])
}
