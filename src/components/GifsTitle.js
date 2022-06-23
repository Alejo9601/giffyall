import styled from "styled-components";

const Title = styled.h1`
  width: 100%;
  text-align: left;
  color: white;
  font-size: 2.5rem;
  padding: 0px 0px 0px 30px;
  margin-bottom: 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  @media (min-width: 800px) {
    grid-column: span 2;
  }

  @media (min-width: 1366px) {
    grid-column: span 3;
  }
`;

const GifsTitle = ({ title }) => {
  return <Title>{title[0].toUpperCase() + title.substring(1)}</Title>;
};

export default GifsTitle;
