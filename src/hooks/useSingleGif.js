import { useEffect, useState } from "react";
import getSingleGif from "../services/consumeSingleGif";

const useSingleGif = (param) => {
  const [gif, setGif] = useState();

  useEffect(() => {
    getSingleGif(param).then((res) => {
      const { data } = res;
      setGif(data);
    });
  }, []);

  return gif;
};

export default useSingleGif;
