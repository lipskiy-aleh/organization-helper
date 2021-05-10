import { connect } from 'react-redux'
import { IRootState } from 'store'
import { EmployeeCmp, IEmployeeProps } from './Component'
import { getUserData } from 'selectors/user'

const mapStateToProps = (state: IRootState): IEmployeeProps => ({
  userName: getUserData(state).name,
  userSurname: getUserData(state).surname,
})

export const Employee = connect(mapStateToProps)(EmployeeCmp)
