export interface RootState {
  session: {
    accessToken: string | null
    refreshToken: string | null
  }
}