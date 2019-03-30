// Redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

// Middlewares
import logger from "redux-logger";
import thunk from "redux-thunk";

// Reducers
import inputField from "./inputField";
import login from "./login";
import addDialog from "./addDialog";

const reducers = combineReducers({
  addDialog,
  inputField,
  login
});

const middlewares = composeWithDevTools(applyMiddleware(thunk, logger));

const Store = createStore(reducers, middlewares);

export default Store;
