import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers"; // default ./reducers/index.js

const initialState = {};

const middleware = [thunk];

// 1. reducer,
const store = createStore(
  rootReducer,
  initialState,
  compose(
   applyMiddleware(...middleware),
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   )
);

export default store;
