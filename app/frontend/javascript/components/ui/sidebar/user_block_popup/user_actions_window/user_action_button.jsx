function UserActionButton({ onClick, label }) {
  return (
    <button
      className={`
        w-full
        bg-transparent hover:bg-gray-800
        text-left
        font-extralight font-mono text-sm
        py-1.5 px-4
      `}
      onClick={onClick}
    >
      { label }
    </button>
  )
}

export default UserActionButton;
