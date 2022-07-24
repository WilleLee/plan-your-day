import { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { removeAll } from "../reducers/toDosReducer";
import AddToDo from "./AddToDo";
import ToDos from "./ToDos";
import CheckOut from "./CheckOut";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import PdyButton from "../styled-components/PdyButton";

const H2 = styled.h2`
  margin-bottom: 10px;
  opacity: 0.8;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;
const ToDosContainer = styled.div`
  border: 2px solid #ffcc00;
  padding: 20px;
`;

function PlanToDos({ loggedInUser, removeAll, len }) {
  const [checkout, setCheckout] = useState(false);
  return (
    <div className="flex-column-center">
      <H2>
        <FontAwesomeIcon icon={faChevronLeft} />
        <span> hello, </span>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => {
            setCheckout((prev) => !prev);
          }}
        >
          {loggedInUser.username}
        </span>
        <span> 👋🏻 </span>
        <FontAwesomeIcon icon={faChevronRight} />
      </H2>
      {!checkout ? null : <CheckOut />}
      <ToDosContainer className="flex-column-center">
        <AddToDo />
        <ToDos />
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

const mapStateToProps = (state) => {
  const todos = state.toDosReducer;
  return { len: todos.length };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeAll: () => dispatch(removeAll()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlanToDos);
