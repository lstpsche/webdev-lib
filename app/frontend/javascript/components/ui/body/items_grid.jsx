import { connect } from "react-redux";
import { useEffect } from "react";

import { resetBreadcrumbs } from "../../../store/actions/ui";

import ProjectCard from "./item/project/index_card";

const itemTypes = {
  project: "project",
  category: "category"
}

function ItemsGrid({ items, resetBreadcrumbs }) {
  const projectItems = items.filter(item => item.item_type === itemTypes.project);

  useEffect(() => {
    resetBreadcrumbs();
  }, []);

  return (
    <div
      className={`
        h-fit
        grid gap-4
        grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
        overflow-y-scroll overflow-x-none
        p-8
      `}
    >
      {
        projectItems.map(item => <ProjectCard key={item.id} item={item} />)
      }
    </div>
  );
}

const mapStateToProps = ({ items }) => ({ items });

const mapDispatchToProps = dispatch => ({
  resetBreadcrumbs: () => dispatch(resetBreadcrumbs())
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsGrid);
