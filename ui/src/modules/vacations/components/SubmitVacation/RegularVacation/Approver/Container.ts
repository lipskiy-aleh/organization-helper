import { IRootState } from 'store'
import { connect } from 'react-redux'
import {ApproverCmp, IApproverProps} from './Component'
import { getManagerData } from 'selectors/manager'

const mapStateToProps = (state: IRootState): IApproverProps => ({
  manager: getManagerData(state),
})

export const Approver = connect(mapStateToProps)(ApproverCmp)
