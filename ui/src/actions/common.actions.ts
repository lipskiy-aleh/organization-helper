import { Action, AnyAction } from 'redux'

const MODULE_NAME = 'COMMON'

export const LOGIN_ACTION = `${MODULE_NAME}:LOGIN_ACTION`
export const LOGIN_SUCCESS = `${MODULE_NAME}:LOGIN_SUCCESS`
export const LOGIN_FAILED = `${MODULE_NAME}:LOGIN_FAILED`

export const onLoginAction = (): Action<string> => ({
  type: LOGIN_ACTION,
})

export const onSuccessAction = (): AnyAction => ({
  type: LOGIN_SUCCESS,
})
