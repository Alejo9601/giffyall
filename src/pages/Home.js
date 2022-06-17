import GifGrid from "../components/GifGrid";
import Header from "../components/Header";
import TrendingSearches from "../components/TrendingSearches";
import styled from "styled-components";

const HomeSection = styled.section`
  display: grid;
`;

const Home = () => {
  return (
    <>
      <Header />
      <HomeSection>
        <TrendingSearches />
        <GifGrid gifsFor="marvel" />
      </HomeSection>
    </>
  );
};

export default Home;
