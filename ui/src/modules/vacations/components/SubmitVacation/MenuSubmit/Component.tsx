import React from 'react'
import { AppstoreOutlined, EditOutlined, DribbbleOutlined } from '@ant-design/icons'
import { Menu } from 'antd'

const { SubMenu } = Menu

export const MenuSubmit:React.FC = () => {
  return (
    <div>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode={'inline'}
        theme={'light'}
      >

        <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Leave">
          <Menu.Item key="1">Regular vacation</Menu.Item>
          <Menu.Item key="2">Sick leave</Menu.Item>
          <Menu.Item key="3">Exceptional leave</Menu.Item>
          <Menu.Item key="4">Leave without pay</Menu.Item>
          <Menu.Item key="5">Overtime leave</Menu.Item>
        </SubMenu>

        <Menu.Item key="6" icon={<EditOutlined />}>
          Compensation
        </Menu.Item>

        <Menu.Item key="7" icon={<DribbbleOutlined />}>
          Extension
        </Menu.Item>
      </Menu>
    </div>
  )
}
