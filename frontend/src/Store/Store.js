import { applyMiddleware, legacy_createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { postReducer } from "./post/postreducer";

const rootReducer = combineReducers({
  post: postReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
