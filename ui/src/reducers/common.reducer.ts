import { Action } from 'redux'

export interface ICommonReducer {
  isLogged: boolean
}

const defaultSate: ICommonReducer = {
  isLogged: false,
}

export const commonReducer = (state: ICommonReducer = defaultSate, action: Action<any>): ICommonReducer => {
  return state
}