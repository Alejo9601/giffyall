import { useParams } from "react-router-dom";
import GifGrid from "../components/GifGrid";
import TrendingSearches from "../components/TrendingSearches";
import { GifsListWrapper } from "../layouts/GifsListWrapper";

const SearchResults = () => {
   const { term } = useParams();

   return (
      <GifsListWrapper>
         <TrendingSearches />
         <GifGrid gifsFor={term} />
      </GifsListWrapper>
   );
};

export default SearchResults;
