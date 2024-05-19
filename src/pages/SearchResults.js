import { useParams } from "react-router-dom";
import GifGrid from "../components/GifGrid";
import TrendingSearches from "../components/TrendingSearches";
import { CommonWrapper } from "../layouts/CommonWrapper";

const SearchResults = () => {
   const { term } = useParams();

   return (
      <CommonWrapper>
         <TrendingSearches />
         <GifGrid gifsFor={term} />
      </CommonWrapper>
   );
};

export default SearchResults;
