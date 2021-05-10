import React from 'react'
import { Avatar, Dropdown, Menu } from 'antd'
import { UserOutlined, SettingOutlined, ExportOutlined } from '@ant-design/icons'

const menu = (
  <Menu>
    <Menu.Item icon={<UserOutlined />}>
      <a href="#">My account</a>
    </Menu.Item>
    <Menu.Item icon={<SettingOutlined />}>
      <a href="#">Settings</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item icon={<ExportOutlined />}>
      <a href="#">Logout</a>
    </Menu.Item>
  </Menu>
)

export interface IUserPhotoProps{
    userPhoto: string
}

export const CurrentUserCmp:React.FC<IUserPhotoProps> = ({ userPhoto }) => {
  return (
    <div>
      <Dropdown overlay={menu} placement="bottomRight" arrow>
        { userPhoto
          ? <Avatar size={40} style={{cursor: 'pointer'}} src={userPhoto}/>
          : <Avatar size={40} style={{cursor: 'pointer'}} icon={<UserOutlined />} />}
      </Dropdown>
    </div>
  )
}
