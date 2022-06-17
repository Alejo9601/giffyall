import { useEffect } from "react";
import useTrendingSearches from "../hooks/useTrendingSearches";
import TrendingTerm from "./TrendingTerm";
import styled from "styled-components";

const TrendingSearchesSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 50px auto 0 auto;

  h1 {
    color: white;
    font-size: 1.8rem;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 350px;
`;

const TrendingSearches = () => {
  const { trendingSearches } = useTrendingSearches();

  useEffect(() => {
    console.log(trendingSearches);
  }, [trendingSearches]);

  return (
    <TrendingSearchesSection>
      <h1>Trending Gifs...</h1>
      <Wrapper>
        {trendingSearches.map((trendingTerm) => {
          return <TrendingTerm text={trendingTerm} />;
        })}
      </Wrapper>
    </TrendingSearchesSection>
  );
};

export default TrendingSearches;
