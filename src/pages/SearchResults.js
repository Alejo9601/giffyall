import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import GifGrid from "../components/GifGrid";
import Header from "../components/Header";
import SearchContext from "../context/SearchContext";

const SearchResults = () => {
  const { term } = useParams();
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  useEffect(() => {
    setSearchTerm(term);
  }, [term]);

  return (
    <>
      <Header />
      <GifGrid />
    </>
  );
};

export default SearchResults;
