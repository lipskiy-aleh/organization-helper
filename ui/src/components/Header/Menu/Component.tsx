import React from 'react'
import { Dropdown, Menu } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const menu = (
  <Menu>
    <Menu.Item>
      <Link to="/vacations/dashboard">Dashboard</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/vacations/requests">Requests</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/vacations/balances">Balances</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item>
      <Link to="/vacations/submit">Submit</Link>
    </Menu.Item>
  </Menu>
)

export const HeaderMenu: React.FC = () => {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
      <Menu.Item key={1}>
        <Dropdown overlay={menu} placement="bottomCenter"
          overlayStyle={{paddingTop: '15px'}}>

          <Link to='/vacations'>Vacation <DownOutlined style={{margin: '0'}}/></Link>
        </Dropdown>
      </Menu.Item>

      <Menu.Item key={2}><Link to='/budgets'>Budgets</Link></Menu.Item>
      <Menu.Item key={3}><Link to='/about'>About</Link></Menu.Item>
    </Menu>
  )
}
