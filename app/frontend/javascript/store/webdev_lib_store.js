import { configureStore } from "@reduxjs/toolkit";
import combinedReducers from "./reducers/index";

import { initialState as uiInitialState } from "./reducers/ui";
import { initialState as currentUserInitialState  } from "./reducers/current_user";
import { initialState as pageBlockInitialState } from "./reducers/page_block";
import { initialState as itemsInitialState } from "./reducers/items";

export const defaultStoreState = {
  ui: uiInitialState,
  currentUser: currentUserInitialState,
  pageBlock: pageBlockInitialState,
  items: itemsInitialState
};

export default configureStore({
  reducer: combinedReducers,
  preloadedState: defaultStoreState
});
