import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducer, IRootState } from './reducers/root.reducer'
import { initSagas } from 'sagas/root.sagas'

export { IRootState }

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =
  process.env.NODE_ENV === 'development' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(
    sagaMiddleware,
  ),
))

export const runSaga = sagaMiddleware.run
initSagas(runSaga)
