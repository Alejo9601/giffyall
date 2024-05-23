import GifGrid from "../components/GifGrid";
import TrendingSearches from "../components/TrendingSearches";
import { GifsListWrapper } from "../layouts/GifsListWrapper";
import WithHeaderLayout from "../layouts/WithHeaderLayout";

const Home = () => {
   return (
      <WithHeaderLayout>
         <GifsListWrapper>
            <TrendingSearches />
            <GifGrid />
         </GifsListWrapper>
      </WithHeaderLayout>
   );
};

export default Home;
