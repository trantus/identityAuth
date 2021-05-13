import {AppState, AppStateStatus} from 'react-native';
import {eventChannel} from 'redux-saga';
import {call, put, spawn, take} from 'redux-saga/effects';
import {auth} from '../actions/actionCreators/sessionActions';

function* startChannel(syncActionName) {
  const channel = eventChannel(listener => {
    const handleAppStateChange = (state: AppStateStatus) => {
      listener(state);
    };

    AppState.addEventListener('change', handleAppStateChange);

    return () => AppState.removeEventListener('change', handleAppStateChange);
  });

  while (true) {
    const connectionInfo = yield take(channel);
    yield put({type: syncActionName, status: connectionInfo});
  }
}

function* watchAppState() {
  try {
    yield put(auth());
    yield call(startChannel, 'CONNECTION_STATUS');
  } catch (e) {
    console.log(e);
  }
}

export const appSagas = [spawn(watchAppState)];
