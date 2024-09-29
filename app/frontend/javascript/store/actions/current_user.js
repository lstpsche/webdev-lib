import {
  SET_CURRENT_USER,
  UPDATE_CURRENT_USER,
  REMOVE_CURRENT_USER
} from "../action_types/current_user";

const getDisplayName = (email) => (email?.split('@')[0])

export const setCurrentUser = ({ id, signedIn, email }) => ({
  type: SET_CURRENT_USER,
  id, signedIn, email,
  displayName: getDisplayName(email)
})

export const updateCurrentUser = ({ signedIn, email }) => ({
  type: UPDATE_CURRENT_USER,
  signedIn, email,
  displayName: getDisplayName(email)
})

export const removeCurrentUser = () => ({
  type: REMOVE_CURRENT_USER
})
