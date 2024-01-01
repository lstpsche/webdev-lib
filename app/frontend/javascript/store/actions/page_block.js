import {
  BLOCK_PAGE,
  UNBLOCK_PAGE
} from "../action_types/page_block";

export const blockPage = ({ blockMessage } = {}) => ({
  type: BLOCK_PAGE,
  status: true,
  blockMessage
})

export const unblockPage = () => ({
  type: UNBLOCK_PAGE
})
