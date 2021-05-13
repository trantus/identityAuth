import {initialSession, SessionReducer} from '../initialSession';
// import { CompetitionActions } from '../../actions/actionCreators'
import {TypeKeys} from '../actions/actionTypes';
import {SessionActions} from '../actions/actionCreators/sessionActions';

export default (
  state = initialSession(),
  action: SessionActions,
): SessionReducer => {
  switch (action.type) {
    case TypeKeys.AUTH_SUCCESS:
      return {...state, accessToken: action.accessToken};

    default:
      return state;
  }
};
