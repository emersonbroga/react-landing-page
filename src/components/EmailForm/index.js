import React, { useState } from "react";

import Icon from "components/Icon";
import { getRegisterUrl } from "helpers/EnvHelper";
import { KEY_CODE_ENTER } from "helpers/InputKeyHelper";
import { doPost } from "helpers/ApiHelper";
import { getValidationErrorMessages } from "helpers/ExceptionHelper";
import { setupFormData } from "helpers/FormHelper";
import { MESSAGE_EMAIL_NOT_VALID, isValidEmail } from "helpers/ValidatorHelper";

const FormErrors = ({ messages }) => {
  if (!messages || !messages.length) return null;
  const list = messages.map(error => {
    return (
      <small className="error" key={error.key}>
        {error.message}
      </small>
    );
  });
  return <>{list}</>;
};

const CTA = ({ click }) => {
  return (
    <>
      <button className="btn-cta" onClick={click}>
        Pellentesque <em>convallis</em>
      </button>
    </>
  );
};

const Form = ({ keyUp, submitHandler, messages, loading }) => {
  const valid = !messages || !messages.length;
  const formClasses = [!valid ? "error" : null, !loading ? null : "loading"].join(" ");
  return (
    <>
      <h2>
        Pellentesque <em>convallis</em>
      </h2>
      <form className={formClasses} noValidate onSubmit={submitHandler}>
        <div className="field">
          <div className="grouped-input">
            <input type="email" name="email" placeholder="Et porttitor commodo" autoComplete="off" onKeyUp={keyUp} />
            <input type="submit" value="Pellentesque" />
            <Icon id="ellipsis" className="loader" />
          </div>
          <FormErrors messages={messages} />
        </div>
      </form>
    </>
  );
};

const EmailForm = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  const setIsLoadingTrue = () => setIsLoading(true);
  const setIsLoadingFalse = () => setIsLoading(false);

  const onKeyUp = e => {
    if (e.keyCode === KEY_CODE_ENTER) return;
    setErrorMessages([]);
  };

  const submitHandler = async e => {
    e.preventDefault();
    if (isLoading || (errorMessages && errorMessages.length)) return false;

    const API_URL = getRegisterUrl();
    const formData = setupFormData(e.target);
    const emailAddress = e.target.email.value;
    if (!emailAddress || !isValidEmail(emailAddress)) {
      setErrorMessages([{ key: "email", message: MESSAGE_EMAIL_NOT_VALID }]);
      return false;
    }
    setErrorMessages([]);
    setIsLoadingTrue();

    try {
      await doPost(API_URL, formData);
      setIsSuccess(true);
    } catch (exception) {
      const validationErrors = getValidationErrorMessages(exception);
      if (validationErrors) {
        setErrorMessages(validationErrors);
        setIsLoadingFalse();
        return false;
      } else {
        setIsError(true);
      }
    }

    setIsLoadingFalse();
    return false;
  };

  if (isSuccess) {
    return <h2 className="success">Vestibulum scelerisque!</h2>;
  }

  if (isError) {
    return <h2 className="error">Ut tempor orci euismod, efficitur ipsum.</h2>;
  }

  if (isHidden) {
    return <CTA click={() => setIsHidden(!isHidden)} />;
  }
  return (
    <div>
      <Form keyUp={onKeyUp} submitHandler={submitHandler} messages={errorMessages} loading={isLoading} />
    </div>
  );
};

export default EmailForm;
