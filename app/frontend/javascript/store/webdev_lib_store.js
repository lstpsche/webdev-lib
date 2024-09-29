import { configureStore } from "@reduxjs/toolkit";
import combinedReducers from "./reducers/index";

const defaultStoreState = {
  currentUser: { id: undefined, signedIn: undefined, email: "" },
  // default status = true made so that the first thing to appear on a screen would be a loading screen
  pageBlock: { status: true, blockMessage: undefined },
  sidebar: {
    open: false,
    signIn: { open: false },
    signUp: { open: false }
  },
  items: [] // { id, name, link, description, parent_id, item_type, is_project, is_category, children_count, has_children }
};

export default configureStore({
  reducer: combinedReducers,
  preloadedState: defaultStoreState
});
