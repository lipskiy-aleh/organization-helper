import React from 'react'
import { Menu} from 'antd'
import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { IRoute } from '../routers.service'
import { StyledHeader } from './styles'
import { CurrentUser } from './CurrentUser'

export interface IRouteProps {
    routers: Array<IRoute>
}

export const Header: React.FC<IRouteProps> = ({routers}) => (
  <StyledHeader>
    <div style={{display: 'flex'}}>
      <Logo />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        {routers.map(({key,path, title}) => (
          <Menu.Item key={key}><Link to={path}>{title}</Link></Menu.Item>
        ))}
      </Menu>
    </div>

    <CurrentUser />
  </StyledHeader>
)
