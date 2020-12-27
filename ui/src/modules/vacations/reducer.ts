import { Action } from 'redux'

export interface IVacationsReducer {
  history: []
}

const defaultSate: IVacationsReducer = {
  history: [],
}

export const vacationReducer = (state: IVacationsReducer = defaultSate, action: Action<any>): IVacationsReducer => {
  switch (action.type) {
    default:
      return state
  }
}
