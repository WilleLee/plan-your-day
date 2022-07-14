import { connect } from "react-redux";
import AddToDo from "./AddToDo";
import ToDos from "./ToDos";

function PlanToDos({ loggedInUser }) {
  return (
    <div className="flex-column-center">
      <h2
        style={{
          marginBottom: "10px",
        }}
      >
        hello, {loggedInUser}
      </h2>
      <AddToDo />
      <ToDos />
    </div>
  );
}

function mapStateToProps(state) {
  //console.log(state.loggedInReducer);
  return {
    loggedInUser: state.loggedInReducer.username,
  };
}

export default connect(mapStateToProps)(PlanToDos);
