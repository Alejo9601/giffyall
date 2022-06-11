const Gif = ({ gifSrc, gifTitle }) => {
  return (
    <div className="container" id="gif">
      <figure>
        <img src={gifSrc} alt={gifTitle}></img>
        <figcaption>{gifTitle}</figcaption>
      </figure>
    </div>
  );
};

export default Gif;
