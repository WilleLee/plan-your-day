# Plan Your Day

### deployed as [gh-page](https://willelee.github.io/plan-your-day/)

<a href="https://willelee.github.io/plan-your-day/">
  <img src="https://github.com/WilleLee/files/blob/main/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-09-13%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%204.17.54.png" width="330" height="420" />
</a>

(colors used on this app stand for Ukraine)

## Dev Logs

### States Management by Redux

#### (1) Two Different States Needed to be Managed

This project aims at handling two different states, one that lets users log in or out, and the another that manages the to-do list of the application listening to users' I/O. The first thing to do to make this possible is to create two redux slices using _@reduxjs/toolkit_ module in order to use varied reducers and actions.

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

The another redux slice, _toDoReducer_, is also created in the same way.

#### (2) Configure Store with Different Reducers and Send This to Other Components through Provider Offered by react-redux

Now it is needed to configure a store that contains those two kinds of reducers. This could be done by using _configureStore_ method from _@reduxjs/toolkit_.

```javascript
// ./src/store.js
import { configureStore } from "@reduxjs/toolkit";
import loggedInReducer from "./reducers/loggedInReducer";
import toDosReducer from "./reducers/toDosReducer";

const reducer = {
  loggedInReducer,
  toDosReducer,
};
const store = configureStore({ reducer });

export default store;
```

Here the store.js file exports a store as default, and since the store must be accessible from other components of the application, Provider that delivers the store should be imported from _react-redux_ and wrap the other parts of the app.

```javascript
// ./src/index.js
/*
...
*/
//redux
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}> {/* <---- */}
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
```

#### (3) Send States and Actions of Reducers as Props to React Components

Then it is possible to access states or actions of reducers on react components, meaning that components could receive those data as props to themselves, and that process requires to build _mapStateToProps_ and _mapDispatchToProps_ functions that return objects that contain properties modifed by those states and actions so that _connect_ method from _react-redux_ module could connects them to the component.

```javascript
// ./src/components/PlanToDos.js
import { connect } from "react-redux";
import { removeAll } from "../reducers/toDosReducer";

/*
...
*/

function PlanToDos({ loggedInUser, removeAll, len }) {
  const [checkout, setCheckout] = useState(false);
  return (
    <div className="flex-column-center">
      <H2>
        {/* ... */}
        <span
          style={{ cursor: "pointer" }}
          onClick={() => {
            setCheckout((prev) => !prev);
          }}
        >
          {loggedInUser.username}
        {/* ... */}
      </H2>
      {!checkout ? null : <CheckOut />}
      <ToDosContainer className="flex-column-center">
        {/* ... */}
        {!(len > 0) ? null : (
          <PdyButton
            variant="#ccc"
            onClick={() => {
              removeAll();
            }}
          >
            Complete Your Day
          </PdyButton>
        )}
      </ToDosContainer>
    </div>
  );
}

// _mapStateToProps_ receives the current state of reducers that the store now contains, and returns an object.
const mapStateToProps = (state) => {
  const todos = state.toDosReducer;
  return { len: todos.length };
};

// _mapDispatchToProps_ receives _dispatch_ function that runs actions that are created inside redux slices, and returns an object.
const mapDispatchToProps = (dispatch) => {
  return {
    removeAll: () => dispatch(removeAll()),
  };
};

/*
connect method connects these functions to the component.
If the component only needs to have _mapDispatchToProps_, it could be like
"export default connect(null, mapDispatchToProps)(PlanToDos)".
*/
export default connect(mapStateToProps, mapDispatchToProps)(PlanToDos);
```
