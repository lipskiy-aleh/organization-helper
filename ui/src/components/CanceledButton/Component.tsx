import * as React from 'react'
import { MinusCircleTwoTone } from '@ant-design/icons'
import { Button } from 'antd'

export const CanceledButton:React.FC = () => {
  return (
    <Button style={{borderRadius: '20px'}}>
      <MinusCircleTwoTone/>
      Canceled
    </Button>
  )
}
