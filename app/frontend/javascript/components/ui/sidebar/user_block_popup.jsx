import { useRef, useEffect } from "react";
import { connect } from "react-redux";

import { UI__USER_BLOCK_POPUP__WINDOWS } from "../../../store/action_types/ui";
import { closeUserBlockPopup } from "../../../store/actions/ui";

import AuthWindow from "./user_block_popup/auth_window";
import UserActionsWindow from "./user_block_popup/user_actions_window";

function UserBlockPopup({ sidebarWidth, footerHeight, open, popupWindow, closeUserBlockPopup }) {
  const userBlockPopupRef = useRef(null);

  useEffect(() => {
    // close userBlockPopup if clicked outside of it
    const handleClickOuside = (event) => {
      if (userBlockPopupRef.current && !userBlockPopupRef.current.contains(event.target)) {
        closeUserBlockPopup();
      }
    }

    // listen for clicks on document
    document.addEventListener("mousedown", handleClickOuside);
    // unbind event listener on component unmount
    return () => document.removeEventListener("mousedown", handleClickOuside);
  }, [closeUserBlockPopup]);

  const userBlockWindowComponentsMapping = {
    [UI__USER_BLOCK_POPUP__WINDOWS.signIn]: AuthWindow,
    [UI__USER_BLOCK_POPUP__WINDOWS.signUp]: AuthWindow,
    [UI__USER_BLOCK_POPUP__WINDOWS.userActions]: UserActionsWindow
  };

  const UserBlockWindowComponent = userBlockWindowComponentsMapping[popupWindow] || (() => <></>);

  return (
    <div
      ref={userBlockPopupRef}
      id="user-block-popup"
      style={{ // defining these styles as tailwind somehow doesn't work with dynamic w-[NNpx] like classes
        width: sidebarWidth + "px",
        bottom: footerHeight + "px"
      }}
      className={`
        fixed left-0 z-10
        bg-white dark:bg-gray-900
        text-gray-700 dark:text-gray-100
        border-r border-t
        border-gray-100 dark:border-gray-600
        transform transition-transform duration-200 ease-in-out
        overflow-auto
        ${( open ? "translate-y-0" : "translate-y-full" )}
      `}
    >
      <UserBlockWindowComponent/>
    </div>
  )
}

const mapStateToProps = ({
  ui: {
    sidebar: { width: sidebarWidth },
    footer: { height: footerHeight },
    userBlockPopup: { open, window: popupWindow }
  }
}) => ({
  sidebarWidth,
  footerHeight,
  open, popupWindow
});

const mapDispatchToProps = dispatch => ({
  closeUserBlockPopup: () => dispatch(closeUserBlockPopup())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserBlockPopup);
