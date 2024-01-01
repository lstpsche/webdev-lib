import { connect } from "react-redux";
import { blockPage, unblockPage } from "../../store/actions/page_block";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import fetchLink from "../../helpers/fetch_link";
import updateCurrentUser from "../../data_loaders/update_current_user";

// import Logo from "../logo";
import SignUpForm from "./forms/sign_up_form";

function SignUp({ blockPage, unblockPage }) {
  const navigate = useNavigate();

  const handleSubmit = ({ email, password, passwordConfirmation, failureCallback }) => {
    blockPage("Creating your account...");

    fetchLink({
      link: "/users",
      method: "POST",
      body: JSON.stringify({
        user: {
          email, password,
          password_confirmation: passwordConfirmation
        }
      }),
      onSuccess: ({ error }) => {
        if (error) {
          unblockPage();
          toast.error("Some error occurred!");
          failureCallback({ error });
          return;
        }

        updateCurrentUser();
        navigate("/");
        unblockPage();
        toast.success("Signed up!");
      }
    });
  }

  return(
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {/*<Logo className="mx-auto h-10 w-auto"/>*/}

        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <SignUpForm onSubmit={handleSubmit}/>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already a member?{' '}
          <Link to="/sign_in" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Sign in
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

export default connect(undefined, mapDispatchToProps)(SignUp);
