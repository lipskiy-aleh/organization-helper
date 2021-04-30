import { AnyAction } from 'redux'
import { ManagerDataModel } from 'modules/vacations/models/managerData.model'

const MODULE_NAME = 'MANAGER'

export const SET_MANAGER = `${MODULE_NAME}:SET_MANAGER`
export const FETCH_MANAGER = `${MODULE_NAME}:FETCH_MANAGER`

export const setManagerData = (data: ManagerDataModel):AnyAction => ({
  type: SET_MANAGER,
  payload: data,
})

export const fetchManager = ():AnyAction => ({
  type: FETCH_MANAGER,
})
