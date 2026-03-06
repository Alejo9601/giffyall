import { useContext, useEffect, useState } from "react";
import GifsContext from "../context/GifsContext";

const useSingleGif = (param) => {
  const [gif, setGif] = useState({});
  const { allGifs } = useContext(GifsContext);

  useEffect(() => {
    let [singleGif] = allGifs.filter((gif) => gif.id === param);
    setGif(singleGif);
  }, [allGifs, param]);

  return gif;
};

export default useSingleGif;
