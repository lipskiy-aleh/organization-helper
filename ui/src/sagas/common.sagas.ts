import { takeLatest, put, call } from 'redux-saga/effects'
import { LOGIN_ACTION, onSuccessAction } from 'actions/common.actions'
import { history } from 'app-history'
import { DEFAULT_ROUTE } from 'app-constants'

function* loginSaga() {
  // TODO: add real logic
  yield call(() => setTimeout((): void => null,1000))
  yield put(onSuccessAction())
  yield call(history.push, DEFAULT_ROUTE)
}

export function* runCommonSaga(): Generator {
  yield takeLatest(LOGIN_ACTION, loginSaga)
}
