import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  font-size: 26px;
  font-weight: 800;
`;

export default function Header() {
  return (
    <header>
      <Title>PLAN YOUR DAY</Title>
    </header>
  );
}
