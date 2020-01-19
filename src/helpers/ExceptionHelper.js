import ApiValidationError from "exceptions/ApiValidationError";

const getValidationErrorFromResponse = data => {
  if (data.errors) {
    const exception = new ApiValidationError();
    exception.errors = data.errors;
    throw exception;
  }
  return null;
};

const getValidationErrorMessages = exception => {
  const isValidationError = exception.__type === "ApiValidationError";
  if (isValidationError) {
    const messages = Object.keys(exception.errors).map(field => {
      return { key: field, message: exception.errors[field][0] };
    });
    return messages;
  }
  return null;
};

const getValidationErrorMessageForKey = (messages, key) => {
  for (let error in messages) {
    if (error.key === key) return error.message;
  }
  return null;
};

export {
  ApiValidationError,
  getValidationErrorFromResponse,
  getValidationErrorMessages,
  getValidationErrorMessageForKey
};
