import {
  SET_CURRENT_USER,
  UPDATE_CURRENT_USER,
  REMOVE_CURRENT_USER
} from "../action_types/current_user";

export const setCurrentUser = ({ id, signedIn, email }) => ({
  type: SET_CURRENT_USER,
  id, signedIn, email
})

export const updateCurrentUser = ({ signedIn, email }) => ({
  type: UPDATE_CURRENT_USER,
  signedIn, email
})

export const removeCurrentUser = () => ({
  type: REMOVE_CURRENT_USER
})
