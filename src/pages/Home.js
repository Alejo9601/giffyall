import GifGrid from "../components/GifGrid";
import Header from "../components/Header";
import TrendingSearches from "../components/TrendingSearches";

const Home = () => {
  return (
    <>
      <Header />
      <TrendingSearches />
      <GifGrid gifsFor="marvel" />
    </>
  );
};

export default Home;
