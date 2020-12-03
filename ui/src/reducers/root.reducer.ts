import { combineReducers } from 'redux'
import { commonReducer, ICommonReducer } from './common.reducer'

export interface IRootState {
  common: ICommonReducer,
}

export const rootReducer = combineReducers<IRootState>({
  common: commonReducer,
})
