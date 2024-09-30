import {
  // sidebar
  UI__SIDEBAR__SET_OPEN,
  UI__SIDEBAR__TOGGLE_OPEN,
  UI__SIDEBAR__SET_WIDTH,
  UI__SIDEBAR__RESET_WIDTH,

  // user block popup popup
  UI__USER_BLOCK_POPUP__SET_OPEN,
  UI__USER_BLOCK_POPUP__TOGGLE_OPEN,
  UI__USER_BLOCK_POPUP__SET_WINDOW,
  UI__USER_BLOCK_POPUP__WINDOWS,
} from "../action_types/ui";

//////////////////////////////////// sidebar ////////////////////////////////////
// sidebar -> open
export const openSidebar = () => ({ type: UI__SIDEBAR__SET_OPEN, sidebar: { open: true } });
export const closeSidebar = () => ({ type: UI__SIDEBAR__SET_OPEN, sidebar: { open: false } });
export const setSidebar = (open) => ({ type: UI__SIDEBAR__SET_OPEN, sidebar: { open: open } });
export const toggleSidebar = () => ({ type: UI__SIDEBAR__TOGGLE_OPEN });

// sidebar -> width
export const setSidebarWidth = (width) => ({ type: UI__SIDEBAR__SET_WIDTH, sidebar: { width } });
export const resetSidebarWidth = () => ({ type: UI__SIDEBAR__RESET_WIDTH });

////////////////////////////////// user block popup //////////////////////////////////
// user block popup -> open
export const openUserBlockPopup = () => ({ type: UI__USER_BLOCK_POPUP__SET_OPEN, userBlockPopup: { open: true } });
export const closeUserBlockPopup = () => ({ type: UI__USER_BLOCK_POPUP__SET_OPEN, userBlockPopup: { open: false } });
export const setUserBlockPopup = (open) => ({ type: UI__USER_BLOCK_POPUP__SET_OPEN, userBlockPopup: { open: open } });
export const toggleUserBlockPopup = () => ({ type: UI__USER_BLOCK_POPUP__TOGGLE_OPEN });

// user block popup -> window
export const userBlockPopupSetWindowSignIn = () => ({ type: UI__USER_BLOCK_POPUP__SET_WINDOW, userBlockPopup: { window: UI__USER_BLOCK_POPUP__WINDOWS.signIn} });
export const userBlockPopupSetWindowSignUp = () => ({ type: UI__USER_BLOCK_POPUP__SET_WINDOW, userBlockPopup: { window: UI__USER_BLOCK_POPUP__WINDOWS.signUp} });
export const userBlockPopupSetWindowUserActions = () => ({ type: UI__USER_BLOCK_POPUP__SET_WINDOW, userBlockPopup: { window: UI__USER_BLOCK_POPUP__WINDOWS.userActions} });
export const userBlockPopupSetWindow = (window) => ({ type: UI__USER_BLOCK_POPUP__SET_WINDOW, userBlockPopup: { window } });
