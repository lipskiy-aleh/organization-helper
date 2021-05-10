import { call, put, takeEvery } from 'redux-saga/effects'
import { ADD_REQUEST, FETCH_VACATIONS, setVacationsData } from './actions'

import vacationsMock from './__mocks__/vacationsData.json'
import { BackEndVacationsDataModel } from './models/backEndVacationsData.model'
import { AnyAction } from 'redux'

function* getVacationsData() {
  const data: BackEndVacationsDataModel = yield call(() => new Promise((res) => {
    setTimeout((): void => res(vacationsMock),1000)
  }))
  yield put(setVacationsData(data))
}

function* postVacations(data: AnyAction) {
  yield fetch('url', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data.payload),
  })
}

export function* initSagas(): Generator {
  yield takeEvery(FETCH_VACATIONS, getVacationsData)
  yield takeEvery(ADD_REQUEST, postVacations)
}
