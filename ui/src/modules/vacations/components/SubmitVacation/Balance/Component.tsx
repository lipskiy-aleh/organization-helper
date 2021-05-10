import React from 'react'
import { StyledDiv } from './styles'
import { VacationInfoModel } from 'modules/vacations/models/vacationInfo.model'
import { OtherVacationsModel } from 'modules/vacations/models/otherVacations.model'
import { changeHoursVacations } from 'utils/changeHoursVacations'

export interface IRegularVacationProps{
    regularVacation: VacationInfoModel,
    sickVacation: VacationInfoModel,
    otherVacations: OtherVacationsModel
}

export const BalanceCmp: React.FC<IRegularVacationProps> = (props) => {
  const regularVacation = changeHoursVacations(props.regularVacation.totalHours - props.regularVacation.usedHours)
  const regularVacationTotal = changeHoursVacations(props.regularVacation.totalHours)
  const sickVacation = changeHoursVacations(props.sickVacation.totalHours - props.sickVacation.usedHours)
  const sickVacationTotal = changeHoursVacations(props.sickVacation.totalHours)
  const overtimeVacation =  changeHoursVacations(props.otherVacations.overtimeHours)
  const withoutPay = changeHoursVacations(props.otherVacations.withoutPayHours)
  const exceptional = changeHoursVacations(props.otherVacations.exceptionalHours)

  return (
    <div style={{backgroundColor: 'white', padding: '20px'}}>
      <StyledDiv>
        <h3>Available:</h3>
        <p>Regular vacation: {regularVacation} (total: {regularVacationTotal})</p>
        <p>Sick leave: {sickVacation} (total: {sickVacationTotal})</p>
      </StyledDiv>

      <StyledDiv>
        <h3>Taken:</h3>
        <p>Overtime vacation: {overtimeVacation}</p>
        <p>Leave without pay: {withoutPay}</p>
        <p>Exceptional leave: {exceptional}</p>
      </StyledDiv>
    </div>
  )
}
