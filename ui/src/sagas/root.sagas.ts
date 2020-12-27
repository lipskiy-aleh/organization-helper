import { ForkEffect } from 'redux-saga/effects'
import {Saga, Task} from 'redux-saga'
import { runCommonSaga } from './common.sagas'



export function initSagas(runSaga: (saga: Saga) => Task): void{
  runSaga(runCommonSaga)
}
