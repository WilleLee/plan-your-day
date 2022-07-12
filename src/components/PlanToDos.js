import { connect } from "react-redux";

function PlanToDos({ loggedInUser }) {
  return (
    <div className="flex-column-center">
      <h2>hello, {loggedInUser}</h2>
    </div>
  );
}

function mapStateToProps(state) {
  //console.log(state.loggedInReducer);
  return { loggedInUser: state.loggedInReducer.username };
}

export default connect(mapStateToProps)(PlanToDos);
