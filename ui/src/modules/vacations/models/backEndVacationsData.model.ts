import { VacationHistoryItemModel } from './vacationHistoryItem.model'
import { VacationInfoModel } from './vacationInfo.model'
import { OtherVacationsModel } from './otherVacations.model'

export interface BackEndVacationsDataModel {
  regularVacation: VacationInfoModel,
  sickVacation: VacationInfoModel,
  otherVacations: OtherVacationsModel,
  history: VacationHistoryItemModel[]
}
