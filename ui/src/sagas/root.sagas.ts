import {Saga, Task} from 'redux-saga'
import { runCommonSaga } from './common.sagas'
import { runUserSaga } from './user.sagas'
import { runManagerSaga } from './manager.sagas'

import { initVacationsSagas } from 'modules/vacations'

export function initSagas(runSaga: (saga: Saga) => Task): void{
  runSaga(runCommonSaga)
  runSaga(initVacationsSagas)
  runSaga(runUserSaga)
  runSaga(runManagerSaga)
}
