import { useCallback, useContext, useEffect, useRef } from "react";
import GifsContext from "../context/GifsContext";
import consumeGifs from "../services/consumeGifs";

const LIMIT_PER_QUERY = 25;

const useGifs = (gifsFor) => {
  const { allGifs, addNewGifs, cleanGifs } = useContext(GifsContext);
  const offset = useRef(0);

  const getGifs = useCallback(() => {
    consumeGifs(gifsFor, offset.current).then((res) => {
      const { data } = res;
      addNewGifs(data);
      offset.current = offset.current + LIMIT_PER_QUERY;
    });
  }, [addNewGifs, gifsFor]);

  useEffect(() => {
    getGifs();
    return () => {
      offset.current = 0;
      cleanGifs();
    };
  }, [cleanGifs, getGifs]);

  return { allGifs, getGifs };
};

export default useGifs;
