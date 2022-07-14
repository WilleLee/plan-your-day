import styled from "styled-components";
//font-awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
//redux
import { connect } from "react-redux";
import { removeToDo } from "../reducers/toDosReducer";

const RemoveButton = styled.button`
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

const ToDo = ({ text, id, removeToDo }) => {
  return (
    <li className="flex-row-center" style={{ marginBottom: "5px" }} id={id}>
      <span style={{ marginRight: "10px" }}>{text}</span>
      <RemoveButton onClick={removeToDo}>
        <FontAwesomeIcon
          style={{ fontWeight: 800, fontSize: "14px" }}
          icon={faXmark}
        />
      </RemoveButton>
    </li>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps.id);
  return { removeToDo: () => dispatch(removeToDo(ownProps.id)) };
};

export default connect(null, mapDispatchToProps)(ToDo);
