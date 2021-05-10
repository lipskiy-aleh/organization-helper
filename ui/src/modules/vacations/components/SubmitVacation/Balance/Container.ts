import { connect } from 'react-redux'
import { BalanceCmp, IRegularVacationProps } from './Component'
import { getRegularVacation, getSickVacation, getOtherVacation } from 'modules/vacations/selectors'
import { IRootState } from 'store'

const mapStateToProps = (state: IRootState): IRegularVacationProps => ({
  regularVacation: getRegularVacation(state),
  sickVacation: getSickVacation(state),
  otherVacations: getOtherVacation(state),
})

export const Balance = connect(mapStateToProps)(BalanceCmp)
