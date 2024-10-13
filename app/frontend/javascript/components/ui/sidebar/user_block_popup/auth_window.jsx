import { connect } from "react-redux";
import { userBlockPopupSetWindowSignUp, userBlockPopupSetWindowSignIn } from "../../../../store/actions/ui";
import { UI__USER_BLOCK_POPUP__WINDOWS } from "../../../../store/action_types/ui";
import SignInBlock from "./auth_window/sign_in_block";
import SignUpBlock from "./auth_window/sign_up_block";

function AuthWindow({ windowSignIn, windowSignUp, userBlockPopupSetWindowSignIn, userBlockPopupSetWindowSignUp }) {
  const headerButtonClasses = (active) => (
    `transition-colors duration-75 ease-in-out
    ${active ? "text-gray-200 pointer-events-none" : "text-gray-700 hover:text-gray-500 focus:text-gray-400"}`
  )

  const signInHeaderButton = () => (
    <button
      className={`place-self-end ${headerButtonClasses(windowSignIn)}`}
      onClick={windowSignIn ? () => {} : userBlockPopupSetWindowSignIn}
    >
      sign in /
    </button>
  )

  const signUpHeaderButton = () => (
    <button
      className={`place-self-start ${headerButtonClasses(windowSignUp)}`}
      onClick={windowSignUp ? () => {} : userBlockPopupSetWindowSignUp}
    >
      / sign up
    </button>
  )

  return(
    <div
      className="flex flex-col"
      // default w/h values were measured in practice
      // default w/h values are set here so that authPopup layout wouldn't be affected by sidebarWidth change
      style={{ width: "223px", height: "223px" }}
    >
      <h1 className="tracking-wide font-mono text-center grid grid-flow-col grid-rows-1">
        { signInHeaderButton() }
        { signUpHeaderButton() }
      </h1>

      { windowSignIn && <SignInBlock/> }
      { windowSignUp && <SignUpBlock/> }
    </div>
  )
}

const mapStateToProps = ({
  ui: {
    userBlockPopup: { window }
  }
}) => ({
  windowSignIn: window === UI__USER_BLOCK_POPUP__WINDOWS.signIn,
  windowSignUp: window === UI__USER_BLOCK_POPUP__WINDOWS.signUp
});

const mapDispatchToProps = dispatch => ({
  userBlockPopupSetWindowSignIn: () => dispatch(userBlockPopupSetWindowSignIn()),
  userBlockPopupSetWindowSignUp: () => dispatch(userBlockPopupSetWindowSignUp()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthWindow);
