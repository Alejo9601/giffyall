import GifGrid from "../components/GifGrid";
import TrendingSearches from "../components/TrendingSearches";
import styled from "styled-components";

const HomeSection = styled.section`
  display: grid;

  @media (min-width: 1366px) {
    grid-template-columns: 1fr 3fr;
    align-self: center;
  }
`;

const Home = () => {
  return (
    <HomeSection>
      <TrendingSearches />
      <GifGrid />
    </HomeSection>
  );
};

export default Home;
