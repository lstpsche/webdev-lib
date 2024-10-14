import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

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
function IndexCard({ item }) {
  const cardRef = useRef(null);

  // TODO: I don't like this style. Yet I don't know how to make it better/different.
  useEffect(() => {
    cardRef.current &&
      cardRef.current.addEventListener("mousemove", (e) => {
        if (!cardRef.current) return;

        const card = cardRef.current.getBoundingClientRect();
        const x = e.clientX - card.left;
        const y = e.clientY - card.top;

        cardRef.current.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(31, 41, 55, 0.7) 0%, rgba(31, 41, 55, 0) 30%)`;
      });

    cardRef.current &&
      cardRef.current.addEventListener("mouseleave", () => {
        if (!cardRef.current) return;

        cardRef.current.style.background = "";
      });
  }, [cardRef]);

  return (
    <Link
      ref={cardRef}
      to={`/projects/${item.id}`}
      className={`
        item-tile
        h-auto
        break-inside-avoid-column
        max-w-sm rounded-lg
        border border-transparent
        hover:border-gray-700
        ring-0
        hover:ring-1 hover:ring-gray-700
        transition transition-shadow transition-colors duration-200
        cursor-pointer
      `}
    >
      <img
        className="rounded-t-lg bg-gray-800"
        src={item.image_url}
        alt={item.name}
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-mono text-white">{item.name}</h5>
        <p className="mb-3 font-normal text-gray-400">{item.description}</p>
      </div>
    </Link>
  );
}

export default IndexCard;
