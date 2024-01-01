import { configureStore } from "@reduxjs/toolkit";
import combinedReducers from "./reducers/index";

const defaultStoreState = {
  currentUser: { id: undefined, signedIn: undefined, email: "" },
  // default status = true made so that the first thing to appear on a screen would be a loading screen
  pageBlock: { status: true, blockMessage: undefined },
};

export default configureStore({
  reducer: combinedReducers,
  preloadedState: defaultStoreState
});
