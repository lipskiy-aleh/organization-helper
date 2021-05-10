export enum REQUEST_TYPE {
  REGULAR = 'regular',
  SICK = 'sick'
}

export enum STATUS {
  PENDING = 'pending',
  APPROVED = 'approved',
  IN_PROGRESS = 'inProgress',
  CANCELED = 'canceled',
  CLOSED = 'closed',
  AUTO_CLOSED = 'autoClosed',
}

export interface VacationHistoryItemModel{
  type: REQUEST_TYPE
  status: STATUS
  reason: string
  startDate: string
  endDate: string
  approvedBy: string | null
  approveDate: string | null
}
