export const setupFormData = (form, dataToAppend = {}) => {
  const formData = new FormData(form);
  formData.append("source", window.location.href);

  for (let [key, value] of Object.entries(dataToAppend)) {
    formData.append(key, value);
  }
  return formData;
};
