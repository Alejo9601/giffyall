import styled from "styled-components";

const GifContainer = styled.div`
  margin: 10px;
`;
const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;

  figcaption {
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;
const GifImg = styled.img`
  height: auto;
  width: 350px;
  object-fit: cover;
`;

const Gif = ({ gifSrc, gifTitle }) => {
  return (
    <GifContainer className="container" id="gif">
      <Figure>
        <GifImg src={gifSrc} alt={gifTitle}></GifImg>
        <figcaption>{gifTitle}</figcaption>
      </Figure>
    </GifContainer>
  );
};

export default Gif;
