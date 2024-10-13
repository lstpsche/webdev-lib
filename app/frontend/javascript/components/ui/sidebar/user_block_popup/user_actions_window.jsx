import { connect } from "react-redux";

import updateCurrentUser from "../../../../data_loaders/update_current_user";
import fetchLink from "../../../../helpers/fetch_link";
import { closeUserBlockPopup } from "../../../../store/actions/ui";

function UserActionsWindow({ closeUserBlockPopup }) {
  const handleSignOut = () => {
    // TODO: launch animation

    fetchLink({
      link: "/users/sign_out",
      method: "DELETE",
      onSuccess: ({ signed_in: signedIn }) => { // if signedIn --> sign_out was a failure
        if (signedIn) {
          // TODO: animate failure
          // TODO: unblock auth popup (hide animation block)
        } else {
          // TODO: animate success
          closeUserBlockPopup();
          // wait 0.2 sec before updating current user to avoid visible window change
          setTimeout(() => updateCurrentUser(), 200);
        }
      }
    })
  }

  // TODO: Will be done properly in #WDL-26
  // TODO: now it is needed to be able to logout and test sign in/sign up scenarios
  return (
    <button
      onClick={handleSignOut}
    >
      Sign out
    </button>
  )
}

const mapDispatchToProps = dispatch => ({
  closeUserBlockPopup: () => dispatch(closeUserBlockPopup()),
})

export default connect(undefined, mapDispatchToProps)(UserActionsWindow);
