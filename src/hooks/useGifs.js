import { useEffect, useState } from "react";
import consumeGifs from "../services/consumeGifs";

const useGifs = () => {
  const LIMIT_PER_QUERY = 25;
  const [gifs, setGifs] = useState([]);
  const [offset, setOffset] = useState(0);

  const getGifs = () => {
    consumeGifs("spiderman", offset).then((res) => {
      const { data } = res;
      setGifs((currentGifs) => currentGifs.concat(data));
      setOffset((prevOffset) => prevOffset + LIMIT_PER_QUERY);
    });
  };

  useEffect(() => {
    getGifs();
  }, []);

  return { gifs, getGifs };
};

export default useGifs;
