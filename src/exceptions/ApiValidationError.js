class ApiValidationError extends Error {
  constructor(message) {
    super(message);
    this.__type = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

export default ApiValidationError;
