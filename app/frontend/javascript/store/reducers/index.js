import { combineReducers } from "redux";

import currentUser from "./current_user";
import pageBlock from "./page_block";
import sidebar from "./sidebar";
import items from "./items";

export default combineReducers({
  currentUser,
  pageBlock,
  sidebar,
  items
});
