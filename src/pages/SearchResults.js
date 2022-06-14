import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import GifGrid from "../components/GifGrid";
import Header from "../components/Header";

const SearchResults = () => {
  const { term } = useParams();

  return (
    <>
      <Header />
      <GifGrid gifsFor={term} />
    </>
  );
};

export default SearchResults;
