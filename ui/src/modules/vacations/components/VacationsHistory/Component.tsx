import React from 'react'
import {Link, Route, RouteComponentProps, Switch} from 'react-router-dom'
import { Button } from 'components/PrimaryButton'
import { Dashboard } from './Dashboard'

import { PlusOutlined } from '@ant-design/icons'
import { Content } from 'antd/es/layout/layout'
import { StylesSlash } from './styles'

export const VacationsHistory: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>
          <Link key={1} to='/vacations'>Dashboard</Link>
          <StylesSlash>/</StylesSlash>
          <Link key={2} to={`${match.url}/requests`}>Requests</Link>
          <StylesSlash>/</StylesSlash>
          <Link key={3} to={`${match.url}/balances`}>Balances</Link>
        </div>

        <Button> <PlusOutlined /> Add request</Button>
      </div>

      <Content>
        <Switch>
          <Route path='/vacations' component={() => <Dashboard />} />
          <Route path='/vacations/requests' component={() => <div>requests</div>} />
          <Route path='/vacations/balances' component={() => <div>Balances</div>} />
        </Switch>
      </Content>
    </div>
  )
}
