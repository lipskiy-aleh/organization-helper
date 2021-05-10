import { AnyAction } from 'redux'
import { SET_MANAGER } from 'actions/manager.actions'

export interface IManagerReducer {
  id: number
  fullName: string
  email: string
  photo: string
}

const defaultSate: IManagerReducer = {
  id: null,
  fullName: null,
  email: null,
  photo: null,
}

export const managerReducer = (state: IManagerReducer = defaultSate, action: AnyAction): IManagerReducer => {
  switch (action.type) {
    case SET_MANAGER: {
      return {
        ...state,
        ...action.payload,
      }
    }

    default:
      return state
  }
}
