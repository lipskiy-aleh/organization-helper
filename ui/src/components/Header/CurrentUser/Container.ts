import { connect } from 'react-redux'
import { IRootState } from 'store'
import { getUserData } from 'selectors/user'
import { CurrentUser, IUserPhotoProps } from './Component'

const mapStateToProps = (state: IRootState): IUserPhotoProps => ({
  userPhoto: getUserData(state).photo,
})

export const CurrentUserContainer = connect(mapStateToProps)(CurrentUser)

