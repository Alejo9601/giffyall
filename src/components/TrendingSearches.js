import useTrendingSearches from "../hooks/useTrendingSearches";
import TrendingTerm from "./TrendingTerm";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const TrendingSearchesSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 50px auto 0 auto;

  h1 {
    color: white;
    font-size: 1.8rem;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }

  @media (min-width: 1366px) {
    position: fixed;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 350px;
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
