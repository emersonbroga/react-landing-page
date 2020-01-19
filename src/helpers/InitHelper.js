import { getApiUrl } from "helpers/EnvHelper";
import { addFetchPolyfill } from "helpers/ApiHelper";

const hasAPI_URL = () => {
  const hasUrl = !!getApiUrl();
  if (!hasUrl) throw new Error("REACT_APP_API_URL not defined in .env");
  return hasAPI_URL;
};

export const init = () => {
  addFetchPolyfill();
  hasAPI_URL();
};
