import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const SignInForm = styled.form`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  ${(props) =>
    props.hidden &&
    css`
      display: none;
    `}
`;

export default function SingIn() {
  const USERNAME_KEY = "username";

  const [username, setUsername] = useState("");
  const [nameTyped, setNameTyped] = useState(false);

  const handleNameChange = ({ target }) => {
    setUsername(target.value);
  };
  useEffect(() => {
    username.length > 2 ? setNameTyped(true) : setNameTyped(false);
  }, [username]);

  const [localName, setLocalName] = useState(
    localStorage.getItem(USERNAME_KEY)
  );

  const handleBtnClicked = (event) => {
    event.preventDefault();
    localStorage.setItem(USERNAME_KEY, username);
    setLocalName(localStorage.getItem(USERNAME_KEY));
  };

  const [formHidden, setFormHidden] = useState(false);
  useEffect(() => {
    localName !== null ? setFormHidden(true) : setFormHidden(false);
  }, [localName]);

  return (
    <SignInForm hidden={formHidden}>
      <input
        type="text"
        placeholder="Type Your Nicknmae"
        onChange={handleNameChange}
        style={{
          padding: "5px 5px",
          borderRadius: "10px",
          border: "none",
          textAlign: "center",
        }}
      />
      <button
        disabled={nameTyped !== true}
        onClick={handleBtnClicked}
        style={{
          padding: "3px 3px",
          backgroundColor: "rgba(255,255,255,0.8)",
          border: "none",
        }}
      >
        Sign In
      </button>
    </SignInForm>
  );
}
