import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "/Users/dingxue/Downloads/github/my-cli/my-react-template/router.config.js";

  if (module.hot) {
  module.hot.accept();
  }

  ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
  );