import {PayType} from './enums'

export interface IFormData {
  payType: PayType
  isNDFL: boolean
  payAmount: number
}