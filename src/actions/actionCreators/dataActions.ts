import {TypeKeys} from '../actionTypes';

export interface GetData {
  type: TypeKeys.DATA;
}

export const getData = (): GetData => ({
  type: TypeKeys.DATA,
});

export interface GetDataSuccess {
  type: TypeKeys.DATA_SUCCESS;
  data: any;
}

export const authSuccess = (data: any): GetDataSuccess => ({
  type: TypeKeys.DATA_SUCCESS,
  data,
});

export type SessionActions = GetData | GetDataSuccess;
