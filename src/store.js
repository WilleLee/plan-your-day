import { configureStore } from "@reduxjs/toolkit";
import loggedInReducer from "./reducers/loggedInReducer";
import toDosReducer from "./reducers/toDosReducer";

const reducer = {
  loggedInReducer,
  toDosReducer,
};
const store = configureStore({ reducer });

export default store;
