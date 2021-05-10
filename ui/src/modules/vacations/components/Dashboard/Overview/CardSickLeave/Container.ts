import { connect } from 'react-redux'
import { CardSickLeaveCmp, ICardSickLeaveProps } from './Component'
import { IRootState } from 'store'
import { getSickVacation } from 'modules/vacations/selectors'

const mapStateToProps = (state: IRootState): ICardSickLeaveProps => ({
  sickVacation: getSickVacation(state),
})

export const CardSickLeave = connect(mapStateToProps)(CardSickLeaveCmp)
