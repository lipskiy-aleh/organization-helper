import React from 'react'
import { Card } from 'components/Card'
import { VacationInfoModel } from 'modules/vacations/models/vacationInfo.model'
import { changeHoursVacations } from 'utils/changeHoursVacations'
import { percentFormatter } from 'utils/percentFormatter'
import { Progress } from 'antd'

export interface ICardSickLeaveProps {
    sickVacation: VacationInfoModel,
}

export const CardSickLeaveCmp: React.FC<ICardSickLeaveProps> = (props) => {
  const totalHours = props.sickVacation.totalHours
  const usedHours = props.sickVacation.usedHours
  const sickVacationAll = changeHoursVacations(totalHours)
  const usedPercent = usedHours*100/totalHours

  return (
    <Card title={'Sick leave'} text={`In total you have ${sickVacationAll}!`}>
      <Progress type="circle" strokeColor='#5cafff' status='normal'
        percent={usedPercent}
        format={(percent) => percentFormatter(percent, usedHours)}
      />
    </Card>
  )
}
