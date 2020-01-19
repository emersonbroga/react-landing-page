export const getEnvInfo = key => (key && process.env[key] !== undefined ? process.env[key] : null);

export const getEnv = () => getEnvInfo("REACT_APP_ENV");
export const getPublicUrl = () => getEnvInfo("PUBLIC_URL");

export const getSiteUrl = () => getEnvInfo("REACT_APP_SITE_URL");
export const getSiteName = () => getEnvInfo("REACT_APP_SITE_NAME");

export const getApiUrl = () => getEnvInfo("REACT_APP_API_URL");

export const getRegisterUrl = () => `${getApiUrl()}${getEnvInfo("REACT_APP_API_URL_REGISTER")}`;
