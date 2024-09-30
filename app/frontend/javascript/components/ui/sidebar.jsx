import { connect } from "react-redux";

import SidebarTree from "./sidebar/sidebar_tree";
import UserBlockPopup from "./sidebar/user_block_popup";

function Sidebar({ sidebarWidth }) {
  return (
    <div
      id="sidebar"
      style={{ width: sidebarWidth + "px" }}
      className={`
        bg-white dark:bg-gray-900
        text-gray-700 dark:text-gray-100
        overflow-auto
        border-r
        border-gray-100 dark:border-gray-600
        p-4
      `}
    >
      <SidebarTree/>
      <UserBlockPopup/>
    </div>
  )
}

const mapStateToProps = ({ ui: { sidebar: { width: sidebarWidth } } }) => ({ sidebarWidth });

export default connect(mapStateToProps)(Sidebar);
