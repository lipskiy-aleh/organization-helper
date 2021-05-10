import React from 'react'
import { Card } from 'components/Card'
import { VacationInfoModel } from 'modules/vacations/models/vacationInfo.model'
import { changeHoursVacations } from 'utils/changeHoursVacations'
import { percentFormatter } from 'utils/percentFormatter'
import { Progress } from 'antd'

export interface ICardRegularVacationProps {
    regularVacation: VacationInfoModel,
}

export const CardRegularVacationCmp: React.FC<ICardRegularVacationProps> = (props) => {
  const totalHours = props.regularVacation.totalHours
  const usedHours = props.regularVacation.usedHours
  const regularVacationAll = changeHoursVacations(totalHours)
  const usedPercent = usedHours*100/totalHours

  return (
    <Card title={'Regular vacation'} text={`In total you have ${regularVacationAll}!`}>
      <Progress type="circle" strokeColor='#5cafff' status='normal'
        percent={usedPercent}
        format={(percent) => percentFormatter(percent, usedHours)}
      />
    </Card>
  )
}
