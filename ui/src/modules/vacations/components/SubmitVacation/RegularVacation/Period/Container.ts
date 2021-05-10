import { connect } from 'react-redux'
import { PeriodCmp, IPeriodProps } from './Component'
import { IRootState } from 'store'
import { getRegularVacation } from 'modules/vacations/selectors'
import { addDuration } from 'modules/vacations/actions'

const mapStateToProps = (state: IRootState): IPeriodProps => ({
  regularVacation: getRegularVacation(state),
})

export const Period = connect(mapStateToProps,
  {addDuration})(PeriodCmp)
