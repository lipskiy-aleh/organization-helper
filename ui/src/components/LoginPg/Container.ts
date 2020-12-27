import { Dispatch } from 'react'
import { connect } from 'react-redux'
import { onLoginAction } from 'actions/common.actions'
import { AnyAction } from 'redux'
import { LoginPg } from './Component'

const mapDispatchToProp = (dispatch: Dispatch<AnyAction>) => ({
  onLoginClick: () => dispatch(onLoginAction()),
})

export const LoginPgConnected = connect(null, mapDispatchToProp)(LoginPg)
