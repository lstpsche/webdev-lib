import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

// TODO: IDK yet will it be used later on. At the moment it seems more like a pain in the ass.

// items: [{ title, link, isCurrent }]
function Breadcrumbs({ breadcrumbs }) {
  const renderBreadcrumb = (crumb, isLast) => {
    const clickDisabled = isLast || !crumb.link;

    return (
      <li className="inline-flex items-center">
        <Link
          to={crumb.link || "#"}
          className={`
            inline-flex items-center
            text-xs font-mono font-thin
            text-gray-400
            ${isLast ? "text-gray-100" : (crumb.link ? "hover:text-white" : "text-gray-400")}
            ${clickDisabled ? "pointer-events-none" : "cursor-pointer"}
          `}
        >
          {crumb.title}
        </Link>
      </li>
    )
  }

  const separator = () => (<ChevronRightIcon className="w-4 h-4 text-gray-400" />);

  const renderBreadcrumbs = () => {
    return breadcrumbs.map((crumb, index) => {
      const isLast = index === breadcrumbs.length - 1;

      return (
        <div key={`crumb-${crumb.title}`} className="inline-flex items-center space-x-1">
          { renderBreadcrumb(crumb, isLast) }
          { !isLast && separator() }
        </div>
      )
    })
  }

  return (
    <nav className="flex w-full bg-gray-900 border-b border-gray-800 p-1">
      <ol className="inline-flex items-center space-x-1">
        { renderBreadcrumbs() }
      </ol>
    </nav>
  );
}

const mapStateToProps = ({ ui: { breadcrumbs } }) => ({ breadcrumbs });

export default connect(mapStateToProps)(Breadcrumbs);
