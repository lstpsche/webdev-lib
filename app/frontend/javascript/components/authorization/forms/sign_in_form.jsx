import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import FormInput from "../../common/forms/form_input";
import ErrorBlock from "../../common/forms/error_block";
import SubmitButton from "../../common/forms/submit_button";

function SignInForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [errorMessage, setErrorMessage] = useState(undefined);

  const handleFormSubmit = handleSubmit(
    (args) => onSubmit(
      { ...args, failureCallback: () => setErrorMessage("Login or Password is incorrect.") }
    )
  )

  const emailField = () => {
    const fieldName = "email";

    return (
      <FormInput
        fieldName={fieldName}
        type="text"
        autocomplete={fieldName}
        placeholder="Email"
        labelText="Email address"
        registration={register(fieldName, { required: "This field is required" })}
        errors={errors}
      />
    )
  }

  const passwordField = () => {
    const fieldName = "password";

    const label =
      <div className="flex items-center justify-between">
        <label htmlFor={fieldName} className="block text-sm font-medium leading-6 text-gray-900">
          Password
        </label>
        <div className="text-sm">
          {/*TODO: create forgot_password logic */}
          <Link href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Forgot password?
          </Link>
        </div>
      </div>

    return (
      <FormInput
        fieldName={fieldName}
        type="password"
        autocomplete="current-password"
        placeholder="Password"
        label={label}
        registration={register(fieldName, { required: "This field is required" })}
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

      <SubmitButton buttonText="Sign in" formErrors={errors} />
    </form>
  )
}

export default SignInForm;
