import GifGrid from "../components/GifGrid";
import TrendingSearches from "../components/TrendingSearches";
import { GifsResultDetailWrapper } from "../layouts/GifsResultsDetailWrapper";
import WithHeaderLayout from "../layouts/WithHeaderLayout";

const Home = () => {
   return (
      <WithHeaderLayout>
         <GifsResultDetailWrapper>
            <TrendingSearches />
            <GifGrid />
         </GifsResultDetailWrapper>
      </WithHeaderLayout>
   );
};

export default Home;
