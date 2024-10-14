import { connect } from "react-redux";

import ItemsGrid from "./body/items_grid";

const projectItemType = "project";

function Body({ items, footerHeight }) {
  return (
    <div
      id="main-body"
      style={{ paddingBottom: footerHeight + 1 + 32 }} // 1px footer border, 32px padding (p-8 = 2rem = 32px)
      className="
        h-screen
        bg-white text-gray-700
        dark:bg-gray-900 dark:text-gray-100
        overflow-y-scroll overflow-x-none
        pt-8 px-8
      "
    >
      <ItemsGrid items={items} />
    </div>
  )
}

const mapStateToProps = ({
  items,
  ui: { footer: { height } }
}) => ({
  items: items.filter(item => item.item_type === projectItemType),
  footerHeight: height
});

export default connect(mapStateToProps)(Body);
