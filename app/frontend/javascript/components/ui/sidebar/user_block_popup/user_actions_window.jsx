import { connect } from "react-redux";

import updateCurrentUser from "../../../../data_loaders/update_current_user";
import fetchLink from "../../../../helpers/fetch_link";
import { closeUserBlockPopup } from "../../../../store/actions/ui";

import UserActionButton from "./user_actions_window/user_action_button";

function UserActionsWindow({ closeUserBlockPopup }) {
  //////////////////////// handlers ////////////////////////

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

  const buttons = [
    { name: "profile", label: "profile", onClick: () => {} },
    { name: "settings", label: "settings", onClick: () => {} },
    { name: "signOut", label: "sign out", onClick: handleSignOut }
  ];

  return (
    <div className="h-full flex flex-col">
      {
        buttons.map(button => (
          <UserActionButton
            key={button.name}
            onClick={button.onClick}
            label={button.label}
          />
        ))
      }
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  closeUserBlockPopup: () => dispatch(closeUserBlockPopup()),
})

export default connect(undefined, mapDispatchToProps)(UserActionsWindow);
