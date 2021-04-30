import { combineReducers } from 'redux'
import { commonReducer, ICommonReducer } from './common.reducer'
import { userReducer, IUserReducer } from './user.reducer'
import { managerReducer, IManagerReducer } from './manager.reducer'

// TODO: implement DI process
// https://redux.js.org/recipes/code-splitting
import { IVacationsReducer, vacationReducer } from 'modules/vacations'

export interface IRootState {
  common: ICommonReducer,
  vacations: IVacationsReducer,
  user: IUserReducer,
  manager: IManagerReducer,
}

export const rootReducer = combineReducers<IRootState>({
  common: commonReducer,
  vacations: vacationReducer,
  user: userReducer,
  manager: managerReducer,
})
