export const MESSAGE_EMAIL_NOT_VALID = "Ut tempor orci euismod naks";

export const isValidEmail = text => {
  const regex = /^(([^<>()[\]\\.,;:\s@ d"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const emailIsValid = regex.test(text);
  return emailIsValid;
};
