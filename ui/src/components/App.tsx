import React from 'react'
import { Provider } from 'react-redux'
import {
  Router,
  Switch,
  Route,
} from 'react-router-dom'
import { store } from 'store'
import { LoginPg } from './LoginPg'
import { PrivateRoute } from './PrivateRoute'
import { history } from 'app-history'
import { Vacations } from 'modules/vacations'
import { BASE_ROUTES } from 'app-constants'
import { routers } from './routers.service'

import 'antd/dist/antd.css'
import { Layout } from 'antd'
import { StyledLayout } from './styles'
import { Header } from './Header'
import { Footer } from './Footer'

const { Content } = Layout

const App: React.FC = () => (
  <Provider store={store}>
    <Router history={history}>
      <StyledLayout>
        <Header />

        <Content style={{padding: '20px 50px 0'}}>
          <Switch>
            {routers.map(({path, isExact= false, component}) => (
              <Route key={path} path={path} exact={isExact} component={component} />
            ))}

            <Route path={BASE_ROUTES.LOGIN} component={LoginPg}/>
            <PrivateRoute path={BASE_ROUTES.VACATIONS} component={Vacations} />
          </Switch>
        </Content>

        <Footer>Footer</Footer>
      </StyledLayout>
    </Router>
  </Provider>
)

export default App
