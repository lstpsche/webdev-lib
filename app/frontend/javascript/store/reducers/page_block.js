import {
  BLOCK_PAGE,
  UNBLOCK_PAGE
} from "../action_types/page_block";

export const initialState = {
  status: true, // default status = true made so that the first thing to appear on a screen would be a loading screen
  blockMessage: undefined
};

function pageBlock(state = initialState, action) {
  const { type: actionType, status, blockMessage } = action;

  switch(actionType) {
    case BLOCK_PAGE:
      return { status, blockMessage };

    case UNBLOCK_PAGE:
      return initialState;

    default:
      return state;
  }
}

export default pageBlock;
