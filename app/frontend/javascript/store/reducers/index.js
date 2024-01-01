import { combineReducers } from "redux";

import currentUser from "./current_user";
import pageBlock from "./page_block";

export default combineReducers({
  currentUser,
  pageBlock
});
