import { useContext, useEffect, useRef, useState } from "react";
import SearchContext from "../context/SearchContext";
import consumeGifs from "../services/consumeGifs";

const useGifs = () => {
  const LIMIT_PER_QUERY = 25;
  const [gifs, setGifs] = useState([]);
  const offset = useRef(0);
  const { searchTerm } = useContext(SearchContext);

  const getGifs = () => {
    consumeGifs(searchTerm || "spiderman", offset.current).then((res) => {
      const { data } = res;
      setGifs((currentGifs) => currentGifs.concat(data));
      offset.current = offset.current + LIMIT_PER_QUERY;
    });
  };

  useEffect(() => {
    getGifs();
  }, []);

  return { gifs, getGifs };
};

export default useGifs;
