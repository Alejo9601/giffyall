import styled from "styled-components";

const StyledDiv = styled.div`
  margin: 5px;
  font-size: 1.3rem;
`;
const TrendingTerm = ({ text }) => {
  return (
    <StyledDiv>
      <a>{text}</a>
    </StyledDiv>
  );
};

export default TrendingTerm;
