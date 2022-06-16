import { useEffect } from "react";
import useTrendingSearches from "../hooks/useTrendingSearches";
import TrendingTerm from "./TrendingTerm";
import styled from "styled-components";

const TrendingSearchesSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 700px;
  margin-top: 50px;
  align-self: center;
`;

const TrendingSearches = () => {
  const { trendingSearches } = useTrendingSearches();

  useEffect(() => {
    console.log(trendingSearches);
  }, [trendingSearches]);

  return (
    <TrendingSearchesSection>
      {trendingSearches.map((trendingTerm) => {
        return <TrendingTerm text={trendingTerm} />;
      })}
    </TrendingSearchesSection>
  );
};

export default TrendingSearches;
