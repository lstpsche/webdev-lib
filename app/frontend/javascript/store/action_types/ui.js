////////////////////////////////// breadcrumbs //////////////////////////////////
export const UI__BREADCRUMBS__RESET = "ui: breadcrumbs: reset";
export const UI__BREADCRUMBS__SET = "ui: breadcrumbs: set";
export const UI__BREADCRUMBS__PUSH = "ui: breadcrumbs: push";
export const UI__BREADCRUMBS__POP = "ui: breadcrumbs: pop";

//////////////////////////////////// sidebar ////////////////////////////////////
// sidebar -> open
export const UI__SIDEBAR__SET_OPEN = "ui: sidebar: open - set value";
export const UI__SIDEBAR__TOGGLE_OPEN = "ui: sidebar: open - toggle value";

// sidebar -> width
export const UI__SIDEBAR__SET_WIDTH = "ui: sidebar: width - set value";
export const UI__SIDEBAR__RESET_WIDTH = "ui: sidebar: width - reset value";

////////////////////////////////// user block popup //////////////////////////////////
// user block popup -> open
export const UI__USER_BLOCK_POPUP__SET_OPEN = "ui: user_block_popup: open - set value";
export const UI__USER_BLOCK_POPUP__TOGGLE_OPEN = "ui: user_block_popup: open - toggle value";

// user block popup -> window
export const UI__USER_BLOCK_POPUP__SET_WINDOW = "ui: user_block_popup: window - set value";

// to be reused across components/redux
export const UI__USER_BLOCK_POPUP__WINDOWS = {
  signIn: "signIn",
  signUp: "signUp",
  userActions: "userActions"
};
