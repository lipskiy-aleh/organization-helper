import { takeLatest, put, call } from 'redux-saga/effects'
import { FETCH_MANAGER, setManagerData } from 'actions/manager.actions'

import vacationsMock from 'modules/vacations/__mocks__/managerData'
import { ManagerDataModel } from 'modules/vacations/models/managerData.model'

function* managerSaga() {
  const data: ManagerDataModel = yield call(() => new Promise((res) => {
    setTimeout((): void => res(vacationsMock),1000)
  }))
  yield put(setManagerData(data))
}

export function* runManagerSaga(): Generator {
  yield takeLatest(FETCH_MANAGER, managerSaga)
}
