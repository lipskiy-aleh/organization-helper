import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { RouteComponentProps, Switch, Route } from 'react-router-dom'
import { VacationsHistory } from './components/VacationsHistory'
import { SubmitVacation } from './components/SubmitVacation'
import { fetchVacations } from './actions'

export const Container:React.FC<RouteComponentProps> = ({ match }) => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchVacations())
  }, [])

  return (
    <Switch>
      <Route path={match.url} exact component={VacationsHistory} />
      <Route path={`${match.url}/submit`} component={SubmitVacation} />
    </Switch>
  )
}
