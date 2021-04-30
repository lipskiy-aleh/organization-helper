import { takeLatest, put, call } from 'redux-saga/effects'
import { FETCH_USER, setUserData } from 'actions/user.actions'

import vacationsMock from 'modules/vacations/__mocks__/userData'
import { UserDataModel } from 'modules/vacations/models/userData.model'

function* userSaga() {
  const data: UserDataModel = yield call(() => new Promise((res) => {
    setTimeout((): void => res(vacationsMock),1000)
  }))
  yield put(setUserData(data))
}

export function* runUserSaga(): Generator {
  yield takeLatest(FETCH_USER, userSaga)
}
