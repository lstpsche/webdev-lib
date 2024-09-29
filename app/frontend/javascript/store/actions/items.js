import {
  SET_ITEMS,
  ADD_ITEM,
  UPDATE_ITEM,
  REMOVE_ITEM
} from "../action_types/items";

export const setItems = (items) => ({
  type: SET_ITEMS,
  items
})

export const addItem = (item) => ({
  type: ADD_ITEM,
  item
})

export const updateItem = (item) => ({
  type: UPDATE_ITEM,
  item
})

export const removeItem = (id) => ({
  type: REMOVE_ITEM,
  id
})
