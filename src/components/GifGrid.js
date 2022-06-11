import getGifs from "../services/getGifs";
import { useEffect, useState } from "react";
import ListOfGifs from "./ListOfGifs";

const GifGrid = () => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs("hulk").then((res) => {
      const { data } = res;
      setGifs(data);
    });
  }, []);

  return (
    <section className="grid-container">
      {gifs.length !== 0 ? <ListOfGifs gifs={gifs} /> : null}
    </section>
  );
};

export default GifGrid;
