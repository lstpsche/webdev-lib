import {
  SIDEBAR_ACTION,
  AUTH_PROMPT_ACTION
} from "../action_types/sidebar";

export const openSidebar = () => ({
  type: SIDEBAR_ACTION,
  open: true
})

export const closeSidebar = () => ({
  type: SIDEBAR_ACTION,
  open: false
})

export const openSignIn = () => ({
  type: AUTH_PROMPT_ACTION,
  signIn: { open: true },
  signUp: { open: false }
})

export const openSignUp = () => ({
  type: AUTH_PROMPT_ACTION,
  signIn: { open: false },
  signUp: { open: true }
})

export const closeAuth = () => ({
  type: AUTH_PROMPT_ACTION,
  signIn: { open: false },
  signUp: { open: false }
})
