import { useState } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import styled from "styled-components";
import { login } from "../reducers/loggedInReducer";

const LogInForm = styled.form`
  margin-top: 40px;
  gap: 15px;
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
        placeholder="Type Your Nickname"
        onChange={onChange}
        minLength={2}
        maxLength={12}
        required
        style={{
          padding: "5px 5px",
          borderRadius: "10px",
          border: "none",
          textAlign: "center",
        }}
      />
      <Button variant="outline-warning" type="submit">
        Check In
      </Button>
    </LogInForm>
  );
}

function mapDispatchToProps(dispatch) {
  return { login: (username) => dispatch(login(username)) };
}

export default connect(null, mapDispatchToProps)(LogIn);
