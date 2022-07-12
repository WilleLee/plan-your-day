import { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Header from "../components/Header";
import LogIn from "../components/LogIn";

const Container = styled.div`
  margin-top: 50px;
`;

function Home({ loggedInUser }) {
  const [loggedInState, setLoggedInState] = useState(false);

  useEffect(() => {
    const { loggedIn } = loggedInUser;
    setLoggedInState(loggedIn);
    console.log(loggedIn);
  }, [loggedInUser]);

  return (
    <Container>
      {loggedInState ? <h1>logged in!</h1> : <LogIn />}
      <br />

      <Header />
    </Container>
  );
}

function mapStateToProps(state, ownProps) {
  //console.log(state.loggedInReducer);
  return { loggedInUser: state.loggedInReducer };
}

export default connect(mapStateToProps)(Home);
