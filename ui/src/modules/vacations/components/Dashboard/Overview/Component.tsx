import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'components/Card'
import { VacationInfoModel } from 'modules/vacations/models/vacationInfo.model'
import { changeHoursVacations } from 'utils/changeHoursVacations'

import { StyledContainerCards, StyledOverview } from './styles'
import { Progress } from 'antd'

export interface IOverviewProps {
    regularVacation: VacationInfoModel,
    sickVacation: VacationInfoModel,
}

export const OverviewCmp: React.FC<IOverviewProps> = (props) => {
  const regularVacationAll = changeHoursVacations(props.regularVacation.totalHours)
  const sickVacationAll = changeHoursVacations(props.sickVacation.totalHours)

  return (
    <StyledOverview>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <span>Overview</span>
        <Link to='/vacations/balances'>Go to Balances</Link>
      </div>

      <StyledContainerCards>
        <Card title={'Regular vacation'} text={`In total you have ${regularVacationAll}!`}>
          <Progress type="circle" strokeColor='#5cafff' status='normal'
            percent={76} format={percent => `${15*percent/76}d 1h`}
          />
        </Card>

        <Card title={'Sick leave'} text={`In total you have ${sickVacationAll}!`}>
          <Progress type="circle" strokeColor='#5cafff' status='normal'
            percent={14} format={percent => `${percent/14}d`} />
        </Card>

        <Card title={'Overtime Leave'} text={'It is overtime leave!'}>
          <Progress type="circle" strokeColor='#5cafff' status='normal'
            percent={100} format={percent => `${(6*percent)/100}d`} />
        </Card>
      </StyledContainerCards>
    </StyledOverview>
  )
}
