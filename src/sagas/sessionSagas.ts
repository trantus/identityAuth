import { call, put, takeLatest } from 'redux-saga/effects'
import { TypeKeys } from '../actions/actionTypes'
import { authorize, AuthorizeResult } from 'react-native-app-auth'
import { authSuccess } from '../actions/actionCreators/sessionActions'
import config from '../config'

function* signIn() {
  try {
    const authState: AuthorizeResult = yield call(authorize, config)

    if (authState.accessToken) {
      yield put(authSuccess(authState.accessToken, authState.refreshToken))
    }
  } catch (e) {}
}

export const sessionSagas = [takeLatest(TypeKeys.AUTH, signIn)]
