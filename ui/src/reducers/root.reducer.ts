import { combineReducers } from 'redux'
import { commonReducer, ICommonReducer } from './common.reducer'

// TODO: implement DI process
// https://redux.js.org/recipes/code-splitting
import { IVacationsReducer, vacationReducer } from 'modules/vacations'

export interface IRootState {
  common: ICommonReducer,
  vacations: IVacationsReducer
}

export const rootReducer = combineReducers<IRootState>({
  common: commonReducer,
  vacations: vacationReducer,
})
