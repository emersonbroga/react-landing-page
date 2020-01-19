const http = require("http");
const fs = require("fs");
require("dotenv").config();

const downloadJson = (url, filename) => {
  const promiseCallback = resolve => {
    const file = fs.createWriteStream(filename, resolve);
    http.get(url, response => {
      response.pipe(file);
    });
  };
  return new Promise(promiseCallback);
};
const configUrl = process.env.REACT_APP_CONFIG_URL;
const configPath = process.env.REACT_APP_CONFIG_PATH;
downloadJson(configUrl, configPath);
