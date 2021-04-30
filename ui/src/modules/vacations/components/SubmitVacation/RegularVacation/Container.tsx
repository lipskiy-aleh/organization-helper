import React from 'react'
import { IRootState } from 'store'
import { RegularVacation, IRegularVacationProps } from './Component'
import { connect } from 'react-redux'
import { getUserData } from 'selectors/user'
import { getManagerData } from 'selectors/manager'
import { addRequest } from '../../../actions'

const mapStateToProps = (state: IRootState): IRegularVacationProps => ({
  userName: getUserData(state).name,
  userSurname: getUserData(state).surname,
  manager: getManagerData(state),
})

export const RegularVacationConnected = connect(mapStateToProps, {addRequest})(RegularVacation)
