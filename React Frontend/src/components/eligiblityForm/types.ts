export type handleFieldChangeType = (e: React.FormEvent) => void

export enum titleType {
  "Mr","Mrs", "Miss", "Ms", "Dr"
}

export type dateType = {
  day: number
  month: number
  year: number
}

export enum maritalStatusType {
  "Single", "Married", "Cohabiting", "Divorced", "Widowed"
}

export interface slideOneData {
  title?: titleType,
  firstName?: string,
  lastName?: string,
  dataOfBirth?: dateType,
  maritalStatus?: maritalStatusType
}