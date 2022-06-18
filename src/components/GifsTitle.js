import styled from "styled-components";

const Title = styled.h1`
  width: 350px;
  margin: 0 auto;
  text-align: left;
  color: white;
  font-size: 1.8rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  @media (min-width: 800px) {
    width: 750px;
    grid-column: span 2;
  }

  @media (min-width: 1366px) {
    width: 1150px;
    grid-column: span 3;
  }
`;

const GifsTitle = ({ title }) => {
  return <Title>{title}</Title>;
};

export default GifsTitle;
