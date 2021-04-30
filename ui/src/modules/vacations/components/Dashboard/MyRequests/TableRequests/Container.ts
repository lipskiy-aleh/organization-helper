import {connect} from 'react-redux'
import { TableRequests, ITableRequestsProps } from './Component'
import { IRootState } from 'store'
import { getHistoryVacation } from '../../../../selectors'

const mapStateToProps = (state: IRootState): ITableRequestsProps => ({
  history: getHistoryVacation(state),
})

export const TableRequestsConnecting = connect(mapStateToProps)(TableRequests)
