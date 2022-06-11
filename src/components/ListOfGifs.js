import { useEffect } from "react";
import Gif from "./Gif";

const ListOfGifs = ({ gifs }) => {
  useEffect(() => {
    console.log(gifs);
  }, [gifs]);

  return (
    <>
      {gifs.map((gif) => {
        return (
          <Gif
            key={gif.id}
            gifSrc={gif.images.original.url}
            gifTitle={gif.title}
          />
        );
      })}
    </>
  );
};

export default ListOfGifs;
