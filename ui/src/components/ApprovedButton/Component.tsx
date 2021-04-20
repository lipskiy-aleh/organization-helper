import * as React from 'react'
import { CheckCircleTwoTone } from '@ant-design/icons'
import { Button } from 'antd'

export const ApprovedButton: React.FC = () => {
  return (
    <Button style={{borderRadius: '20px'}}>
      <CheckCircleTwoTone twoToneColor="#52c41a" />
      Approved
    </Button>
  )
}
