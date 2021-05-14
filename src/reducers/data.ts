import { TypeKeys } from '../actions/actionTypes'
import { DataActions } from '../actions/actionCreators/dataActions'
import { DataReducer, initialData } from '../initialData'

export default (state = initialData(), action: DataActions): DataReducer => {
  switch (action.type) {
    case TypeKeys.DATA_SUCCESS:
      return { ...state, data: action.data }

    default:
      return state
  }
}
