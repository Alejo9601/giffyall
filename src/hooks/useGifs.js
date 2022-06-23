import { useContext, useEffect, useRef, useState } from "react";
import GifsContext from "../context/GifsContext";
import consumeGifs from "../services/consumeGifs";

const useGifs = (gifsFor) => {
  const LIMIT_PER_QUERY = 25;
  const { allGifs, addNewGifs, cleanGifs } = useContext(GifsContext);
  const offset = useRef(0);

  const getGifs = () => {
    consumeGifs(gifsFor, offset.current).then((res) => {
      const { data } = res;
      addNewGifs(data);
      offset.current = offset.current + LIMIT_PER_QUERY;
    });
  };

  useEffect(() => {
    getGifs();
    return () => {
      offset.current = 0;
      cleanGifs();
    };
  }, [gifsFor]);

  return { allGifs, getGifs };
};

export default useGifs;
