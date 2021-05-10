import { connect } from 'react-redux'
import { CardOvertimeLeaveCmp, ICardSickLeaveProps } from './Component'
import { IRootState } from 'store'
import { getOtherVacation } from 'modules/vacations/selectors'

const mapStateToProps = (state: IRootState): ICardSickLeaveProps => ({
  overtimeHours: getOtherVacation(state).overtimeHours,
})

export const CardOvertimeLeave = connect(mapStateToProps)(CardOvertimeLeaveCmp)
