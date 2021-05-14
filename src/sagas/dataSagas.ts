import { SagaIterator } from 'redux-saga'
import { call, put, select, takeLatest } from 'redux-saga/effects'
import { dataSuccess } from '../actions/actionCreators/dataActions'
import { TypeKeys } from '../actions/actionTypes'
import callApi from '../callApi'

import { RootState } from '../interfaces'

function* loadData(): SagaIterator {
  try {
    const token = yield select((state: RootState) => state.session.accessToken)
    console.log('token', token)
    const res = yield call(callApi, 'https://demo.identityserver.io/api/test', token)

    if (res.status === 200) {
      yield put(dataSuccess(res.data))
    }
  } catch (e) {
    console.log('e', e)
  }
}

export const dataSagas = [takeLatest(TypeKeys.DATA, loadData)]
