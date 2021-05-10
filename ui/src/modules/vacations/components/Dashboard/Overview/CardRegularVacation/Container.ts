import { connect } from 'react-redux'
import { CardRegularVacationCmp, ICardRegularVacationProps } from './Component'
import { IRootState } from 'store'
import { getRegularVacation } from 'modules/vacations/selectors'

const mapStateToProps = (state: IRootState): ICardRegularVacationProps => ({
  regularVacation: getRegularVacation(state),
})

export const CardRegularVacation = connect(mapStateToProps)(CardRegularVacationCmp)
