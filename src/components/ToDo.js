import styled from "styled-components";
//font-awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
//redux
import { connect } from "react-redux";
import { checkCompleted, removeToDo } from "../reducers/toDosReducer";

const UtilityButton = styled.button`
  border-radius: 50%;
  border: none;
  width: 14px;
  height: 14px;
  transform: scale(1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.3);
  }
`;
const icoStyles = {
  fontWeight: 800,
  fontSize: "10px",
};
const IcosContainer = styled.div`
  gap: 5px;
`;

const ToDoText = styled.span.attrs((props) => ({
  done: props.done || 1,
}))`
  margin-right: 10px;
  opacity: ${(props) => props.done};
  transition: opacity 0.2s linear;
`;

const ToDo = ({ text, id, completed, removeToDo, checkCompleted }) => {
  return (
    <li className="flex-row-center" style={{ marginBottom: "5px" }} id={id}>
      <ToDoText done={completed ? 0.5 : 1}>{text}</ToDoText>
      <IcosContainer className="flex-row-center">
        {completed ? null : (
          <UtilityButton
            onClick={checkCompleted}
            className="flex-row-center"
            style={{ color: "#D0FF14", background: "none" }}
          >
            <FontAwesomeIcon icon={faCheck} style={icoStyles} />
          </UtilityButton>
        )}

        <UtilityButton
          onClick={removeToDo}
          className="flex-row-center"
          style={{ backgroundColor: "#ccc" }}
        >
          <FontAwesomeIcon icon={faXmark} style={icoStyles} />
        </UtilityButton>
      </IcosContainer>
    </li>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  //console.log(ownProps.id);
  return {
    removeToDo: () => dispatch(removeToDo(ownProps.id)),
    checkCompleted: () => dispatch(checkCompleted(ownProps.id)),
  };
};

export default connect(null, mapDispatchToProps)(ToDo);
