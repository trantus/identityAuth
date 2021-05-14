import { TypeKeys } from '../actionTypes'

export interface Auth {
  type: TypeKeys.AUTH
}

export const auth = (): Auth => ({
  type: TypeKeys.AUTH,
})

export interface AuthSuccess {
  type: TypeKeys.AUTH_SUCCESS
  accessToken: string
  refreshToken: string
}

export const authSuccess = (accessToken: string, refreshToken: string): AuthSuccess => ({
  type: TypeKeys.AUTH_SUCCESS,
  accessToken,
  refreshToken,
})

export type SessionActions = Auth | AuthSuccess
