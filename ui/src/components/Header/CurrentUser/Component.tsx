import React from 'react'
import { Avatar, Dropdown, Menu } from 'antd'
import { UserOutlined } from '@ant-design/icons'

const menu = (
  <Menu>
    <Menu.Item>
      <a href="#">My account</a>
    </Menu.Item>
    <Menu.Item>
      <a href="#">Settings</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item>
      <a href="#">Logout</a>
    </Menu.Item>
  </Menu>
)

export const CurrentUser:React.FC = () => {
  return (
    <div>
      <Dropdown overlay={menu} placement="bottomRight" arrow>
        <Avatar size={40} style={{cursor: 'pointer'}} icon={<UserOutlined />} />
      </Dropdown>
    </div>
  )
}
