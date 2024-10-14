// {
//   "id": 1,
//   "name": "Rive",
//   "link": "https://rive.app",
//   "description": "With Rive, complex designer-developer handoff is a thing of the past. Reduce development times by empowering designers to build functional graphics with rich interactivity and animation.",
//   "item_type": "project",
//   "parent_id": 3,
//   "children_count": 0,
//   "is_project": true,
//   "is_category": false,
//   "has_children": false
// }
function Item({ item }) {
  const handleItemClick = () => {
    // TODO: will be implemented in #WDL-
    console.log(item);
  }

  return (
    <div
      onClick={handleItemClick}
      className={`
        item-tile
        h-auto
        break-inside-avoid-column
        max-w-sm rounded-lg
        bg-gray-800
        border border-transparent
        hover:border-gray-700
        ring-0
        hover:ring-2 hover:ring-gray-700
        transition transition-shadow duration-100
        cursor-pointer
      `}
    >
      <img className="rounded-t-lg" src={item.image_url} alt={item.name} />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-mono text-white">
          {item.name}
        </h5>
        <p className="mb-3 font-normal text-gray-400">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default Item;
