import { createSlice } from "@reduxjs/toolkit";

const USERNAME_KEY = "username%pyd";

const defineCurrentUser = () => {
  const currentUser = localStorage.getItem(USERNAME_KEY);
  return currentUser
    ? JSON.parse(currentUser)
    : { username: "", loggedIn: false };
};

const loggedInSlice = createSlice({
  name: "loggedIn",
  initialState: defineCurrentUser(),
  reducers: {
    login: (loggedInUser, action) => {
      const newUser = { username: action.payload, loggedIn: true };
      const json = JSON.stringify(newUser);
      localStorage.setItem(USERNAME_KEY, json);
      return newUser;
    },
    logout: () => {
      localStorage.removeItem(USERNAME_KEY);
      return { username: "", loggedIn: false };
    },
  },
});

const loggedInReducer = loggedInSlice.reducer;
export const { login, logout } = loggedInSlice.actions;

export default loggedInReducer;
