import {Saga, Task} from 'redux-saga'
import { runCommonSaga } from './common.sagas'

import { initVacationsSagas } from 'modules/vacations'



export function initSagas(runSaga: (saga: Saga) => Task): void{
  runSaga(runCommonSaga)
  runSaga(initVacationsSagas)
}
