function SubmitButton({ btnRef = undefined, buttonType = "submit", onClick = (() => {}), buttonText, formErrors, disabled = false, loading = false }) {
  const submitButtonClassName = () => {
    const baseClassNames = `
      w-full
      rounded-md px-3 py-1.5
      text-sm font-thin leading-6 font-mono tracking-wide
      enabled:text-gray-200 enabled:bg-gray-700 enabled:hover:bg-blue-800 enabled:focus-visible:bg-blue-800 enabled:focus-visible:outline-0
      disabled:text-gray-700 disabled:bg-gray-800
      transition-colors duration-200 ease-in-out
    `

    const loadingClassNames = !loading ? "" : `animate-pulse`
    const errorClassNames = (Object.keys(formErrors).length === 0 ? "" : "pointer-events-none opacity-30");

    return [baseClassNames, loadingClassNames, errorClassNames].join(" ")
  }

  return (
    <button
      ref={btnRef}
      disabled={disabled}
      type={buttonType}
      onClick={onClick}
      className={submitButtonClassName()}
    >
      { buttonText }
    </button>
  )
}

export default SubmitButton;
