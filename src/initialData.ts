import { DataItem } from './interfaces'

export interface DataReducer {
  data: DataItem[]
}

export const initialData = (): DataReducer => ({
  data: [],
})
