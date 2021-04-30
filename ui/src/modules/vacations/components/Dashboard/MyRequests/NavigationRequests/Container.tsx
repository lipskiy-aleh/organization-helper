import {connect} from 'react-redux'
import { NavigationRequests, INavigationRequestsProps } from './Component'
import { IRootState } from 'store'
import { getHistoryVacation } from '../../../../selectors'

const mapStateToProps = (state: IRootState): INavigationRequestsProps => ({
  history: getHistoryVacation(state),
})

export const NavigationRequestsConnecting = connect(mapStateToProps)(NavigationRequests)
