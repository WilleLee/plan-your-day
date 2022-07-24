import styled from "styled-components";

const PdyButton = styled.button`
  background-color: transparent;
  padding: 8px 10px;
  border: 1px solid ${(props) => props.variant || "#ffcc00"};
  border-radius: 5px;
  color: ${(props) => props.variant || "#ffcc00"};
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${(props) => props.variant || "#ffcc00"};
    border: 1px solid transparent;
    color: black;
  }
`;

export default PdyButton;
