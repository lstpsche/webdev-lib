import { connect } from "react-redux";

function Body({ items }) {
  return (
    <div
      id="main-body"
      className="
        bg-white text-gray-700
        dark:bg-gray-900 dark:text-gray-100
        overflow-y-auto
        p-4
      "
    >
      Body here
      {/* TODO: to be deleted; here only for dev purposes */}
      <div>
        {JSON.stringify(items, null, 2)}
      </div>
    </div>
  )
}

const mapStateToProps = ({ items }) => ({ items });

export default connect(mapStateToProps)(Body);
