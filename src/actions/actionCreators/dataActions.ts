import { DataItem } from '../../interfaces'
import { TypeKeys } from '../actionTypes'

export interface GetData {
  type: TypeKeys.DATA
}

export const getData = (): GetData => ({
  type: TypeKeys.DATA,
})

export interface GetDataSuccess {
  type: TypeKeys.DATA_SUCCESS
  data: DataItem[]
}

export const dataSuccess = (data: DataItem[]): GetDataSuccess => ({
  type: TypeKeys.DATA_SUCCESS,
  data,
})

export type DataActions = GetData | GetDataSuccess
