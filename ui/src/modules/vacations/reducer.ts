import { AnyAction } from 'redux'
import { VacationInfoModel } from './models/vacationInfo.model'
import { VacationHistoryItemModel} from './models/vacationHistoryItem.model'
import { BackEndVacationsDataModel } from './models/backEndVacationsData.model'
import { OtherVacationsModel } from './models/otherVacations.model'
import { SET_VACATIONS_DATA, ADD_REQUEST, ADD_DURATION } from './actions'

export interface IVacationsReducer {
  regularVacation?: VacationInfoModel,
  sickVacation?: VacationInfoModel,
  otherVacations?: OtherVacationsModel,
  duration?: number,
  history: VacationHistoryItemModel[],
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
    }

    case ADD_REQUEST: {
      return {
        ...state,
        history: [...state.history, action.payload],
      }
    }

    case ADD_DURATION: {
      return {
        ...state,
        duration: action.duration,
      }
    }

    default:
      return state
  }
}
