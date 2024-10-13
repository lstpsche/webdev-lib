import { connect } from "react-redux";
import { closeUserBlockPopup } from "../../../../../store/actions/ui";

import fetchLink from "../../../../../helpers/fetch_link";
import updateCurrentUser from "../../../../../data_loaders/update_current_user";

import SignUpForm from "./forms/sign_up_form";

function SignUpBlock() {
  const handleSubmit = ({ email, password, failureCallback }) => {
    fetchLink({
      link: "/users",
      method: "POST",
      body: JSON.stringify({ user: { email, password, password_confirmation: password } }),
      onSuccess: ({ signed_in: signedIn, error: errorMessage }) => {
        if (signedIn) {
          // TODO: animate success
          closeUserBlockPopup();
          // wait 0.2 sec before updating current user to avoid visible window change
          setTimeout(() => updateCurrentUser(), 200);
        } else {
          // TODO: animate failure
          failureCallback(errorMessage);
        }
      }
    });
  }

  return (
    <div className="flex-grow h-full">
      <SignUpForm onSubmit={handleSubmit}/>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  closeUserBlockPopup: () => dispatch(closeUserBlockPopup())
});

export default connect(undefined, mapDispatchToProps)(SignUpBlock);
