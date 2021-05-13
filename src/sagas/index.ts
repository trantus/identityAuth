import {all} from 'redux-saga/effects';
import {SagaIterator} from 'redux-saga';
import {sessionSagas} from './sessionSagas';
import {appSagas} from './appSagas';

export default function* rootSaga(): SagaIterator {
  yield all([...sessionSagas, ...appSagas]);
}
