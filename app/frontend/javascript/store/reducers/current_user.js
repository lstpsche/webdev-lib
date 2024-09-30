import {
  SET_CURRENT_USER,
  UPDATE_CURRENT_USER,
  REMOVE_CURRENT_USER
} from "../action_types/current_user";

export const initialState = {
  id: undefined,
  signedIn: undefined,
  email: "",
  displayName: ""
};

function currentUser(state = initialState, action) {
  const { type: actionType, id, signedIn, email, displayName } = action;

  switch(actionType) {
    case SET_CURRENT_USER:
      return { id, signedIn, email, displayName };

    case UPDATE_CURRENT_USER:
      return { ...state, signedIn, email, displayName };

    case REMOVE_CURRENT_USER:
      return initialState;

    default:
      return state;
  }
}

export default currentUser;
