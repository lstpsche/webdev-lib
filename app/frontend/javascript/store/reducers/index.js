import { combineReducers } from "redux";

import currentUser from "./current_user";
import pageBlock from "./page_block";
import items from "./items";
import ui from "./ui";

export default combineReducers({
  currentUser,
  pageBlock,
  items,
  ui
});
