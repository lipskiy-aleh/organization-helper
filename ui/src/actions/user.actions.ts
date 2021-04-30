import { AnyAction } from 'redux'
import { UserDataModel } from 'modules/vacations/models/userData.model'

const MODULE_NAME = 'USER'

export const SET_USER = `${MODULE_NAME}:SET_USER`
export const FETCH_USER = `${MODULE_NAME}:FETCH_USER`

export const setUserData = (data: UserDataModel):AnyAction => ({
  type: SET_USER,
  payload: data,
})

export const fetchUser = ():AnyAction => ({
  type: FETCH_USER,
})
