import Gif from "./Gif";

const ListOfGifs = ({ gifs }) => {
  return (
    <>
      {gifs.map((gif) => {
        <Gif
          key={gif.id}
          gifSrc={gif.images.original.url}
          gifName={gif.title}
        />;
      })}
    </>
  );
};

export default ListOfGifs;
