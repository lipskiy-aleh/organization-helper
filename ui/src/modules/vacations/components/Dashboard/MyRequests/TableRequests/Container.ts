import { connect } from 'react-redux'
import { ITableRequestsProps, TableRequestsCmp } from './Component'
import { IRootState } from 'store'
import { getHistoryVacation } from 'modules/vacations/selectors'

const mapStateToProps = (state: IRootState): ITableRequestsProps => ({
  history: getHistoryVacation(state),
})

export const TableRequests = connect(mapStateToProps)(TableRequestsCmp)
