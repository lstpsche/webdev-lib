import Item from "./item";

function ItemsGrid({ items }) {
  return (
    <div
      className={`
        h-fit
        grid gap-4
        grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
        overflow-y-scroll overflow-x-none
      `}
    >
      {
        items.map(item => <Item key={item.id} item={item} />)
      }
    </div>
  );
}

export default ItemsGrid;
