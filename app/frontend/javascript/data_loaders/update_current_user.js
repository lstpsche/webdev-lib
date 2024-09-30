import { setCurrentUser } from "../store/actions/current_user";
import { userBlockPopupSetWindowSignIn, userBlockPopupSetWindowUserActions } from "../store/actions/ui";
import { blockPage, unblockPage } from "../store/actions/page_block";
import store from "../store/webdev_lib_store";

import fetchLink from "../helpers/fetch_link";

function updateCurrentUser() {
  store.dispatch(blockPage());

  fetchLink({
    link: "/api/v1/current_user",
    onSuccess: ({ signed_in, user = {} }) => {
      store.dispatch(setCurrentUser({ signedIn: signed_in, ...user }));
      store.dispatch(signed_in ? userBlockPopupSetWindowUserActions() : userBlockPopupSetWindowSignIn());
      store.dispatch(unblockPage());
    },
    errorMessage: "An error occurred. Please, reload the page."
  });
}

export default updateCurrentUser;
