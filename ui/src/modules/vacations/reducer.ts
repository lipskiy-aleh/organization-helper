import { AnyAction } from 'redux'
import { VacationInfoModel } from './models/vacationInfo.model'
import { VacationHistoryItemModel } from './models/vacationHistoryItem.model'
import { BackEndVacationsDataModel } from './models/backEndVacationsData.model'
import { SET_VACATIONS_DATA } from './actions'
export interface IVacationsReducer {
  regularVacation?: VacationInfoModel,
  sickVacation?: VacationInfoModel,
  history: VacationHistoryItemModel[]
}

const defaultSate: IVacationsReducer = {
  history: [],
}

export const vacationReducer = (state: IVacationsReducer = defaultSate, action: AnyAction): IVacationsReducer => {
  switch (action.type) {
    case SET_VACATIONS_DATA: {
      const data = action.payload as BackEndVacationsDataModel
      return {
        ...state,
        ...data,
      }
    } default:
      return state
  }
}
