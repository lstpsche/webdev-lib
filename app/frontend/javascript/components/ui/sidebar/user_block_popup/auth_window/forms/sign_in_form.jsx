import { useState } from "react";
import { useForm } from "react-hook-form";

import FormInput from "../../../../../common/forms/form_input";
import ErrorBlock from "../../../../../common/forms/error_block";
import SubmitButton from "../../../../../common/forms/submit_button";

function SignInForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const [errorMessage, setErrorMessage] = useState(undefined);
  const [submitButtonStates, setSubmitButtonStates] = useState({ disabled: true, loading: false });

  //////////////////////////// functions ////////////////////////////

  const onFormSubmitFailure = () => {
    setErrorMessage("incorrect login or password");
    setSubmitButtonStates({ disabled: true, loading: false });
  }

  const handleFormSubmit = handleSubmit(
    (args) => {
      if (args.email === "" || args.password === "") return;

      setSubmitButtonStates({ disabled: true, loading: true });
      onSubmit({ ...args, failureCallback: onFormSubmitFailure });
    }
  )

  const handleOnKeyUp = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleFormSubmit();
    }
  }

  const onFieldChange = () => {
    setSubmitButtonStates({ ...submitButtonStates, disabled: getValues("email") === "" || getValues("password") === "" });
    setErrorMessage(undefined);
  }

  const onForgotPasswordClick = (e) => {
    e.preventDefault();
    // TODO: will be implemented in #WDL-30
  }

  //////////////////////////// fields ////////////////////////////

  const emailField = () => {
    const fieldName = "email";

    return (
      <FormInput
        fieldName={fieldName}
        type="text"
        autocomplete={fieldName}
        placeholder="email"
        registration={register(fieldName, { onChange: onFieldChange })}
        onKeyUp={handleOnKeyUp}
      />
    )
  }

  const forgotPasswordButton = () => (
    <div
      className={`
        rounded-md
        bg-gray-800 hover:bg-blue-800
        border border-gray-800 hover:border-blue-800
        transition-colors duration-200 ease-in-out
      `}
    >
      <button
        className={`
          h-full w-7
          text-center
          font-mono
          transition-colors duration-200 ease-in-out
          text-gray-400 hover:text-gray-200
          font-thin
        `}
        onClick={onForgotPasswordClick}
      >
        ?
      </button>
    </div>
  )

  const passwordField = () => {
    const fieldName = "password";

    return (
      <div className="flex flex-row space-x-1 w-full">
        <FormInput
          fieldName={fieldName}
          type="password"
          autocomplete="current-password"
          placeholder="password"
          wrapperClassName={"flex-grow"}
          registration={register(fieldName, { onChange: onFieldChange })}
          onKeyUp={handleOnKeyUp}
        />

        { forgotPasswordButton() }
      </div>
    )
  }

  //////////////////////////// render ////////////////////////////

  return (
    <div className="flex flex-col h-full justify-between">
      <form className="flex flex-grow flex-col mt-3">
        <div className="flex h-full flex-col space-y-3 justify-center">
          { emailField() }
          { passwordField() }

          <ErrorBlock errorMessage={errorMessage} />
        </div>
      </form>

      <div className="flex flex-col justify-center">
        <SubmitButton
          {...submitButtonStates} // disabled, loading
          buttonType="button"
          onClick={handleFormSubmit}
          buttonText="sign in"
          formErrors={errors}
        />
      </div>
    </div>
  )
}

export default SignInForm;
