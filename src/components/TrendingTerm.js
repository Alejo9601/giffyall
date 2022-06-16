import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useRandomColor from "../hooks/useRandomColor";

const StyledDiv = styled.div`
  margin: 5px;
  font-size: 1.3rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding: 0px 8px;

  a {
    text-decoration: none;
    color: white;
  }
`;
const TrendingTerm = ({ text }) => {
  const backgroundColor = useRandomColor();

  return (
    <StyledDiv style={{ backgroundColor: `${backgroundColor}` }}>
      <Link to={`/search/${text}`}>{text}</Link>
    </StyledDiv>
  );
};

export default TrendingTerm;
