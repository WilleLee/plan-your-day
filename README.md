# Plan Your Day

### deployed as [gh-page](https://willelee.github.io/plan-your-day/)

<a href="https://willelee.github.io/plan-your-day/">
  <img src="https://github.com/WilleLee/files/blob/main/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-09-13%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%204.17.54.png" width="330" height="420" />
</a>

(colors used on this app stand for Ukraine)

## Dev Logs

### States Management by Redux

#### Two Different States Needed to be Managed

This project aims at handling two different states, one that lets users log in or out, and the another that manages the to-do list of the application listening to users' I/O. The first thing to do to make this possible is to create two redux slices using @reduxjs/toolkit module in order to use varied reducers and actions.

```
npm install @reduxjs/toolkit
```

```javascript
// ./src/reducers/loggedInReducer.js
import { createSlice } from "@reduxjs/toolkit";
// (1) import "createSlice" method from "@reduxjs/toolkit" module.

const USERNAME_KEY = "username%pyd";
/*
The application uses localStorage of the browser so that 
it is required to declare specific keys for data to save.
*/

const defineCurrentUser = () => {
  const currentUser = localStorage.getItem(USERNAME_KEY);
  return currentUser
    ? JSON.parse(currentUser)
    : { username: "", loggedIn: false }
};
/*
Redux slices require a value for their initial states.
Using this function, defineCurrentUser, loggedInSlice is able to
receive the information of whether the browser already has the
information of the user logged in or not and create the initial state.
*/


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
// (2) create a slice by using createSlice method.

const loggedInReducer = loggedInSlice.reducer;
export const { login, logout } = loggedInSlice.actions;
/*
exporting actions as separated varibles makes it much
easier to handle them on various components
*/

export default loggedInReducer;
// (3) export the reducer as a default
```

The another redux slice, toDoReducer is also created in the same way.

```javascript

```
