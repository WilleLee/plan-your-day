import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const MessageWelcome = styled.h1`
  font-size: 30px;
  font-weight: 800;
`;

export default function Welcome() {
  return (
    <Container>
      <MessageWelcome>Thanks for Coming!</MessageWelcome>
      <Link to="/plan-your-day/home">
        <p
          style={{
            color: "#fff",
          }}
        >
          Start the App &rarr;
        </p>
      </Link>
    </Container>
  );
}
