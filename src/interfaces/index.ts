import { DataReducer } from '../initialData'
import { SessionReducer } from '../initialSession'

export * from './data'

export interface RootState {
  session: SessionReducer
  listOfData: DataReducer
}
