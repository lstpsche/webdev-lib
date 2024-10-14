import { connect } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

import { setBreadcrumbs, homeBreadcrumb } from "../../../../../store/actions/ui";

function Show({ items, setBreadcrumbs }) {
  const { itemId } = useParams();
  const item = items.find(item => item.id == itemId);

  useEffect(() => {
    if (!item) return;

    setBreadcrumbs([homeBreadcrumb, { title: item.name, link: `/projects/${item.id}` }]);
  }, [item]);

  if (!item) {
    return null;
  }

  return (
    <div
      className="p-8"
    >
      <h1 className="text-4xl font-mono mb-4 text-center w-full">
        {item.name}
      </h1>
      <p className="text-center w-full text-gray-300">
        {item.description}
      </p>

      <Link
        to={item.link}
        target="_blank"
        className="m-8 p-2 bg-gray-700 text-gray-100 rounded-md flex items-center justify-center"
      >
        Visit {item.name}
        <ArrowRightIcon className="w-4 h-4 ml-2" />
      </Link>
    </div>
  );
}

const mapStateToProps = ({ items }) => ({ items });

const mapDispatchToProps = dispatch => ({
  setBreadcrumbs: (crumbs) => dispatch(setBreadcrumbs(crumbs))
});

export default connect(mapStateToProps, mapDispatchToProps)(Show);
