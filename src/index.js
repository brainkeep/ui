import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";

import Store from "./reducers/Store";
import App from "./containers/App";
import * as serviceWorker from "./utils/serviceWorker";

render(
  <Provider store={Store}>
    <React.Fragment>
      <CssBaseline />
      <App />
    </React.Fragment>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
