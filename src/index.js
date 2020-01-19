import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import configs from "./configs/config.json";

ReactDOM.render(<App configs={configs} />, document.getElementById("root"));
