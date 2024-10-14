import { connect } from "react-redux";
import { Outlet } from "react-router-dom";

import Breadcrumbs from "./body/breadcrumbs";

function Body({ footerHeight }) {
  return (
    <div
      id="main-body"
      style={{ paddingBottom: footerHeight + 1 }} // 1px footer border
      className="
        h-screen
        bg-white text-gray-700
        dark:bg-gray-900 dark:text-gray-100
        overflow-y-scroll overflow-x-none
      "
    >
      <Breadcrumbs />
      <Outlet />
    </div>
  )
}

const mapStateToProps = ({ ui: { footer: { height } } }) => ({ footerHeight: height });

export default connect(mapStateToProps)(Body);
