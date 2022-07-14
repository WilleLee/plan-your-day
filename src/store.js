import { configureStore } from "@reduxjs/toolkit";
import loggedInReducer from "./reducers/loggedInReducer";
import toDosReducer from "./reducers/toDosReducer";

const reducer = {
  loggedInReducer,
  toDosReducer,
};
const loggedInStore = configureStore({ reducer });
//console.log(loggedInSlice.getInitialState());

export default loggedInStore;
