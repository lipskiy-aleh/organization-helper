import React from 'react'
import { Route, RouteProps, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { IRootState } from 'store'
import { getIsLogged } from 'selectors/common'
import { BASE_ROUTES } from 'app-constants'

export interface IPrivateRouteProps extends RouteProps {
  isLogged: boolean
}

const Component: React.FC<IPrivateRouteProps> = ({
  isLogged,
  ...props
}) => {
  if(!isLogged) {
    return <Redirect to={BASE_ROUTES.LOGIN}/>
  }

  return (
    <Route {...props}/>
  )
}

const stateToProps = (state: IRootState) => ({
  isLogged: getIsLogged(state),
})

export const PrivateRoute = connect(stateToProps)(Component)
