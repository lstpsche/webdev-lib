import { useState } from "react";
import { useForm } from "react-hook-form";

import FormInput from "../../../../../common/forms/form_input";
import ErrorBlock from "../../../../../common/forms/error_block";
import SubmitButton from "../../../../../common/forms/submit_button";

function SignUpForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    getValues,
    setError, clearErrors,
    formState: { errors },
  } = useForm();

  const [submitButtonStates, setSubmitButtonStates] = useState({ disabled: true, loading: false });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  //////////////////////////// functions ////////////////////////////

  const onFormSubmitFailure = (errorMessage = "something went wrong") => {
    setError("formSubmit", { type: "request", message: errorMessage });
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
    setSubmitButtonStates({...submitButtonStates, disabled: getValues("email") === "" || getValues("password") === "" });
    clearErrors("formSubmit");
  }

  ////////////////////////// validations /////////////////////////

  const validateEmailValue = (emailValue) => {
    if (!emailRegex.test(emailValue)) {
      return "invalid email";
    }

    return true;
  }

  const validatePasswordValue = (passwordValue) => {
    if (passwordValue.length < 6) {
      return "password should be minimum 6 characters long";
    }

    return true;
  }

  const getErrorMessage = () => {
    return errors?.email?.message || errors?.password?.message || errors?.formSubmit?.message;
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
        registration={register(fieldName, { validate: { format: validateEmailValue }, onChange: onFieldChange })}
        onKeyUp={handleOnKeyUp}
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
        placeholder="password"
        registration={register(fieldName, { validate: { longerThanSixChars: validatePasswordValue }, onChange: onFieldChange })}
        onKeyUp={handleOnKeyUp}
      />
    )
  }

  return (
    <div className="flex flex-col h-full justify-between">
      <form className="flex flex-grow flex-col mt-3">
        <div className="flex h-full flex-col space-y-3 justify-center">
          { emailField() }
          { passwordField() }

          <ErrorBlock errorMessage={getErrorMessage()} />
        </div>
      </form>

      <div className="flex flex-col justify-center">
        <SubmitButton
          {...submitButtonStates} // disabled, loading
          buttonType="button"
          onClick={handleFormSubmit}
          buttonText="create account"
          formErrors={errors}
        />
      </div>
    </div>
  )
}

export default SignUpForm;
