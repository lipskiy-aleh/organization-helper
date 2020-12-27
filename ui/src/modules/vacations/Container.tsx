import React from 'react'
import { RouteComponentProps, Switch, Route } from 'react-router-dom'
import { VacationsHistory } from './components/VacationsHistory'
import { SubmitVacation } from './components/SubmitVacation'

export const Container:React.FC<RouteComponentProps> = ({ match }) => (
  <Switch>
    <Route path={match.url} exact component={VacationsHistory} />
    <Route path={`${match.url}/submit`} component={SubmitVacation} />
  </Switch>
)
