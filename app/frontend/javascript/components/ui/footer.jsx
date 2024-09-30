import { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  userBlockPopupSetWindowSignIn, userBlockPopupSetWindowUserActions,
  toggleUserBlockPopup
} from "../../store/actions/ui";

function Footer({ userBlockPopupOpen, currentUser, toggleSignIn, toggleUserBlockPopup }) {
  const [time, setTime] = useState(new Date());

  const contributeBlock = () => {
    // TODO: clickable `contribute` button will be implemented in #WDL-13
    return ("Contribute")
  }

  const userButton = () => {
    return (
      <button
        id="footer:sign-in-button"
        className={`
          px-1 rounded hover:bg-cyan-950
          ${userBlockPopupOpen ? "bg-gray-800" : "bg-transparent"}
        `}
        onClick={currentUser.signedIn ? toggleUserBlockPopup : toggleSignIn}
      >
        {
          currentUser.signedIn
          ? currentUser.displayName
          : "Join community"
        }
      </button>
    )
  }

  useEffect(() => {
    var timer = setInterval(() => setTime(new Date()), 1000);

    return () => { clearInterval(timer) }
  })

  return (
    <footer
      className="
        fixed bottom-0 left-0
        w-full
        p-1 z-20
        bg-white dark:bg-gray-900
        flex justify-between
        border-t
        border-gray-100 dark:border-gray-600
        text-gray-700 dark:text-gray-400
        text-xs font-medium antialiased
        py-1 px-4
      "
    >
      <div id="footer-username">
        { userButton() }
      </div>
      <div className="flex flex-row">
        <div
          className="
            mx-12 px-2
            border-x rounded-sm
            border-gray-100 dark:border-gray-600
          "
        >
          { contributeBlock() }
        </div>
        <div id="current-time">
          <p className="uppercase">{time.toLocaleTimeString([], { timeStyle: "short", hour12: true })}</p>
        </div>
      </div>
    </footer>
  )
}

const mapStateToProps = ({
  ui: { userBlockPopup: { open } },
  currentUser: { signedIn, displayName }
}) => ({
  userBlockPopup: open,
  currentUser: { signedIn, displayName }
});

const mapDispatchToProps = dispatch => ({
  toggleSignIn: () => {
    dispatch(userBlockPopupSetWindowSignIn());
    dispatch(toggleUserBlockPopup());
  },
  toggleUserBlockPopup: () => dispatch(toggleUserBlockPopup()) // not setting windowUserActions to save users state -- this reset is controlled in other components
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
