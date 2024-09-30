import {
  SET_ITEMS,
  ADD_ITEM,
  UPDATE_ITEM,
  REMOVE_ITEM
} from "../action_types/items";

export const initialState = []; // { id, name, link, description, parent_id, item_type, is_project, is_category, children_count, has_children }

function items(state = initialState, action) {
  const { type: actionType, items, item } = action;

  switch(actionType) {
    case SET_ITEMS:
      return items;

    case ADD_ITEM:
      return [...state, item];

    case UPDATE_ITEM:
      return state.map((i) => {
        if (i.id === item.id) {
          return item;
        } else {
          return i;
        }
      });

    case REMOVE_ITEM:
      return state.filter((i) => i.id !== item.id);

    default:
      return state;
  }
}

export default items;
