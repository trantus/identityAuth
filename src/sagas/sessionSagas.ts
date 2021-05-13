import {
  AppState,
  AppStateEvent,
  AppStateStatus,
  AsyncStorage,
} from 'react-native';
import {SagaIterator, eventChannel} from 'redux-saga';
import {
  call,
  fork,
  put,
  select,
  spawn,
  take,
  takeLatest,
} from 'redux-saga/effects';
import {TypeKeys} from '../actions/actionTypes';
import {
  authorize,
  AuthorizeResult,
  refresh,
  RefreshResult,
  revoke,
} from 'react-native-app-auth';
import {authSuccess} from '../actions/actionCreators/sessionActions';
import {RootState} from '../interfaces';

function* signIn() {
  try {
    const config = {
      issuer: 'https://demo.identityserver.io',
      clientId: 'interactive.public',
      redirectUrl: 'io.identityserver.demo:/oauthredirect',
      scopes: ['openid', 'profile', 'offline_access'],
    };

    const oldToken = yield select((state: RootState) => state.session.accessToken);
    const refreshToken = yield select((state: RootState) => state.session.refreshToken,);

    if (oldToken) {
      const refreshedState: RefreshResult = yield call(refresh, config, {
        refreshToken: refreshToken,
      });

      return yield put(
        authSuccess(
          refreshedState.accessToken,
          refreshedState.refreshToken as string,
        ),
      );
    }

    const authState: AuthorizeResult = yield call(authorize, config);

    if (authState.accessToken) {
      yield put(authSuccess(authState.accessToken, authState.refreshToken));
    }
  } catch (e) {}
}

export const sessionSagas = [takeLatest(TypeKeys.AUTH, signIn)];
