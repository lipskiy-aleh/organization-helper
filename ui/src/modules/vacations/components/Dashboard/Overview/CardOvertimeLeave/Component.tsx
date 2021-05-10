import React from 'react'
import { Card } from 'components/Card'
import { Progress } from 'antd'

export interface ICardSickLeaveProps {
    overtimeHours: number,
}

export const CardOvertimeLeaveCmp: React.FC<ICardSickLeaveProps> = ({overtimeHours}) => {
  const overtimeDays = overtimeHours/8
  return (
    <Card title={'Overtime Leave'} text={'It is overtime leave!'}>
      <Progress type="circle" strokeColor='#5cafff' status='normal'
        percent={100} format={percent => `${(overtimeDays*percent)/100}d`} />
    </Card>
  )
}
