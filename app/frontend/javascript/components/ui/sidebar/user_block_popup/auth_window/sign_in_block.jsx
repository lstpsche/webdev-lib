import { connect } from "react-redux";
import { closeUserBlockPopup } from "../../../../../store/actions/ui";

import fetchLink from "../../../../../helpers/fetch_link";
import updateCurrentUser from "../../../../../data_loaders/update_current_user";

import SignInForm from "./forms/sign_in_form";

function SignInBlock({ closeUserBlockPopup }) {
  const handleSubmit = ({ email, password, failureCallback }) => {
    // TODO: create Loader component
    // it will accept an animation name (Artstation name in Rive) to be able to show different animations
    // it will accept a callback function
    // it will render a loader, that upon callback trigger will set needed state = end animation with success/failure

    fetchLink({
      link: "/users/sign_in",
      method: "POST",
      body: JSON.stringify({ user: { email, password } }),
      onSuccess: ({ signed_in: signedIn }) => {
        if (signedIn) {
          // TODO: animate success
          // NOTE: now it looks sloppy (new window is visible while popup hiding), but with animation it will be fixed
          closeUserBlockPopup();
          updateCurrentUser();
        } else {
          // TODO: animate failure
          // TODO: unblock auth popup (hide animation block)
          failureCallback();
        }
      }
    });
  }

  return (
    <div className="flex-grow h-full">
      <SignInForm onSubmit={handleSubmit}/>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  closeUserBlockPopup: () => dispatch(closeUserBlockPopup())
});

export default connect(undefined, mapDispatchToProps)(SignInBlock);
