import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import styled, { keyframes } from "styled-components";
import { logout } from "../reducers/loggedInReducer";

const sectionAppear = keyframes`
  from {
    transform: translateY(-5px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
const Section = styled.section`
  animation: ${sectionAppear} 0.1s ease-in-out;
  margin-bottom: 10px;
`;

const CheckOut = ({ logout }) => {
  return (
    <Section>
      <Button variant="outline-secondary" size="sm" onClick={logout}>
        Check Out!
      </Button>
    </Section>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(null, mapDispatchToProps)(CheckOut);
