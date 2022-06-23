import { useContext, useEffect, useState } from "react";
import GifsContext from "../context/GifsContext";

const useSingleGif = (param) => {
  const [gif, setGif] = useState({});
  const { allGifs, addNewGifs, cleanGifs } = useContext(GifsContext);

  useEffect(() => {
    let [singleGif] = allGifs.filter((gif) => gif.id === param);
    setGif(singleGif);
  }, []);

  return gif;
};

export default useSingleGif;
