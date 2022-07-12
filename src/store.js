import { configureStore } from "@reduxjs/toolkit";
import loggedInReducer from "./reducers/loggedInReducer";

const reducer = {
  loggedInReducer,
};
const loggedInStore = configureStore({ reducer });
//console.log(loggedInSlice.getInitialState());

export default loggedInStore;
