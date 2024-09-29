import {
  SIDEBAR_ACTION,
  AUTH_PROMPT_ACTION
} from "../action_types/sidebar";

const initialState = {
  open: false,
  signIn: { open: false },
  signUp: { open: false }
};

function sidebar(state = initialState, action) {
  const { type: actionType, open, signIn, signUp } = action;

  switch(actionType) {
    case SIDEBAR_ACTION:
      return { ...state, open }

    case AUTH_PROMPT_ACTION:
      return { ...state, signIn, signUp };

    default:
      return state;
  }
}

export default sidebar;
