import { connect } from "react-redux";
import { blockPage, unblockPage } from "../../store/actions/page_block";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import fetchLink from "../../helpers/fetch_link";
import updateCurrentUser from "../../data_loaders/update_current_user";

// import Logo from "../logo";
import SignInForm from "./forms/sign_in_form";

function SignIn({ blockPage, unblockPage }) {
  const navigate = useNavigate();

  const handleSubmit = ({ email, password, failureCallback }) => {
    blockPage("Logging in...");

    fetchLink({
      link: "/users/sign_in",
      method: "POST",
      body: JSON.stringify({ user: { email, password } }),
      onSuccess: ({ signed_in: signedIn }) => {
        if (!signedIn) {
          unblockPage();
          toast.error("Some error occurred!");
          failureCallback();
          return;
        }

        updateCurrentUser();
        navigate("/");
        unblockPage();
        toast.success("Signed in!");
      }
    });
  }

  return(
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {/*<Logo solid className="mx-auto h-10 w-auto"/>*/}

        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <SignInForm onSubmit={handleSubmit} />

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{' '}
          <Link to="/sign_up" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Join us
          </Link>
        </p>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  blockPage: (blockMessage) => dispatch(blockPage({ blockMessage })),
  unblockPage: () => dispatch(unblockPage())
});

export default connect(undefined, mapDispatchToProps)(SignIn);
