import {
  // breadcrumbs
  UI__BREADCRUMBS__RESET,
  UI__BREADCRUMBS__SET,
  UI__BREADCRUMBS__PUSH,
  UI__BREADCRUMBS__POP,

  // sidebar
  UI__SIDEBAR__SET_OPEN,
  UI__SIDEBAR__TOGGLE_OPEN,
  UI__SIDEBAR__SET_WIDTH,
  UI__SIDEBAR__RESET_WIDTH,

  // user block popup
  UI__USER_BLOCK_POPUP__SET_OPEN,
  UI__USER_BLOCK_POPUP__TOGGLE_OPEN,
  UI__USER_BLOCK_POPUP__SET_WINDOW,
  UI__USER_BLOCK_POPUP__WINDOWS,
} from "../action_types/ui";

import { homeBreadcrumb } from "../actions/ui";

export const initialState = {
  breadcrumbs: [homeBreadcrumb], // [{ title, link }]; last = current
  sidebar: { open: false, width: 256 }, // width in pixels
  userBlockPopup: { open: false, window: UI__USER_BLOCK_POPUP__WINDOWS.signIn },
  footer: { height: 25 } // height in pixels
};

function ui(state = initialState, action) {
  const { type: actionType, userBlockPopup, sidebar, breadcrumbs, breadcrumb } = action;

  switch(actionType) {
    //////////////////////////////////// breadcrumbs //////////////////////////////////
    case UI__BREADCRUMBS__RESET:
      return { ...state, breadcrumbs: initialState.breadcrumbs };

    case UI__BREADCRUMBS__SET:
      return { ...state, breadcrumbs: breadcrumbs };

    case UI__BREADCRUMBS__PUSH:
      return { ...state, breadcrumbs: [...state.breadcrumbs, breadcrumb] };

    case UI__BREADCRUMBS__POP:
      return { ...state, breadcrumbs: state.breadcrumbs.slice(0, -1) };

    //////////////////////////////////// sidebar ////////////////////////////////////
    case UI__SIDEBAR__SET_OPEN:
      return { ...state, sidebar: { ...state.sidebar, open: sidebar.open } };

    case UI__SIDEBAR__TOGGLE_OPEN:
      return { ...state, sidebar: { ...state.sidebar, open: !state.sidebar.open } };

    case UI__SIDEBAR__SET_WIDTH:
      return { ...state, sidebar: { ...state.sidebar, width: sidebar.width } };

    case UI__SIDEBAR__RESET_WIDTH:
      return { ...state, sidebar: { ...state.sidebar, width: initialState.sidebar.width } };

    ////////////////////////////////// user block popup //////////////////////////////////
    case UI__USER_BLOCK_POPUP__SET_OPEN:
      return { ...state, userBlockPopup: { ...state.userBlockPopup, open: userBlockPopup.open } };

    case UI__USER_BLOCK_POPUP__TOGGLE_OPEN:
      return { ...state, userBlockPopup: { ...state.userBlockPopup, open: !state.userBlockPopup.open } };

    case UI__USER_BLOCK_POPUP__SET_WINDOW:
      return { ...state, userBlockPopup: { ...state.userBlockPopup, window: userBlockPopup.window } };

    default:
      return state;
  }
}

export default ui;
