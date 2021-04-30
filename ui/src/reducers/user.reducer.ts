import { AnyAction } from 'redux'
import { SET_USER } from 'actions/user.actions'

export interface IUserReducer {
  id: number
  name: string
  surname: string
  photo: string
}

const defaultSate: IUserReducer = {
  id: null,
  name: null,
  surname: null,
  photo: null,
}

export const userReducer = (state: IUserReducer = defaultSate, action: AnyAction): IUserReducer => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        ...action.payload,
      }
    }

    default:
      return state
  }
}
