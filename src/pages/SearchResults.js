import { useParams } from "react-router-dom";
import GifGrid from "../components/GifGrid";
import TrendingSearches from "../components/TrendingSearches";
import { GifsResultDetailWrapper } from "../layouts/GifsResultsDetailWrapper";

const SearchResults = () => {
   const { term } = useParams();

   return (
      <GifsResultDetailWrapper>
         <TrendingSearches />
         <GifGrid gifsFor={term} />
      </GifsResultDetailWrapper>
   );
};

export default SearchResults;
