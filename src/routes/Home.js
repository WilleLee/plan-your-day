import styled from "styled-components";

import Header from "../components/Header";
import SingIn from "../components/SignIn";

const Container = styled.div`
  margin-top: 50px;
`;

export default function Home() {
  return (
    <Container>
      <Header />
      <SingIn />
    </Container>
  );
}
