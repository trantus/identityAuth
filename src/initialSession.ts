export interface SessionReducer {
  accessToken: string | null
}

export const initialSession = (): SessionReducer => ({
  accessToken: null,
})
