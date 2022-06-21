import { useParams } from "react-router-dom";
import GifGrid from "../components/GifGrid";
import TrendingSearches from "../components/TrendingSearches";
import styled from "styled-components";

const ResultsSection = styled.section`
  display: grid;

  @media (min-width: 1366px) {
    grid-template-columns: 1fr 3fr;
    align-self: center;
  }
`;

const SearchResults = () => {
  const { term } = useParams();

  return (
    <ResultsSection>
      <TrendingSearches />
      <GifGrid gifsFor={term} />
    </ResultsSection>
  );
};

export default SearchResults;
