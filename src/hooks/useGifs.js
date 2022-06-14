import { useEffect, useRef, useState } from "react";
import consumeGifs from "../services/consumeGifs";

const useGifs = (gifsFor) => {
  const LIMIT_PER_QUERY = 25;
  const [gifs, setGifs] = useState([]);
  const offset = useRef(0);

  const getGifs = () => {
    consumeGifs(gifsFor, offset.current).then((res) => {
      const { data } = res;
      setGifs((currentGifs) => currentGifs.concat(data));
      offset.current = offset.current + LIMIT_PER_QUERY;
    });
  };

  useEffect(() => {
    getGifs();
    return () => {
      offset.current = 0;
      setGifs([]);
    };
  }, [gifsFor]);

  return { gifs, getGifs };
};

export default useGifs;
