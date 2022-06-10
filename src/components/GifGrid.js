import Gif from "./Gif";
import getGifs from "../services/getGifs";
import { useEffect, useState } from "react";
import ListOfGifs from "./ListOfGifs";

const GifGrid = () => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    let data = getGifs("hulk");
    setGifs(data);
  }, []);

  return (
    <section className="grid-container">
      {gifs.length !== 0 ? <ListOfGifs gifs={gifs} /> : null}
    </section>
  );
};

export default GifGrid;
