import React from 'react'
import { Button, Dropdown, Menu } from 'antd'
import { DeleteOutlined, EditOutlined, GoogleOutlined, MoreOutlined } from '@ant-design/icons'

const menu = (
  <Menu>
    <Menu.Item icon={<EditOutlined/>}>
            To change
    </Menu.Item>
    <Menu.Item icon={<GoogleOutlined/>}>
            Contact Roman
    </Menu.Item>
    <Menu.Item icon={<DeleteOutlined/>}>
            Delete
    </Menu.Item>
  </Menu>
)

export const Setting: React.FC = () => {
  return (
    <div>
      <Dropdown overlay={menu} placement="bottomRight" arrow trigger={['click']}>
        <Button type='text'><MoreOutlined /></Button>
      </Dropdown>
    </div>

  )
}
