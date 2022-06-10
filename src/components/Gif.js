const Gif = ({ gifSrc, gifName }) => {
  return (
    <div className="container" id="gif">
      <figure>
        <img src={gifSrc} alt={gifName}></img>
        <figcaption>{gifName}</figcaption>
      </figure>
    </div>
  );
};

export default Gif;
