import { call, put, takeEvery } from 'redux-saga/effects'
import { FETCH_VACATIONS, setVacationsData } from './actions'

import vacationsMock from './__mocks__/vacationsData.json'
import { BackEndVacationsDataModel } from './models/backEndVacationsData.model'

function* getVacationsData() {
  const data: BackEndVacationsDataModel = yield call(() => new Promise((res) => {
    setTimeout((): void => res(vacationsMock),1000)
  }))

  yield put(setVacationsData(data))
}

export function* initSagas(): Generator {
  yield takeEvery(FETCH_VACATIONS, getVacationsData)
}
