// Redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

// Middlewares
import logger from "redux-logger";
import thunk from "redux-thunk";
// Reducers
import InputReducer from "./InputReducer";
import LoginReducer from "./LoginReducer";
import AddDialogReducer from "./AddDialogReducer";

const reducers = combineReducers({
  add_dialog: AddDialogReducer,
  input: InputReducer,
  login: LoginReducer
});

const middlewares = composeWithDevTools(applyMiddleware(thunk, logger));

const Store = createStore(reducers, middlewares);

export default Store;
