function FormInput({ fieldName, type, autocomplete, placeholder, label, labelText, registration, errors, wrapperClassName, labelClassName = "mb-2", initialValue, onKeyUp = undefined }) {
  const validatableInputClassName = (fieldName) => {
    const baseClassNames = `
      w-full block
      rounded-md border-0
      py-1.5
      px-2
      bg-gray-800
      text-gray-200 placeholder:text-gray-400
      ring-0 focus:ring-0
      font-mono
      text-xs placeholder:text-xs
      border-l-2 border-r-2
      transition-colors duration-200 ease-in-out
      ${errors[fieldName] ? "border-rose-700" : "border-gray-800"} focus:border-blue-700
    `

    return [baseClassNames, (errors[fieldName] ? "ring-1 ring-red-500 focus:ring-red-500" : "")].join(" ")
  }

  const fieldValidationMessage = () => (
    errors[fieldName] &&
      <small className="text-red-500">{errors[fieldName].message}</small>
  )

  return (
    <div className={wrapperClassName}>
      {
        label
        ? label
        : labelText &&
          <label htmlFor={fieldName} className={`block text-sm font-thin leading-6 text-gray-200 ${labelClassName}`}>
            { labelText }
          </label>
      }
      <input
        id={fieldName}
        name={fieldName}
        autoComplete={autocomplete}
        type={type}
        placeholder={placeholder}
        className={validatableInputClassName(fieldName)}
        value={initialValue || registration.value}
        onKeyUp={onKeyUp}
        {...registration}
      />
      { fieldValidationMessage() }
    </div>
  )
}

export default FormInput;
