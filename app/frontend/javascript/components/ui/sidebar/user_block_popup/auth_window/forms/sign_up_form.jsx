import { useState } from "react";
import { useForm } from "react-hook-form";

import FormInput from "../../common/forms/form_input";
import ErrorBlock from "../../common/forms/error_block";
import SubmitButton from "../../common/forms/submit_button";

function SignUpForm({ onSubmit }) {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [errorMessage, setErrorMessage] = useState(undefined);

  const handleFormSubmit = handleSubmit(
    (args) => onSubmit(
      { ...args, failureCallback: ({ error }) => setErrorMessage(error) }
    )
  )

  const validatePasswordConfirmation = (val) => {
    if (watch("password") != val)
      return "Passwords do not match"
  }

  const emailField = () => {
    const fieldName = "email";

    return (
      <FormInput
        fieldName={fieldName}
        type="text"
        autocomplete={fieldName}
        placeholder="sample@mail.com"
        labelText="Email address"
        registration={register(fieldName, { required: "This field is required" })}
        errors={errors}
      />
    )
  }

  const passwordField = () => {
    const fieldName = "password";

    return (
      <FormInput
        fieldName={fieldName}
        type="password"
        autocomplete="current-password"
        placeholder="Password"
        labelText="Password"
        registration={register(fieldName, { required: "This field is required", minLength: { value: 6, message: "Password should be at least 6 characters long" } })}
        errors={errors}
      />
    )
  }

  const passwordConfirmationField = () => {
    const fieldName = "passwordConfirmation";

    return (
      <FormInput
        fieldName={fieldName}
        type="password"
        placeholder="Repeat password"
        labelText="Confirm password"
        registration={register(fieldName, { required: "This field is required", validate: validatePasswordConfirmation })}
        errors={errors}
      />
    )
  }

  return (
    <form className="space-y-6" onSubmit={handleFormSubmit}>
      <ErrorBlock
        errorMessage={errorMessage}
        onClick={() => setErrorMessage(undefined)}
      />

      { emailField() }
      { passwordField() }
      { passwordConfirmationField() }

      <SubmitButton buttonText="Create account" formErrors={errors} />
    </form>
  )
}

export default SignUpForm;
