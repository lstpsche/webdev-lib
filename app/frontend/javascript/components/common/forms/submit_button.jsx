function SubmitButton({ buttonText, formErrors}) {
  const submitButtonClassName = () => {
    const baseClassNames = [
      "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500",
      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    ].join(" ");

    return [baseClassNames, (Object.keys(formErrors).length === 0 ? "" : "pointer-events-none opacity-30")].join(" ")
  }

  return (
    <div>
      <button
        type="submit"
        className={submitButtonClassName()}
      >
        { buttonText }
      </button>
    </div>
  )
}

export default SubmitButton;
