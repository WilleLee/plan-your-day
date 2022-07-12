import { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

//components
import Header from "../components/Header";
import LogIn from "../components/LogIn";
import PlanToDos from "../components/PlanToDos";

const Container = styled.div`
  margin-top: 50px;
`;

function Home({ loggedInUser }) {
  const [loggedInState, setLoggedInState] = useState(false);

  useEffect(() => {
    const { loggedIn } = loggedInUser;
    setLoggedInState(loggedIn);
    //console.log(loggedIn);
  }, [loggedInUser]);

  return (
    <Container>
      <Header />
      {loggedInState ? <PlanToDos /> : <LogIn />}
    </Container>
  );
}

function mapStateToProps(state, ownProps) {
  //console.log(state.loggedInReducer);
  return { loggedInUser: state.loggedInReducer };
}

export default connect(mapStateToProps)(Home);
