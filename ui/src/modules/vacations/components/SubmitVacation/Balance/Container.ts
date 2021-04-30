import {connect} from 'react-redux'
import {Balance, IRegularVacationProps} from './Component'
import { getRegularVacation, getSickVacation, getOtherVacation } from 'modules/vacations/selectors'
import { IRootState } from 'store'

const mapStateToProps = (state: IRootState): IRegularVacationProps => ({
  regularVacation: getRegularVacation(state),
  sickVacation: getSickVacation(state),
  otherVacations: getOtherVacation(state),
})

export const BalanceContainer = connect(mapStateToProps)(Balance)
