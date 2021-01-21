import { VacationHistoryItemModel } from './vacationHistoryItem.model'
import { VacationInfoModel } from './vacationInfo.model'

export interface BackEndVacationsDataModel {
  regularVacation: VacationInfoModel,
  sickVacation: VacationInfoModel,
  history: VacationHistoryItemModel[]
}
