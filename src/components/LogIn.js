import { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { login } from "../reducers/loggedInReducer";

const LogInForm = styled.form`
  margin-top: 40px;
  gap: 10px;
`;

function LogIn({ login }) {
  const [username, setUsername] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    login(username);
    onReset(e);
  };
  const onChange = (e) => {
    setUsername(e.target.value);
  };
  const onReset = (e) => {
    setUsername("");
    e.target.firstChild.value = "";
  };

  return (
    <LogInForm className="flex-column-center" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Type Your Nicknmae"
        onChange={onChange}
        minLength={2}
        maxLength={12}
        style={{
          padding: "5px 5px",
          borderRadius: "10px",
          border: "none",
          textAlign: "center",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "3px 3px",
          backgroundColor: "rgba(255,255,255,0.8)",
          border: "none",
        }}
      >
        Sign In
      </button>
    </LogInForm>
  );
}

function mapDispatchToProps(dispatch) {
  return { login: (username) => dispatch(login(username)) };
}

export default connect(null, mapDispatchToProps)(LogIn);
