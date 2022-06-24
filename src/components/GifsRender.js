import Gif from "./Gif";

const GifsRender = ({ gifs }) => {
  return (
    <>
      {gifs.map((gif) => {
        return (
          <Gif
            key={gif.id}
            gifId={gif.id}
            gifSrc={gif.images.downsized_medium.url}
            gifTitle={gif.title}
          />
        );
      })}
    </>
  );
};

export default GifsRender;
