import useTrendingSearches from "../hooks/useTrendingSearches";
import TrendingTerm from "./TrendingTerm";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const TrendingSearchesSection = styled.section`
  display: flex;
  flex-direction: column;

  h1 {
    color: white;
    font-size: 2.5rem;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }

  @media (min-width: 1366px) {
    justify-content: flex-start;
    position: fixed;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 350px;

  @media (min-width: 800px) {
    width: 760px;
  }

  @media (min-width: 1366px) {
    width: 300px;
  }
`;

const TrendingSearches = () => {
  const { trendingSearches } = useTrendingSearches();

  return (
    <StyledDiv>
      <TrendingSearchesSection>
        <h1>Trending Gifs...</h1>
        <Wrapper>
          {trendingSearches.map((trendingTerm, index) => {
            return (
              <TrendingTerm
                key={trendingTerm.concat(index)}
                text={trendingTerm}
              />
            );
          })}
        </Wrapper>
      </TrendingSearchesSection>
    </StyledDiv>
  );
};

export default TrendingSearches;
