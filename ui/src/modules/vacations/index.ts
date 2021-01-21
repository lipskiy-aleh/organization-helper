import { Container } from './Container'
import { IVacationsReducer, vacationReducer } from './reducer'
import { initSagas } from './saga'

export const Vacations = Container
export { IVacationsReducer, vacationReducer }
export const initVacationsSagas = initSagas
