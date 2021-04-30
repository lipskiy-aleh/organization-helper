import { connect } from 'react-redux'
import { IRootState } from 'store'
import { OverviewCmp, IOverviewProps } from './Component'
import { getRegularVacation, getSickVacation } from 'modules/vacations/selectors'

const mapStateToProps = (state: IRootState): IOverviewProps => ({
  regularVacation: getRegularVacation(state),
  sickVacation: getSickVacation(state),
})

export const Overview = connect(mapStateToProps)(OverviewCmp)
