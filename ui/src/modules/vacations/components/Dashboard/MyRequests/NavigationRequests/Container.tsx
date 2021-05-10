import { connect } from 'react-redux'
import { NavigationRequestsCmp, INavigationRequestsProps } from './Component'
import { IRootState } from 'store'
import { getHistoryVacation } from 'modules/vacations/selectors'

const mapStateToProps = (state: IRootState): INavigationRequestsProps => ({
  history: getHistoryVacation(state),
})

export const NavigationRequests = connect(mapStateToProps)(NavigationRequestsCmp)
