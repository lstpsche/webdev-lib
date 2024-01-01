function FormInput({ fieldName, type, autocomplete, placeholder, label, labelText, registration, errors, wrapperClassName, initialValue }) {
  const validatableInputClassName = (fieldName) => {
    const baseClassNames = [
      "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300",
      "placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    ].join(" ");

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
        :
          <label htmlFor={fieldName} className="block text-sm font-medium leading-6 text-gray-900">
            { labelText }
          </label>
      }
      <div className="mt-2">
        <input
          id={fieldName}
          name={fieldName}
          autoComplete={autocomplete}
          type={type}
          placeholder={placeholder}
          className={validatableInputClassName(fieldName)}
          {...registration}
        />
        { fieldValidationMessage() }
      </div>
    </div>
  )
}

export default FormInput;
