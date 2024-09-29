import { setItems } from "../store/actions/items";
import { blockPage, unblockPage } from "../store/actions/page_block";
import store from "../store/webdev_lib_store";

import fetchLink from "../helpers/fetch_link";

function updateItems() {
  store.dispatch(blockPage());

  fetchLink({
    link: "/api/v1/items",
    onSuccess: ({ items }) => {
      store.dispatch(setItems(items));
      store.dispatch(unblockPage());
    },
    errorMessage: "An error occurred. Please, reload the page."
  });
}

export default updateItems;
