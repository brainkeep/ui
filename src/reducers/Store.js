import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import logger from "redux-logger";
import thunk from "redux-thunk";

import inputField from "./inputField";
import login from "./login";
import addDialog from "./addDialog";

import Config from "../utils/Configs";

const { environment } = Config;

const reducers = combineReducers({
  addDialog,
  inputField,
  login
});

let middleware;
if (environment.mode === "development") {
  middleware = composeWithDevTools(applyMiddleware(thunk, logger));
} else {
  middleware = applyMiddleware(thunk);
}

const Store = createStore(reducers, middleware);

export default Store;
