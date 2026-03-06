import { useContext, useEffect, useState } from "react";
import GifsContext from "../context/GifsContext";
import consumeSingleGif from "../services/consumeSingleGif";

const useSingleGif = (param) => {
  const [gif, setGif] = useState(null);
  const { allGifs } = useContext(GifsContext);

  useEffect(() => {
    const singleGif = allGifs.find((item) => item.id === param);
    if (singleGif) {
      setGif(singleGif);
      return;
    }

    consumeSingleGif(param).then((res) => {
      if (res && res.data) {
        setGif(res.data);
      }
    });
  }, [allGifs, param]);

  return gif;
};

export default useSingleGif;
