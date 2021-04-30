import { connect } from 'react-redux'
import { PeriodCmp, IPeriodProps } from './Component'
import { IRootState } from 'store'
import { getRegularVacation } from '../../../../selectors'

const mapStateToProps = (state: IRootState): IPeriodProps => ({
  regularVacation: getRegularVacation(state),
})

export const Period = connect(mapStateToProps)(PeriodCmp)
