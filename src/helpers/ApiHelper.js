import { getValidationErrorFromResponse } from "helpers/ExceptionHelper";

const FETCH_CDN_URL = "https://cdnjs.cloudflare.com/ajax/libs/fetch/3.0.0/fetch.min.js";

export const addFetchPolyfill = () => {
  if (!fetch || !window.fetch) {
    const script = document.createElement("script");
    script.src = FETCH_CDN_URL;
    script.async = true;
    document.body.appendChild(script);
  }
};

export const doPost = (url, formData) => {
  const promiseCallback = (resolve, reject) => {
    const options = {
      method: "post",
      body: formData
    };

    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        getValidationErrorFromResponse(data);
        resolve(data);
      })
      .catch(reject);
  };

  return new Promise(promiseCallback);
};
