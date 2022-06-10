import Gif from "./Gif";

const GifGrid = () => {
  const gifs = getGifs();
  return (
    <div className="grid-container">
      {gifs.map((gif) => {
        return <Gif key={gif.id} gifSrc={gif.image} gifName={gif.name}></Gif>;
      })}
    </div>
  );
};

export default GifGrid;
