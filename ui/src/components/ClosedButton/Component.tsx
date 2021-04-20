import * as React from 'react'
import { CloseCircleFilled } from '@ant-design/icons'
import { Button } from 'antd'

export const ClosedButton:React.FC = () => {
  return (
    <Button style={{borderRadius: '20px'}}>
      <CloseCircleFilled/>
      Closed
    </Button>
  )
}
