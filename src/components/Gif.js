import styled from "styled-components";

const GifContainer = styled.div`
  margin: 5px;
  padding: 5px;
  align-self: flex-start;
`;
const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;

  figcaption {
    color: white;
    font-size: 1.2rem;
    margin-top: 5px;
  }
`;
const GifImg = styled.img`
  height: auto;
  width: 350px;
  object-fit: cover;
  border-radius: 5px;
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
