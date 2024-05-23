import GifGrid from "../components/GifGrid";
import Header from "../components/Header";
import TrendingSearches from "../components/TrendingSearches";
import { GifsResultDetailWrapper } from "../layouts/GifsResultsDetailWrapper";

const Home = () => {
   return (
      <>
         <Header></Header>
         <GifsResultDetailWrapper>
            <TrendingSearches />
            <GifGrid />
         </GifsResultDetailWrapper>
      </>
   );
};

export default Home;
