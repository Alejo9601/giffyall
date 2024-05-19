import GifGrid from "../components/GifGrid";
import TrendingSearches from "../components/TrendingSearches";
import { CommonWrapper } from "../layouts/CommonWrapper";

const Home = () => {
   return (
      <CommonWrapper>
         <TrendingSearches />
         <GifGrid />
      </CommonWrapper>
   );
};

export default Home;
