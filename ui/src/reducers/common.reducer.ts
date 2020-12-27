import { Action } from 'redux'
import { LOGIN_SUCCESS } from 'actions/common.actions'

export interface ICommonReducer {
  isLogged: boolean
}

const defaultSate: ICommonReducer = {
  isLogged: true,
}

export const commonReducer = (state: ICommonReducer = defaultSate, action: Action<any>): ICommonReducer => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
      }

    default:
      return state
  }
}
