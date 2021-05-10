import { IRootState } from 'store'
import { RegularVacationCmp, IRegularVacationProps } from './Component'
import { connect } from 'react-redux'
import { getManagerData } from 'selectors/manager'
import { addRequest } from 'modules/vacations/actions'

const mapStateToProps = (state: IRootState): IRegularVacationProps => ({
  manager: getManagerData(state),
})

export const RegularVacation = connect(mapStateToProps,
  {addRequest})(RegularVacationCmp)
