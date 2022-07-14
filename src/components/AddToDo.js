import { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { addToDo } from "../reducers/toDosReducer";

const Input = styled.input`
  text-align: center;
  width: 200px;
  padding: 6px 10px;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 5px 7px;
`;

const AddToDo = ({ addToDo }) => {
  const [toDoTyped, setToDoTyped] = useState("");
  const onChange = (e) => {
    const currentValue = e.target.value;
    setToDoTyped(currentValue);
  };
  const onSubmit = (e) => {
    const onReset = () => {
      const inputToEmpty = document.querySelector(".add-to-do__input");
      inputToEmpty.value = "";
      setToDoTyped("");
    };
    e.preventDefault();
    addToDo(toDoTyped);
    onReset();
  };

  return (
    <form
      className="flex-column-center"
      style={{ marginBottom: "15px" }}
      onSubmit={onSubmit}
    >
      <Input
        className="add-to-do__input"
        type="text"
        placeholder="what to do?"
        onChange={onChange}
        minLength={2}
        maxLength={15}
        required
      />
      <Button type="submit">Add A Plan</Button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToDo: (text) => dispatch(addToDo(text)),
  };
};

export default connect(null, mapDispatchToProps)(AddToDo);
