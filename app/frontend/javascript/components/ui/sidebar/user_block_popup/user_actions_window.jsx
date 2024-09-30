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
          //
          // NOTE: now it looks sloppy (new window is visible while popup hiding), but with animation it will be fixed
          closeUserBlockPopup();
          updateCurrentUser();
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
