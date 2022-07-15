import styled from "styled-components";

const Head = styled.header`
  width: 250px;
  margin: 0 auto 15px;
  padding-bottom: 10px;
  border-bottom: 2px solid #ffcc00;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 26px;
  font-weight: 800;
`;

export default function Header() {
  return (
    <Head>
      <Title>PLAN YOUR DAY</Title>
    </Head>
  );
}
