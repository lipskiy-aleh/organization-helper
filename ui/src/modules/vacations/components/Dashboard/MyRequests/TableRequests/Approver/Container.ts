import {connect} from 'react-redux'
import { IRootState } from 'store'
import { ApproverCmp, IApproverProps } from './Component'
import { getManagerData } from 'selectors/manager'

const mapStateToProps = (state: IRootState): IApproverProps => ({
  managerData: getManagerData(state),
})

export const Approver = connect(mapStateToProps)(ApproverCmp)
