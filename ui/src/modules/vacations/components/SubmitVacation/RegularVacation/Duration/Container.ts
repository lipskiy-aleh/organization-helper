import { connect } from 'react-redux'
import { IRootState } from 'store'
import { DurationCmp, IDurationProps } from './Component'
import { getDuration } from 'modules/vacations/selectors'

const mapStateToProps = (state: IRootState): IDurationProps => ({
  duration: getDuration(state),
})

export const Duration = connect(mapStateToProps)(DurationCmp)
