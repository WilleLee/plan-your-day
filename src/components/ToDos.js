import { connect } from "react-redux";
import ToDo from "./ToDo";

const ToDos = ({ toDos }) => {
  return (
    <ul>
      {toDos.map((toDo, i) => (
        <ToDo key={i} text={toDo.text} id={toDo.id} />
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return { toDos: state.toDosReducer };
};

export default connect(mapStateToProps)(ToDos);
