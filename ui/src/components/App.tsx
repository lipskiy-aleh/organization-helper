import React from 'react'
import { Provider } from 'react-redux'
import {
  Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { store } from 'store'
import { LoginPg } from './LoginPg'
import { PrivateRoute } from './PrivateRoute'
import { history } from 'app-history'
import { Vacations } from 'modules/vacations'
import { BASE_ROUTES, DEFAULT_ROUTE } from 'app-constants'

import 'antd/dist/antd.css'

const App: React.FC = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact render={() => <Redirect to={DEFAULT_ROUTE} />} />
        <Route path={BASE_ROUTES.LOGIN} component={LoginPg}/>

        <PrivateRoute path={BASE_ROUTES.VACATIONS} component={Vacations} />
      </Switch>
    </Router>
  </Provider>
)

export default App
