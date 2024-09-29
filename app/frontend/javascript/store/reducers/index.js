import { combineReducers } from "redux";

import currentUser from "./current_user";
import pageBlock from "./page_block";
import sidebar from "./sidebar";

export default combineReducers({
  currentUser,
  pageBlock,
  sidebar
});
