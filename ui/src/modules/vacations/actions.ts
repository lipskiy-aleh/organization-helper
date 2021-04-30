import { AnyAction } from 'redux'
import { BackEndVacationsDataModel } from './models/backEndVacationsData.model'
import { VacationHistoryItemModel } from './models/vacationHistoryItem.model'

const MODULE_NAME = 'VACATIONS'

export const FETCH_VACATIONS = `${MODULE_NAME}:FETCH_VACATIONS`
export const SET_VACATIONS_DATA = `${MODULE_NAME}:SET_VACATIONS_DATA`
export const ADD_REQUEST = `${MODULE_NAME}:ADD_REQUEST`

export const fetchVacations = ():AnyAction => ({
  type: FETCH_VACATIONS,
})

export const setVacationsData = (data: BackEndVacationsDataModel):AnyAction => ({
  type: SET_VACATIONS_DATA,
  payload: data,
})

export const addRequest = (data: VacationHistoryItemModel): AnyAction => ({
  type: ADD_REQUEST,
  payload: data,
})
